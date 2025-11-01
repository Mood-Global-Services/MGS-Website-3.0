import { Stack, Typography, Link } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import colichainBG from "@/assets/images/portfolioSlider/colichainBG.webp"
import colichainAsset from "@/assets/images/portfolioSlider/colichainAsset.webp"

const ColichainCard = () => {
    return (
        <Link href="/" target="_blank" underline="none" sx={{
            width: "100%",
            height: "100%",
        }}>
            <Stack
                sx={{
                    height: { xs: 240, sm: 240, md: 250, lg: 250 },
                    borderRadius: { xs: 2, md: 2 },
                    padding: 3,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "& .colichain-bg": {
                        opacity: 0.95,
                        transition: "opacity 0.3s ease",
                    },
                    "& .colichain-asset": {
                        bottom: "-22%",
                        transition: "bottom 0.3s ease",
                    },
                    "&:hover": {
                        "& .colichain-bg": {
                            opacity: 1,
                        },
                        "& .colichain-asset": {
                            bottom: "-18%",
                        },
                    },
                }}
            >
                <Image
                    className="colichain-bg"
                    src={colichainBG}
                    alt="Colichain"
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
                    <Typography variant="h4" fontWeight={600} textTransform="uppercase" sx={{
                        background: "linear-gradient(90deg, #FF560A 0%, #FF850A 47.44%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        Colichain
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.secondary} lineHeight={1.4}>
                        L2 Infrastructure for the Real-World Token Economy
                    </Typography>
                </Stack>
                <Image
                    src={colichainAsset}
                    className="colichain-asset"
                    alt="Colichain"
                    width={450}
                    height={450}
                    style={{
                        position: "absolute",
                        right: 0,
                        left: 0,
                        zIndex: 2,
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Stack>
        </Link>
    )
}

export default ColichainCard;
