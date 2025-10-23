import { Stack, Typography, Link } from "@mui/material";
import Image from "next/image";
import morningsideBG from "@/assets/images/portfolioSlider/morningsideBG.webp"
import morningsideAsset from "@/assets/images/portfolioSlider/morningsideAsset.webp"
import theme from "@/theme/theme";

const MorningsideCard = () => {
    return (
        <Link href="https://www.morningside.ai" target="_blank" underline="none">
            <Stack
                sx={{
                    height: { xs: 180, sm: 220, md: 250, lg: 250 },
                    borderRadius: { xs: 2, md: 2 },
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    padding: 3,
                    "& .morningside-bg": {
                        opacity: 0.7,
                        transition: "opacity 0.3s ease",
                    },
                    "& .morningside-asset": {
                        scale: 1,
                        transition: "scale 0.3s ease",
                    },
                    "&:hover": {
                        "& .morningside-bg": {
                            opacity: 1,
                        },
                        "& .morningside-asset": {
                            scale: 1.05,
                        },
                    },
                }}
            >
                <Image
                    className="morningside-bg"
                    src={morningsideBG}
                    alt="Morningside"
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
                    <Typography variant="h4" color="#31D484" fontWeight={600} textTransform="uppercase" >
                        Morningside
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ width: "60%" }} color={theme.palette.text.primary} lineHeight={1.4}>
                        AI Consulting<br /> and Dev Firm
                    </Typography>
                </Stack>
                <Image
                    src={morningsideAsset}
                    className="morningside-asset"
                    alt="Morningside"
                    width={200}
                    height={200}
                    style={{
                        position: "absolute",
                        right: 0,
                        left: 0,
                        bottom: "-60%",
                        width: "100%",
                        height: "auto",
                        zIndex: 2,
                    }}
                />
            </Stack>
        </Link>
    )
}

export default MorningsideCard;
