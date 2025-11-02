"use client";

import * as React from "react";
import { Box, Stack, Typography, keyframes } from "@mui/material";
import Grid from "@mui/material/Grid";
import theme from "@/theme/theme";

import TestimonialsCard1 from "@/components/home/testimonialsCards/testimonialsCard1";
import TestimonialsCard2 from "@/components/home/testimonialsCards/testimonialsCard2";
import TestimonialsCard3 from "@/components/home/testimonialsCards/testimonialsCard3";
import TestimonialsCard4 from "@/components/home/testimonialsCards/testimonialsCard4";
import TestimonialsCard5 from "@/components/home/testimonialsCards/testimonialsCard5";
import TestimonialsCard6 from "@/components/home/testimonialsCards/testimonialsCard6";

// Animation helpers
const scrollUp = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-50%); }  /* we duplicate content so -50% is a perfect loop */
`;
const scrollDown = keyframes`
  0%   { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

const scrollLeft = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const scrollRight = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

// Utility: splitting cards into N columns for a masonry-like layout
function chunkIntoColumns<T>(items: T[], columns: number) {
  const out: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => out[i % columns].push(item));
  return out;
}

export default function Testimonials() {

  const cards = [
    <TestimonialsCard1 key="c1" />,
    <TestimonialsCard2 key="c2" />,
    <TestimonialsCard3 key="c3" />,
    <TestimonialsCard4 key="c4" />,
    <TestimonialsCard5 key="c5" />,
    <TestimonialsCard6 key="c6" />,
    <TestimonialsCard1 key="c1" />,
    <TestimonialsCard2 key="c2" />,
    <TestimonialsCard3 key="c3" />,
    <TestimonialsCard4 key="c4" />,
    <TestimonialsCard5 key="c5" />,
    <TestimonialsCard6 key="c6" />,
  ];

  const columns = 3;
  const mobileColumns = 2;
  const cols = chunkIntoColumns(cards, columns);
  const mobileCols = chunkIntoColumns(cards, mobileColumns);

  const durations = [36, 32, 40];
  const directions = [scrollUp, scrollDown, scrollUp];
  const mobileDurations = [10, 10, 10];
  const mobileDirections = [scrollLeft, scrollRight, scrollLeft];

  return (
    <Stack width="100%" alignItems="center" position="relative" py={8} px={{ xs: 2, md: 10 }} gap={10}>
      <Stack width="100%" alignItems="center" gap={2}>
        <Typography
          variant="h2"
          fontSize={"2.75rem !important"}
          fontWeight={400}
          className="chno"
          color={theme.palette.brand.mgsBlue1.main}
          textAlign="center"
        >
          What our customers say
        </Typography>
        <Typography variant="h5" fontWeight={300} color={theme.palette.text.secondary} textAlign="center">
          See what our customers have to say about us.
        </Typography>
      </Stack>

      {/* marquee viewport */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          overflow: "hidden",
        }}
      >
        {/* top & bottom gradients */}
        <Box sx={{
          position: "absolute", top: 0, left: 0, width: "100%", height: 80,
          background: "linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <Box sx={{
          position: "absolute", bottom: 0, left: 0, width: "100%", height: 120,
          background: "linear-gradient(0deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* columns container */}
        <Grid container columnSpacing={{ xs: 2, md: 3 }} rowSpacing={0} px={{ xs: 2, md: 0 }} position="relative" zIndex={1} sx={{
          display: {xs: "none", lg: "block"},
        }}>
          {cols.map((colItems, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
              <Box
                sx={{
                  height: { xs: 520, sm: 560, md: 640 },
                  overflow: "hidden",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* column content */}
                <Stack
                  spacing={{ xs: 2, md: 3 }}
                  sx={{
                    animation: {xs: `${mobileDirections[idx]} ${mobileDurations[idx]}s linear infinite`, lg: `${directions[idx]} ${durations[idx]}s linear infinite`},
                    willChange: {xs: "transform", lg: "unset"},
                    "&:hover": { animationPlayState: "paused" },
                    pr: { md: 1 },
                  }}
                >
                  {/* First copy */}
                  {colItems.map((el, i) => (
                    <Box key={`a-${i}`}>{el}</Box>
                  ))}
                  {/* Second copy */}
                  {colItems.map((el, i) => (
                    <Box key={`b-${i}`}>{el}</Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container columnSpacing={{ xs: 2, md: 3 }} rowSpacing={0} px={{ xs: 2, md: 0 }} position="relative" zIndex={1} sx={{
          display: {xs: "block", lg: "none"},
        }}>
          {mobileCols.map((colItems, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
              <Box
                sx={{
                  height: { xs: 300, sm: 320, md: 360 },
                  overflow: "hidden",
                  position: "relative",
                  isolation: "isolate",
                }}
              >
                {/* column content */}
                <Stack
                  spacing={{ xs: 2, md: 3 }}
                  sx={{
                    animation: {xs: `${mobileDirections[idx]} ${mobileDurations[idx]}s linear infinite`, lg: `${directions[idx]} ${durations[idx]}s linear infinite`},
                    willChange: {xs: "transform", lg: "unset"},
                    "&:hover": { animationPlayState: "paused" },
                    pr: { md: 1 },
                  }}
                >
                  {/* First copy */}
                  {colItems.map((el, i) => (
                    <Box key={`a-${i}`}>{el}</Box>
                  ))}
                  {/* Second copy */}
                  {colItems.map((el, i) => (
                    <Box key={`b-${i}`}>{el}</Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
