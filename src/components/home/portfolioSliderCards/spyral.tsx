import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import spyralBG from "@/assets/images/portfolioSlider/spyralBG.webp"
import spyralAsset from "@/assets/images/portfolioSlider/spyralAsset.webp"
import theme from "@/theme/theme";

const SpyralCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                padding: 3,
                "& .spyral-bg": {
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                },
                "& .spyral-asset": {
                    scale: 1,
                    transition: "scale 0.3s ease",
                },
                "&:hover": {
                    "& .spyral-bg": {
                        opacity: 1,
                    },
                    "& .spyral-asset": {
                        scale: 1.05,
                    },
                },
            }}
        >
            <Image
                className="spyral-bg"
                src={spyralBG}
                alt="Spyral"
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
            <Stack position="relative" sx={{ zIndex: 2 }}>
                <Typography variant="h4" color="#06D5FF" fontWeight={600} textTransform="uppercase" >
                    Spyral
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.primary} lineHeight={1.4}>
                    Blockchain music<br /> rights & royalties
                </Typography>
            </Stack>
            <Image
                src={spyralAsset}
                className="spyral-asset"
                alt="Spyral"
                width={380}
                height={380}
                style={{
                    position: "absolute",
                    right: "-5%",
                    width: "100%",
                    height: "auto",
                    bottom: "-15%",
                    zIndex: 2,
                }}
            />
        </Stack>
    )
}

export default SpyralCard;
