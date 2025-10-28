import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import testimonialCardShape from "@/assets/images/testimonialCardShape.svg?url";
import testimonialsQuoteMark from "@/assets/images/icons/testimonialsQuoteMark.webp";

const TestimonialsCard3 = () => {
    return (
        <Stack width="100%" height="100%" alignItems="stretch" position="relative" paddingY={14} paddingX={10} gap={4}>
            <Image src={testimonialCardShape} alt="testimonial card shape" width={100} height={100} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }} />
            <Stack direction="row" alignItems="center" paddingLeft={13} paddingRight={4} paddingTop={1} justifyContent="space-between" sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
            }}>
                <Stack height="fit-content" gap={1} paddingY={1.5}>
                    <Typography variant="body2" fontWeight={400} color={theme.palette.text.secondary}>
                        Name & Surname
                    </Typography>
                    <Typography variant="body2" fontWeight={300} color={theme.palette.text.secondary}>
                        Company name & position
                    </Typography>
                </Stack>
                <Image src={testimonialsQuoteMark} alt="testimonials quote mark" width={40} height={40} />
            </Stack>
            <Stack direction="row" alignItems="center" paddingLeft={6} paddingRight={6} paddingBottom={4} justifyContent="space-between" sx={{
                position: "absolute",
                top: "45%",
                left: 0,
                right: 0,
                width: "100%",
            }}>
                <Typography variant="body2" fontWeight={300} color={theme.palette.text.secondary}>
                    Launched our MVP in just 6 weeks — an ideal balance of speed and quality.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default TestimonialsCard3;