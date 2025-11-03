import "server-only";
import BlogHero from "@/sections/blog/blogHero";
import FeaturedTrending from "@/sections/blog/FeaturedTrending";
import { Box, Stack, Typography, Divider } from "@mui/material";
import theme from "@/theme/theme";
import Footer from "@/components/layout/footer";




export default function VacancyPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={0}>
            <BlogHero />
            <FeaturedTrending />
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
