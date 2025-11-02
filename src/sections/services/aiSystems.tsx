import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import aiSystemsIcon from "@/assets/images/servicesPage/aiIcon.webp";
import aiSystemsAsset from "@/assets/images/servicesPage/aiAsset.webp";


const AISystems = () => {
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
                        <Image src={aiSystemsIcon} alt="sc icon" height={26} width={26} />
                        <Typography variant="h3" component="h3" className="chno" fontWeight={400} textTransform="uppercase" marginBottom={0.5} fontSize={{ xs: "1.3rem !important", lg: "1.75rem !important" }}>
                            AI Systems
                        </Typography>
                    </Stack>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%", display: { xs: "none", lg: "block" } }}>
                        Our solutions integrate seamlessly into your workflows, enabling automation, insight generation, and data-driven decision-making. Whether you need content generation, machine learning pipelines, or custom AI SDKs, we deliver cutting-edge tools to keep you ahead of the curve.
                    </Typography>
                </Stack>
                <Image src={aiSystemsAsset} alt="sc asset" height={450} width={450} />
            </Stack>
            <Stack width={{ xs: "100%", lg: "50%" }} gap={4}>
                <Grid container spacing={3} sx={{
                    width: "100%",
                }}>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                LLM Agents
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Development of intelligent, context-aware AI agents powered by large language models for customer support, automation, and more.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Prediction Models
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Machine learning models that forecast trends, detect patterns, and enable smarter decision-making.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                GenAI Content
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                AI-powered tools for generating text, images, and multimedia content tailored to your brand and goals.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 12 }}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                AI SDKs
                            </Typography>
                            <Typography variant="body2" fontSize="0.85rem !important" component="p" color={theme.palette.text.secondary} fontWeight={400}>
                                Custom AI software development kits to integrate advanced AI capabilities directly into your products and platforms
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default AISystems;