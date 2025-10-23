import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import fractionnaireBG from "@/assets/images/portfolioSlider/farctionnaireBG.webp"
import fractionnaireAsset from "@/assets/images/portfolioSlider/fractionnaireAsset1.webp"

const FractionnaireCard = () => {
    return (
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                padding: 3,
                position: "relative",
                overflow: "hidden",
                "& .fractionnaire-bg": {
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                },
                "& .fractionnaire-asset": {
                    scale: 1,
                    transition: "scale 0.3s ease",
                },
                "&:hover": {
                    "& .fractionnaire-bg": {
                        opacity: 1,
                    },
                    "& .fractionnaire-asset": {
                        scale: 1.05,
                    },
                },
            }}
        >
            <Image
                className="fractionnaire-bg"
                src={fractionnaireBG}
                alt="Fractionnaire"
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
            <Stack sx={{
                position: "relative",
                zIndex: 1,
            }}>
                <Typography variant="h4" color="#C6FF00" fontWeight={600} textTransform="uppercase">
                    Fractionnaire
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                    Real Estate RWA Platform
                </Typography>
            </Stack>
            <Image
                src={fractionnaireAsset}
                className="fractionnaire-asset"
                alt="Fractionnaire"
                width={380}
                height={380}
                style={{
                    position: "absolute",
                    right: 20,
                    bottom: "-20%",
                    zIndex: 2,
                }}
            />
        </Stack>
    )
}

export default FractionnaireCard;
