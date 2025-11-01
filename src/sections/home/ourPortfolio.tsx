"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import NexPortfolioCard from "@/components/home/nexPortfolioCard";
import NapulethPortfolioCard from "@/components/home/napulethPortfolioCard";
import arrow from "@/assets/images/icons/arrow.webp"

import dynamic from "next/dynamic";
const PortfolioSlider = dynamic(() => import("@/components/home/portfolioSlider"), { ssr: false });
const MobilePortfolioSlider = dynamic(() => import("@/components/home/mobile/mobilePortfolioSlider"), { ssr: false });

const OurPortfolio = () => {
    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            overflow={"hidden"}
            paddingX={{ xs: 2, lg: 10 }}
            mt={{ xs: -4, md: -20, lg: -22, xl: -14 }}
            pb={{xs:0, lg:36}}
            gap={{ xs: 4, lg: 36 }}
        >
            <Stack
                width={"100%"}
                height={"100%"}
                direction={{ xs: "column", lg: "row" }}
                alignItems={"center"}
                justifyContent={"start"}
                position={"relative"}
                gap={2}
                zIndex={3}
            >
                <Typography variant="h2" fontWeight={400} fontSize={{ xs: "1.75rem !important", lg: "2.75rem !important" }} className="chno">
                    Our Portfolio
                </Typography>
                <Stack mt={1} display={{ xs: "none", lg: "block" }}>
                    <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                        <div className="flex items-center justify-center gap-1">
                            <Typography component="span" variant="h6" marginRight={1}>
                                All projects
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
            <Stack
                width={"100%"}
                height={{ xs: "fit-content", lg: 200 }}
                alignItems={"center"}
                justifyContent={"center"}
                position={"relative"}
                zIndex={3}
            >
                <Stack display={{ xs: "none", lg: "flex" }} width={"100%"} direction="row" alignItems={"stretch"} justifyContent={"center"} gap={2} paddingX={0.75}>
                    <NexPortfolioCard />
                    <NapulethPortfolioCard />
                </Stack>
                <Stack display={{ xs: "flex", lg: "none" }} width={"100%"} direction={{ xs: "column", lg: "row" }} alignItems={"stretch"} justifyContent={"center"} gap={2} paddingX={0.75}>
                    <NexPortfolioCard />
                </Stack>
                <Stack display={{ xs: "none", lg: "flex" }} width={"100%"} direction={"row"} alignItems={"stretch"} justifyContent={"center"}>
                    <PortfolioSlider />
                </Stack>
                <Stack display={{ xs: "flex", lg: "none" }} width={"100%"} minHeight={240} direction={"row"} alignItems={"stretch"} justifyContent={"center"}>
                    <MobilePortfolioSlider />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default OurPortfolio;
