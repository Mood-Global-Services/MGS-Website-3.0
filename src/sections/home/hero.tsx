"use client"

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import HeroAnimation from "@/components/home/heroAnimation";

import heroBg from "@/assets/images/heroBG.webp"
import arrow from "@/assets/images/icons/arrow.webp"

import mobileHeroBg from "@/assets/images/mobileHeroBg.webp"

const HeroGridAnimation = dynamic(() => import("@/components/home/heroGridAnimation/heroGridAnimation"), { ssr: false });

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <Stack
            ref={heroRef}
            alignItems="center"
            justifyContent={{xs:"start",lg:"center"}}
            width="100%"
            minHeight={{ xs: "35vh", lg: "calc(100vh - 80px)" }}
            paddingX={4}
            position="relative"
        >
            <Stack width="100%" height="100%" sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: 0.55,
                display: { xs: "block", lg: "none" },
            }}>
                <Image src={mobileHeroBg} alt="mobile hero bg" fill className="mobile-only" priority fetchPriority="high" loading="lazy" style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }} />
            </Stack>
            <Stack height={"120px"} width="100%" sx={{
                background: "linear-gradient(-180deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%)",
                position: "absolute",
                top: 0,
                zIndex: 1,
                display: { xs: "none", lg: "block" }
            }}>
            </Stack>
            <Image
                src={heroBg}
                fill
                alt="mood global services"
                style={{ position: "absolute", inset: 0, zIndex: 1, objectFit: "cover" }}
                priority
                fetchPriority="high"
                className="desktop-only"
            />

            {/* Static grid */}
            <Stack height="100%" width="100%" sx={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                opacity: 0.75,
                display: { xs: "none", lg: "block" }
            }}>
                <HeroGridAnimation />
            </Stack>



            {/* Content */}
            <Stack width="fit-content" height={{ xs: "50%", lg: "70%" }} alignItems="center" sx={{ position: "relative", zIndex: 2 }}>
                <HeroAnimation frameHeight={200} framePadding={0} artScale={1.6} align="left" />
                <Stack alignItems="center" mt={{ xs: 0, lg: -4 }} mb={{ xs: 4, lg: 6 }}>
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

            <Stack height={{ xs: "60px", lg: "100px" }} width="100%" sx={{
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