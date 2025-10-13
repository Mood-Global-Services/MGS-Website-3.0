import { Stack } from "@mui/material";
import Hero from "@/sections/home/hero";
import WeSpecializeIn from "@/sections/home/weSpecializeIn";

export default function Home() {

  return (
    <Stack width={"100%"} alignItems={"center"} gap={2}>
      <Hero />
      <Stack width={"100%"} alignItems={"center"} gap={2} paddingBottom={4}>
      <WeSpecializeIn />
      </Stack>
    </Stack>
  );
}
