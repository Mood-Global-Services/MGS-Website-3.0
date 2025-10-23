import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import modusBG from "@/assets/images/portfolioSlider/modusBG.webp"
import modusAsset from "@/assets/images/portfolioSlider/modusAsset.webp"
import theme from "@/theme/theme";

const ModusCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                padding: 3,
                "& .modus-bg": {
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                },
                "& .modus-asset": {
                    scale: 1.25,
                    transition: "scale 0.3s ease",
                },
                "&:hover": {
                    "& .modus-bg": {
                        opacity: 1,
                    },
                    "& .modus-asset": {
                        scale: 1.3,
                    },
                },
            }}
        >
            <Image
                className="modus-bg"
                src={modusBG}
                alt="Modus"
                fill
                style={{
                    position: "absolute",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0
                }}
            />
            <Stack position="relative" zIndex={1}>
                <Typography variant="h4" fontWeight={600} textTransform="uppercase" >
                    Modus
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.primary} lineHeight={1.4}>
                    RWA Platform
                </Typography>
            </Stack>
            <Image
                src={modusAsset}
                className="modus-asset"
                alt="Modus"
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    right: 0,
                    left: 0,
                    bottom: 10,
                    width: "200%",
                    height: "auto",
                    zIndex: 2,
                }}
            />
        </Stack>
    )
}

export default ModusCard;
