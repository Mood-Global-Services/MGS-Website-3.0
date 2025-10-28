import { Stack } from "@mui/material";
import HeroGridAnimation from "@/components/home/heroGridAnimation/heroGridAnimation";

export default function Home() {

  return (
    <Stack width={"100%"} height={"100vh"} alignItems={"center"} gap={2}>
      <HeroGridAnimation />
    </Stack>
  );
}
