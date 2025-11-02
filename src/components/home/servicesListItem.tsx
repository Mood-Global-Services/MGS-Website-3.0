"use client";

import * as React from "react";
import { Stack, Box } from "@mui/material";

type ServicesListItemProps = {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
    shadowOpacity?: number;
    baseFill?: string;
    strokeColor?: string;
    strokeWidth?: number;
    action?: () => void;
};

const dShadow =
    "M1053 5V27H1075V49H1097V109H1075V131H1053V153H44V131H22V109H0V49H22V27H44V5H1053Z";

const dMain =
    "M1052.5 0.5V22.5H1074.5V44.5H1096.5V103.5H1074.5V125.5H1052.5V147.5H44.5V125.5H22.5V103.5H0.5V44.5H22.5V22.5H44.5V0.5H1052.5Z";

const maskMainDataUri =
    `url('data:image/svg+xml;utf8,` +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097 153" preserveAspectRatio="none">` +
    `<path fill="%23fff" d="${dMain}"/>` +
    `</svg>')`;

export default function ServicesListItem({
    action,
    leftChildren,
    rightChildren,
    shadowOpacity = 1,
    baseFill = "#0B0B0B",
    strokeColor = "#676767",
    strokeWidth = 1,
}: ServicesListItemProps) {
    return (
        <Stack
            width="100%"
            minHeight={140}
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            component={"div"}
            onClick={action}
            sx={{
                position: "relative",
                overflow: "hidden",
                background: "transparent",
                cursor: "pointer",
                transition: "transform 220ms ease",
                "&:hover": {
                    transform: "translateY(5px)",
                },
                "& .main-path": {
                    transition: "transform 220ms ease",
                    transformBox: "fill-box",
                    transformOrigin: "center bottom",
                },
                "& .shadow-path": {
                    transition: "opacity 220ms ease",
                    transformBox: "fill-box",
                    transformOrigin: "center bottom",
                },

                "& svg .hoverGrad": {
                    opacity: 0,
                    transition: "opacity 220ms ease",
                },

                "&:hover svg .hoverGrad": {
                    opacity: 1,
                },

                "&:hover svg .shadow-path": {
                    opacity: 0.55, // tweak to taste
                },
                "& .arrow-clip": {
                    width: 30,
                    height: 30,
                    overflow: "hidden",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                "& .arrow-slide": {
                    willChange: "transform, opacity, filter",
                },
                "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
                    animation: "mgsArrowGhost 950ms ease-out infinite",
                    filter: "brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(2000%) hue-rotate(205deg) contrast(95%)",
                },

                "@keyframes mgsArrowGhost": {
                    "0%": { transform: "translateX(-130%)", opacity: 0 },
                    "15%": { transform: "translateX(-75%)", opacity: 1 },
                    "70%": { transform: "translateX(0%)", opacity: 1 },
                    "100%": { transform: "translateX(130%)", opacity: 0 },
                },

                "@media (prefers-reduced-motion: reduce)": {
                    "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
                        animation: "none",
                        opacity: 1,
                        transform: "translateX(0%)",
                    },
                },
            }}

        >
            <Box
                component="svg"
                viewBox="0 0 1097 153"
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
                    <clipPath id="clipMain" clipPathUnits="userSpaceOnUse">
                        <path d={dMain} />
                    </clipPath>
                    <linearGradient id="blueOverlay" x1="0" y1="153" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#1F37E1" stopOpacity="0.15" />
                        <stop offset="1" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <g className="shadow-path">
                    <path d={dShadow} fill="#676767" opacity={shadowOpacity} />
                </g>
                <path d={dMain} fill={baseFill} className="main-path" />
                <g className="hoverGrad" clipPath="url(#clipMain)">
                    <rect x="0" y="0" width="1097" height="153" fill="url(#blueOverlay)" />
                </g>
                <path
                    d={dMain}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    vectorEffect="non-scaling-stroke"
                />
            </Box>
            <Stack
                width="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                px={8}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    WebkitMaskImage: maskMainDataUri,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "100% 100%",
                    maskImage: maskMainDataUri,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "100% 100%",
                }}
            >
                <Stack width="50%" direction="row" justifyContent="flex-start" alignItems="center">
                    {leftChildren}
                </Stack>
                <Stack width="50%" direction="row" justifyContent="space-between" alignItems="center">
                    {rightChildren}
                </Stack>
            </Stack>
        </Stack>
    );
}
