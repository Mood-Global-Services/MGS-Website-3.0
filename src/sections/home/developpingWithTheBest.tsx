"use client";
import { useState } from "react";
import { Stack, Typography, Grid, InputBase } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import weDevelopIcon1 from "@/assets/images/icons/weDevelopIcon1.webp";
import weDevelopIcon2 from "@/assets/images/icons/weDevelopIcon2.webp";
import weDevelopIcon3 from "@/assets/images/icons/weDevelopIcon3.webp";
import weDevelopIcon4 from "@/assets/images/icons/weDevelopIcon4.webp";
import weDevelopIcon5 from "@/assets/images/icons/weDevelopIcon5.webp";
import weDevelopIcon6 from "@/assets/images/icons/weDevelopIcon6.webp";
import weDevelopIcon7 from "@/assets/images/icons/weDevelopIcon7.webp";
import weDevelopIcon8 from "@/assets/images/icons/weDevelopIcon8.webp";
import weDevelopIconArrow from "@/assets/images/icons/weDevelopIconArrow.svg?url";
import arrow from "@/assets/images/icons/arrow.webp"
import subscribeInputBg from "@/assets/images/subscribeInputBg.webp";

import { useSubscribe } from "@/hooks/useSubscribe";

const DevelopingWithTheBest = () => {
    const [email, setEmail] = useState("");
    const { subscribe, status, error, reset } = useSubscribe({
        onSuccess: () => setEmail(""),
    });

    const loading = status === "loading";

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (status !== "idle") reset();
        setEmail(event.target.value);
    };

    const handleSubscribe = () => {
        void subscribe(email);
    };
    return (
        <Stack width="100%" height="100%" position="relative" paddingY={{ xs: 4, lg: 8 }} paddingX={{ xs: 2, lg: 10 }} gap={4}>
            <Stack direction={{ xs: "column", lg: "row" }} alignItems="stretch" justifyContent="space-between" gap={4}>
                <Stack width={{ xs: "100%", lg: "50%" }} flexGrow={1} position="relative" gap={4}>
                    <Typography variant="h3" fontSize={"2.25rem !important"} fontWeight={400} className="chno desktop-only" color={theme.palette.brand.mgsBlue1.main} sx={{}}>
                        Developing With The Best
                    </Typography>
                    <Typography variant="h3" fontSize={"2.5rem !important"} fontWeight={400} textAlign="center" className="chno mobile-only">
                        <span>Developing</span>
                        <br />
                        <span style={{ color: theme.palette.brand.mgsBlue1.main }}>With The Best</span>
                    </Typography>
                    <Grid container spacing={2} width="100%" sx={{
                        "& .weDevelopIcon": {
                            transition: "filter 0.4s ease-in-out, opacity 0.4s ease-in-out",
                            filter: "grayscale(100%)",
                            opacity: 0.5,
                            "&:hover": {
                                filter: "grayscale(0%)",
                                opacity: 1,
                            },
                        },
                    }}>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon1} alt="weDevelopIcon1" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon2} alt="weDevelopIcon2" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon3} alt="weDevelopIcon3" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon4} alt="weDevelopIcon4" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon5} alt="weDevelopIcon5" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon6} alt="weDevelopIcon6" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon7} alt="weDevelopIcon7" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                        <Grid size={3} sx={{
                            position: "relative",
                            "& .weDevelopIconArrow": {
                                transition: "opacity 0.5s ease-in-out",
                                opacity: 0,
                            },
                            "&:hover .weDevelopIconArrow": {
                                opacity: 1,
                            },
                        }}>
                            <Image src={weDevelopIconArrow} alt="weDevelopIconArrow" width={35} height={35} className="weDevelopIconArrow" style={{
                                position: "absolute",
                                top: 3,
                                right: 3,
                                objectFit: "contain",
                            }} />
                            <Image src={weDevelopIcon8} alt="weDevelopIcon8" width={180} height={180} className="weDevelopIcon" />
                        </Grid>
                    </Grid>
                </Stack>
                <Stack sx={{
                    flexGrow: 1,
                    width: { xs: "100%", lg: "2%" },
                    alignItems: "center",
                    background: "linear-gradient(180deg, rgba(0, 19, 153, 0) 0%, #0020FF 100%)",
                }}>

                </Stack>
                <Stack width={{ xs: "100%", lg: "48%" }} flexGrow={1} justifyContent="space-between" position="relative" gap={3}>
                    <Typography variant="h3" fontSize={"2.25rem !important"} fontWeight={400} className="chno desktop-only" color={theme.palette.brand.mgsBlue1.main}>
                        Subscribe<br />to our newsletter
                    </Typography>
                    <Typography variant="h3" fontSize={"2.5rem !important"} fontWeight={400} textAlign="center" className="chno mobile-only" color={theme.palette.brand.mgsBlue1.main}>
                        Subscribe to<br />our newsletter
                    </Typography>
                    <Stack width="100%" gap={{ xs: 3, lg: 6 }} marginTop={{ xs: 2, lg: 0 }} sx={{
                        alignItems: { xs: "center", lg: "flex-start" },
                        backgroundColor: { xs: "#101010", lg: "transparent" },
                        borderRadius: { xs: 2, lg: 0 },
                        border: { xs: "1px solid #2F2F2F", lg: "none" },
                        paddingX: { xs: 2, lg: 0 },
                        paddingY: { xs: 3, lg: 0 },
                    }}>
                        <Stack gap={{ xs: 3, lg: 2 }}>
                            <Typography variant="h5" fontWeight={400} textAlign={{ xs: "center", lg: "left" }} sx={{
                                fontSize: { xs: "1.2rem !important", lg: "1.5rem !important" },
                            }}>
                                Join our community of innovators.
                            </Typography>
                            <Typography variant="body1" color={theme.palette.text.secondary} fontWeight={400} textAlign={{ xs: "center", lg: "left" }} sx={{
                                width: { xs: "100%", lg: "80%" },
                                fontSize: { xs: "1.1rem !important", lg: "1rem !important" },
                            }}>
                                Get the latest updates on AI, blockchain, and product launches — plus expert tips to help your business grow.
                            </Typography>
                        </Stack>
                        <Stack width={{ xs: "100%", lg: "80%" }} direction={{ xs: "column", lg: "row" }} alignItems="center" justifyContent="space-between" gap={{ xs: 1.5, lg: 1 }}>
                            <Stack alignItems={{ xs: "center", lg: "flex-start" }} justifyContent={{ xs: "center", lg: "center" }} paddingY={1} width="100%" height="100%" position="relative" overflow="hidden" sx={{
                                backgroundImage: `url(${subscribeInputBg.src})`,
                                backgroundSize: "100% 90%",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                opacity: 0.75,
                                transition: "opacity 0.3s ease-in-out",
                                "&:hover": {
                                    opacity: 1,
                                },
                            }}>
                                <InputBase
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Your email"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 1,
                                        border: "none",
                                        outline: "none",
                                        fontWeight: 300,
                                        position: "relative",
                                        paddingX: 1,
                                        zIndex: 1,
                                        "& ::placeholder": {
                                            fontWeight: 300,
                                        },
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !loading) handleSubscribe();
                                    }}
                                />
                            </Stack>
                            <Stack width="auto" display={{ xs: "none", lg: "flex" }}>
                                <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1} action={handleSubscribe}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={0.5}>
                                            Subscribe
                                        </Typography>
                                        <span className="arrow-clip">
                                            <span className="arrow-slide">
                                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                            </span>
                                        </span>
                                    </div>
                                </SideTabbedButton>
                            </Stack>
                            <Stack width="100%" display={{ xs: "flex", lg: "none" }}>
                                <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={0.5}>
                                            Subscribe
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
                        {/* feedback */}
                        {status === "success" && (
                            <Typography role="status" variant="body2" color="success.main" sx={{ mt: -1 }} aria-live="polite">
                                Thanks! You’re subscribed.
                            </Typography>
                        )}
                        {status === "error" && !!error && (
                            <Typography role="status" variant="body2" color="error.main" sx={{ mt: -1 }} aria-live="polite">
                                {error}
                            </Typography>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default DevelopingWithTheBest;