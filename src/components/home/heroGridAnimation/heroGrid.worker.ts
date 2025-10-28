/// <reference lib="webworker" />

/* eslint-disable no-restricted-globals */

export {};

/** In a Worker, `self` is the DedicatedWorkerGlobalScope. */
declare const self: DedicatedWorkerGlobalScope;

/** Strongly-typed timer wrappers (avoid env-typing ambiguity). */
const setIntervalW: (fn: () => void, ms: number) => number = (fn, ms) =>
  self.setInterval(fn, ms);
const clearIntervalW: (id: number) => void = (id) =>
  self.clearInterval(id);

/* --------------------------- Message payload types --------------------------- */

type InitMsg = {
  type: "init";
  canvas: OffscreenCanvas;
  width: number;
  height: number;
  dpr: number;
  params: {
    cellSize: number;
    decay: number;             // 0.85..0.995; higher = longer trails
    activation: number;        // 0..1
    neighborJitter: number;    // integer
    followLerp: number;        // 0..1
    color: string;             // e.g., "rgba(0,200,255,1)"
    bgColor?: string;          // optional solid background fill
    threshold: number;         // skip draw below this alpha (e.g., 0.02)
    maxFps: number;            // 60/48/30
  };
};

type ResizeMsg = {
  type: "resize";
  width: number;
  height: number;
  dpr: number;
};

type PointerMsg = {
  type: "pointer";
  x: number;
  y: number;
};

type VisibilityMsg = {
  type: "visibility";
  visible: boolean;
};

type StopMsg = { type: "stop" };

type InMsg = InitMsg | ResizeMsg | PointerMsg | VisibilityMsg | StopMsg;

/* ----------------------------- Worker state ----------------------------- */

let ctx: OffscreenCanvasRenderingContext2D | null = null;
let canvas: OffscreenCanvas | null = null;

let cssWidth = 0;
let cssHeight = 0;
let dpr = 1;

let cols = 0;
let rows = 0;
let cellSize = 36;
let intensities: Float32Array = new Float32Array(0);

const follower = { x: 0, y: 0 };
const target = { x: 0, y: 0, set: false };

let decay = 0.94;
let activation = 0.85;
let neighborJitter = 8;
let followLerp = 0.14;
let color = "rgba(0,200,255,1)";
let bgColor: string | undefined = undefined;
let threshold = 0.02;
let maxFps = 60;

let lastNow = 0;
let intervalId: number | null = null;
let visible = true;

/* ----------------------------- Loop control ----------------------------- */

function startLoop(): void {
  stopLoop();
  const cadence = Math.max(1000 / Math.max(1, maxFps), 8); // ms between ticks
  lastNow = performance.now();
  intervalId = setIntervalW(tick, cadence);
}

function stopLoop(): void {
  if (intervalId !== null) {
    clearIntervalW(intervalId);
    intervalId = null;
  }
}

/* ---------------------------- Grid / drawing ---------------------------- */

function rebuildGrid(): void {
  if (!canvas || !ctx) return;

  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);

  cols = Math.max(1, Math.floor(cssWidth / cellSize));
  rows = Math.max(1, Math.floor(cssHeight / cellSize));

  intensities = new Float32Array(cols * rows);
  intensities.fill(0);

  follower.x = cssWidth * 0.5;
  follower.y = cssHeight * 0.5;
  target.set = false;
}

function tick(): void {
  if (!ctx || !canvas) return;
  if (!visible) return;

  const now = performance.now();
  const deltaMs = now - lastNow;
  if (deltaMs <= 0) return;
  lastNow = now;

  const dt = deltaMs / 1000;

  // Ease follower toward target
  const tx = target.set ? target.x : cssWidth * 0.5;
  const ty = target.set ? target.y : cssHeight * 0.5;
  follower.x += (tx - follower.x) * followLerp;
  follower.y += (ty - follower.y) * followLerp;

  const fx = Math.max(0, Math.min(cols - 1, Math.floor(follower.x / cellSize)));
  const fy = Math.max(0, Math.min(rows - 1, Math.floor(follower.y / cellSize)));
  const fIdx = fy * cols + fx;

  // Exponential decay normalized to ~60fps
  const decayFactor = Math.pow(decay, dt * 60);
  for (let i = 0; i < intensities.length; i++) intensities[i] *= decayFactor;

  // Activate follower cell
  intensities[fIdx] = Math.min(1, intensities[fIdx] + activation);

  // Soft radial around follower
  const radius = 2; // in cells
  for (let dy = -radius; dy <= radius; dy++) {
    const yy = fy + dy;
    if (yy < 0 || yy >= rows) continue;
    for (let dx = -radius; dx <= radius; dx++) {
      const xx = fx + dx;
      if (xx < 0 || xx >= cols) continue;
      const dist2 = dx * dx + dy * dy;
      const falloff = dist2 === 0 ? 1 : Math.max(0, 1 - dist2 / (radius * radius));
      const idx = yy * cols + xx;
      intensities[idx] = Math.min(1, intensities[idx] + activation * 0.35 * falloff);
    }
  }

  // Random neighbor sparks
  for (let k = 0; k < neighborJitter; k++) {
    const jx = Math.max(0, Math.min(cols - 1, fx + ((Math.random() * 5) | 0) - 2));
    const jy = Math.max(0, Math.min(rows - 1, fy + ((Math.random() * 5) | 0) - 2));
    const jIdx = jy * cols + jx;
    intensities[jIdx] = Math.min(1, intensities[jIdx] + 0.4 * Math.random());
  }

  // Draw
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (bgColor) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  ctx.scale(dpr, dpr);
  ctx.fillStyle = color;

  let y = 0;
  let idx = 0;
  for (let row = 0; row < rows; row++) {
    let x = 0;
    for (let col = 0; col < cols; col++, idx++) {
      const a = intensities[idx];
      if (a > threshold) {
        ctx.globalAlpha = Math.min(1, a);
        const inset = Math.max(1, Math.floor(cellSize * 0.05));
        ctx.fillRect(x + inset, y + inset, cellSize - inset * 2, cellSize - inset * 2);
      }
      x += cellSize;
    }
    y += cellSize;
  }
}

/* ---------------------------- Message handling ---------------------------- */

self.onmessage = (ev: MessageEvent<InMsg>): void => {
  const msg = ev.data;
  switch (msg.type) {
    case "init": {
      canvas = msg.canvas;
      cssWidth = msg.width;
      cssHeight = msg.height;
      dpr = msg.dpr;

      cellSize = msg.params.cellSize;
      decay = msg.params.decay;
      activation = msg.params.activation;
      neighborJitter = msg.params.neighborJitter;
      followLerp = msg.params.followLerp;
      color = msg.params.color;
      bgColor = msg.params.bgColor;
      threshold = msg.params.threshold;
      maxFps = msg.params.maxFps;

      ctx = canvas.getContext("2d");
      if (!ctx) return;

      rebuildGrid();
      startLoop();
      break;
    }

    case "resize": {
      cssWidth = msg.width;
      cssHeight = msg.height;
      dpr = msg.dpr;
      rebuildGrid();
      break;
    }

    case "pointer": {
      target.x = msg.x;
      target.y = msg.y;
      target.set = true;
      break;
    }

    case "visibility": {
      visible = msg.visible;
      break;
    }

    case "stop": {
      stopLoop();
      break;
    }
  }
};
