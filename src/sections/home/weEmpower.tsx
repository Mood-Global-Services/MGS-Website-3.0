import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import weEmpowerBg from "@/assets/images/weEmpowerBG.svg?url";
import weEmpowerIcon1 from "@/assets/images/icons/weEmpowerIcon1.webp";
import weEmpowerIcon2 from "@/assets/images/icons/weEmpowerIcon2.webp";
import weEmpowerArrows from "@/assets/images/empowerArrows.webp";
import arrow from "@/assets/images/icons/arrow.webp"

const WeEmpower = () => {
    return (
        <Stack width="100%" height="100%" position="relative" paddingY={8} paddingX={16} gap={4} sx={{
            zIndex: 5,
        }}>
            <Stack width="100%">
                <Typography variant="h2" fontWeight={400} fontSize={"2.5rem !important"} className="chno">
                    Not just for institutions and SMEs
                </Typography>
            </Stack>
            <Stack width="100%" direction="row" alignItems="stretch" justifyContent="center" borderRadius={2} paddingX={8} paddingY={10} position={"relative"} sx={{
                "& .empowerArrows": {
                    transform: "translateY(-15%) translateX(-5%) scaleX(1)",
                    transformOrigin: "left center",
                    transition: "transform .3s ease",
                },
                "&:hover .empowerArrows": {
                    transform: "translateY(-15%) translateX(0%) scaleX(1.1)",
                },
            }}>
                <Stack position={"absolute"} width="100%" height="100%" sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    borderRadius: 2,
                }}>
                    <Image src={weEmpowerBg} alt="weEmpowerBg" width={100} height={100} style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }} />
                </Stack>
                <Stack gap={4} width="70%" position={"relative"} sx={{
                    zIndex: 2,
                }}>
                    <Typography variant="h3" fontWeight={400} textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main} >
                        We Empower Early-Stage Startups
                    </Typography>
                    <Stack gap={2} width="75%">
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Image src={weEmpowerIcon1} alt="weEmpowerIcon1" width={80} height={80} />
                            <Typography variant="h6" fontWeight={300} color={theme.palette.text.secondary} marginBottom={1} >
                                From idea to market — we incubate, accelerate, and equip you with everything you need to grow.
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
                            <Image src={weEmpowerIcon2} alt="weEmpowerIcon2" width={80} height={80} />
                            <Typography variant="h6" fontWeight={300} color={theme.palette.text.secondary} marginBottom={1} >
                                Our ecosystem covers tech, legal, AI, blockchain, and go-
                                to-market support, so you can focus on building the future.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack alignItems="center" justifyContent="end" gap={4} width="30%" flexGrow={1} position={"relative"} sx={{
                    zIndex: 2,
                    transform: "translateY(-5%)",
                }}>
                    <Image src={weEmpowerArrows} alt="weEmpowerArrows" width={230} height={230} className="empowerArrows" />
                    <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
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
    );
};

export default WeEmpower;