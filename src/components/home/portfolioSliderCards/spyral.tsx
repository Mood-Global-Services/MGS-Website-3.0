import { Stack, Typography } from "@mui/material";

import spyralBG from "@/assets/images/portfolioSlider/spyralBG.webp"
import theme from "@/theme/theme";

const SpyralCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${spyralBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" color="#06D5FF" fontWeight={600} textTransform="uppercase" >
                Trustify
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.primary} lineHeight={1.4}>
                Blockchain music<br /> rights & royalties
            </Typography>
        </Stack>
    )
}

export default SpyralCard;
