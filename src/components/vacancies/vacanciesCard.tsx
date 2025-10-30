import { Stack, Typography, Link } from "@mui/material";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import theme from "@/theme/theme";
import Image from "next/image";

import arrow from "@/assets/images/icons/arrow.webp"

interface VacanciesCardProps {
    title: string;
    remote: boolean;
    link: string;
}

const VacanciesCard = ({ title, remote, link }: VacanciesCardProps) => {
    return (
        <Stack width="100%" height="100%" justifyContent="space-between" borderRadius={2} gap={6} border={`1px solid ${theme.palette.brand.border1.main}`} p={3} sx={{
            backgroundColor: "#0F0F0F",
        }}>
            <Typography variant="h6" component="h6" fontWeight={500}>{title}</Typography>
            <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                    variant="body2"
                    component="p"
                    paddingY={1}
                    paddingX={2}
                    borderRadius={1}
                    fontWeight={400}
                    sx={{
                        border: "1px solid #434343",
                        boxShadow: "0px 2px 0px 0px #434343"
                    }}
                >
                    {remote ? "Remote" : "On-site"}
                </Typography>
                <Link href={link} target="_blank" underline="none">
                    <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                        <div className="flex items-center justify-center gap-1">
                            <Typography component="span" variant="h6" marginRight={1}>
                                Apply
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                </span>
                            </span>
                        </div>
                    </SideTabbedButton>
                </Link>
            </Stack>
        </Stack>
    );
};

export default VacanciesCard;