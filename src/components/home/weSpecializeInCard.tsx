// components/home/weSpecializeInCard.tsx
"use client";

import { Box, type BoxProps } from "@mui/material";

type WeSpecializeCardProps = BoxProps & {
  radius?: number;        // corner radius in px
  borderWidth?: number;   // gradient stroke width
  heightPx?: number;      // <- NEW: uniform height for all cards
};

export default function WeSpecializeCard({
  radius = 14,
  borderWidth = 0.95,
  heightPx = 260,           // sensible default; override per section if needed
  sx,
  children,
  ...rest
}: WeSpecializeCardProps) {
  const stroke = `${borderWidth}px`;

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: `${radius}px`,
        height: `${heightPx}px`,
        backgroundColor: "transparent",
        overflow: "visible",

        // Gradient “stroke-only” border
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: `${radius}px`,
          padding: stroke,
          background:
            "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 2,
        },

        // Let caller extend/override
        ...sx,
      }}
      {...rest}
    >
      {/* Content layer fills the card and centers everything */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // prevents accidental overflow cutting
          overflow: "visible",
          p: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
