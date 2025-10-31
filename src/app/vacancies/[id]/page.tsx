"use client";
import { useParams } from "next/navigation";
import { vacancies, type Vacancy } from "@/data/vacancies";
import VacancyHero from "@/sections/vacancies/vacancyHero";
import { Box, Stack, Typography, Divider } from "@mui/material";
import theme from "@/theme/theme";
import Footer from "@/components/layout/footer";



export default function VacancyPage() {

    const params = useParams();
    const id = params.id as string;
    const vacancy = vacancies.find((vacancy: Vacancy) => vacancy.id === id);

    return (
        <Stack width={"100%"} alignItems={"center"} gap={4}>
            <VacancyHero title={vacancy?.title ?? ""} />
            <Stack width={{ xs: "90%", lg: "60%" }} marginX="auto" sx={{
                border: `1px solid ${theme.palette.brand.border1.main}`,
                borderRadius: 2,
                backgroundColor: "#0F0F0F",
                padding: 4,
            }}>
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        About this role
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.aboutThisRole ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={400} textTransform="capitalize">
                                            {key}:&nbsp;
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                        {value}
                                    </Typography>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Role Overview
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.roleOverview ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Requirements
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.requirements ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Preferred Qualifications
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.qualifications ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Why Join Us?
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.whyJoinUs ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>

            </Stack>
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
