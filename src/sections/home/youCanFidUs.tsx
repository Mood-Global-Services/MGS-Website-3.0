import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";

import ProductTagShape from "@/assets/images/ProductsTagShape.webp";

import YouCanFindUsSlider from "@/components/home/youCanFindUsSlider";

const YouCanFidUs = () => {
    return (
        <Stack width="100%" height="100%" direction="row" alignItems="stretch" justifyContent="center" position="relative" paddingX={10} sx={{
            zIndex: 5,
        }}>
            <Stack width="35%" flexGrow={1} gap={3} pt={4}>
                <Stack gap={1.5} width="95%">
                    <Typography variant="h2" fontWeight={400} fontSize={"2.7rem !important"} className="chno" sx={{
                        width: "95%",
                    }}>
                        You Can Find Us:
                    </Typography>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1} sx={{
                        width: "90%",
                    }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
                            width: "25%",
                            backgroundImage: `url(${ProductTagShape.src})`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingY: 0.75,
                        }}>
                            <Typography variant="subtitle2" fontWeight={400} color={theme.palette.text.secondary}>
                                Talks
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
                            width: "25%",
                            backgroundImage: `url(${ProductTagShape.src})`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingY: 0.75,
                        }}>
                            <Typography variant="subtitle2" fontWeight={400} color={theme.palette.text.secondary}>
                                Events
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
                            width: "25%",
                            backgroundImage: `url(${ProductTagShape.src})`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingY: 0.75,
                        }}>
                            <Typography variant="subtitle2" fontWeight={400} color={theme.palette.text.secondary}>
                                Workshops
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{
                            width: "25%",
                            backgroundImage: `url(${ProductTagShape.src})`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            paddingY: 0.75,
                        }}>
                            <Typography variant="subtitle2" fontWeight={400} color={theme.palette.text.secondary}>
                                Stream
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Typography variant="h5" fontWeight={500}>
                    We bring communities together<br />to explore the future of blockchain
                </Typography>
                <Typography variant="body1" fontWeight={400} color={theme.palette.text.secondary} sx={{
                    width: "75%",
                }}>
                    Dive into highlights from our recent events and discover real insights, strategies, and innovations shaping the decentralized world.
                </Typography>
            </Stack>
            <Stack width="65%" flexGrow={1} paddingX={4}> 
                <YouCanFindUsSlider />
            </Stack>
        </Stack>
    )
}

export default YouCanFidUs;