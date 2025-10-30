import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import infraAndProtocolsIcon from "@/assets/images/servicesPage/infraIcon.svg?url";
import infraAndProtocolsAsset from "@/assets/images/servicesPage/infraAsset.svg?url";


const InfraAndProtocols = () => {
    return (
        <Stack
            direction={{ xs: "column-reverse", lg: "row" }}
            alignItems="start"
            justifyContent="center"
            width={{ xs: "100%", lg: "80%" }}
            marginX="auto"
            paddingX={4}
            gap={6}
            position="relative"
            overflow="hidden"
        >
            <Stack width={{ xs: "100%", lg: "50%" }} gap={4}>
                <Grid container spacing={3} sx={{
                    width: "100%",
                }}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Layer Setup
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Configuration and deployment of blockchain layers (Layer 1, Layer 2) optimized for your network’s needs.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Chain Infra
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Full setup and maintenance of blockchain nodes, validators, and supporting infrastructure for maximum uptime.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Tooling
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Development and integration of custom tools to enhance monitoring, analytics, and operational efficiency.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                DevOps Pipelines
                            </Typography>
                            <Typography variant="body2" fontSize="0.85rem !important" component="p" color={theme.palette.text.secondary} fontWeight={400}>
                                Automated CI/CD pipelines for blockchain projects, enabling rapid, secure, and reliable deployments.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack width={{ xs: "100%", lg: "50%" }} gap={4}>
                <Stack gap={2}>
                    <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                        <Image src={infraAndProtocolsIcon} alt="sc icon" height={30} width={30} />
                        <Typography variant="h3" component="h3" className="chno" fontWeight={400} textTransform="uppercase" marginBottom={0.5} fontSize={{ xs: "1.3rem !important", lg: "1.75rem !important" }}>
                            Infra & Protocols
                        </Typography>
                    </Stack>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%", display: { xs: "none", lg: "block" } }}>
                        We design and implement robust blockchain infrastructure and protocols that ensure scalability, security, and reliability.
                    </Typography>
                </Stack>
                <Image src={infraAndProtocolsAsset} alt="sc asset" height={450} width={450} />
            </Stack>
        </Stack>
    );
};

export default InfraAndProtocols;