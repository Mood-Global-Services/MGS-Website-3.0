import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";

import colichainBG from "@/assets/images/portfolioSlider/colichainBG.webp"

const ColichainCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${colichainBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" fontWeight={600} textTransform="uppercase" sx={{
                background: "linear-gradient(90deg, #FF560A 0%, #FF850A 47.44%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                Colichain
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.secondary} lineHeight={1.4}>
                L2 Infrastructure for the<br /> Real-World Token Economy
            </Typography>
        </Stack>
    )
}

export default ColichainCard;
