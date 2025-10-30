import { Stack, Grid } from "@mui/material";
import VacanciesHero from "@/sections/vacancies/vacanciesHero";
import VacanciesCard from "@/components/vacancies/vacanciesCard";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";

export default function Home() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={8}>
            <VacanciesHero />
            
            <Grid container spacing={4} width="70%" marginX="auto">
                <Grid size={6}>
                    <VacanciesCard title="UX/UI Intern" remote={true} link="https://www.google.com" />
                </Grid>
                <Grid size={6}>
                    <VacanciesCard title="Backend Intern" remote={true} link="https://www.google.com" />
                </Grid>
                <Grid size={6}>
                    <VacanciesCard title="Vibe Coding Tool Expert Freelancer" remote={true} link="https://www.google.com" />
                </Grid>
                <Grid size={6}>
                    <VacanciesCard title="AI Agent Dev Freelancer" remote={true} link="https://www.google.com" />
                </Grid>
                <Grid size={6}>
                    <VacanciesCard title="Lead Generation Expert" remote={true} link="https://www.google.com" />
                </Grid>
            </Grid>
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
