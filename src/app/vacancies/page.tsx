import { Stack, Grid } from "@mui/material";
import VacanciesHero from "@/sections/vacancies/vacanciesHero";
import VacanciesCard from "@/components/vacancies/vacanciesCard";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";

import { vacancies, type Vacancy } from "@/data/vacancies";

export default function VacanciesPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={8}>
            <VacanciesHero />
            
            <Grid container spacing={4} width="70%" marginX="auto">
                {vacancies.map((vacancy: Vacancy) => (
                    <Grid size={6} key={vacancy.title}>
                        <VacanciesCard title={vacancy.title} remote={vacancy.remote} link={`/vacancies/${vacancy.id}`} />
                    </Grid>
                ))}
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
