import { Stack, Divider } from "@mui/material";
import ServicesHero from "@/sections/services/servicesHero";
import SmartContracts from "@/sections/services/smartContracts";
import InfraAndProtocols from "@/sections/services/infraAndProtocols";
import AISystems from "@/sections/services/aiSystems";
import ProductDev from "@/sections/services/productDev";
import GTMAndLegal from "@/sections/services/gtmAndLegal";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";

export default function ServicesPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={2}>
            <ServicesHero />
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
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
