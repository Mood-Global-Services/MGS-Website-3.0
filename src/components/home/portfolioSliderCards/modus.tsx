import { Stack, Typography } from "@mui/material";

import modusBG from "@/assets/images/portfolioSlider/modusBG.webp"
import theme from "@/theme/theme";

const ModusCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${modusBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" fontWeight={600} textTransform="uppercase" >
                Modus
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.primary} lineHeight={1.4}>
                RWA Platform
            </Typography>
        </Stack>
    )
}

export default ModusCard;
