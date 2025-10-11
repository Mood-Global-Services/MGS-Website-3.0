"use client";

import * as React from "react";
import { ButtonBase, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type SideTabbedButtonProps = {
  children: React.ReactNode;
  action?: () => void;
  height?: number;
  paddingX?: number;
  color?: string;
  shadowColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  hoverShiftX?: number;
  hoverShiftY?: number;
};

const LEFT_PATH = "M6 0V3H3V6H0V31H3V34H6V37H9V0H6Z";
const RIGHT_PATH = "M3 37V34H6V31H9V6H6V3H3V0H0V37H3Z";

function Shape({
  kind,
  height,
  width,
  fill,
  translateX = 0,
  translateY = 0,
  leftInset = 0,
  rightInset = 0
}: {
  kind: "left" | "center" | "right";
  height: number;
  width?: number;
  fill: string;
  translateX?: number;
  translateY?: number;
  leftInset?: number;
  rightInset?: number;
}) {
  if (kind === "center") {
    return (
      <Box
        component="svg"
        aria-hidden
        focusable={false}
        sx={{
          position: "absolute",
          top: 0,
          left: `${leftInset}px`,
          right: `${rightInset}px`,
          height,
          width: `calc(100% - ${leftInset + rightInset}px)`,
          transform: `translate(${translateX}px, ${translateY}px)`,
          pointerEvents: "none",
          display: "block",
        }}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100" height="40" fill={fill} />
      </Box>
    );
  }

  const path = kind === "left" ? LEFT_PATH : RIGHT_PATH;
  const toRight = kind === "right";

  return (
    <Box
      component="svg"
      aria-hidden
      focusable={false}
      viewBox="0 0 12 40"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: "absolute",
        top: 0,
        left: toRight ? "auto" : 0,
        right: toRight ? 0 : "auto",
        height,
        width,
        transform: `translate(${translateX}px, ${translateY}px)`,
        pointerEvents: "none",
        display: "block",
      }}
    >
      <path d={path} fill={fill} />
    </Box>
  );
}

export default function SideTabbedButton({
  children,
  action,
  height = 40,
  paddingX = 14,
  color,
  shadowColor = "#142E43",
  fullWidth = false,
  disabled,
  hoverShiftX = 1,
  hoverShiftY = 1,
}: SideTabbedButtonProps) {
  const theme = useTheme();
  const fill = color ?? theme.palette.brand?.buttons?.main ?? "#1F37E1";

  const tabW = (12 / 40) * height;
  const overlap = (3 / 40) * height;

  const baseDx = (3 / 40) * height;
  const baseDy = (3 / 40) * height;

  const extraDx = (hoverShiftX / 80) * height;
  const extraDy = (hoverShiftY / 80) * height;

  const dxBlue = baseDx;
  const dyBlue = baseDy;
  const dxWhite = baseDx + extraDx;
  const dyWhite = baseDy + extraDy;

  return (
    <ButtonBase
      onClick={action}
      disableRipple
      disabled={disabled}
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height,
        pl: `${paddingX + (tabW - overlap)}px`,
        pr: `${paddingX + (tabW - overlap)}px`,
        width: fullWidth ? "100%" : "auto",
        borderRadius: 0,
        background: "transparent",
        color: "#fff",
        textTransform: "none",
        fontWeight: 700,
        lineHeight: 1,
        overflow: "visible",
        transition: "transform 120ms ease",
        "&:hover": { transform: "translateY(-1px)" },
        "& .shadow-blue": { opacity: 1, transition: "opacity 140ms ease" },
        "& .shadow-white": { opacity: 0, transition: "opacity 140ms ease" },
        "&:hover .shadow-blue, &:focus-visible .shadow-blue": { opacity: 0 },
        "&:hover .shadow-white, &:focus-visible .shadow-white": { opacity: 1 },
        "&.Mui-disabled": { opacity: 0.6, cursor: "not-allowed" },
        "& .arrow-clip": {
          width: 20,
          height: 20,
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .arrow-slide": {
          willChange: "transform, opacity",
        },
        "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
          animation: "mgsArrowGhost 950ms ease-out infinite",
        },

        "@keyframes mgsArrowGhost": {
          "0%": { transform: "translateX(-130%)", opacity: 0 },
          "15%": { transform: "translateX(-75%)", opacity: 1 },
          "70%": { transform: "translateX(0%)", opacity: 1 },
          "100%": { transform: "translateX(130%)", opacity: 0 },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
            animation: "none",
            opacity: 1,
            transform: "translateX(0%)",
          },
        },
      }}
    >
      <div className="shadow-white" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Shape kind="left" height={height} width={tabW} fill="#fff" translateX={dxWhite} translateY={dyWhite} />
        <Shape kind="center" height={height} fill="#fff"
          leftInset={tabW - overlap} rightInset={tabW - overlap}
          translateX={dxWhite} translateY={dyWhite} />
        <Shape kind="right" height={height} width={tabW} fill="#fff" translateX={dxWhite} translateY={dyWhite} />
      </div>

      <div className="shadow-blue" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Shape kind="left" height={height} width={tabW} fill={shadowColor} translateX={dxBlue} translateY={dyBlue} />
        <Shape kind="center" height={height} fill={shadowColor}
          leftInset={tabW - overlap} rightInset={tabW - overlap}
          translateX={dxBlue} translateY={dyBlue} />
        <Shape kind="right" height={height} width={tabW} fill={shadowColor} translateX={dxBlue} translateY={dyBlue} />
      </div>

      <Shape kind="left" height={height} width={tabW} fill={fill} />
      <Shape kind="center" height={height} fill={fill} leftInset={tabW - overlap} rightInset={tabW - overlap} />
      <Shape kind="right" height={height} width={tabW} fill={fill} />

      <Typography component="span" variant="body1" sx={{ position: "relative", zIndex: 1, fontWeight: 700 }}>
        {children}
      </Typography>
    </ButtonBase>
  );
}
