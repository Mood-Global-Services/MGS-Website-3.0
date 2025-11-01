import { Stack, Typography, Grid } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import notJustSMEs1 from "@/assets/images/icons/notJustForSMEs1.webp";
import notJustSMEs2 from "@/assets/images/icons/notJustForSMEs2.webp";
import notJustSMEs3 from "@/assets/images/icons/notJustForSMEs3.webp";
import notJustSMEs4 from "@/assets/images/icons/notJustForSMEs4.webp";
import notJustSMEs5 from "@/assets/images/icons/notJustForSMEs5.webp";
import notJustForSmeMobileBg from "@/assets/images/testBG.webp";

const NotJustSME = () => {
    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            overflow={"hidden"}
            sx={{
                paddingY: { xs: 2, lg: 0 },
            }}
        >
            <Stack
                direction={{ xs: "column", lg: "row" }}
                alignItems="stretch"
                justifyContent="center"
                width="100%"
                paddingLeft={{ xs: 2, md: 6, lg: 0, xl: 0 }}
                paddingRight={{ xs: 4, md: 6, lg: 0, xl: 0 }}
                paddingY={{ xs: 5, lg: 8 }}
                position="relative"
                zIndex={3}
                gap={{ xs: 4, lg: 4 }}
                sx={{
                    backgroundImage: { xs: `url(${notJustForSmeMobileBg.src})`, lg: "unset" },
                    backgroundSize: { xs: "100% 110%", lg: "unset" },
                    backgroundPosition: { xs: "center", lg: "unset" },
                    backgroundRepeat: { xs: "no-repeat", lg: "unset" },
                }}
            >
                <Stack width={{ xs: "100%", lg: "40%" }} height={"100%"} gap={{ xs: 2, lg: 10 }}>
                    <Stack direction={{ xs: "row", lg: "column" }}>
                        <Typography
                            variant="h2"
                            textTransform={"uppercase"}
                            fontWeight={400}
                            fontSize={{ xs: "2rem !important", lg: "3.75rem !important" }}
                            color={theme.palette.primary.main}
                            className="chno"
                        >
                            Not Just&nbsp;
                        </Typography>
                        <Typography
                            variant="h2"
                            textTransform={"uppercase"}
                            fontWeight={400}
                            fontSize={{ xs: "2rem !important", lg: "3.75rem !important" }}
                            color={theme.palette.primary.main}
                            className="chno"
                        >
                            For SME<span style={{ textTransform: "lowercase" }}>s</span>
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography
                            variant="h6"
                            fontWeight={400}
                            fontSize={{ xs: "1.6rem !important", lg: "2rem !important" }}
                            color={theme.palette.primary.main}
                            textTransform={{ xs: "none", lg: "uppercase" }}
                        >
                            Blockchain <br className="desktop-only" />for Institutions
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontWeight={300}
                            fontSize={"1rem !important"}
                            color={theme.palette.primary.main}
                            sx={{
                                width: { xs: "95%", lg: "80%" },
                            }}
                        >
                            Unlock efficiency and transparency with blockchain solutions tailored for institutions—cut costs, streamline compliance, automate ESG, and enhance liquidity through smart contracts and digital identity systems.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack width={{ xs: "100%", lg: "60%" }} flexGrow={1}>
                    <Grid container spacing={{ xs: 4, lg: 10 }} rowSpacing={{ xs: 4, lg: 8 }} sx={{
                        width: "100%",
                        placeItems: "center",
                    }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "start" }} gap={2} width={"100%"}>
                                <Image src={notJustSMEs1} alt="notJustSMEs1" width={56} height={56} className="desktop-only" />
                                <Image src={notJustSMEs1} alt="notJustSMEs1" width={35} height={35} className="mobile-only" />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main} sx={{
                                    fontSize: { xs: "0.95rem !important", lg: "1rem !important" },
                                }}>
                                    Lower operational <br className="desktop-only" />and settlement costs
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "start" }} gap={2} width={"100%"}>
                                <Image src={notJustSMEs2} alt="notJustSMEs2" width={56} height={56} className="desktop-only" />
                                <Image src={notJustSMEs2} alt="notJustSMEs2" width={35} height={35} className="mobile-only" />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main} sx={{
                                    fontSize: { xs: "0.95rem !important", lg: "1rem !important" },
                                }}>
                                    Digital asset tokenization <br className="desktop-only" />and cross-border stablecoins
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "start" }} gap={2} width={"100%"}>
                                <Image src={notJustSMEs3} alt="notJustSMEs3" width={56} height={56} className="desktop-only" />
                                <Image src={notJustSMEs3} alt="notJustSMEs3" width={35} height={35} className="mobile-only" />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main} sx={{
                                    fontSize: { xs: "0.95rem !important", lg: "1rem !important" },
                                }}>
                                    Streamlined KYC/AML <br className="desktop-only" />through Digital Identity systems
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "start" }} gap={2} width={"100%"}>
                                <Image src={notJustSMEs4} alt="notJustSMEs4" width={56} height={56} className="desktop-only" />
                                <Image src={notJustSMEs4} alt="notJustSMEs4" width={35} height={35} className="mobile-only" />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main} sx={{
                                    fontSize: { xs: "0.95rem !important", lg: "1rem !important" },
                                    paddingRight: { xs: 2, lg: 0 },
                                }}>
                                    ESG KPI automation <br className="desktop-only" />through smart contracts
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "start" }} gap={2} width={"100%"}>
                                <Image src={notJustSMEs5} alt="notJustSMEs5" width={56} height={56} className="desktop-only" />
                                <Image src={notJustSMEs5} alt="notJustSMEs5" width={35} height={35} className="mobile-only" />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main} sx={{
                                    fontSize: { xs: "0.95rem !important", lg: "1rem !important" },
                                    paddingRight: { xs: 2, lg: 0 },
                                }}>
                                    Supply chain finance tokenization <br className="desktop-only" />for better liquidity
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NotJustSME;
