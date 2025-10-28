/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
export {};
declare const self: DedicatedWorkerGlobalScope;

const setIntervalW: (fn: () => void, ms: number) => number = (fn, ms) =>
  self.setInterval(fn, ms);
const clearIntervalW: (id: number) => void = (id) =>
  self.clearInterval(id);

/* --------------------------- Message types --------------------------- */
type CommonParams = {
  cellSize: number;          // px
  decay: number;             // 0.85..0.995
  activation: number;        // 0..1
  neighborJitter: number;    // small extra sparks
  threshold: number;         // alpha cutoff
  maxFps: number;            // 60/48/30 etc.
  borderIdle: string;        // faint grid
  borderActive: string;      // blue active border
  bgActive: string;          // dark active fill
  bgColor?: string;          // optional solid bg
  borderWidth?: number;      // grid line width (px @ CSS)
  insetRatio?: number;       // inner padding ratio (0.05)
  trailCount: number;        // number of followers to keep
  idleMs: number;            // clear trail when no move for this long
};

type InitMsg = {
  type: "init";
  canvas: OffscreenCanvas;
  width: number;
  height: number;
  dpr: number;
  params: CommonParams;
};

type UpdateMsg = {
  type: "update";
  params: Partial<CommonParams>; // update any subset w/o reinit
};

type ResizeMsg = { type: "resize"; width: number; height: number; dpr: number };
type PointerMsg = { type: "pointer"; x: number; y: number; ts?: number };
type VisibilityMsg = { type: "visibility"; visible: boolean };
type StopMsg = { type: "stop" };

type InMsg = InitMsg | UpdateMsg | ResizeMsg | PointerMsg | VisibilityMsg | StopMsg;

/* --------------------------- State --------------------------- */
let ctx: OffscreenCanvasRenderingContext2D | null = null;
let canvas: OffscreenCanvas | null = null;

let cssWidth = 0;
let cssHeight = 0;
let dpr = 1;

let cols = 0;
let rows = 0;

let cellSize = 40;
let decay = 0.94;
let activation = 0.85;
let neighborJitter = 8;
let threshold = 0.02;
let maxFps = 60;

let borderIdle = "#0D131B";
let borderActive = "rgba(23,47,194,1)";
let bgActive = "rgba(2,11,32,1)";
let bgColor: string | undefined;
let borderWidth = 1;
let insetRatio = 0.05;

let trailCount = 4;
let idleMs = 180;

let intensities = new Float32Array(0);
let lastNow = 0;
let intervalId: number | null = null;
let visible = true;

// Recent pointer positions (the trail)
type TrailPoint = { x: number; y: number; ts: number };
let trail: TrailPoint[] = [];
let lastPointerTs = 0;

/* --------- Cached grid background (idle borders) --------- */
let gridBuffer: OffscreenCanvas | null = null;

function buildGridBackground(): void {
  if (!canvas) return;
  const buf = new OffscreenCanvas(canvas.width, canvas.height);
  const g = buf.getContext("2d");
  if (!g) return;

  g.setTransform(1, 0, 0, 1, 0, 0);
  if (bgColor) {
    g.fillStyle = bgColor;
    g.fillRect(0, 0, buf.width, buf.height);
  } else {
    g.clearRect(0, 0, buf.width, buf.height);
  }

  g.save();
  g.strokeStyle = borderIdle;
  g.lineWidth = Math.max(1, Math.round((borderWidth || 1) * dpr));
  g.translate(0.5, 0.5); // crisp 1px lines

  for (let x = 0; x <= cssWidth; x += cellSize) {
    const px = Math.floor(x * dpr);
    g.beginPath();
    g.moveTo(px, 0);
    g.lineTo(px, buf.height);
    g.stroke();
  }
  for (let y = 0; y <= cssHeight; y += cellSize) {
    const py = Math.floor(y * dpr);
    g.beginPath();
    g.moveTo(0, py);
    g.lineTo(buf.width, py);
    g.stroke();
  }
  g.restore();

  gridBuffer = buf;
}

function startLoop(): void {
  stopLoop();
  const cadence = Math.max(1000 / Math.max(1, maxFps), 8);
  lastNow = performance.now();
  intervalId = setIntervalW(tick, cadence);
}
function stopLoop(): void {
  if (intervalId !== null) {
    clearIntervalW(intervalId);
    intervalId = null;
  }
}

function rebuildGrid(): void {
  if (!canvas || !ctx) return;

  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);

  cols = Math.max(1, Math.floor(cssWidth / cellSize));
  rows = Math.max(1, Math.floor(cssHeight / cellSize));

  intensities = new Float32Array(cols * rows);
  intensities.fill(0);

  trail = [];
  lastPointerTs = 0;

  buildGridBackground();
}

