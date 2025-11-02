import { Stack, Typography } from "@mui/material"
import ServicesListItem from "@/components/home/servicesListItem"
import Image from "next/image"
import theme from "@/theme/theme"

import SmartContracts from "@/assets/images/icons/menu-smart-contracts.webp"
import Infra from "@/assets/images/icons/menu-infrastructure.webp"
import AI from "@/assets/images/icons/menu-ai.webp"
import Dev from "@/assets/images/icons/menu-dev.webp"
import GTM from "@/assets/images/icons/menu-gtm.webp"

import arrow from "@/assets/images/icons/arrow.webp"

const ServicesList = () => {
    return (
        <Stack width="75%" height="100%" alignItems="center" gap={2} display={{ xs: "none", lg: "flex" }}>
            <ServicesListItem
                action={() => {
                    window.location.href = "/services#smart-contracts";
                }}
                leftChildren={
                    <Stack direction="row" justifyContent="start" alignItems="start" gap={2}>
                        <Image src={SmartContracts} alt="Smart Contracts" width={36} height={36} />
                        <Typography variant="h4" component="p" className="chno" fontWeight={500} textTransform="uppercase" sx={{
                            fontSize: "1.5rem !important"
                        }}>
                            Smart Contracts
                        </Typography>
                    </Stack>
                }
                rightChildren={
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="stretch">
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                ERC Standards
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                DApps
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Audits
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Custom Logic
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Oracles
                            </Typography>

                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="center" alignItems="end" gap={1}>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={60} height={60} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </Stack>
                }
            />
            <ServicesListItem
                action={() => {
                    window.location.href = "/services#infra-and-protocols";
                }}
                leftChildren={
                    <Stack direction="row" justifyContent="start" alignItems="start" gap={2}>
                        <Image src={Infra} alt="Infrastructure" width={36} height={36} />
                        <Typography variant="h3" component="p" className="chno" fontWeight={500} textTransform="uppercase" sx={{
                            fontSize: "1.5rem !important"
                        }}>
                            Infra & Protocols
                        </Typography>
                    </Stack>
                }
                rightChildren={
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="stretch">
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Layer Setup
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Tooling
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Chain Infra
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                DevOps Pipelines
                            </Typography>

                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="center" alignItems="end" gap={1}>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={30} height={30} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </Stack>
                }
            />
            <ServicesListItem
                action={() => {
                    window.location.href = "/services#ai-systems";
                }}
                leftChildren={
                    <Stack direction="row" justifyContent="start" alignItems="start" gap={2}>
                        <Image src={AI} alt="AI" width={36} height={36} />
                        <Typography variant="h3" className="chno" fontWeight={500} textTransform="uppercase" sx={{
                            fontSize: "1.5rem !important"
                        }}>
                            AI Systems
                        </Typography>
                    </Stack>
                }
                rightChildren={
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="stretch">
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                LLM Agents
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                GenAI Content
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Prediction Models
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                AI SDKs
                            </Typography>

                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="center" alignItems="end" gap={1}>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={30} height={30} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </Stack>
                }
            />
            <ServicesListItem
                action={() => {
                    window.location.href = "/services#product-dev";
                }}
                leftChildren={
                    <Stack direction="row" justifyContent="start" alignItems="start" gap={2}>
                        <Image src={Dev} alt="Dev" width={36} height={36} />
                        <Typography variant="h3" className="chno" fontWeight={500} textTransform="uppercase" sx={{
                            fontSize: "1.5rem !important"
                        }}>
                            Product Dev
                        </Typography>
                    </Stack>
                }
                rightChildren={
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="stretch">
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                UX Design
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Backend
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                DB
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                App Dev
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                APIs
                            </Typography>

                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="center" alignItems="end" gap={1}>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={30} height={30} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </Stack>
                }
            />
            <ServicesListItem
                action={() => {
                    window.location.href = "/services#gtm-and-legal";
                }}
                leftChildren={
                    <Stack direction="row" justifyContent="start" alignItems="start" gap={2}>
                        <Image src={GTM} alt="GTM" width={36} height={36} />
                        <Typography variant="h3" className="chno" fontWeight={500} textTransform="uppercase" sx={{
                            fontSize: "1.5rem !important"
                        }}>
                            GTM & Legal
                        </Typography>
                    </Stack>
                }
                rightChildren={
                    <Stack width="100%" direction="row" justifyContent="space-between" alignItems="stretch">
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                MVP Validation
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Compliance
                            </Typography>
                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="start" alignItems="start" gap={1}>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                Token Legal
                            </Typography>
                            <Typography variant="body2" component="p" fontWeight={300} color={theme.palette.text.secondary}>
                                EMEA Strategy
                            </Typography>

                        </Stack>
                        <Stack width="fit-content" flexGrow={1} justifyContent="center" alignItems="end" gap={1}>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={30} height={30} style={{ display: "block" }} />
                                </span>
                            </span>
                        </Stack>
                    </Stack>
                }
            />
        </Stack>
    )
}

export default ServicesList;
