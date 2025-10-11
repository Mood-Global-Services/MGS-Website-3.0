// src/components/common/MouseGridFX.tsx
"use client";

import * as React from "react";
import { Box } from "@mui/material";

type MouseGridFXProps = {
  /** The element whose parallax CSS vars we should set (usually the same section container). */
  parallaxTargetRef: React.RefObject<HTMLElement | null>;
  /** Crosshair color and width */
  crosshairColor?: string;     // default rgba(255,255,255,0.9)
  crosshairWidth?: number;     // default 1
  /** Glow radius/opacity */
  glowRadius?: number;         // px, default 140
  glowOpacity?: number;        // 0..1, default 0.25
  /** Easing (0..1) toward mouse */
  ease?: number;               // default 0.12
  /** Max parallax shift in px */
  parallaxMax?: number;        // default 10
};

export default function MouseGridFX({
  parallaxTargetRef,
  crosshairColor = "rgba(255,255,255,0.9)",
  crosshairWidth = 1,
  glowRadius = 140,
  glowOpacity = 0.25,
  ease = 0.12,
  parallaxMax = 10,
}: MouseGridFXProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const hostRef = parallaxTargetRef;

  const target = React.useRef({ x: 0, y: 0 });
  const pos = React.useRef({ x: 0, y: 0 });
  const rafId = React.useRef<number | null>(null);

  React.useEffect(() => {
    const host = hostRef.current;
    const overlay = overlayRef.current;
    if (!host || !overlay) return;

    const r = () => host.getBoundingClientRect();

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: MouseEvent) => {
      const rect = r();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      target.current.x = x;
      target.current.y = y;
    };

    const onLeave = () => {
      const rect = r();
      target.current.x = rect.width / 2;
      target.current.y = rect.height / 2;
    };

    const rect0 = r();
    pos.current.x = target.current.x = rect0.width / 2;
    pos.current.y = target.current.y = rect0.height / 2;

    host.addEventListener("mousemove", onMove, { passive: true });
    host.addEventListener("mouseleave", onLeave, { passive: true });

    const tick = () => {
      // smooth follow
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      // set CSS vars on the overlay for glow + crosshair
      overlay.style.setProperty("--mx", `${pos.current.x}px`);
      overlay.style.setProperty("--my", `${pos.current.y}px`);

      // parallax vars on the host (read by GridOverlay)
      const rect = r();
      const nx = rect.width > 0 ? pos.current.x / rect.width : 0.5;  // 0..1
      const ny = rect.height > 0 ? pos.current.y / rect.height : 0.5;
      const dx = (nx * 2 - 1) * parallaxMax; // -max..max
      const dy = (ny * 2 - 1) * parallaxMax;
      host.style.setProperty("--parallax-x", `${-dx}px`);
      host.style.setProperty("--parallax-y", `${-dy}px`);

      rafId.current = requestAnimationFrame(tick);
    };

    if (!reduced) {
      rafId.current = requestAnimationFrame(tick);
    }

    return () => {
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [ease, hostRef, parallaxMax]);

  return (
    <Box
      ref={overlayRef}
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0.75, // above grid, below content
        // Radial glow centered at --mx/--my
        background: `radial-gradient(circle ${glowRadius}px at var(--mx,50%) var(--my,50%), rgba(255,255,255,${glowOpacity}) 0%, rgba(255,255,255,0) 70%)`,
      }}
    >
      {/* Crosshair lines: use CSS vars to position with transforms; fade at edges via mask */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: crosshairWidth,
          transform: "translate3d(0, calc(var(--my,50%) - 0.5px), 0)",
          background: crosshairColor,
          willChange: "transform",
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: crosshairWidth,
          transform: "translate3d(calc(var(--mx,50%) - 0.5px), 0, 0)",
          background: crosshairColor,
          willChange: "transform",
          maskImage:
            "linear-gradient(0deg, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
        }}
      />
    </Box>
  );
}
