import { Stack, Typography } from "@mui/material";

import fractionnaireBG from "@/assets/images/portfolioSlider/farctionnaireBG.webp"

const FractionnaireCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${fractionnaireBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" color="#C6FF00" fontWeight={600} textTransform="uppercase">
                Fractionnaire
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
                Real Estate RWA Platform
            </Typography>
        </Stack>
    )
}

export default FractionnaireCard;
