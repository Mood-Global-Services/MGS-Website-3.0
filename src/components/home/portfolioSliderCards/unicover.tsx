import { Stack, Typography } from "@mui/material";

import unicoverBG from "@/assets/images/portfolioSlider/unicoverBG.webp"
import theme from "@/theme/theme";

const UnicoverCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${unicoverBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" fontWeight={600} textTransform="uppercase" >
                Unicover
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.primary} lineHeight={1.4}>
                Insurance brokerage and<br /> risk management services
            </Typography>
        </Stack>
    )
}

export default UnicoverCard;
