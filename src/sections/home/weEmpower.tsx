"use client"

import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import weEmpowerBg from "@/assets/images/weEmpowerBG.svg?url";
import weEmpowerIcon1 from "@/assets/images/icons/weEmpowerIcon1.webp";
import weEmpowerIcon2 from "@/assets/images/icons/weEmpowerIcon2.webp";
import weEmpowerArrows from "@/assets/images/empowerArrows.webp";
import weEmpowerMobileArrows from "@/assets/images/weEmpowerMobileArrows.webp";
import arrow from "@/assets/images/icons/arrow.webp"

const WeEmpower = () => {
    return (
        <Stack width="100%" height="100%" position="relative" paddingY={{ xs: 2, lg: 8 }} paddingX={{ xs: 2, lg: 16 }} gap={4} sx={{
            zIndex: 5,
        }}>
            <Stack width="100%" alignItems={{ xs: "center", lg: "flex-start" }}>
                <Typography variant="h2" fontWeight={400} className="chno" sx={{
                    color: { xs: theme.palette.brand.mgsBlue1.main, lg: theme.palette.text.primary },
                    fontSize: { xs: "2.2rem !important", lg: "2.5rem !important" },
                    textAlign: { xs: "center", lg: "left" },
                    position: "relative",
                    zIndex: 2,
                    textTransform: {xs: "uppercase", lg: "unset"},
                    width: {xs: "80%", lg: "auto"},
                    lineHeight: {xs: "2", lg: "1.5"},
                }}>
                    Not just for institutions and SMEs
                </Typography>
            </Stack>
            <Stack width="100%" direction={{ xs: "column", lg: "row" }} alignItems={{ xs: "center", lg: "stretch" }} justifyContent={{ xs: "center", lg: "center" }} sx={{
                "& .empowerArrows": {
                    transform: { xs: "translateY(25%) translateX(-20%) scale(1.5)", lg: "translateY(-15%) translateX(-5%) scaleX(1)" },
                    transformOrigin: "left center",
                    transition: "transform .3s ease",
                },
                "&:hover .empowerArrows": {
                    transform: { xs: "translateY(25%) translateX(-25%) scale(1.6)", lg: "translateY(-15%) translateX(0%) scaleX(1.1)" },
                },
                backgroundColor: {xs: "rgba(0, 0, 0, 0.25)", lg: "transparent"},
                backdropFilter: {xs: "blur(80.05px)", lg: "unset"},
                border: {xs: `solid 1px ${theme.palette.brand.border1.main}`, lg: "unset"},
                paddingX:{ xs: 1, lg: 8 }, 
                paddingTop:{ xs: 12, lg: 10 },
                paddingBottom:{ xs: 4, lg: 10 },
                borderRadius: 2,
                position: "relative",
                marginTop: {xs: -14, lg: 0},
            }}>
                <Stack position={"absolute"} width="100%" height="100%" sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    borderRadius: 2,
                    display: { xs: "none", lg: "block" },
                }}>
                    <Image src={weEmpowerBg} alt="weEmpowerBg" width={100} height={100} style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }} />
                </Stack>
                <Stack gap={4} width={{ xs: "100%", lg: "70%" }} position={"relative"} sx={{
                    zIndex: 2,
                }}>
                    <Typography variant="h3" fontWeight={400} textTransform="uppercase" sx={{
                        color: { xs: theme.palette.text.primary, lg: theme.palette.brand.mgsBlue1.main },
                        textAlign: { xs: "center", lg: "left" },
                        fontSize: { xs: "1.1rem !important", lg: "1.75rem !important" },
                    }} >
                        We Empower Early-Stage Startups
                    </Typography>
                    <Stack gap={2} width={{ xs: "100%", lg: "75%" }}>
                        <Stack width={{ xs: "100%", lg: "auto" }} direction="row" alignItems="center" gap={1}>
                            <Image src={weEmpowerIcon1} alt="weEmpowerIcon1" width={80} height={80} />
                            <Typography variant="h6" fontWeight={300} color={theme.palette.text.secondary} marginBottom={1} sx={{
                                fontSize: { xs: "0.85rem !important", lg: "1rem !important" },
                            }} >
                                From idea to market — we incubate, accelerate, and equip you with everything you need to grow.
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
                            <Image src={weEmpowerIcon2} alt="weEmpowerIcon2" width={80} height={80} />
                            <Typography variant="h6" fontWeight={300} color={theme.palette.text.secondary} marginBottom={1} sx={{
                                fontSize: { xs: "0.85rem !important", lg: "1rem !important" },
                            }} >
                                Our ecosystem covers tech, legal, AI, blockchain, and go-
                                to-market support, so you can focus on building the future.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack alignItems="center" justifyContent="end" gap={4} width={{ xs: "100%", lg: "30%" }} flexGrow={1} position={"relative"} sx={{
                    zIndex: 2,
                    transform: "translateY(-5%)",
                }}>
                    <Image src={weEmpowerArrows} alt="weEmpowerArrows" width={230} height={230} className="empowerArrows desktop-only" />
                    <Image src={weEmpowerMobileArrows} alt="weEmpowerMobileArrows" width={230} height={230} className="empowerArrows mobile-only" />
                    <Stack width="100%" alignItems="center" justifyContent="center" sx={{
                        display: {xs: "none", lg: "flex"},
                    }}>
                        <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1} action={() => {
                            window.location.href = "/contact";
                        }}>
                            <div className="flex items-center justify-center gap-1">
                                <Typography component="span" variant="h6" marginRight={2}>
                                    Contact us
                                </Typography>
                                <span className="arrow-clip">
                                    <span className="arrow-slide">
                                        <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                    </span>
                                </span>
                            </div>
                        </SideTabbedButton>
                    </Stack>
                    <Stack width="100%" alignItems="center" justifyContent="center" sx={{
                        display: {xs: "flex", lg: "none"},
                        marginTop: 8,
                        paddingX: 2,
                    }}>
                        <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                            <div className="flex items-center justify-center gap-1">
                                <Typography component="span" variant="h6" marginRight={2}>
                                    Contact us
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
        </Stack>
    );
};

export default WeEmpower;