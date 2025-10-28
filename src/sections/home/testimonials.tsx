"use client";

import * as React from "react";
import { Box, Stack, Typography, useTheme, keyframes } from "@mui/material";
import Grid from "@mui/material/Grid"; // v2 is fine; we’ll use it only for responsive columns
import theme from "@/theme/theme";

// Your cards
import TestimonialsCard1 from "@/components/home/testimonialsCards/testimonialsCard1";
import TestimonialsCard2 from "@/components/home/testimonialsCards/testimonialsCard2";
import TestimonialsCard3 from "@/components/home/testimonialsCards/testimonialsCard3";
import TestimonialsCard4 from "@/components/home/testimonialsCards/testimonialsCard4";
import TestimonialsCard5 from "@/components/home/testimonialsCards/testimonialsCard5";
import TestimonialsCard6 from "@/components/home/testimonialsCards/testimonialsCard6";

// --- animation helpers ---
const scrollUp = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-50%); }  /* we duplicate content so -50% is a perfect loop */
`;
const scrollDown = keyframes`
  0%   { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

// Utility: split cards into N columns for a masonry-like layout
function chunkIntoColumns<T>(items: T[], columns: number) {
  const out: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => out[i % columns].push(item));
  return out;
}

export default function Testimonials() {
  const t = useTheme();

  // Put whatever card mix you want here
  const cards = [
    <TestimonialsCard1 key="c1" />,
    <TestimonialsCard1 key="c2" />,
    <TestimonialsCard1 key="c3" />,
    <TestimonialsCard1 key="c4" />,
    <TestimonialsCard1 key="c5" />,
    <TestimonialsCard1 key="c6" />,
  ];

  // Decide column count responsively in render (simple approach)
  // You could also compute this with useMediaQuery if you want.
  // We’ll render 3 columns; CSS will handle wrap on small screens.
  const columns = 3;
  const cols = chunkIntoColumns(cards, columns);

  // Different speeds for each column (seconds for a full loop)
  const durations = [36, 32, 40]; // tweak to taste
  const directions = [scrollUp, scrollDown, scrollUp];

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
          // optional: also hide with a mask, so you can skip the overlay Boxes if you prefer
          // WebKitMaskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          // maskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* top & bottom gradients (kept from your version) */}
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
        <Grid container columnSpacing={{ xs: 2, md: 3 }} rowSpacing={0} px={{ xs: 2, md: 0 }} position="relative" zIndex={1}>
          {/* On small screens: 1 column; medium: 2; large: 3 */}
          {cols.map((colItems, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
              {/* column viewport */}
              <Box
                sx={{
                  height: { xs: 520, sm: 560, md: 640 }, // visible window height; adjust to taste
                  overflow: "hidden",
                  position: "relative",
                  // make sure backgrounds from cards don't spill over neighbors
                  isolation: "isolate",
                }}
              >
                {/* column content (duplicated for seamless loop) */}
                <Stack
                  spacing={{ xs: 2, md: 3 }}
                  sx={{
                    // two copies stacked make 200% height; we scroll -50%
                    animation: `${directions[idx]} ${durations[idx]}s linear infinite`,
                    willChange: "transform",
                    "&:hover": { animationPlayState: "paused" },
                    pr: { md: 1 }, // small gutter
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
