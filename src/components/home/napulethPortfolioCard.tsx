import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import napulethBG from "@/assets/images/napulethBG.webp"
import napulethScreen from "@/assets/images/napulETHScreen.webp"
import napulethPlanet from "@/assets/images/napulethPlanet.webp"
import napulethComet from "@/assets/images/napulethComet.webp"
import napulethDiamond from "@/assets/images/napulethDiamond.webp"

const NapulethPortfolioCard = () => {
    return (
        <Stack
            width="50%"
            flexGrow={1}
            minHeight={340}
            alignItems={"center"}
            py={2}
            px={3}
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                gap: 2,
                "& .napuleth-bg": {
                    filter: "brightness(0.75)",
                    transition: "filter 0.3s ease-in-out",
                },
                "& .napuleth-screen": {
                    transform: "scale(1)",
                    transition: "transform 0.3s 0.15s ease-in-out",
                },
                "& .napuleth-planet1": {
                    bottom: "18%",
                    left: "7%",
                    scale: 1,
                    transition: "scale 0.3s 0.1s ease-in-out",
                },
                "& .napuleth-planet2": {
                    top: "50%",
                    right: "10%",
                    scale: 1,
                    transition: "top 0.3s 0.1s ease-in-out",
                },
                "& .napuleth-comet": {
                    top: "45%",
                    left: "15%",
                    scale: 1,
                    transition: "top 0.3s 0.1s ease-in-out",
                },
                "& .napuleth-diamond1": {
                    bottom: "10%",
                    right: "5%",
                    transition: "bottom 0.3s 0.1s ease-in-out",
                },
                "& .napuleth-diamond2": {
                    top: "25%",
                    right: "18%",
                    transition: "top 0.3s 0.1s ease-in-out",
                },
                "& .napuleth-diamond3": {
                    top: "15%",
                    left: "20%",
                    transition: "top 0.3s 0.1s ease-in-out",
                },
                "&:hover": {
                    "& .napuleth-bg": {
                        filter: "brightness(1)",
                    },
                    "& .napuleth-screen": {
                        transform: "scale(1.035)",
                    },
                    "& .napuleth-planet1": {
                        scale: 1.2,
                    },
                    "& .napuleth-planet2": {
                        top: "55%",
                    },
                    "& .napuleth-comet": {
                        top: "35%",
                    },
                    "& .napuleth-diamond1": {
                        bottom: "5%",
                    },
                    "& .napuleth-diamond2": {
                        top: "30%",
                    },
                    "& .napuleth-diamond3": {
                        top: "18%",
                    },
                },
            }}
        >
            <Image
                src={napulethBG}
                className="napuleth-bg"
                alt="napuleth gradient bg"
                width={380}
                height={380}
                style={{
                    borderRadius: 4,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    objectFit: "cover",
                }}
            />
            <Typography variant="h5" fontWeight={600} textAlign={"center"} textTransform={"uppercase"} sx={{
                position: "relative",
                zIndex: 5,
            }}>
                <span style={{ color: "#DB89FF", fontSize: "2.25rem", textShadow: "0px 0px 8px #DB89FF" }}>NAPULETH</span>
                <br />
                <span style={{ color: "#78D0F3", fontSize: "1.25rem", textShadow: "0px 0px 8px #78D0F3" }}>
                    Web 3 Event Website
                </span>
            </Typography>
            <Image
                src={napulethScreen}
                className="napuleth-screen"
                alt="napuleth screen"
                width={380}
                height={380}
                style={{
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 4,
                    objectFit: "cover",
                }}
            />
            <Image
                src={napulethPlanet}
                className="napuleth-planet1"
                alt="napuleth planet"
                width={60}
                height={60}
                style={{
                    position: "absolute",
                    width: 60,
                    height: 60,
                    zIndex: 3,
                }}
            />
            <Image
                src={napulethPlanet}
                className="napuleth-planet2"
                alt="napuleth planet"
                width={40}
                height={40}
                style={{
                    position: "absolute",
                    width: 40,
                    height: 40,
                    zIndex: 3,
                }}
            />
            <Image
                src={napulethComet}
                className="napuleth-comet"
                alt="napuleth comet"
                width={65}
                height={65}
                style={{
                    position: "absolute",
                    width: 65,
                    height: 65,
                    zIndex: 2,
                }}
            />
            <Image
                src={napulethDiamond}
                className="napuleth-diamond1"
                alt="napuleth diamond"
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    width: 80,
                    height: 80,
                    zIndex: 3,
                }}
            />
            <Image
                src={napulethDiamond}
                className="napuleth-diamond2"
                alt="napuleth diamond"
                width={45}
                height={45}
                style={{
                    position: "absolute",
                    width: 45,
                    height: 45,
                    zIndex: 4,
                    transform: "scaleX(-1) rotate(-20deg)",
                }}
            />
            <Image
                src={napulethDiamond}
                className="napuleth-diamond3"
                alt="napuleth diamond"
                width={30}
                height={30}
                style={{
                    position: "absolute",
                    width: 30,
                    height: 30,
                    zIndex: 4,
                }}
            />
        </Stack>
    )
}

export default NapulethPortfolioCard;
