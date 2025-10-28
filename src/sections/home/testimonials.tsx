import { Stack, Typography, Grid } from "@mui/material";
import theme from "@/theme/theme";

import TestimonialsCard1 from "@/components/home/testimonialsCards/testimonialsCard1";
import TestimonialsCard2 from "@/components/home/testimonialsCards/testimonialsCard2";
import TestimonialsCard3 from "@/components/home/testimonialsCards/testimonialsCard3";
import TestimonialsCard4 from "@/components/home/testimonialsCards/testimonialsCard4";
import TestimonialsCard5 from "@/components/home/testimonialsCards/testimonialsCard5";
import TestimonialsCard6 from "@/components/home/testimonialsCards/testimonialsCard6";

const Testimonials = () => {
    return (
        <Stack width="100%" height="100%" alignItems="center" position="relative" paddingY={8} paddingX={10} gap={10}>
            <Stack width="100%" alignItems="center" gap={2}>
                <Typography variant="h2" fontSize={"2.75rem !important"} fontWeight={400} className="chno" color={theme.palette.brand.mgsBlue1.main}>
                    What our customers say
                </Typography>
                <Typography variant="h5" fontWeight={300} color={theme.palette.text.secondary}>
                    See what our customers have to say about us.
                </Typography>
            </Stack>
            <Stack width="100%" height="100%" direction="row" alignItems="stretch" justifyContent="space-between" gap={4}>
                <Grid container spacing={2} width="90%" marginX="auto">
                    <Grid size={4}>
                        <TestimonialsCard1 />
                    </Grid>
                    <Grid size={4}>
                        <TestimonialsCard2 />
                    </Grid>
                    <Grid size={4}>
                        <TestimonialsCard3 />
                    </Grid>
                    <Grid size={4}>
                        <TestimonialsCard4 />
                    </Grid>
                    <Grid size={4}>
                        <TestimonialsCard5 />
                    </Grid>
                    <Grid size={4}>
                        <TestimonialsCard6 />
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default Testimonials;