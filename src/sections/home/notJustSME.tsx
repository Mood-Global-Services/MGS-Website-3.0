import { Stack, Typography, Grid } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import notJustSMEs1 from "@/assets/images/icons/notJustForSMEs1.webp";
import notJustSMEs2 from "@/assets/images/icons/notJustForSMEs2.webp";
import notJustSMEs3 from "@/assets/images/icons/notJustForSMEs3.webp";
import notJustSMEs4 from "@/assets/images/icons/notJustForSMEs4.webp";
import notJustSMEs5 from "@/assets/images/icons/notJustForSMEs5.webp";

const NotJustSME = () => {
    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            overflow={"hidden"}
        >
            <Stack
                direction={"row"}
                alignItems="stretch"
                justifyContent="center"
                width="100%"
                paddingLeft={{ xs: 12, md: 6, lg: 0, xl: 0 }}
                paddingRight={{ xs: 12, md: 6, lg: 0, xl: 0 }}
                paddingY={8}
                position="relative"
                zIndex={3}
                gap={4}
            >
                <Stack width={"40%"} height={"100%"} gap={10}>
                    <Stack>
                        <Typography
                            variant="h2"
                            textTransform={"uppercase"}
                            fontWeight={400}
                            fontSize={"3.75rem !important"}
                            color={theme.palette.primary.main}
                            className="chno"
                        >
                            Not Just
                        </Typography>
                        <Typography
                            variant="h2"
                            textTransform={"uppercase"}
                            fontWeight={400}
                            fontSize={"3.75rem !important"}
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
                            fontSize={"2rem !important"}
                            color={theme.palette.primary.main}
                        >
                            BLOCKCHAIN<br />FOR INSTITUIONS
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontWeight={300}
                            fontSize={"1rem !important"}
                            color={theme.palette.primary.main}
                            sx={{
                                width: "80%",
                            }}
                        >
                            Unlock efficiency and transparency with blockchain solutions tailored for institutions—cut costs, streamline compliance, automate ESG, and enhance liquidity through smart contracts and digital identity systems.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack width={"60%"} flexGrow={1}>
                    <Grid container spacing={10} rowSpacing={8} sx={{
                        width: "100%",
                        placeItems: "center",
                    }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2} width={"100%"}>
                                <Image src={notJustSMEs1} alt="notJustSMEs1" width={56} height={56} />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main}>
                                    Lower operational<br />and settlement costs
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2} width={"100%"}>
                                <Image src={notJustSMEs2} alt="notJustSMEs2" width={56} height={56} />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main}>
                                    Digital asset tokenization<br />and cross-border stablecoins
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2} width={"100%"}>
                                <Image src={notJustSMEs3} alt="notJustSMEs3" width={56} height={56} />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main}>
                                    Streamlined KYC/AML<br />through Digital Identity systems
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2} width={"100%"}>
                                <Image src={notJustSMEs4} alt="notJustSMEs4" width={56} height={56} />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main}>
                                    ESG KPI automation<br />through smart contracts
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2} width={"100%"}>
                                <Image src={notJustSMEs5} alt="notJustSMEs5" width={56} height={56} />
                                <Typography variant="h6" fontWeight={300} color={theme.palette.primary.main}>
                                    Supply chain finance tokenization<br />for better liquidity
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
