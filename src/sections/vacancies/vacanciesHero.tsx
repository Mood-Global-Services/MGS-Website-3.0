import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";

const VacanciesHero = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingY={10}
            paddingX={4}
            position="relative"
            overflow="hidden"
        >
            <Stack width="75%" alignItems="center" justifyContent="center" gap={4} marginX="auto">
                <Typography variant="h1" component="h1" fontSize="3.75rem !important" className="chno" fontWeight={500} textAlign="center" textTransform="uppercase">
                    <span >Career Opportunities</span>
                    <br />
                    <span style={{ color: theme.palette.brand.mgsBlue1.main }}>at mood global servoce</span>
                </Typography>
                <Typography
                    variant="h4"
                    component="h4"
                    fontWeight={300}
                    textAlign="center"
                >
                    Explore our open positions and find the role that fits you best
                </Typography>
            </Stack>
        </Stack>
    );
};

export default VacanciesHero;