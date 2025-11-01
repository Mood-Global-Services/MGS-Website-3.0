"use client";

import { Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import ProductTagShape from "@/assets/images/ProductsTagShape.webp";
import dynamic from "next/dynamic";
const YouCanFindUsSlider = dynamic(() => import("@/components/home/youCanFindUsSlider"), { ssr: false });

export default function YouCanFindUs() {
    return (
        <Stack
            width="100%"
            height="100%"
            direction={{ xs: "column", lg: "row" }}
            alignItems="stretch"
            justifyContent="center"
            sx={{ zIndex: 5, px: { xs: 2, lg: 10 }, position: "relative", gap: { xs: 6, lg: 0 } }}
        >
            <Stack
                width={{ xs: "100%", lg: "35%" }}
                alignItems={{ xs: "center", lg: "unset" }}
                flexGrow={1}
                gap={3}
                pt={{ xs: 0, lg: 4 }}
            >
                <Typography
                    variant="h2"
                    fontWeight={400}
                    sx={{
                        fontSize: { xs: "2rem", lg: "2.7rem" },
                        width: { xs: "100%", lg: "95%" },
                        textAlign: { xs: "center", lg: "left" },
                        order: { xs: 1, lg: 1 },
                    }}
                >
                    You Can Find Us:
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={{ xs: "center", lg: "space-between" }}
                    gap={{ xs: 1, lg: 1 }}
                    sx={{ width: { xs: "100%", lg: "90%" }, flexWrap: { xs: "wrap", lg: "nowrap" }, order: { xs: 3, lg: 2 } }}
                >
                    {["Talks", "Events", "Workshops", "Stream"].map((label) => (
                        <Stack
                            key={label}
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                width: { xs: "35%", lg: "25%" },
                                backgroundImage: `url(${ProductTagShape.src})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                py: 0.75,
                            }}
                        >
                            <Typography variant="subtitle2" fontWeight={400} color={theme.palette.text.secondary}>
                                {label}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
                <Typography variant="h5" fontWeight={500} sx={{ order: { xs: 2, lg: 3 }, textAlign: { xs: "center", lg: "left" } }}>
                    We bring communities together<br />to explore the future of blockchain
                </Typography>
                <Typography
                    variant="body1"
                    fontWeight={400}
                    color={theme.palette.text.secondary}
                    sx={{ width: { xs: "100%", lg: "75%" }, order: { xs: 4, lg: 4 }, textAlign: { xs: "center", lg: "left" } }}
                >
                    Dive into highlights from our recent events and discover real insights, strategies, and innovations shaping the decentralized world.
                </Typography>
            </Stack>
            <Stack width={{ xs: "100%", lg: "65%" }} height={{xs:400, lg:'fit-content'}} flexGrow={1} px={{ xs: 0, lg: 4 }}>
                <YouCanFindUsSlider />
            </Stack>
        </Stack>
    );
}
