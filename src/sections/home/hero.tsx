"use client"

import { useRef } from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import HeroAnimation from "@/components/home/heroAnimation";
import GridOverlay from "@/components/home/GridOverlay";

import heroBg from "@/assets/images/heroBG.webp"
import arrow from "@/assets/images/icons/arrow.webp"

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <Stack
            ref={heroRef}
            alignItems="center"
            justifyContent="center"
            width="100%"
            minHeight="calc(100vh - 80px)"
            paddingX={4}
            position="relative"
        >
            <Stack height={"120px"} width="100%" sx={{
                background: "linear-gradient(-180deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)",
                position: "absolute",
                top: 0,
                zIndex: 1
            }}>
            </Stack>
            <Image
                src={heroBg}
                fill
                alt="mood global services"
                style={{ position: "absolute", inset: 0, zIndex: 0, objectFit: "cover" }}
                priority
                fetchPriority="high"
            />

            {/* Static grid */}
            <GridOverlay cell={40} majorEvery={1} />

            

            {/* Content */}
            <Stack width="100%" height="70%" alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
                <HeroAnimation frameHeight={200} framePadding={0} artScale={1.12} align="left" />
                <Stack alignItems="center" mt={-4} mb={6}>
                    <Typography variant="h1" component="h1" className="chno" fontWeight={500}>
                        <span style={{ color: theme.palette.brand.mgsBlue1.main }}>Build</span> here
                    </Typography>
                    <Typography variant="h1" component="h1" className="chno" fontWeight={500}>
                        <span style={{ color: theme.palette.brand.mgsBlue1.main }}>Grow</span> Anywhere
                    </Typography>
                </Stack>

                <Stack width="100%" direction="row" alignItems="center" justifyContent="center" position="relative" sx={{
                    zIndex: 2
                }}>
                <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                    <div className="flex items-center justify-center gap-1">
                        <Typography component="span" variant="h6" marginRight={1}>
                            Get in touch
                        </Typography>
                        <span className="arrow-clip">
                            <span className="arrow-slide">
                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                            </span>
                        </span>
                    </div>
                </SideTabbedButton>
                </Stack>
            </Stack>

            <Stack height={"100px"} width="100%" sx={{
                background: "linear-gradient(-180deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
                position: "absolute",
                bottom: 0,
                zIndex: 1
            }}>
            </Stack>
        </Stack>
    );
};

export default Hero;