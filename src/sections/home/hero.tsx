import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import HeroAnimation from "@/components/home/heroAnimation";

import heroBg from "@/assets/images/heroBG.webp"
import arrow from "@/assets/images/icons/arrow.webp"

const Hero = () => {
    return (
        <Stack alignItems="center" justifyContent="center" width="100%" minHeight='calc(100vh - 80px)' paddingX={4} position="relative">
            <Image src={heroBg} fill alt="mood global services" style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0
            }}></Image>
            <Stack width="100%" height="70%" alignItems="center" sx={{
                position: "relative",
                zIndex: 1
            }}>
                <HeroAnimation frameHeight={200} framePadding={0} artScale={1.5} align="left" />
                <Stack alignItems={"center"} marginTop={-4} marginBottom={6}>
                    <Typography variant="h1" component="h1" className="chno" fontWeight={500}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>Build</span> here</Typography>
                    <Typography variant="h1" component="h1" className="chno" fontWeight={500}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>Grow</span> Anywhere</Typography>
                </Stack>
                <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                        <Typography component={"span"} variant="h6">
                            Get in touch
                        </Typography>
                        <span className="arrow-clip">
                            <span className="arrow-slide">
                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                            </span>
                        </span>
                    </Stack>
                </SideTabbedButton>
            </Stack>
        </Stack>
    )
}

export default Hero;