import { Stack } from "@mui/material";
import PortfolioHero from "@/sections/portfolio/portfolioHero";
import PortfolioSearchableList from "@/components/portfolio/portfolioSearchableList";

import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";
import Image from "next/image";

import portfolioPageGradient from "@/assets/images/portfolioPage/portfolioPageGradient.svg?url";


export default function PortfolioPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={2} position={"relative"} overflow={"hidden"}>
            <Stack width={"100%"} height={"45vh"} sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
            }}>
                <Image src={portfolioPageGradient} alt="portfolio page gradient" width={1000} height={1000} style={{
                    width: "100vw",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translate(0%, -35%) scale(1.5)",
                }} />
            </Stack>
            <Stack width={"100%"} alignItems={"center"} position={"relative"} overflow={"hidden"} sx={{
                zIndex: 2,
            }}>
                <PortfolioHero />
                <Stack width={"100%"} sx={{
                    position: "relative",
                }}>
                    <Stack width={"100%"} height={"50%"} sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                        background: "linear-gradient(0deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%);",
                    }}>

                    </Stack>
                    <Stack width="100%" position={"relative"} sx={{
                        zIndex: 2,
                    }}>
                    <PortfolioSearchableList />
                    </Stack>
                </Stack>
                <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                    borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                    zIndex: 2,
                    backgroundColor: "#0B0B0B",
                }}>
                    <Footer />
                </Stack>
            </Stack>
        </Stack>
    );
}
