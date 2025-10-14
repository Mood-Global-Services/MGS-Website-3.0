"use client";

import * as React from "react";
import { Box, type BoxProps } from "@mui/material";

type WeSpecializeFrameProps = BoxProps & {
  height?: number | string;
  panelRadius?: number;
  panelOpacity?: number;
  glow?: boolean;
  children?: React.ReactNode;
};

export default function WeSpecializeFrame({
  height = 260,
  panelRadius = 8,
  panelOpacity = 0.2,
  glow = true,
  children,
  sx,
  ...rest
}: WeSpecializeFrameProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: height,
        ...sx,
      }}
      {...rest}
    >
      <Box
        component="svg"
        viewBox="0 0 1388 397"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      >
        <rect
          x="40"
          y="65"
          width="1309"
          height="267"
          rx={panelRadius}
          fill="url(#panelFill)"
          fillOpacity={panelOpacity}
        />

        {glow && (
          <g filter="url(#glowBlur)">
            <ellipse
              cx="687"
              cy="246"
              rx="562"
              ry="123"
              fill="url(#glowFill)"
              fillOpacity="0.29"
            />
          </g>
        )}

        <path
          d="M40.5 229V77.5C40.5 70.8726 45.8726 65.5 52.5 65.5H519.5"
          stroke="url(#strokeLeftTop)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M40.5 168.5V320C40.5 326.627 45.8726 332 52.5 332H519.5"
          stroke="url(#strokeLeftBottom)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M1349 229V77.5C1349 70.8726 1343.63 65.5 1337 65.5H870"
          stroke="url(#strokeRightTop)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M1349 168.5V320C1349 326.627 1343.63 332 1337 332H870"
          stroke="url(#strokeRightBottom)"
          strokeWidth="1.5"
          fill="none"
        />

        <defs>
          <filter
            id="glowBlur"
            x="-46.3"
            y="-48.3"
            width="1466.6"
            height="588.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur stdDeviation="85.65" result="effect1_foregroundBlur" />
          </filter>

          <linearGradient id="panelFill" x1="694.5" y1="65" x2="694.5" y2="332" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0" />
            <stop offset="1" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="glowFill" x1="687" y1="123" x2="687" y2="369" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1437E8" />
            <stop offset="1" stopColor="#0B0B0B" />
          </linearGradient>

          <linearGradient id="strokeLeftTop" x1="519" y1="66" x2="40" y2="223.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#434343" stopOpacity="0" />
            <stop offset="0.27172" stopColor="#434343" />
            <stop offset="0.87909" stopColor="#434343" />
            <stop offset="1" stopColor="#434343" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strokeLeftBottom" x1="519" y1="331.5" x2="40" y2="174" gradientUnits="userSpaceOnUse">
            <stop stopColor="#434343" stopOpacity="0" />
            <stop offset="0.27172" stopColor="#434343" />
            <stop offset="0.87909" stopColor="#434343" />
            <stop offset="1" stopColor="#434343" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strokeRightTop" x1="870.5" y1="66" x2="1349.5" y2="223.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#434343" stopOpacity="0" />
            <stop offset="0.27172" stopColor="#434343" />
            <stop offset="0.87909" stopColor="#434343" />
            <stop offset="1" stopColor="#434343" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="strokeRightBottom" x1="870.5" y1="331.5" x2="1349.5" y2="174" gradientUnits="userSpaceOnUse">
            <stop stopColor="#434343" stopOpacity="0" />
            <stop offset="0.27172" stopColor="#434343" />
            <stop offset="0.87909" stopColor="#434343" />
            <stop offset="1" stopColor="#434343" stopOpacity="0" />
          </linearGradient>
        </defs>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 2, md: 3 },
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
