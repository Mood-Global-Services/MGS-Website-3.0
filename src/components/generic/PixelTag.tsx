"use client";

import * as React from "react";
import { ButtonBase, Box, Typography, type SxProps, type Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type PixelTagProps = {
  children: React.ReactNode;
  onClick?: () => void;
  paddingX?: number;     // horizontal content padding (inside the center section)
  color?: string;        // fill color of the tag
  stroke?: string;       // outline color
  strokeWidth?: number;  // outline thickness in px
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
};

/** pixel tabs in 40px logical height coordinates */
const LEFT_FILL_D  = "M6 0V3H3V6H0V31H3V34H6V37H9V0H6Z";
const RIGHT_FILL_D = "M3 37V34H6V31H9V6H6V3H3V0H0V37H3Z";

export default function PixelTag({
  children,
  onClick,
  paddingX = 14,
  color,
  stroke = "#737373",
  strokeWidth = 2,
  fullWidth = false,
  disabled,
  className,
  sx,
}: PixelTagProps) {
  const theme = useTheme();
  const fill = color ?? "#151515";

  const ref = React.useRef<HTMLButtonElement | null>(null);
  const [h, setH] = React.useState<number>(40);

  // Measure actual rendered height so tabs scale with content.
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(() => {
      const newH = el.clientHeight || 40;
      setH(newH);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Scale pixel geometry from logical 40px height
  const tabW = (9 / 40) * h;           // visible tab width
  const overlap = (3 / 40) * h;        // center overlaps under each tab

  // Where the “seam” between tab and center sits (to hide inner stroke)
  const seamXLeft  = tabW - overlap;
  const seamXRight = tabW - overlap;

  return (
    <ButtonBase
      ref={ref}
      onClick={onClick}
      disableRipple
      disabled={disabled}
      className={className}
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        // width is driven by content; we only add padding + tab room:
        pl: `${paddingX + tabW}px`,
        pr: `${paddingX + tabW}px`,
        // height is driven by children (e.g., your <Stack py={1} .../>)
        borderRadius: 0,
        background: "transparent",
        color: "#fff",
        textTransform: "none",
        fontWeight: 700,
        lineHeight: 1,
        overflow: "visible",
        width: fullWidth ? "100%" : "auto",
        ...sx,
      }}
    >
      {/* --- FILL (no strokes) --- */}
      {/* left tab */}
      <Box
        component="svg"
        viewBox="0 0 9 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${tabW}px`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <path d={LEFT_FILL_D} fill={fill} />
      </Box>

      {/* center block */}
      <Box
        component="svg"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: `${tabW - overlap}px`,
          right: `${tabW - overlap}px`,
          height: "100%",
          width: `calc(100% - ${(tabW - overlap) * 2}px)`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <rect x="0" y="0" width="100" height="40" fill={fill} />
      </Box>

      {/* right tab */}
      <Box
        component="svg"
        viewBox="0 0 9 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: `${tabW}px`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <path d={RIGHT_FILL_D} fill={fill} />
      </Box>

      {/* --- OUTLINE STROKES --- */}
      {/* left outline */}
      <Box
        component="svg"
        viewBox="0 0 9 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${tabW}px`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <path
          d={LEFT_FILL_D}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </Box>

      {/* center outline (top & bottom only): draw a rect, then hide the verticals with seam covers */}
      <Box
        component="svg"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: `${tabW - overlap}px`,
          right: `${tabW - overlap}px`,
          height: "100%",
          width: `calc(100% - ${(tabW - overlap) * 2}px)`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <rect
          x="0.5" y="0.5" width="99" height="39"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </Box>

      {/* right outline */}
      <Box
        component="svg"
        viewBox="0 0 9 40"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: `${tabW}px`,
          display: "block",
          pointerEvents: "none",
        }}
      >
        <path
          d={RIGHT_FILL_D}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        />
      </Box>

      {/* seam covers – hide the inner vertical outline lines */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: `${seamXLeft - strokeWidth / 2}px`,
          width: `${strokeWidth + 1}px`,
          height: "100%",
          background: fill,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: `${seamXRight - strokeWidth / 2}px`,
          width: `${strokeWidth + 1}px`,
          height: "100%",
          background: fill,
          pointerEvents: "none",
        }}
      />

      {/* content */}
      <Typography component="span" variant="body1" sx={{ position: "relative", zIndex: 1, fontWeight: 700 }}>
        {children}
      </Typography>
    </ButtonBase>
  );
}
