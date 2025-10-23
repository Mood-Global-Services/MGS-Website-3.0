import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";

import coliseumBG from "@/assets/images/portfolioSlider/coliseumBG.webp"
import coliseumAsset from "@/assets/images/portfolioSlider/coliseumAsset.webp"

const ColiseumCard = () => {
    return (
        <Link href="/" target="_blank" underline="none">
            <Stack
                sx={{
                    height: { xs: 180, sm: 220, md: 250, lg: 250 },
                    borderRadius: { xs: 2, md: 2 },
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    padding: 3,
                    "& .coliseum-asset": {
                        bottom: "-30%",
                        transition: "bottom 0.3s ease",
                    },
                    "&:hover": {
                        "& .coliseum-asset": {
                            bottom: "-23%",
                        },
                    },
                }}
            >
                <Image
                    className="coliseum-bg"
                    src={coliseumBG}
                    alt="Coliseum"
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
                    <Typography variant="h4" fontWeight={600} textTransform="uppercase" sx={{
                        background: "linear-gradient(90deg, #396ADD 0%, #6B9CFF 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        Coliseum DEX
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={"#4994EC"} lineHeight={1.4}>
                        Seamless Cross-Chain Swaps
                    </Typography>
                </Stack>
                <Image
                    src={coliseumAsset}
                    className="coliseum-asset"
                    alt="Coliseum"
                    width={200}
                    height={200}
                    style={{
                        position: "absolute",
                        right: 0,
                        left: 0,
                        width: "100%",
                        height: "auto",
                        zIndex: 2,
                    }}
                />
            </Stack>
        </Link>
    )
}

export default ColiseumCard;
