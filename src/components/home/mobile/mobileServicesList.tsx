import { Stack, Typography } from "@mui/material"
import MobileServicesListItem from "@/components/home/mobile/mobileServicesListItem"
import Image from "next/image"
import theme from "@/theme/theme"

import SmartContracts from "@/assets/images/icons/menu-smart-contracts.webp"
import Infra from "@/assets/images/icons/menu-infrastructure.webp"
import AI from "@/assets/images/icons/menu-ai.webp"
import Dev from "@/assets/images/icons/menu-dev.webp"
import GTM from "@/assets/images/icons/menu-gtm.webp"

import arrow from "@/assets/images/icons/arrow.webp"

import mobileServicesListItemBg from "@/assets/images/servicesPage/mobile/mobileServicesListItemBg.webp"

const MobileServicesList = () => {
    return (
        <Stack width="100%" alignItems="center" gap={2}>
            <Stack width="100%" height="100%" alignItems="center" gap={2} component={"div"}
                onClick={() => {
                    window.location.href = "/services#smart-contracts";
                }}
                sx={{
                    display: { xs: "flex", lg: "none" },
                    backgroundImage: `url(${mobileServicesListItemBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    paddingY: 3,
                    paddingX: 4,
                }}>
                <Stack width="100%" height="100%" justifyContent="space-between" gap={4}>
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                        <Stack direction="row" justifyContent="start" alignItems="center" gap={1}>
                            <Image src={SmartContracts} alt="Smart Contracts" width={25} height={25} />
                            <Typography variant="h6" component="p" className="chno" fontWeight={500} textTransform="uppercase">
                                Smart Contracts
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" justifyContent="center" alignItems="end">
                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                        </Stack>
                    </Stack>
                    <Stack width="100%" direction="row" justifyContent="start" alignItems="start" gap={1} flexWrap="wrap">
                        <Typography variant="body1" component="p" fontWeight={200} color={theme.palette.text.secondary}>
                            ERC Standards
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            DApps
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Audits
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Custom Logic
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Oracles
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width="100%" height="100%" alignItems="center" gap={2} component={"div"}
                onClick={() => {
                    window.location.href = "/services#infra-and-protocols";
                }}
                sx={{
                    display: { xs: "flex", lg: "none" },
                    backgroundImage: `url(${mobileServicesListItemBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    paddingY: 3,
                    paddingX: 4,
                }}>
                <Stack width="100%" height="100%" justifyContent="space-between" gap={4}>
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                        <Stack direction="row" justifyContent="start" alignItems="center" gap={1}>
                            <Image src={Infra} alt="Infra & Protocols" width={25} height={25} />
                            <Typography variant="h6" component="p" className="chno" fontWeight={500} textTransform="uppercase">
                                Infra & Protocols
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" justifyContent="center" alignItems="end">
                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                        </Stack>
                    </Stack>
                    <Stack width="100%" direction="row" justifyContent="start" alignItems="start" gap={1} flexWrap="wrap">
                        <Typography variant="body1" component="p" fontWeight={200} color={theme.palette.text.secondary}>
                            Layer Setup
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Tooling
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Chain Infra
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            DevOps Pipelines
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width="100%" height="100%" alignItems="center" gap={2} component={"div"}
                onClick={() => {
                    window.location.href = "/services#ai-systems";
                }}
                sx={{
                    display: { xs: "flex", lg: "none" },
                    backgroundImage: `url(${mobileServicesListItemBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    paddingY: 3,
                    paddingX: 4,
                }}>
                <Stack width="100%" height="100%" justifyContent="space-between" gap={4}>
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                        <Stack direction="row" justifyContent="start" alignItems="center" gap={1}>
                            <Image src={AI} alt="AI Systems" width={25} height={25} />
                            <Typography variant="h6" component="p" className="chno" fontWeight={500} textTransform="uppercase">
                                AI Systems
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" justifyContent="center" alignItems="end">
                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                        </Stack>
                    </Stack>
                    <Stack width="100%" direction="row" justifyContent="start" alignItems="start" gap={1} flexWrap="wrap">
                        <Typography variant="body1" component="p" fontWeight={200} color={theme.palette.text.secondary}>
                            LLM Agents
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            GenAI Content
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Prediction Models
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            AI SDKs
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width="100%" height="100%" alignItems="center" gap={2} component={"div"}
                onClick={() => {
                    window.location.href = "/services#product-dev";
                }}
                sx={{
                    display: { xs: "flex", lg: "none" },
                    backgroundImage: `url(${mobileServicesListItemBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    paddingY: 3,
                    paddingX: 4,
                }}>
                <Stack width="100%" height="100%" justifyContent="space-between" gap={4}>
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                        <Stack direction="row" justifyContent="start" alignItems="center" gap={1}>
                            <Image src={Dev} alt="Product Dev" width={25} height={25} />
                            <Typography variant="h6" component="p" className="chno" fontWeight={500} textTransform="uppercase">
                                Product Dev
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" justifyContent="center" alignItems="end">
                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                        </Stack>
                    </Stack>
                    <Stack width="100%" direction="row" justifyContent="start" alignItems="start" gap={1} flexWrap="wrap">
                        <Typography variant="body1" component="p" fontWeight={200} color={theme.palette.text.secondary}>
                            UX Design
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Backend
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            DB
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            App Dev
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            APIs
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width="100%" height="100%" alignItems="center" gap={2} component={"div"}
                onClick={() => {
                    window.location.href = "/services#gtm-and-legal";
                }}
                sx={{
                    display: { xs: "flex", lg: "none" },
                    backgroundImage: `url(${mobileServicesListItemBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    paddingY: 3,
                    paddingX: 4,
                }}>
                <Stack width="100%" height="100%" justifyContent="space-between" gap={4}>
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                        <Stack direction="row" justifyContent="start" alignItems="center" gap={1}>
                            <Image src={GTM} alt="GTM & Legal" width={25} height={25} />
                            <Typography variant="h6" component="p" className="chno" fontWeight={500} textTransform="uppercase">
                                GTM & Legal
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" justifyContent="center" alignItems="end">
                            <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                        </Stack>
                    </Stack>
                    <Stack width="100%" direction="row" justifyContent="start" alignItems="start" gap={1} flexWrap="wrap">
                        <Typography variant="body1" component="p" fontWeight={200} color={theme.palette.text.secondary}>
                            MVP Validation
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Compliance
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            Token Legal
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            /
                        </Typography>
                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                            EMEA Strategy
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MobileServicesList;
