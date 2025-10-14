// src/components/ServicesLayer2Banner.tsx
"use client";

import { Stack, Box, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import arrow from "@/assets/images/icons/arrow.webp"

import opt from "@/assets/images/optimism.webp"
import eth from "@/assets/images/ethereum-eth-logo.webp"
import chainlink from "@/assets/images/chainlink-link-logo.webp"
import BS from "@/assets/images/BS.webp"
import grafana from "@/assets/images/grafana.webp"

export default function ServicesLayer2Banner() {
    return (
        <Stack
            width="70%"
            height={260}
            mx="auto"
            sx={{
                position: "relative",
                border: "1px solid rgba(103,103,103,0.26)",
                borderRadius: 2,
                overflow: "hidden",            // clip the SVG to rounded corners
                backgroundColor: "#000",       // optional: base behind the SVG
            }}
        >
            <Box
                component="svg"
                viewBox="0 0 1343 572"
                preserveAspectRatio="xMidYMid slice" // fill while keeping vibe
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    pointerEvents: "none",
                }}
            >
                <g opacity="0.15" filter="url(#filter0_d_135_399)">
                    <rect
                        x="0.627083"
                        y="0.627083"
                        width="526.746"
                        height="280.746"
                        rx="74.6229"
                        stroke="black"
                        strokeOpacity="0.6"
                        strokeWidth="1.25417"
                        shapeRendering="crispEdges"
                    />
                    <g filter="url(#filter1_f_135_399)">
                        <path
                            d="M484.589 308.434C-10.628 82.7057 -143.477 -270.915 -270.451 -467.818L-326.731 178.351L-256.268 924.467L486.821 1001.23L1088.42 924.335C1298.37 1018.25 979.806 534.162 484.589 308.434Z"
                            fill="#00E1FF"
                        />
                    </g>
                    <g filter="url(#filter2_f_135_399)">
                        <path
                            d="M913.806 836.85C330.391 401.489 107.129 -4.9904 -218.82 -543.503L-609.219 -14.3234L913.806 836.85Z"
                            fill="url(#paint0_linear_135_399)"
                        />
                    </g>
                    <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.4" filter="url(#filter3_f_135_399)">
                        <path
                            d="M913.805 836.85C330.391 401.489 107.128 -4.99064 -218.821 -543.503L-609.22 -14.3236L913.805 836.85Z"
                            fill="url(#paint1_linear_135_399)"
                        />
                    </g>
                    <g filter="url(#filter4_f_135_399)">
                        <path
                            d="M-474.685 -13.3554L421.406 873.606L802.017 290.414C449.427 491.373 138.801 356.799 -474.685 -13.3554Z"
                            fill="url(#paint2_linear_135_399)"
                        />
                    </g>
                    <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.4" filter="url(#filter5_f_135_399)">
                        <path
                            d="M-474.685 -13.3554L421.406 873.606L802.017 290.414C449.427 491.373 138.801 356.799 -474.685 -13.3554Z"
                            fill="url(#paint3_linear_135_399)"
                        />
                    </g>
                    <g filter="url(#filter6_f_135_399)">
                        <path
                            d="M471.846 668.897C53.9949 505.248 -268.397 173.163 -341.918 -417.515L-827.486 204.295L471.846 668.897Z"
                            fill="url(#paint4_linear_135_399)"
                        />
                    </g>
                    <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.4" filter="url(#filter7_f_135_399)">
                        <path
                            d="M471.846 668.897C53.9949 505.248 -268.397 173.163 -341.918 -417.515L-827.486 204.295L471.846 668.897Z"
                            fill="url(#paint5_linear_135_399)"
                        />
                    </g>
                </g>

                <defs>
                    <filter id="filter0_d_135_399" x="-845.045" y="-543.503" width="2016.65" height="1582.36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="7.525" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_399" />
                        <feOffset dy="20.0667" />
                        <feGaussianBlur stdDeviation="12.5417" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_399" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_399" result="shape" />
                    </filter>

                    <filter id="filter1_f_135_399" x="-514.856" y="-655.943" width="1857.02" height="1845.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="94.0625" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter2_f_135_399" x="-752.921" y="-687.204" width="1810.43" height="1667.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter3_f_135_399" x="-752.921" y="-687.204" width="1810.43" height="1667.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter4_f_135_399" x="-618.387" y="-157.057" width="1564.1" height="1174.36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter5_f_135_399" x="-618.387" y="-157.057" width="1564.1" height="1174.36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter6_f_135_399" x="-971.188" y="-561.216" width="1586.73" height="1373.81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <filter id="filter7_f_135_399" x="-971.188" y="-561.216" width="1586.73" height="1373.81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="71.8506" result="effect1_foregroundBlur_135_399" />
                    </filter>

                    <linearGradient id="paint0_linear_135_399" x1="513.212" y1="507.274" x2="719.869" y2="-155.743" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2543F2" />
                        <stop offset="1" stopColor="#2543F2" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_135_399" x1="513.212" y1="507.273" x2="719.868" y2="-155.743" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2543F2" />
                        <stop offset="1" stopColor="#2543F2" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_135_399" x1="-179.147" y1="195.267" x2="-203.076" y2="900.114" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4494FC" />
                        <stop offset="1" stopColor="#4494FC" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_135_399" x1="-179.147" y1="195.267" x2="-203.076" y2="900.114" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4494FC" />
                        <stop offset="1" stopColor="#4494FC" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_135_399" x1="-47.6357" y1="440.245" x2="0.482047" y2="-356.835" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4494FC" />
                        <stop offset="1" stopColor="#4494FC" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_135_399" x1="-47.6357" y1="440.245" x2="0.482047" y2="-356.835" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4494FC" />
                        <stop offset="1" stopColor="#4494FC" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </Box>
            <Stack
                justifyContent="center"
                width={"60%"}
                sx={{ position: "relative", zIndex: 1, height: "100%", px: 3, gap: 4 }}
            >
                <Stack gap={0.5}>
                    <Typography variant="body1" color={theme.palette.text.secondary} fontWeight={400}>Discover the trending  service of last quarter</Typography>
                    <Typography variant="h3" fontWeight={600}>Layer 2 Network Development</Typography>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Typography variant="body1" color={theme.palette.text.primary} fontWeight={300}>We use the Op Stack </Typography>
                        <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                            <Image src={opt} alt="eth" width={18} height={18} style={{
                                filter: "brightness(0.5) invert(0.4)"
                            }}></Image>
                            <Image src={chainlink} alt="eth" width={18} height={18} style={{
                                filter: "brightness(0.5) invert(0.4)"
                            }}></Image>
                            <Image src={eth} alt="eth" width={18} height={18} style={{
                                filter: "brightness(0.5) invert(0.4)"
                            }}></Image>
                            <Image src={BS} alt="eth" width={18} height={18} style={{
                                filter: "brightness(0.5) invert(0.4)"
                            }}></Image>
                            <Image src={grafana} alt="eth" width={18} height={18} style={{
                                filter: "brightness(0.5) invert(0.4)"
                            }}></Image>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width={"40%"}>
                    <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                        <div className="flex items-center justify-center gap-1">
                            <Typography component="span" variant="h6">
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
        </Stack>
    );
}
