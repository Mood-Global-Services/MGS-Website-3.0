import { Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import eu from "@/assets/images/eu.webp"
import eth from "@/assets/images/ethereum-eth-logo.webp"
import sol from "@/assets/images/solana-sol-logo.webp"
import base from "@/assets/images/base.webp"
import arb from "@/assets/images/arbitrum-arb-logo.webp"
import opt from "@/assets/images/optimism.webp"
import chainlink from "@/assets/images/chainlink-link-logo.webp"
import file from "@/assets/images/filecoin.webp"
import btc from "@/assets/images/btc.webp"

import nextjs from "@/assets/images/nextjs.webp"
import react from "@/assets/images/react.webp"
import vue from "@/assets/images/vue.webp"
import nodejs from "@/assets/images/nodejs.webp"
import go from "@/assets/images/go.webp"
import ts from "@/assets/images/ts.webp"
import rust from "@/assets/images/rust.webp"
import figma from "@/assets/images/figma.webp"

import gpt from "@/assets/images/gpt.webp"
import gemini from "@/assets/images/gemini.webp"
import mistral from "@/assets/images/mistral.webp"
import anthropic from "@/assets/images/anthropic.webp"
import grok from "@/assets/images/grok.webp"
import perp from "@/assets/images/perplexity.webp"
import copilot from "@/assets/images/mscopilot.webp"
import hf from "@/assets/images/hf.webp"

import mvpValidation from "@/assets/images/mvpValidation.webp"

const MobileWeSpecializeIn = () => {
    return (
        <Stack width="100%" alignItems="center" gap={4} sx={{
            display: { xs: "flex", lg: "none" },
            marginBottom: 4,
        }}>
            <Typography variant="h3" fontWeight={400}>
                We specialize in
            </Typography>

            <Grid container spacing={1} sx={{
                paddingX: 2,
            }}>
                <Grid size={6}>
                    <Stack width="100%" height="100%" sx={{
                        backgroundColor: "#15151559",
                        borderRadius: 2,
                        border: "0.7px solid #2F2F2F",
                        padding: 1,
                        aspectRatio: 1,
                    }}>
                        <Stack width={"100%"} flexGrow={1} alignItems="center" justifyContent="center" gap={2} padding={2}>
                            <Typography variant="h5" textAlign="center" fontWeight={500}>GTM<br /><span style={{ color: theme.palette.brand.mgsBlue1.main }}>and Legal</span></Typography>
                            <Image src={eu} width={80} height={80} alt="eu"></Image>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={6}>
                    <Stack width="100%" height="100%" sx={{
                        backgroundColor: "#15151559",
                        borderRadius: 2,
                        border: "0.7px solid #2F2F2F",
                        padding: 1,
                        aspectRatio: 1,
                    }}>
                        <Stack width={"100%"} flexGrow={1} alignItems="center" justifyContent="center" gap={2} paddingY={0}>
                            <Typography variant="h5" textAlign="center" fontWeight={500}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>Blockchain & ERC</span><br />Integration</Typography>
                            <Stack width={"100%"} gap={1}>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={0.5}>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={eth} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={sol} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={base} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={arb} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                </Stack>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={0.5}>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={opt} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={chainlink} width={40} height={40} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={file} width={13} height={13} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={btc} width={15} height={15} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={6}>
                    <Stack width="100%" height="100%" sx={{
                        backgroundColor: "#15151559",
                        borderRadius: 2,
                        border: "0.7px solid #2F2F2F",
                        padding: 1,
                        aspectRatio: 1,
                    }}>
                        <Stack width={"100%"} flexGrow={1} alignItems="center" justifyContent="center" gap={2} paddingY={0}>
                            <Typography variant="h5" textAlign="center" fontWeight={500}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>From Design</span><br />To Production</Typography>
                            <Stack width={"100%"} gap={1}>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={0.5}>
                                <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={nextjs} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={react} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={vue} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={nodejs} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.3
                                        }}></Image>
                                    </Stack>
                                </Stack>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={0.5}>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={go} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={ts} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={rust} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.1
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={figma} width={12} height={12} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.05
                                        }}></Image>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={6}>
                    <Stack width="100%" height="100%" sx={{
                        backgroundColor: "#15151559",
                        borderRadius: 2,
                        border: "0.7px solid #2F2F2F",
                        padding: 1,
                        aspectRatio: 1,
                    }}>
                        <Stack width={"100%"} flexGrow={1} alignItems="center" justifyContent="space-between" gap={2} paddingTop={2.5} position={"relative"} sx={{
                            overflow: "hidden"
                        }}>
                            <Typography variant="h5" textAlign="center" fontWeight={500}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>MVP</span><br />Validation</Typography>
                            <Stack width={"100%"} gap={1}>
                                <Image alt="mvp validation" src={mvpValidation} width={100} height={80} style={{
                                    width: "100%",
                                }}></Image>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <Stack width="100%" sx={{
                        backgroundColor: "#15151559",
                        borderRadius: 2,
                        border: "0.7px solid #2F2F2F",
                        padding: 1,
                    }}>
                        <Stack width={"100%"} flexGrow={1} direction={"row"} alignItems="center" justifyContent="center" gap={2} paddingY={1}>
                            <Typography variant="h5" textAlign="center" fontWeight={500} sx={{width: "50%"}}><span style={{ color: theme.palette.brand.mgsBlue1.main }}>AI</span> Integration</Typography>
                            <Stack width={"50%"} gap={1}>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={2}>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={gpt} width={60} height={60} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={gemini} width={35} height={35} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={mistral} width={25} height={25} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={anthropic} width={60} height={60} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                </Stack>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} paddingX={2}>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={grok} width={35} height={35} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",
                                            scale: 1.2
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={perp} width={12} height={12} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)"
                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={copilot} width={27} height={27} alt="eth" style={{
                                            filter: "brightness(0) invert(0.8)",

                                        }}></Image>
                                    </Stack>
                                    <Stack alignItems={"center"} justifyContent={"center"} padding={1} sx={{
                                        background: "linear-gradient(180deg, rgba(47,47,47,0.61) 0%, rgba(149,149,149,0.40) 100%)",
                                        boxShadow: "0px 2.38596px 7.15789px rgba(0, 0, 0, 0.25)",
                                        backdropFilter: "blur(1.43158px)",
                                        borderRadius: 1.25,
                                        border: `solid 0.5px rgba(149,149,149,0.40)`,
                                        width: 50,
                                        aspectRatio: 1,
                                    }}>
                                        <Image src={hf} width={14} height={14} alt="eth" style={{
                                            scale: 1.4
                                        }}></Image>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default MobileWeSpecializeIn;