import { Stack, Typography } from "@mui/material";

import coliseumBG from "@/assets/images/portfolioSlider/coliseumBG.webp"

const ColiseumCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${coliseumBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" fontWeight={600} textTransform="uppercase" sx={{
                background: "linear-gradient(90deg, #396ADD 0%, #6B9CFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                Coliseum
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={"#4994EC"} lineHeight={1.4}>
                Seamless Cross-Chain Swaps
            </Typography>
        </Stack>
    )
}

export default ColiseumCard;
