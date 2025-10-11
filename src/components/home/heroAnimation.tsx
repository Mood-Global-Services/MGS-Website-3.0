"use client";

import { Stack, Box } from "@mui/material";
import Lottie from "lottie-react";
import rawAnimation from "@/assets/animations/animation.json";
import { stripLottieWatermark, type LottieJSON } from "@/types/lottie";

const cleanedAnimation = stripLottieWatermark(rawAnimation as LottieJSON);

type ResponsivePadding =
  | number
  | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };

type HeroAnimationProps = {
  frameHeight?: number;
  framePadding?: ResponsivePadding;
  artScale?: number;
  align?: "left" | "center" | "right";
};

export default function HeroAnimation({
  frameHeight = 220,
  framePadding = { xs: 8, md: 16, lg: 24 },
  artScale = 1,
  align = "center",
}: HeroAnimationProps) {
  const ar =
    typeof cleanedAnimation.w === "number" &&
    typeof cleanedAnimation.h === "number" &&
    cleanedAnimation.h > 0
      ? cleanedAnimation.w / cleanedAnimation.h
      : 16 / 9;

  const frameWidth = Math.round(frameHeight * ar);

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent={
        align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"
      }
    >
      <Box
        sx={{
          display: "block",
          width: frameWidth,
          height: frameHeight,
          mx: "auto",
          p: framePadding,
          boxSizing: "content-box",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            transform: `scale(${artScale})`,
            transformOrigin: "center",
          }}
        >
          <Lottie
            animationData={cleanedAnimation}
            loop={false}
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Stack>
  );
}