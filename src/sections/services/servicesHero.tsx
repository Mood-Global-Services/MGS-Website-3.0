import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import servicesHeroAsset from "@/assets/images/servicesPage/servicesHeroAsset.svg?url";

const ServicesHero = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            minHeight="45vh"
            paddingX={4}
            position="relative"
            overflow="hidden"
        >
            <Image src={servicesHeroAsset} alt="services hero asset" width={350} height={350} style={{
                position: "absolute",
                top: "-20%",
                right: "0%",
                zIndex: 0,
                opacity: 0.78,
            }} />
            <Stack width="50%" alignItems="center" justifyContent="center" gap={4} marginX="auto">
                <Typography variant="h1" component="h1" fontSize="3.75rem !important" className="chno" fontWeight={500} textAlign="center" textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main}>
                    Services we offer
                </Typography>
                <Typography
                    variant="h6"
                    component="h6"
                    fontWeight={300}
                    textAlign="center"
                    color={theme.palette.text.secondary}
                >
                    Our services cover the full spectrum of modern tech: blockchain infrastructure, advanced AI systems, product development, and market-ready GTM strategies with solid legal support.
                </Typography>
            </Stack>
            <Image src={servicesHeroAsset} alt="services hero asset" width={350} height={350} style={{
                position: "absolute",
                top: "-20%",
                left: "0%",
                transform: "scaleX(-1)",
                opacity: 0.78,
                zIndex: 0,
            }} />
        </Stack>
    );
};

export default ServicesHero;