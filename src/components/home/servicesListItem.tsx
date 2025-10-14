"use client";

import * as React from "react";
import { Stack, Box } from "@mui/material";

type ServicesListItemProps = {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  /** Opacity of the gray backplate/shadow (0..1). */
  shadowOpacity?: number;
  /** Main fill & stroke for the front shape. */
  baseFill?: string;
  strokeColor?: string;
  strokeWidth?: number;
};

/* ---------------- Figma paths (viewBox 0 0 1097 153) ---------------- */
const dShadow =
  "M1053 5V27H1075V49H1097V109H1075V131H1053V153H44V131H22V109H0V49H22V27H44V5H1053Z";

const dMain =
  "M1052.5 0.5V22.5H1074.5V44.5H1096.5V103.5H1074.5V125.5H1052.5V147.5H44.5V125.5H22.5V103.5H0.5V44.5H22.5V22.5H44.5V0.5H1052.5Z";

/** White mask for CSS masking the content to the front shape */
const maskMainDataUri =
  `url('data:image/svg+xml;utf8,` +
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 153" preserveAspectRatio="none">` +
  `<path fill="%23fff" d="${dMain}"/>` +
  `</svg>')`;

export default function ServicesListItem({
  leftChildren,
  rightChildren,
  shadowOpacity = 1,
  baseFill = "#0B0B0B",   // exact solid base
  strokeColor = "#676767",
  strokeWidth = 1,
}: ServicesListItemProps) {
  return (
    <Stack
      width="100%"
      minHeight={140}
      direction="row"
      alignItems="stretch"
      justifyContent="space-between"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "transparent",

        // Hover toggles the gradient overlay inside the shape
        "& svg .hoverGrad": {
          opacity: 0,
          transition: "opacity 220ms ease",
        },
        "&:hover svg .hoverGrad": {
          opacity: 1,
        },
      }}
    >
      {/* SVG background: back shadow, base fill, hover gradient, stroke */}
      <Box
        component="svg"
        viewBox="0 0 1097 153"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <defs>
          {/* Clip to the main shape for the hover fill */}
          <clipPath id="clipMain" clipPathUnits="userSpaceOnUse">
            <path d={dMain} />
          </clipPath>

          {/* EXACT CSS GRADIENT EQUIVALENT:
             background:
               linear-gradient(0deg, #0B0B0B, #0B0B0B),
               linear-gradient(0deg, rgba(31,55,225,0.15) 0%, rgba(0,0,0,0) 100%);
             We already paint #0B0B0B as base fill via the path.
             This gradient is the *overlay* that fades from blue at bottom → transparent at top. */}
          <linearGradient id="blueOverlay" x1="0" y1="153" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1F37E1" stopOpacity="0.15" />
            <stop offset="1" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1) Backplate/shadow (the offset gray shape) */}
        <path d={dShadow} fill="#676767" opacity={shadowOpacity} />

        {/* 2) Base fill: pure black (matches your first gradient layer being solid) */}
        <path d={dMain} fill={baseFill} />

        {/* 3) Hover gradient INSIDE the shape (matches your second gradient layer) */}
        <g className="hoverGrad" clipPath="url(#clipMain)">
          <rect x="0" y="0" width="1097" height="153" fill="url(#blueOverlay)" />
        </g>

        {/* 4) Stroke on top so it stays crisp over the gradient */}
        <path
          d={dMain}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </Box>

      {/* Masked content so nothing leaks outside the silhouette */}
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={8}
        sx={{
          position: "relative",
          zIndex: 1,
          WebkitMaskImage: maskMainDataUri,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "100% 100%",
          maskImage: maskMainDataUri,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "100% 100%",
        }}
      >
        <Stack width="50%" direction="row" justifyContent="flex-start" alignItems="center">
          {leftChildren}
        </Stack>
        <Stack width="50%" direction="row" justifyContent="space-between" alignItems="center">
          {rightChildren}
        </Stack>
      </Stack>
    </Stack>
  );
}
