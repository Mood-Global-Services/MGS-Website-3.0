import { Stack } from "@mui/material";
import Image from "next/image";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";
import Services from "@/sections/home/services";
import Products from "@/sections/home/products";
import NotJustSME from "@/sections/home/notJustSME";
import OurPortfolio from "@/sections/home/ourPortfolio";
import YouCanFidUs from "@/sections/home/youCanFidUs";
import WeEmpower from "@/sections/home/weEmpower";
import DevelopingWithTheBest from "@/sections/home/developpingWithTheBest";
import Footer from "@/components/layout/footer";


import notJustForSMEsBg from "@/assets/images/notJustForSMEsBG.svg?url";
import circle1 from "@/assets/images/circle1.svg?url";
import circle2 from "@/assets/images/circle2.svg?url";
import findUsBg from "@/assets/images/findUsBg.svg?url";
import findUsBlobs from "@/assets/images/findUsBlobs.svg?url";
import findUsLeftSide from "@/assets/images/findUsLeftSide.svg?url";
import findUsRightSide from "@/assets/images/findUsRightSide.svg?url";
import empowerShadow from "@/assets/images/empowerShadow.svg?url";
import weEmpowerMobileShadow1 from "@/assets/images/weEmpowerMobileShadow1.webp";
import weEmpowerMobileShadow2 from "@/assets/images/weEmpowerMobileShadow2.webp";
import theme from "@/theme/theme";
import Testimonials from "@/sections/home/testimonials";

import MobileWeSpecializeIn from "@/sections/home/mobile/mobileWeSpecializeIn";

import notJustForSmeMobileBg from "@/assets/images/testBG.webp";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4} position={"relative"}>
        <WeSpecializeIn />
        <Stack display={{ xs: "flex", lg: "none" }} paddingX={2}>
          <MobileWeSpecializeIn />
        </Stack>
        <Services />
        <Products />
        <Stack
          className="hide-scrollbar"
          width={"100%"}
          height={"fit-content"}
          minHeight={{ xs: "unset", lg: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          px={{ xs: 0, md: 24, lg: 8, xl: 16 }}
          pt={{ xs: 4, md: 24, lg: 20, xl: 28 }}
          pb={{ xs: 4, md: 24, lg: 36, xl: 36 }}
          overflow={"visible"}
        >
          <Stack sx={{
            position: "absolute",
            top: {xs:"-10%",lg:"-35%"},
            left: {xs:"50%",lg:0},
            width: "100%",
            aspectRatio: {xs:"1/1",lg:"1/1"},
            zIndex: 0,
            overflow: "hidden",
            scale: {xs:2,lg:1},
          }}>
            <Image src={circle1} alt="circle1" width={1000} height={1000} style={{
              position: "absolute",
              top: -16,
              left: "-40%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
            }} />
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              inset: 0,                 // shorthand for top/right/bottom/left: 0
              zIndex: 2,
              overflow: "hidden",
              display: { xs: "block", lg: "none" },
            }}
          >
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
            display: { xs: "none", lg: "block" }
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
            bottom: {xs:"-10%",lg:"-35%"},
            right: {xs:"25%",lg:0},
            width: {xs:"100vw",lg:"70vw"},
            aspectRatio: {xs:"1/1",lg:"1/1"},
            zIndex: 0,
            overflow: "hidden",
            scale: {xs:2,lg:1},
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
      <Stack width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} paddingY={{xs:2, lg:8}} position={"relative"} overflow={"hidden"}>
        <Stack width={"100%"} height={"10%"} sx={{
          background: "linear-gradient(-180deg, rgba(11, 11, 11, 1) 0%, rgba(11, 11, 11, 0) 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}>

        </Stack>
        <Image src={findUsBlobs} className="desktop-only" alt="findUsBg" width={1300} height={1300} style={{
          position: "absolute",
          top: "-30%",
          right: "-20%",
          zIndex: 2,
        }}></Image>
        <Image src={findUsBg} className="desktop-only" alt="findUsBg" width={1000} height={1000} style={{
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
        <Image src={findUsLeftSide} className="mobile-only" alt="findUsLeftSide" width={160} height={160} style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          marginLeft: "5rem",
          objectFit: "cover",
        }} />
        <Image src={findUsRightSide} className="desktop-only" alt="findUsRightSide" width={100} height={100} style={{
          position: "absolute",
          bottom: "10%",
          right: 0,
          marginRight: "5rem",
          objectFit: "cover",
        }} />
      </Stack>
      <Stack width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} position={"relative"} sx={{
        zIndex: 2,
      }}>
        <Image src={empowerShadow} className="desktop-only" alt="empowerShadow" width={1000} height={1000} style={{
          position: "absolute",
          top: "-10%",
          left: "-20%",
          width: "70%",
          height: "auto",
          zIndex: 0,
        }} />
        <Image src={weEmpowerMobileShadow1} className="mobile-only" alt="empowerShadow" width={1000} height={1000} style={{
          position: "absolute",
          top: "20%",
          right: "-20%",
          width: "100%",
          height: "60%",
          zIndex: 0,
        }} />
        <Image src={weEmpowerMobileShadow2} className="mobile-only" alt="empowerShadow" width={1000} height={1000} style={{
          position: "absolute",
          top: "65%",
          left: "-40%",
          width: "100%",
          filter: "scale(2)",
          height: "auto",
          zIndex: 0,
        }} />
        <WeEmpower />
      </Stack>
      <Stack width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} position={"relative"} marginTop={8} sx={{
        zIndex: 1,
        display: { xs: "none", lg: "block" },
      }}>
        <Testimonials />
      </Stack>
      <Stack width={"100%"} height={"fit-content"} alignItems={"center"} justifyContent={"center"} position={"relative"} sx={{
        zIndex: 1,
        display: { xs: "none", lg: "block" },
      }}>
        <DevelopingWithTheBest />
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
