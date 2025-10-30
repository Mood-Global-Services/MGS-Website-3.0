import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";

const PortfolioHero = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            minHeight="45vh"
            paddingX={4}
            position="relative"
            overflow="hidden"
        >
            <Stack width="50%" alignItems="center" justifyContent="center" gap={4} marginX="auto">
                <Typography variant="h1" component="h1" fontSize="3.75rem !important" className="chno" fontWeight={500} textAlign="center" textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main}>
                    <span>Products Created by</span>
                    <br />
                    <span style={{ color: theme.palette.text.primary}}>Mood Global Services</span>
                </Typography>
                <Typography
                    variant="h6"
                    component="h6"
                    fontWeight={300}
                    textAlign="center"
                >
                    Blockchain-based solutions designed to empower users, drive innovation, and redefine how businesses and communities interact in the Web3 space.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default PortfolioHero;