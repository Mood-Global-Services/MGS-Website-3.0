import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import arrow from "@/assets/images/icons/arrow.webp"
import nexAsset1 from "@/assets/images/nexAsset1.webp"
import nexAsset2 from "@/assets/images/nexAsset2.webp"
import nexCircle from "@/assets/images/nexCircle.svg?url";

const OurPortfolio = () => {
    return (
        <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            overflow={"hidden"}
            paddingX={10}
            mt={-8}
            pb={12}
            gap={12}
        >
            <Stack
                width={"100%"}
                height={"100%"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"start"}
                position={"relative"}
                gap={2}
                zIndex={3}
            >
                <Typography variant="h2" fontWeight={400} fontSize={"2.75rem !important"} className="chno">
                    Our Portfolio
                </Typography>
                <Stack mt={1}>
                    <SideTabbedButton hoverShiftX={1.5} hoverShiftY={-1}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                            <Typography component={"span"} variant="h6">
                                All projects
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </SideTabbedButton>
                </Stack>
            </Stack>
            <Stack
                width={"100%"}
                height={200}
                alignItems={"center"}
                justifyContent={"center"}
                position={"relative"}
                zIndex={3}

            >
                <Stack width={"100%"} direction={"row"} alignItems={"stretch"} justifyContent={"center"} gap={2}>
                    <Stack
                        width="50%"
                        flexGrow={1}
                        minHeight={300}
                        py={2}
                        px={3}
                        sx={{
                            borderRadius: 2,
                            border: "1.09px solid transparent",
                            background:
                                "linear-gradient(#121B19, #121B19) padding-box, linear-gradient(286.36deg, rgba(255,255,255,0.15) 0.54%, rgba(255,255,255,0) 96.68%) border-box",
                            backgroundClip: "padding-box, border-box",
                            overflow: "hidden",
                            position: "relative",

                            "& .nex-asset-1": {
                                transform: "scale(1)",
                                transition: "transform 0.3s ease-in-out",
                            },
                            "& .nex-asset-2": {
                                filter: "brightness(0.3)",
                                transition: "filter 0.3s ease-in-out",
                            },

                            "&:hover": {
                                "& .nex-asset-1": {
                                    transform: "scale(1.02)",
                                },
                                "& .nex-asset-2": {
                                    filter: "brightness(1)",
                                },
                            },
                        }}
                    >
                        <Image src={nexCircle} alt="nex nexlabs circle" width={1000} height={1000} style={{
                            position: "absolute",
                            top: "-35%",
                            left: "-40%",
                            width: "200%",
                            height: "200%",
                            objectFit: "cover",
                            zIndex: 0,
                        }} />
                        <Typography variant="h5" fontWeight={600}>
                            <span style={{ color: "#00FFD1", fontSize: "2.25rem" }}>NEX</span>
                            <br />
                            DECETRALIZED
                            <br />
                            EXCHANGE
                        </Typography>

                        <Image
                            src={nexAsset1}
                            className="nex-asset-1"
                            alt="nex asset 1"
                            width={250}
                            height={100}
                            style={{
                                position: "absolute",
                                bottom: "-40%",
                                right: "5%",
                                zIndex: 2,
                            }}
                        />

                        <Image
                            src={nexAsset2}
                            className="nex-asset-2"
                            alt="nex asset 2"
                            width={250}
                            height={100}
                            style={{
                                position: "absolute",
                                bottom: "-10%",
                                left: "0%",
                                width: "70%",
                                height: "auto",
                                zIndex: 1,
                            }}
                        />
                    </Stack>


                    <Stack
                        width={"50%"}
                        flexGrow={1}
                        minHeight={300}
                        sx={{
                            backgroundColor: "blue",
                        }}
                    >

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default OurPortfolio;
