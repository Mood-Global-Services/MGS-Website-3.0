import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";

const VacancyHero = ({ title }: { title: string }) => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingY={{ xs: 4, lg: 10 } }
            paddingX={4}
            position="relative"
            overflow="hidden"
        >
            <Stack width="75%" alignItems="center" justifyContent="center" gap={4} marginX="auto">
                <Typography color={theme.palette.brand.mgsBlue2.main} variant="h1" component="h1" fontSize={{ xs: "2rem !important", lg: "3.75rem !important" }} className="chno" fontWeight={500} textAlign="center" textTransform="uppercase">
                    {title}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default VacancyHero;