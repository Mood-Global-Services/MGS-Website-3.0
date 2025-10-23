import { Stack, Typography } from "@mui/material";

import morningsideBG from "@/assets/images/portfolioSlider/morningsideBG.webp"
import theme from "@/theme/theme";

const MorningsideCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${morningsideBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" color="#31D484" fontWeight={600} textTransform="uppercase" >
                Morningside
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.primary} lineHeight={1.4}>
                AI Consulting<br /> and Dev Firm
            </Typography>
        </Stack>
    )
}

export default MorningsideCard;
