"use client";

import * as React from "react";
import { Box, type SxProps, type Theme } from "@mui/material";

type Props = {
  // visuals / behavior
  cellSize?: number;
  color?: string;
  bgColor?: string;        // solid background fill (transparent if undefined)
  decay?: number;          // 0.85..0.995; higher = longer trails
  activation?: number;     // 0..1
  neighborJitter?: number; // small random sparks per frame
  followLerp?: number;     // 0.08..0.2
  threshold?: number;      // min alpha to draw a cell (e.g., 0.02)
  maxFps?: number;         // 60/48/30

  // layout / a11y
  ariaHidden?: boolean;
  sx?: SxProps<Theme>;
};

const supportsOffscreen = (): boolean =>
  typeof window !== "undefined" &&
  "OffscreenCanvas" in window &&
  typeof HTMLCanvasElement !== "undefined" &&
  typeof HTMLCanvasElement.prototype.transferControlToOffscreen === "function";

/**
 * HeroGridAnimation
 * - Prefers OffscreenCanvas + Worker (but falls back to main-thread canvas rAF).
 * - Zero external deps; fully typed.
 */
export default function HeroGridAnimation({
  cellSize = 20,
  color = "rgba(0,200,255,1)",
  bgColor,
  decay = 0.94,
  activation = 0.85,
  neighborJitter = 8,
  followLerp = 0.14,
  threshold = 0.02,
  maxFps = 60,
  ariaHidden = true,
  sx,
}: Props) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const workerRef = React.useRef<Worker | null>(null);
  const visibleRef = React.useRef<boolean>(true);

  // Fallback (main-thread) state
  const dprRef = React.useRef<number>(1);
  const colsRef = React.useRef<number>(0);
  const rowsRef = React.useRef<number>(0);
  const intensitiesRef = React.useRef<Float32Array | null>(null);
  const followerRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRef = React.useRef<{ x: number; y: number; set: boolean }>({ x: 0, y: 0, set: false });
  const rafRef = React.useRef<number | null>(null);
  const lastTsRef = React.useRef<number>(0);

  const useWorker = supportsOffscreen();

  // Visibility observer (pause when off-screen)
  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      const isVisible = Boolean(entry?.isIntersecting);
      visibleRef.current = isVisible;
      if (workerRef.current) {
        workerRef.current.postMessage({ type: "visibility", visible: isVisible });
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Also pause when the tab is hidden
  React.useEffect(() => {
    const onVis = (): void => {
      const v = document.visibilityState === "visible";
      visibleRef.current = v;
      if (workerRef.current) workerRef.current.postMessage({ type: "visibility", visible: v });
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pointer tracking (local to wrapper)
  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handlePointerMove = (ev: PointerEvent): void => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      if (workerRef.current) {
        workerRef.current.postMessage({ type: "pointer", x, y });
      } else {
        targetRef.current.x = x;
        targetRef.current.y = y;
        targetRef.current.set = true;
      }
    };

    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => el.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // Resize handling (worker and fallback)
  const rebuildSize = React.useCallback(() => {
    const el = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const width = Math.max(1, Math.floor(el.clientWidth));
    const height = Math.max(1, Math.floor(el.clientHeight));
    const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));

    if (workerRef.current) {
      workerRef.current.postMessage({ type: "resize", width, height, dpr });
    } else {
      // fallback canvas sizing & grid
      dprRef.current = dpr;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.max(1, Math.floor(width / cellSize));
      const rows = Math.max(1, Math.floor(height / cellSize));
      colsRef.current = cols;
      rowsRef.current = rows;

      const arr = new Float32Array(cols * rows);
      arr.fill(0);
      intensitiesRef.current = arr;

      followerRef.current.x = width * 0.5;
      followerRef.current.y = height * 0.5;
      targetRef.current.set = false;
    }
  }, [cellSize]);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(rebuildSize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [rebuildSize]);

  // Init: prefer OffscreenCanvas + Worker, otherwise main-thread fallback
  React.useEffect(() => {
    const el = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const width = Math.max(1, Math.floor(el.clientWidth));
    const height = Math.max(1, Math.floor(el.clientHeight));
    const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));

    if (useWorker) {
      const offscreen = canvas.transferControlToOffscreen();
      const w = new Worker(new URL("./heroGrid.worker.ts", import.meta.url), { type: "module" });
      workerRef.current = w;

      w.postMessage(
        {
          type: "init",
          canvas: offscreen,
          width,
          height,
          dpr,
          params: {
            cellSize,
            decay,
            activation,
            neighborJitter,
            followLerp,
            color,
            bgColor,
            threshold,
            maxFps,
          },
        },
        [offscreen]
      );
    } else {
      // Fallback main-thread loop (rAF)
      rebuildSize();
      lastTsRef.current = 0;

      const loop = (ts: number): void => {
        if (!visibleRef.current) {
          rafRef.current = requestAnimationFrame(loop);
          return;
        }

        const last = lastTsRef.current || ts;
        const deltaMs = ts - last;

        // FPS cap
        const minDelta = 1000 / Math.max(1, maxFps);
        if (deltaMs < minDelta) {
          rafRef.current = requestAnimationFrame(loop);
          return;
        }
        lastTsRef.current = ts;

        const c = canvasRef.current;
        const ctx = c?.getContext("2d");
        const arr = intensitiesRef.current;
        if (!c || !ctx || !arr) {
          rafRef.current = requestAnimationFrame(loop);
          return;
        }

        const widthCss = el.clientWidth;
        const heightCss = el.clientHeight;
        const cols = colsRef.current;
        const rows = rowsRef.current;

        // follower
        const tx = targetRef.current.set ? targetRef.current.x : widthCss * 0.5;
        const ty = targetRef.current.set ? targetRef.current.y : heightCss * 0.5;
        const f = followerRef.current;
        f.x += (tx - f.x) * followLerp;
        f.y += (ty - f.y) * followLerp;

        const fx = Math.max(0, Math.min(cols - 1, Math.floor(f.x / cellSize)));
        const fy = Math.max(0, Math.min(rows - 1, Math.floor(f.y / cellSize)));
        const fIdx = fy * cols + fx;

        // decay normalized to ~60fps
        const dt = deltaMs / 1000;
        const decayFactor = Math.pow(decay, dt * 60);
        for (let i = 0; i < arr.length; i++) arr[i] *= decayFactor;

        // activate
        arr[fIdx] = Math.min(1, arr[fIdx] + activation);

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
            arr[idx] = Math.min(1, arr[idx] + activation * 0.35 * falloff);
          }
        }
        for (let k = 0; k < neighborJitter; k++) {
          const jx = Math.max(0, Math.min(cols - 1, fx + ((Math.random() * 5) | 0) - 2));
          const jy = Math.max(0, Math.min(rows - 1, fy + ((Math.random() * 5) | 0) - 2));
          const jIdx = jy * cols + jx;
          arr[jIdx] = Math.min(1, arr[jIdx] + 0.4 * Math.random());
        }

        // draw
        const dprLocal = dprRef.current;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (bgColor) {
          ctx.globalAlpha = 1;
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, c.width, c.height);
        } else {
          ctx.clearRect(0, 0, c.width, c.height);
        }
        ctx.scale(dprLocal, dprLocal);
        ctx.fillStyle = color;

        let y = 0;
        let idx = 0;
        for (let row = 0; row < rows; row++) {
          let x = 0;
          for (let col = 0; col < cols; col++, idx++) {
            const a = arr[idx];
            if (a > threshold) {
              ctx.globalAlpha = Math.min(1, a);
              const inset = Math.max(1, Math.floor(cellSize * 0.05));
              ctx.fillRect(x + inset, y + inset, cellSize - inset * 2, cellSize - inset * 2);
            }
            x += cellSize;
          }
          y += cellSize;
        }

        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      // cleanup on unmount
      if (workerRef.current) {
        workerRef.current.postMessage({ type: "stop" });
        workerRef.current.terminate();
        workerRef.current = null;
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [
    useWorker,
    cellSize,
    color,
    bgColor,
    decay,
    activation,
    neighborJitter,
    followLerp,
    threshold,
    maxFps,
    rebuildSize,
  ]);

  return (
    <Box
      ref={wrapperRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%", // give the parent a height (e.g., minHeight on the section)
        overflow: "hidden",
        // If decorative behind content, you can add: pointerEvents: "none",
        ...sx,
      }}
      aria-hidden={ariaHidden || undefined}
    >
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{ position: "absolute", inset: 0, display: "block" }}
      />
    </Box>
  );
}
