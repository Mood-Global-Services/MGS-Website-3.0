import { Stack } from "@mui/material";
import theme from "@/theme/theme";

const YouCanFindUsSliderCard = ({ cardContent }: { cardContent: React.ReactNode }) => {
    return (
        <Stack alignItems="center" justifyContent="center" width="fit-content" height="fit-content" sx={{
            backgroundColor: theme.palette.background.default,
            border: `1.5px solid ${theme.palette.brand.border1.main}`,
            borderRadius: 2,
            position: "relative",
            transition: "background-color 0.4s ease-in-out, border-color 0.3s ease-in-out",
            "& .find-us-asset": {
                transition: "filter 0.3s ease-in-out",
            },
            "& .find-us-image": {
                transition: "transform 0.3s ease-in-out",
            },
            "&:hover": {
                backgroundColor: theme.palette.brand.mgsBlue1.main,
                borderColor: theme.palette.brand.mgsBlue1.main,
                "& .find-us-asset": {
                    filter: "brightness(0) invert(1)",
                },
            },
            "& .arrow-clip": {
                width: 20,
                height: 20,
                overflow: "hidden",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            },
            "& .arrow-slide": {
                willChange: "transform, opacity",
            },
            "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
                animation: "mgsArrowGhost 950ms ease-out infinite",
            },
            "&:hover .find-us-image": {
                transform: "scale(1.01)", // zoom in without changing layout size
            },

            "@keyframes mgsArrowGhost": {
                "0%": { transform: "translateX(-100%)", opacity: 0 },
                "15%": { transform: "translateX(-75%)", opacity: 1 },
                "70%": { transform: "translateX(0%)", opacity: 1 },
                "100%": { transform: "translateX(100%)", opacity: 0 },
            },

            "@media (prefers-reduced-motion: reduce)": {
                "&:hover .arrow-slide, &:focus-visible .arrow-slide": {
                    animation: "none",
                    opacity: 1,
                    transform: "translateX(0%)",
                },
            },
        }}>
            {cardContent}
        </Stack>
    )
}

export default YouCanFindUsSliderCard;