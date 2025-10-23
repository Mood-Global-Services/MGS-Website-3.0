import { Stack, Typography } from "@mui/material";

import trustifyBG from "@/assets/images/portfolioSlider/trustifyBG.webp"
import theme from "@/theme/theme";

const TrustifyCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                backgroundImage: `url(${trustifyBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: 3,
            }}
        >
            <Typography variant="h4" color="#C6FF00" fontWeight={600} textTransform="uppercase" >
                Trustify
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} sx={{width: "60%"}} color={theme.palette.text.primary} lineHeight={1.4}>
                Restores trust in<br /> high-quality food products
            </Typography>
        </Stack>
    )
}

export default TrustifyCard;