function activateAt(x: number, y: number, base: number): void {
  const fx = Math.max(0, Math.min(cols - 1, Math.floor(x / cellSize)));
  const fy = Math.max(0, Math.min(rows - 1, Math.floor(y / cellSize)));
  const radius = 2;

  for (let dy = -radius; dy <= radius; dy++) {
    const yy = fy + dy;
    if (yy < 0 || yy >= rows) continue;
    for (let dx = -radius; dx <= radius; dx++) {
      const xx = fx + dx;
      if (xx < 0 || xx >= cols) continue;
      const dist2 = dx * dx + dy * dy;
      const falloff = dist2 === 0 ? 1 : Math.max(0, 1 - dist2 / (radius * radius));
      const idx = yy * cols + xx;
      intensities[idx] = Math.min(1, intensities[idx] + base * (0.35 + 0.65 * falloff));
    }
  }

  // a few neighbor sparks
  for (let k = 0; k < neighborJitter; k++) {
    const jx = Math.max(0, Math.min(cols - 1, Math.floor(x / cellSize) + ((Math.random() * 5) | 0) - 2));
    const jy = Math.max(0, Math.min(rows - 1, Math.floor(y / cellSize) + ((Math.random() * 5) | 0) - 2));
    const jIdx = jy * cols + jx;
    intensities[jIdx] = Math.min(1, intensities[jIdx] + 0.4 * Math.random());
  }
}

function tick(): void {
  if (!ctx || !canvas || !gridBuffer || !visible) return;

  const now = performance.now();
  const deltaMs = now - lastNow;
  if (deltaMs <= 0) return;
  lastNow = now;

  // Decay intensities (normalized to ~60fps)
  const dt = deltaMs / 1000;
  const decayFactor = Math.pow(decay, dt * 60);
  for (let i = 0; i < intensities.length; i++) intensities[i] *= decayFactor;

  // If user hasn't moved recently, stop activating (pure idle grid)
  if (lastPointerTs > 0 && now - lastPointerTs > idleMs) {
    trail = [];
  }

  // Activate along the current trail (most recent first)
  for (const p of trail) {
    // Slightly fade older points so head is brighter
    const age = Math.min(1, (now - p.ts) / idleMs);
    const base = Math.max(0.05, activation * (1 - age * 0.8));
    activateAt(p.x, p.y, base);
  }

  // draw: grid background + active cells overlays
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(gridBuffer, 0, 0);

  ctx.scale(dpr, dpr);
  const inset = Math.max(1, Math.floor(cellSize * (insetRatio || 0.05)));
  const w = cellSize - inset * 2;
  const h = w;

  let y = 0;
  let idx = 0;
  for (let row = 0; row < rows; row++) {
    let x = 0;
    for (let col = 0; col < cols; col++, idx++) {
      const a = intensities[idx];
      if (a > threshold) {
        ctx.globalAlpha = Math.min(1, a);
        ctx.fillStyle = bgActive;
        ctx.fillRect(x + inset, y + inset, w, h);

        ctx.strokeStyle = borderActive;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + inset + 0.5, y + inset + 0.5, w - 1, h - 1);
      }
      x += cellSize;
    }
    y += cellSize;
  }
}

/* -------------------------- Messaging -------------------------- */
self.onmessage = (ev: MessageEvent<InMsg>): void => {
  const msg = ev.data;
  switch (msg.type) {
    case "init": {
      canvas = msg.canvas;
      cssWidth = msg.width;
      cssHeight = msg.height;
      dpr = msg.dpr;

      const p = msg.params;
      cellSize = p.cellSize;
      decay = p.decay;
      activation = p.activation;
      neighborJitter = p.neighborJitter;
      threshold = p.threshold;
      maxFps = p.maxFps;
      borderIdle = p.borderIdle;
      borderActive = p.borderActive;
      bgActive = p.bgActive;
      bgColor = p.bgColor;
      borderWidth = p.borderWidth ?? 1;
      insetRatio = p.insetRatio ?? 0.05;
      trailCount = p.trailCount;
      idleMs = p.idleMs;

      ctx = canvas.getContext("2d");
      if (!ctx) return;

      rebuildGrid();
      startLoop();
      break;
    }
    case "update": {
      const p = msg.params;

      if (p.cellSize && p.cellSize !== cellSize) {
        cellSize = p.cellSize;
        rebuildGrid();
      }
      if (p.decay !== undefined) decay = p.decay;
      if (p.activation !== undefined) activation = p.activation;
      if (p.neighborJitter !== undefined) neighborJitter = p.neighborJitter;
      if (p.threshold !== undefined) threshold = p.threshold;
      if (p.maxFps && p.maxFps !== maxFps) {
        maxFps = p.maxFps;
        startLoop(); // restart with new cadence
      }
      if (p.borderIdle !== undefined) { borderIdle = p.borderIdle; buildGridBackground(); }
      if (p.borderActive !== undefined) borderActive = p.borderActive;
      if (p.bgActive !== undefined) bgActive = p.bgActive;
      if (p.bgColor !== undefined) { bgColor = p.bgColor; buildGridBackground(); }
      if (p.borderWidth !== undefined) { borderWidth = p.borderWidth; buildGridBackground(); }
      if (p.insetRatio !== undefined) insetRatio = p.insetRatio;
      if (p.trailCount !== undefined) trailCount = p.trailCount;
      if (p.idleMs !== undefined) idleMs = p.idleMs;

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
      const ts = msg.ts ?? performance.now();
      lastPointerTs = ts;

      // push to trail, keep most recent first
      trail.unshift({ x: msg.x, y: msg.y, ts });
      if (trail.length > trailCount) trail.length = trailCount;
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
