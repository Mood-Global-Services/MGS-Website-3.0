import { Stack } from "@mui/material";
import Image from "next/image";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";
import Services from "@/sections/home/services";
import Products from "@/sections/home/products";
import NotJustSME from "@/sections/home/notJustSME";

import notJustForSMEsBg from "@/assets/images/notJustForSMEsBG.svg?url";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4}>
        <WeSpecializeIn />
        <Services />
        <Products />
        <Stack width={"100%"} height={"100%"} alignItems={"center"} justifyContent={"center"} position={"relative"} py={24}>
          <NotJustSME />
          <Stack sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
          }}>
          <Image src={notJustForSMEsBg} alt="notJustForSMEsBg" width={2693} height={2124} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "auto",
            zIndex: 0,
          }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
