import { Stack } from "@mui/material";
import Image from "next/image";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";
import Services from "@/sections/home/services";
import Products from "@/sections/home/products";
import NotJustSME from "@/sections/home/notJustSME";
import OurPortfolio from "@/sections/home/ourPortfolio";
import YouCanFidUs from "@/sections/home/youCanFidUs";

import notJustForSMEsBg from "@/assets/images/notJustForSMEsBG.svg?url";
import circle1 from "@/assets/images/circle1.svg?url";
import circle2 from "@/assets/images/circle2.svg?url";
import findUsBg from "@/assets/images/findUsBg.svg?url";
import findUsBlobs from "@/assets/images/findUsBlobs.svg?url";
import findUsLeftSide from "@/assets/images/findUsLeftSide.svg?url";
import findUsRightSide from "@/assets/images/findUsRightSide.svg?url";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4} position={"relative"}>
        <WeSpecializeIn />
        <Services />
        <Products />
        <Stack
          className="hide-scrollbar"
          width={"100%"}
          height={"fit-content"}
          minHeight={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          px={{ xs: 12, md: 24, lg: 8, xl: 16 }}
          pt={{ xs: 12, md: 24, lg: 20, xl: 28 }}
          pb={{ xs: 12, md: 24, lg: 36, xl: 36 }}
          mt={8}
          overflow={"visible"}
        >
          <Stack sx={{
            position: "absolute",
            top: "-35%",
            left: 0,
            width: "100%",
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
      <OurPortfolio />
      <Stack width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} paddingY={8} position={"relative"} overflow={"hidden"}>
        <Stack width={"100%"} height={"10%"} sx={{
          background: "linear-gradient(-180deg, rgba(11, 11, 11, 1) 0%, rgba(11, 11, 11, 0) 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}>
          
        </Stack>
        <Image src={findUsBlobs} alt="findUsBg" width={1300} height={1300} style={{
          position: "absolute",
          top: "-30%",
          right: "-20%",
          zIndex: 2,
        }}></Image>
        <Image src={findUsBg} alt="findUsBg" width={1000} height={1000} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          marginTop: 5,
          top: 5,
          left: 0,
          zIndex: 1,
          opacity: 0.3,
        }}></Image>
        <YouCanFidUs />
        <Image src={findUsLeftSide} alt="findUsLeftSide" width={160} height={160} style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          marginLeft: "5rem",
          objectFit: "cover",
        }} />
        <Image src={findUsRightSide} alt="findUsRightSide" width={100} height={100} style={{
          position: "absolute",
          bottom: "10%",
          right: 0,
          marginRight: "5rem",
          objectFit: "cover",
        }} />
      </Stack>
    </Stack>
  );
}
