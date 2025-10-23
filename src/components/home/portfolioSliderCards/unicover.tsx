import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";

import unicoverBG from "@/assets/images/portfolioSlider/unicoverBG.webp"
import unicoverAsset1 from "@/assets/images/portfolioSlider/unicoverAsset1.webp"
import unicoverAsset2 from "@/assets/images/portfolioSlider/unicoverAsset2.webp"

import theme from "@/theme/theme";

const UnicoverCard = () => {
    return (
        <Link href="/" target="_blank" underline="none">
        <Stack
            sx={{
                height: { xs: 180, sm: 220, md: 250, lg: 250 },
                borderRadius: { xs: 3, md: 4 },
                position: "relative",
                overflow: "hidden",
                padding: 3,
                "& .unicover-asset1": {
                    filter: "drop-shadow(0px 4px 31.6px rgba(255, 255, 255, 0.25))",
                    boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0.5)",
                    transition: "box-shadow 0.3s ease",
                },
                "& .unicover-asset2": {
                    scale: 1.85,
                    bottom: "-15%",
                    transition: "scale 0.3s ease, bottom 0.3s ease",
                },
                "&:hover": {
                    "& .unicover-asset1": {
                        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
                    },
                    "& .unicover-asset2": {
                        scale: 1.95,
                        bottom: "-10%",
                    },

                },
            }}
        >
            <Image
                className="unicover-bg"
                src={unicoverBG}
                alt="Unicover"
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
                <Typography variant="h4" fontWeight={600} textTransform="uppercase" >
                    Unicover
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.primary} lineHeight={1.4}>
                    Insurance brokerage and<br /> risk management services
                </Typography>
            </Stack>
            <Image
                src={unicoverAsset1}
                className="unicover-asset1"
                alt="Unicover"
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    left: "7.5%",
                    bottom: 0,
                    zIndex: 2,
                }}
            />
            <Image
                src={unicoverAsset2}
                className="unicover-asset2"
                alt="Unicover"
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    right: "-3%",
                    zIndex: 2,
                }}
            />


        </Stack>
        </Link>
    )
}

export default UnicoverCard;
