import { Stack } from "@mui/material";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";
import Services from "@/sections/home/services";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4}>
        <WeSpecializeIn />
        <Services />
      </Stack>
    </Stack>
  );
}
