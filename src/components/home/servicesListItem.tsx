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
            sx={{
                position: "relative",
                overflow: "hidden",
                background: "transparent",
                "& svg .hoverGrad": {
                    opacity: 0,
                    transition: "opacity 220ms ease",
                },
                "&:hover svg .hoverGrad": {
                    opacity: 1,
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
                <path d={dShadow} fill="#676767" opacity={shadowOpacity} />
                <path d={dMain} fill={baseFill} />
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
