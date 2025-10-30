import { Stack, Typography } from "@mui/material";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import theme from "@/theme/theme";
import Image from "next/image";

import arrow from "@/assets/images/icons/arrow.webp"

const PortfolioSearchableList = () => {
    return (
        <Stack width="70%" alignItems="center" marginX="auto" gap={2}>
            {portfolioItems.map((item: PortfolioItem) => (
                <Stack key={item.id} width="100%" height="fit-content" direction="row" alignItems="stretch" justifyContent="space-between" sx={{
                    borderRadius: 2,
                    border: "1px solid #2F2F2F",
                    background: "#0F0F0F4D",
                    overflow: "hidden",
                    padding: 2,
                    gap: 6
                }}>
                    <Stack width="40%" alignItems="center" justifyContent="center">
                        {
                            item.asset && <item.asset />
                        }
                    </Stack>
                    <Stack width="60%" flexGrow={1} justifyContent="space-between">
                        <Stack height="fit-content" width="100%" direction="row" alignItems="center" flexWrap="wrap" gap={1}>
                            {item.tools.map((tool, index) => (
                                <Typography key={`tool-${index}`} variant="body2" fontWeight={400} sx={{
                                    backgroundColor: theme.palette.brand.mgsBlue1.main,
                                    paddingY: 1,
                                    paddingX: 2,
                                    borderRadius: 10,
                                }}>{tool}</Typography>
                            ))}
                        </Stack>
                        <Stack gap={1}>
                            <Typography variant="h5" fontWeight={500}>{item.title}</Typography>
                            <Typography variant="body2" fontWeight={400} color={theme.palette.text.secondary}>{item.description}</Typography>
                        </Stack>
                        <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                            <Stack height="fit-content" width="fit-content" direction="row" alignItems="center" flexWrap="wrap" gap={1}>
                                {item.type.map((type, index) => (
                                    <Typography key={`type-${index}`} variant="body2" fontWeight={400} sx={{
                                        backgroundColor: "#0F0F0F",
                                        border: "1px solid #434343",
                                        boxShadow: "0px 2px 0px 0px #434343",
                                        paddingY: 1,
                                        paddingX: 2,
                                        borderRadius: 10,
                                    }}>{type}</Typography>
                                ))}
                            </Stack>
                            <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                <div className="flex items-center justify-center gap-1">
                                    <Typography component="span" variant="h6" marginRight={1}>
                                        Visit website
                                    </Typography>
                                    <span className="arrow-clip">
                                        <span className="arrow-slide">
                                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                        </span>
                                    </span>
                                </div>
                            </SideTabbedButton>
                        </Stack>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    )
}

export default PortfolioSearchableList;