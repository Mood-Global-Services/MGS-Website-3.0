import { Stack } from "@mui/material";
import Image from "next/image";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";
import Services from "@/sections/home/services";
import Products from "@/sections/home/products";
import NotJustSME from "@/sections/home/notJustSME";

import notJustForSMEsBg from "@/assets/images/notJustForSMEsBG.svg?url";
import circle1 from "@/assets/images/circle1.svg?url";
import circle2 from "@/assets/images/circle2.svg?url";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4} position={"relative"}>
        <WeSpecializeIn />
        <Services />
        <Products />
        <Stack id="test" width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} position={"relative"} py={24} my={8} overflow={"visible"}>
          <Stack sx={{
            position: "absolute",
            top: "-35%",
            left: 0,
            width: "70vw",
            aspectRatio: "1/1",
            zIndex: 0,
            overflow: "hidden",
          }}>
            <Image src={circle1} alt="circle1" width={1000} height={1000} style={{
              position: "absolute",
              top: -16,
              left: "-40%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }} />
          </Stack>
          <NotJustSME />
          <Stack sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            zIndex: 2,
            overflow: "hidden",
          }}>
            <Image src={notJustForSMEsBg} alt="notJustForSMEsBg" width={2693} height={2124} style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "auto",
              zIndex: 2,
              opacity: 0.9,
            }} />
          </Stack>
          <Stack sx={{
            position: "absolute",
            bottom: "-35%",
            right: 0,
            width: "70vw",
            aspectRatio: "1/1",
            zIndex: 0,
            overflow: "hidden",
          }}>
            <Image src={circle2} alt="circle1" width={1000} height={1000} style={{
              position: "absolute",
              top: -16,
              right: "-40%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
