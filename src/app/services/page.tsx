import { Stack } from "@mui/material";
import Image from "next/image";
import ServicesHero from "@/sections/services/servicesHero";
import SmartContracts from "@/sections/services/smartContracts";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <ServicesHero />
      <SmartContracts />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4} position={"relative"}>
       
      </Stack>
      
      <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
        borderTop: `1px solid ${theme.palette.brand.border1.main}`,
        marginTop: -2,
      }}>
        <Footer />
      </Stack>

    </Stack>
  );
}
