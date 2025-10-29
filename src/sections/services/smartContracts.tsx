import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import smartContractsIcon from "@/assets/images/servicesPage/smartContractsIcon.svg?url";
import smartContractsAsset from "@/assets/images/servicesPage/smartContractsAsset.svg?url";


const SmartContracts = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="75%"
            marginX="auto"
            paddingX={4}
            gap={6}
            position="relative"
            overflow="hidden"
        >
            <Stack width="50%" gap={4}>
                <Stack gap={2}>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Image src={smartContractsIcon} alt="sc icon" height={20} width={20} />
                        <Typography variant="h3" component="h3" className="chno" fontWeight={400} textTransform="uppercase" marginBottom={0.5}>
                            Smart Contracts
                        </Typography>
                    </Stack>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%" }}>
                        We design, develop, and audit secure and efficient contracts tailored to your specific business logic.
                    </Typography>
                </Stack>
                <Image src={smartContractsAsset} alt="sc asset" height={450} width={450} />
            </Stack>
            <Stack width="50%" gap={4}>
                <Grid container spacing={3} sx={{
                    width: "100%",
                }}>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                ERC Standards
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Implementation of ERC-20, ERC-721, ERC-1155, and other Ethereum token standards, ensuring interoperability and security.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Custom Logic
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Development of unique smart contract functionalities to match your specific business workflows and requirements.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                DApps
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Full-stack decentralized application development, integrating blockchain smart contracts with seamless front-end experiences.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Oracles
                            </Typography>
                            <Typography variant="body2" fontSize="0.85rem !important" component="p" color={theme.palette.text.secondary} fontWeight={400}>
                                Secure integration with blockchain oracles to bring real-world data into your smart contracts.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={12}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Audits
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Comprehensive security audits to detect vulnerabilities, optimize gas usage, and ensure contract reliability before deployment.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default SmartContracts;