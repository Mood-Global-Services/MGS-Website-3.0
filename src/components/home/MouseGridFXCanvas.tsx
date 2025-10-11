"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type MouseGridFXCanvasProps = {
  /** The element the canvas should cover */
  targetRef: React.RefObject<HTMLElement | null>;
  /** Glow radius in px (at 1x DPR) */
  radius?: number;           // default 140
  /** Stroke/Glow base alpha */
  alpha?: number;            // default 0.22
  /** Crosshair length in px */
  crossLen?: number;         // default 22
  /** Crosshair gap at center in px */
  crossGap?: number;         // default 6
  /** Crosshair line width (device-independent px) */
  lineWidth?: number;        // default 1
  /** Parallax strength (px max translation) */
  parallax?: number;         // default 10
  /** Color of glow/crosshair */
  color?: string;            // default #ffffff
};

export default function MouseGridFXCanvas({
  targetRef,
  radius = 140,
  alpha = 0.22,
  crossLen = 22,
  crossGap = 6,
  lineWidth = 1,
  parallax = 10,
  color = "#ffffff",
}: MouseGridFXCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  // Position + size the canvas to match target
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const host = targetRef.current;
    if (!canvas || !host) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = host.getBoundingClientRect();

      canvas.style.position = "absolute";
      canvas.style.left = "0";
      canvas.style.top = "0";
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(host);

    return () => {
      obs.disconnect();
    };
  }, [targetRef]);

  // Drawing (only on move, throttled by RAF)
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = targetRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const draw = () => {
      rafRef.current = null;
      const rect = host.getBoundingClientRect();
      const pos = mouseRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!pos) return;

      // Convert client coords to canvas coords
      const x = (pos.x - rect.left) * dpr;
      const y = (pos.y - rect.top) * dpr;

      // Parallax transform (CSS transform on canvas)
      const nx = (pos.x - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (pos.y - (rect.top + rect.height / 2)) / (rect.height / 2);
      const tx = Math.max(-1, Math.min(1, nx)) * parallax;
      const ty = Math.max(-1, Math.min(1, ny)) * parallax;
      canvas.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

      // Glow (radial gradient)
      const r = radius * dpr;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      // strong center, smooth falloff
      grad.addColorStop(0.0, hexA(color, alpha));
      grad.addColorStop(0.45, hexA(color, alpha * 0.6));
      grad.addColorStop(1.0, hexA(color, 0));

      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      // Crosshair (crisp 1px)
      ctx.lineWidth = Math.max(1, Math.round(lineWidth * dpr));
      ctx.strokeStyle = hexA(color, Math.min(1, alpha + 0.08));
      ctx.beginPath();
      // horizontal
      ctx.moveTo(x - (crossGap + crossLen) * dpr, y);
      ctx.lineTo(x - crossGap * dpr, y);
      ctx.moveTo(x + crossGap * dpr, y);
      ctx.lineTo(x + (crossGap + crossLen) * dpr, y);
      // vertical
      ctx.moveTo(x, y - (crossGap + crossLen) * dpr);
      ctx.lineTo(x, y - crossGap * dpr);
      ctx.moveTo(x, y + crossGap * dpr);
      ctx.lineTo(x, y + (crossGap + crossLen) * dpr);
      ctx.stroke();

      ctx.globalCompositeOperation = "source-over";
    };

    const schedule = () => {
        rafRef.current ??= requestAnimationFrame(draw);
      };

    const onMove = (ev: MouseEvent) => {
      mouseRef.current = { x: ev.clientX, y: ev.clientY };
      schedule();
    };

    const onLeave = () => {
      mouseRef.current = null;
      canvas.style.transform = "translate3d(0,0,0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [targetRef, radius, alpha, crossLen, crossGap, lineWidth, parallax, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1, // over the grid, under the content
        willChange: "transform",
      }}
    />
  );
}

function hexA(hex: string, a: number) {
  // Accept #rgb, #rrggbb; return rgba(r,g,b,a)
  const h = hex.replace("#", "");
  const to255 = (s: string) => parseInt(s, 16);
  let r = 255, g = 255, b = 255;
  if (h.length === 3) {
    r = to255(h[0] + h[0]);
    g = to255(h[1] + h[1]);
    b = to255(h[2] + h[2]);
  } else if (h.length >= 6) {
    r = to255(h.substring(0, 2));
    g = to255(h.substring(2, 4));
    b = to255(h.substring(4, 6));
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
