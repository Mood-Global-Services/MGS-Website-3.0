// src/components/common/GridOverlay.tsx
"use client";

import { Box } from "@mui/material";

type GridOverlayProps = {
  cell?: number;
  majorEvery?: number;
  minorColor?: string;
  majorColor?: string;
  vignette?: boolean;
  topGlare?: boolean;
};

export default function GridOverlay({
  cell = 40,
  majorEvery = 4,
  minorColor = "rgba(255,255,255,0.04)",
  majorColor = "rgba(255,255,255,0.03)",
  vignette = true,
  topGlare = false,
}: GridOverlayProps) {
  const major = cell * majorEvery;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: [
          topGlare
            ? "linear-gradient(180deg, rgba(0,7,15,0.06) 0.4%, rgba(0,7,15,0) 100%)"
            : "none",
          vignette
            ? "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.25) 100%)"
            : "none",
          `linear-gradient(${majorColor} 1px, transparent 1px), linear-gradient(90deg, ${majorColor} 1px, transparent 1px)`,
          `linear-gradient(${minorColor} 1px, transparent 1px), linear-gradient(90deg, ${minorColor} 1px, transparent 1px)`,
        ].join(", "),
        backgroundSize: [
          "100% 100%",
          "100% 100%",
          `${major}px ${major}px, ${major}px ${major}px`,
          `${cell}px ${cell}px, ${cell}px ${cell}px`,
        ].join(", "),
        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        mixBlendMode: "normal",
        zIndex: 0.5,
        // enable subtle parallax driven by CSS vars
        transform: "translate3d(var(--parallax-x,0), var(--parallax-y,0), 0)",
        willChange: "transform",
      }}
    />
  );
}
