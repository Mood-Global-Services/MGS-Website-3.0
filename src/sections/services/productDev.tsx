import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import productDevIcon from "@/assets/images/servicesPage/devIcon.svg?url";
import productDevAsset from "@/assets/images/servicesPage/devAsset.svg?url";


const ProductDev = () => {
    return (
        <Stack
            direction="row"
            alignItems="start"
            justifyContent="center"
            width="80%"
            marginX="auto"
            paddingX={4}
            gap={6}
            position="relative"
            overflow="hidden"
        >
            <Stack width="50%" gap={4}>
                <Grid container spacing={3} sx={{
                    width: "100%",
                }}>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                UX Design
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Crafting intuitive, user-centered interfaces that boost engagement and streamline user journeys.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                App Dev
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Full-cycle development of high-performance web and mobile applications tailored to your goals.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Backend
                            </Typography>
                            <Typography variant="body2" fontSize="0.85rem !important" component="p" color={theme.palette.text.secondary} fontWeight={400}>
                                Reliable and scalable server-side solutions that power your applications with speed and security.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                APIs
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Design and integration of robust APIs to connect your product with third-party services and systems.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={12}>
                        <Stack gap={1}>
                            <Typography variant="h6" component="h6" fontWeight={400}>
                                Database
                            </Typography>
                            <Typography variant="body2" component="p" fontSize="0.85rem !important" color={theme.palette.text.secondary} fontWeight={400}>
                                Efficient database design, optimization, and management to ensure data integrity and performance.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack width="50%" gap={4}>
                <Stack gap={2}>
                    <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                        <Image src={productDevIcon} alt="sc icon" height={26} width={26} />
                        <Typography variant="h3" component="h3" className="chno" fontWeight={400} textTransform="uppercase" marginBottom={0.5}>
                            Product Dev
                        </Typography>
                    </Stack>
                    <Typography variant="h6" component="h6" fontWeight={400} sx={{ width: "90%" }}>
                        Our team covers every stage of the development lifecycle, ensuring seamless integration, scalability, and an exceptional user experience.
                    </Typography>
                </Stack>
                <Image src={productDevAsset} alt="sc asset" height={450} width={450} />
            </Stack>
        </Stack>
    );
};

export default ProductDev;