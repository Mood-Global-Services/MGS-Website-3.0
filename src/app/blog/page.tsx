import "server-only";
import BlogHero from "@/sections/blog/blogHero";
import FeaturedTrending from "@/sections/blog/FeaturedTrending";
import ArticlesSection from "@/sections/blog/ArticlesSection";
import { Stack, Divider } from "@mui/material";
import theme from "@/theme/theme";
import Footer from "@/components/layout/footer";




export default function VacancyPage() {

    return (
        <Stack width={"100%"} alignItems={"center"}>
            <BlogHero />
            <FeaturedTrending />
            <Divider sx={{ width: "75%", marginX: "auto", marginBottom: 6, borderBottom: `1px solid ${theme.palette.brand.border1.main}` }} />
            <ArticlesSection />
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
