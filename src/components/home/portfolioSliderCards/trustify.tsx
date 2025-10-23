import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";

import trustifyBG from "@/assets/images/portfolioSlider/trustifyBG.webp"
import trustifyAsset from "@/assets/images/portfolioSlider/trustifyAsset.webp"
import theme from "@/theme/theme";

const TrustifyCard = () => {
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
                    "& .trustify-asset": {
                        scale: 1,
                        transition: "scale 0.3s ease",
                    },
                    "&:hover": {
                        "& .trustify-asset": {
                            scale: 1.05,
                        },
                    },
                }}
            >
                <Image
                    className="trustify-bg"
                    src={trustifyBG}
                    alt="Trustify"
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
                    <Typography variant="h4" color="#C6FF00" fontWeight={600} textTransform="uppercase" >
                        Trustify
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.primary} lineHeight={1.4}>
                        Restores trust in<br /> high-quality food products
                    </Typography>
                </Stack>
                <Image
                    src={trustifyAsset}
                    className="trustify-asset"
                    alt="Trustify"
                    width={450}
                    height={450}
                    style={{
                        position: "absolute",
                        right: "-5%",
                        bottom: "-20%",
                        zIndex: 2,
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Stack>
        </Link>
    )
}

export default TrustifyCard;
