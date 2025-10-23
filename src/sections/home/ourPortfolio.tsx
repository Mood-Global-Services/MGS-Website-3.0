import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import NexPortfolioCard from "@/components/home/nexPortfolioCard";
import NapulethPortfolioCard from "@/components/home/napulethPortfolioCard";

import arrow from "@/assets/images/icons/arrow.webp"

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
                    <NexPortfolioCard />
                    <NapulethPortfolioCard />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default OurPortfolio;
