import { Box, Stack } from "@mui/material";
import HeroGridAnimation from "@/components/home/heroGridAnimation/heroGridAnimation";

export default function Home() {

    return (
        <Stack sx={{ position: "relative", minHeight: "100vh", bgcolor: "#01070E", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <HeroGridAnimation />
            </Box>
        </Stack>
    );
}
