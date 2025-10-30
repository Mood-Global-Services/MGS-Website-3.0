import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import gtmAndLegalIcon from "@/assets/images/servicesPage/gtmIcon.svg?url";
import gtmAndLegalAsset from "@/assets/images/servicesPage/gtmAsset.svg?url";


const GTMAndLegal = () => {
    return (
        <Stack
            direction={{ xs: "column", lg: "row" }}
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
                <Stack gap={2}>
                    <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                        <Image src={gtmAndLegalIcon} alt="sc icon" height={20} width={20} />
                        <Typography variant="h3" component="h3" className="chno" fontWeight={400} textTransform="uppercase" marginBottom={0.5} fontSize={{ xs: "1.3rem !important", lg: "1.75rem !important" }}>
                            GTM & Legal
                        </Typography>
                    </Stack>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%", display: { xs: "none", lg: "block" } }}>
                        From validating your MVP to navigating complex token regulations, our team provides the expertise to protect your business and position it for global success.
                    </Typography>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%", display: { xs: "none", lg: "block" } }}>
                        We combine market insight with legal precision to give your project the best possible start.
                    </Typography>
                </Stack>
                <Image src={gtmAndLegalAsset} alt="sc asset" height={450} width={450} />
            </Stack>
            <Stack width={{ xs: "100%", lg: "50%" }} gap={4}>
                <Grid container spacing={3} sx={{
                    width: "100%",
                }}>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                MVP Validation
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Testing and validating your product’s core concept with real users before large-scale investment.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Token Legal
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Comprehensive legal services for token issuance, compliance, and regulatory approval.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Compliance
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Ensuring your operations meet industry regulations and jurisdictional requirements worldwide.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                EMEA Strategy
                            </Typography>
                            <Typography variant="body2" fontSize="0.85rem !important" component="p" color={theme.palette.text.secondary} fontWeight={400}>
                                Tailored go-to-market strategies for Europe, the Middle East, and Africa, with legal and market alignment.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default GTMAndLegal;