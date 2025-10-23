"use client";

import { Stack, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import ProductsShape2 from "@/assets/images/productsShape2.webp";
import ProductsIcon2 from "@/assets/images/productsIcon2.webp";
import ProductTagShape from "@/assets/images/ProductsTagShape.webp";
import productAsset2 from "@/assets/images/productsAsset2.webp";

import arrow from "@/assets/images/icons/arrow.webp";
import sol from "@/assets/images/solana-sol-logo.webp"
import eth from "@/assets/images/ethereum-eth-logo.webp";
import btc from "@/assets/images/btc.webp"
import aptos from "@/assets/images/aptos.webp"
import polygon from "@/assets/images/polygon.webp"
import avalanche from "@/assets/images/avalanche.webp"
import arb from "@/assets/images/arbitrum-arb-logo.webp"



export default function ProductsBanner2() {
    const rx = 16; // visually match MUI's borderRadius={2} (~16px)

    return (
        <Stack
            width="70%"
            mx="auto"
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                zIndex: 5,
            }}
        >

            {/* Base panel: dark fill + thin gradient stroke */}
            <Box
                component="svg"
                viewBox="0 0 1096 454"
                preserveAspectRatio="none"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                <defs>
                    <linearGradient
                        id="borderGrad"
                        x1="1014.31"
                        y1="33.8105"
                        x2="554.254"
                        y2="460.739"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#1694FB" />
                        <stop offset="1" stopColor="#0D5895" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <rect x="0.5" y="0.5" width="1095" height="453" rx={rx} fill="#111111" />
                <rect
                    x="0.5"
                    y="0.5"
                    width="1095"
                    height="453"
                    rx={rx}
                    fill="none"
                    stroke="url(#borderGrad)"
                    strokeWidth="1"
                />
            </Box>

            {/* TOP-RIGHT GLOW (your 676×963 SVG), almost full banner height */}
            <Box
                component="svg"
                viewBox="0 0 676 963"
                preserveAspectRatio="xMidYMid meet"
                sx={{
                    position: "absolute",
                    top: "-50%",         // nudge up to let the blur bleed
                    right: "-10%",        // tiny spill over the right edge
                    height: "150%",      // almost as tall as the banner
                    width: "auto",
                    pointerEvents: "none",
                    zIndex: 0,
                    // optional: brighten a bit on light backgrounds
                    // mixBlendMode: "screen",
                }}
            >
                <g filter="url(#filter0_f_147_955)" opacity={0.9}>
                    <rect x="272.93" y="285.353" width="130" height="434" fill="#1694FB" fillOpacity="0.5" />
                    <rect x="272.93" y="285.353" width="130" height="102" fill="#16FBAF" fillOpacity="0.5" />
                    <rect x="242.926" y="258.289" width="14.9661" height="124.717" fill="#1694FB" />
                    <rect width="14.9661" height="124.717" transform="matrix(-1 0 0 1 432.5 258.289)" fill="#1694FB" />
                    <rect x="257.895" y="243.32" width="14.9661" height="154.65" fill="#1694FB" />
                    <rect width="14.9661" height="154.65" transform="matrix(-1 0 0 1 417.531 243.32)" fill="#1694FB" />
                </g>
                <defs>
                    <filter
                        id="filter0_f_147_955"
                        x="0.10524"
                        y="-14.4675"
                        width="675.215"
                        height="976.641"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="121.41" result="effect1_foregroundBlur_147_955" />
                    </filter>
                </defs>
            </Box>

            {/* BOTTOM-LEFT GLOW (your 842×836 SVG), square / circular feel */}
            <Box
                component="svg"
                viewBox="0 0 842 836"
                preserveAspectRatio="xMidYMid meet"
                sx={{
                    position: "absolute",
                    left: "-12%",
                    bottom: "-25%",
                    height: "95%",      // keep it large; it's square so aspect=1
                    width: "auto",
                    pointerEvents: "none",
                    zIndex: 0,
                    // mixBlendMode: "screen",
                }}
            >
                <g filter="url(#filter0_f_147_947)" opacity={0.8}>
                    <rect x="302.996" y="340.268" width="18.6316" height="155.263" fill="#1694FB" fillOpacity="0.38" />
                    <rect width="18.6316" height="155.263" transform="matrix(-1 0 0 1 539 340.268)" fill="#1694FB" fillOpacity="0.38" />
                    <rect x="321.63" y="321.631" width="18.6316" height="192.526" fill="#1694FB" fillOpacity="0.38" />
                    <rect width="18.6316" height="192.526" transform="matrix(-1 0 0 1 520.367 321.631)" fill="#1694FB" fillOpacity="0.38" />
                    <rect x="340.263" y="303" width="161.474" height="229.789" fill="#1694FB" fillOpacity="0.38" />
                </g>
                <defs>
                    <filter
                        id="filter0_f_147_947"
                        x="0.704102"
                        y="0.708008"
                        width="840.588"
                        height="834.374"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="151.146" result="effect1_foregroundBlur_147_947" />
                    </filter>
                </defs>
            </Box>

            {/* Content */}
            <Stack width="100%" height="100%" direction="row" alignItems="stretch" justifyContent="space-between">
                <Stack
                    justifyContent="center"
                    width="45%"
                    sx={{ position: "relative", zIndex: 1, height: "100%", p: 8, gap: 4, }}
                >
                    <Stack gap={2}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Image src={ProductsIcon2} alt="Products Shape 1" width={50} height={60} />
                            <Typography variant="h4" fontWeight={600} textTransform="uppercase">SiteLab: AI-Powered Websites for SMEs</Typography>
                        </Stack>
                        <Typography variant="h6" fontWeight={500}>
                            Launch your business online with SiteLab’s AI
                        </Typography>
                        <Typography variant="body2" color={theme.palette.text.secondary} fontWeight={400} sx={{
                            width: "80%",
                        }}>
                            Generated websites, tailored for SMEs. Enjoy quick setup, cost-effective solutions, and no technical expertise needed to create a professional, modern website.
                        </Typography>
                    </Stack>

                    <Stack width="40%">
                        <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                            <div className="flex items-center justify-center gap-2">
                                <Typography component="span" variant="h6">
                                    Explore
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
                <Stack sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "55%",
                    flexGrow: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}>
                    <Image src={productAsset2} alt="Product Asset 2" width={400} height={400} style={{
                        
                        transform: "translateY(15%)",
                    }} />
                </Stack>
            </Stack>

            <Image src={ProductsShape2} alt="Products Shape 1" width={220} height={220} style={{
                position: "absolute",
                right: "0%",
                bottom: "0%",
                zIndex: 5,
            }} />
        </Stack>
    );
}
