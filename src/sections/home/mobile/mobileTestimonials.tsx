// MobileTestimonials.tsx
"use client";

import * as React from "react";
import { Box, Stack, Typography, keyframes, type SxProps } from "@mui/material";
import theme from "@/theme/theme";

import TestimonialsCard1 from "@/components/home/testimonialsCards/testimonialsCard1";
import TestimonialsCard2 from "@/components/home/testimonialsCards/testimonialsCard2";
import TestimonialsCard3 from "@/components/home/testimonialsCards/testimonialsCard3";
import TestimonialsCard4 from "@/components/home/testimonialsCards/testimonialsCard4";
import TestimonialsCard5 from "@/components/home/testimonialsCards/testimonialsCard5";
import TestimonialsCard6 from "@/components/home/testimonialsCards/testimonialsCard6";

const marqueeLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const marqueeRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

// === NEW: a consistent, compact width per card on mobile ===
// Tweak these two numbers to taste:
const ITEM_WIDTH: SxProps = { xs: 340, sm: 260 }; // px
const ITEM_GAP = 1.5;

function useCards() {
  return React.useMemo(() => {
    const base = [
      <TestimonialsCard1 key="c1" />,
      <TestimonialsCard2 key="c2" />,
      <TestimonialsCard3 key="c3" />,
      <TestimonialsCard4 key="c4" />,
      <TestimonialsCard5 key="c5" />,
      <TestimonialsCard6 key="c6" />,
    ];
    const dup = base.map((el, i) => React.cloneElement(el, { key: `c${i + 1}-dup` }));
    return [...base, ...dup];
  }, []);
}

function splitIntoTwoRows<T>(items: T[]) {
  const a: T[] = [], b: T[] = [];
  items.forEach((it, i) => (i % 2 === 0 ? a : b).push(it));
  return [a, b] as const;
}

function MarqueeRow({
  children,
  direction = "left",
  duration = 28,
}: {
  children: React.ReactNode[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const anim = direction === "left" ? marqueeLeft : marqueeRight;
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        "&::before, &::after": {
          content: '""', position: "absolute", top: 0, bottom: 0, width: 32, zIndex: 2, pointerEvents: "none",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& [data-track]": { animation: "none !important", transform: "none !important" },
        },
      }}
    >
      <Stack
        direction="row"
        useFlexGap
        gap={ITEM_GAP}
        data-track
        sx={{
          width: "max-content",
          animation: `${anim} ${duration}s linear infinite`,
          willChange: "transform",
          "&:hover": { animationPlayState: "paused" },
          px: 1,
        }}
      >
        {/* First copy */}
        {children.map((child, i) => (
          <Box
            key={`row-a-${i}`}
            sx={{
              flex: "0 0 auto",
              width: ITEM_WIDTH,                // <- enforce compact width
              "& > *": { width: "100%" },       // <- make the card fill the wrapper
            } as SxProps}
          >
            {child}
          </Box>
        ))}
        {/* Second copy */}
        {children.map((child, i) => (
          <Box
            key={`row-b-${i}`}
            sx={{
              flex: "0 0 auto",
              width: ITEM_WIDTH,
              "& > *": { width: "100%" },
            } as SxProps}
          >
            {child}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default function MobileTestimonials() {
  const all = useCards();
  const [row1, row2] = React.useMemo(() => splitIntoTwoRows(all), [all]);

  return (
    <Stack width="100%" alignItems="center" py={5} px={2} gap={3}
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    >
      <Stack width="100%" alignItems="center" gap={1}>
        <Typography
          variant="h3"
          fontSize={"1.5rem !important"}
          fontWeight={600}
          color={theme.palette.brand?.mgsBlue1?.main ?? theme.palette.primary.main}
          textAlign="center"
        >
          What our customers say
        </Typography>
        <Typography variant="body2" color={theme.palette.text.secondary} textAlign="center">
          Loved by teams of all sizes.
        </Typography>
      </Stack>

      <Stack width="100%" gap={2.5} sx={{
        position: "relative",
      }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "15vw",
          height: "100%",
          background: `linear-gradient(90deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)`,
          zIndex: 1,
        }} />
        <Box sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "15vw",
          height: "100%",
          background: `linear-gradient(-90deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)`,
          zIndex: 1,
        }} />
        <MarqueeRow direction="left" duration={26}>{row1}</MarqueeRow>
        <MarqueeRow direction="right" duration={30}>{row2}</MarqueeRow>
      </Stack>
    </Stack>
  );
}
