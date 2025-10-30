import { Stack, Divider } from "@mui/material";
import ServicesHero from "@/sections/services/servicesHero";
import SmartContracts from "@/sections/services/smartContracts";
import InfraAndProtocols from "@/sections/services/infraAndProtocols";
import AISystems from "@/sections/services/aiSystems";
import ProductDev from "@/sections/services/productDev";
import GTMAndLegal from "@/sections/services/gtmAndLegal";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";
import Image from "next/image";

import servicesPageGradient from "@/assets/images/servicesPage/servicesPageGradients.svg?url";

export default function ServicesPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={2}>
            <ServicesHero />
            <Stack width={"100%"} alignItems={"center"} position={"relative"} paddingBottom={10}>
                <Stack width={"100%"} height={"100%"} sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}>
                    <Image src={servicesPageGradient} alt="services page gradient" width={1000} height={1000} style={{
                        width: "100%",
                        height: "110%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        
                    }} />
                </Stack>
                <Stack width={"100%"} alignItems={"center"} position={"relative"} overflow={"hidden"} sx={{
                    zIndex: 2,
                }}>
                    <SmartContracts />
                    <Divider id="infra-and-protocols" sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
                        marginY: 10,
                        marginX: "auto",
                        width: "80%",

                    }} />
                    <InfraAndProtocols />
                    <Divider id="ai-systems" sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
                        marginY: 10,
                        marginX: "auto",
                        width: "80%",
                    }} />
                    <AISystems />
                    <Divider id="product-dev" sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
                        marginY: 10,
                        marginX: "auto",
                        width: "80%",
                    }} />
                    <ProductDev />
                    <Divider id="gtm-and-legal" sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.17)",
                        marginY: 10,
                        marginX: "auto",
                        width: "80%",
                    }} />
                    <GTMAndLegal />
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
    );
}
