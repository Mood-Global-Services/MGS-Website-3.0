import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import testimonialCardShape from "@/assets/images/testimonialCardShape.svg?url";
import testimonialsQuoteMark from "@/assets/images/icons/testimonialsQuoteMark.webp";

export default function TestimonialsCard1() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: 720,          // optional max width
                mx: "auto",
                // keep the same proportion as your design image (width/height)
                aspectRatio: "493 / 311",
                color: "text.secondary",
            }}
        >
            {/* Background shape */}
            <Image src={testimonialCardShape} alt="testimonial card shape" width={100} height={100} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }} />

            {/* Content (no absolute positioning) */}
            <Stack
                sx={{
                    position: "relative",
                    height: "100%",
                    justifyContent: "space-between",
                    px: { xs: 3, sm: 5, md: 4, lg: 3, xl: 2 }, // overall breathing room
                    py: { xs: 3, sm: 5, md: 4, lg: 3, xl: 2 },
                }}
            >
                {/* Top row */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        // left notch offset to match the shape
                        pl: { xs: 6, sm: 9, md: 8, lg: 6, xl: 10 },
                        pr: { xs: 2, sm: 3, md: 0, lg: 0, xl: 0 },
                        py: { xs: 1, sm: 0, lg: 0, xl: 1.5 },
                        pb: { xs: 0, sm: 0, lg: 2, xl: 0 },
                    }}
                >
                    <Stack gap={0.5}>
                        <Typography variant="body2" fontWeight={400}>
                            Name &amp; Surname
                        </Typography>
                        <Typography variant="body2" fontWeight={300} fontSize={{ xs: "0.75rem", sm: "0.8rem", md: "0.85rem", lg: "0.7rem", xl: "0.95rem" }}>
                            Company name &amp; position
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            position: "relative",
                            width: { xs: 28, sm: 36, md: 40 },   // 44px ≈ 2.75rem at 16px root
                            height: { xs: 28, sm: 36, md: 32 },
                            flexShrink: 0,
                        }}
                    >
                        <Image src={testimonialsQuoteMark} alt="quote" fill />
                    </Box>
                </Stack>

                {/* Body copy (naturally sits lower without magic numbers) */}
                <Typography
                    sx={{
                        fontWeight: 300,
                        fontSize: { xs: "0.85rem", sm: "0.85rem", md: "0.9rem", lg: "0.95rem", xl: "1rem" },
                        px: { xs: 3, sm: 2, md: 1, lg: 0.5, xl: 1 },
                        pb: { xs: 3, sm: 4, lg: 6, xl: 7 },
                    }}
                >
                    Very flexible and creative — they considered every detail of our niche
                    and proposed smart solutions
                </Typography>
            </Stack>
        </Box>
    );
}
