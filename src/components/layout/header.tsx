"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import { PlainContentItem } from "../generic/plainContentItem";
import { Stack, Typography, Button, IconButton } from "@mui/material";
import theme from "@/theme/theme";

import logo from "@/assets/images/logo.webp";
import arrow from "@/assets/images/icons/arrow.webp"

import menuSmartContracts from "@/assets/images/icons/menu-smart-contracts.webp"
import menuInfra from "@/assets/images/icons/menu-infrastructure.webp"
import menuAI from "@/assets/images/icons/menu-ai.webp"
import menuDev from "@/assets/images/icons/menu-dev.webp"
import menuGTM from "@/assets/images/icons/menu-gtm.webp"

import menuLaunch from "@/assets/images/icons/menu-launch.webp"
import menuExplore from "@/assets/images/icons/menu-explore.webp"

import menuTeam from "@/assets/images/icons/menu-team.webp"
import menuPortfolio from "@/assets/images/icons/menu-portfolio.webp"

import mobileMenuButton from "@/assets/images/mobileMenuButton.webp"
import mobileContactButtonBg from "@/assets/images/mobileContactButtonBg.webp"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuContentItem,
} from "@/components/generic/navigationMenu";

export default function Header() {
    return (
        <header className="z-50 w-full bg-transparent">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 lg:px-6">
                <Link href="/" className="inline-flex items-center gap-3">
                    <Image src={logo} alt="mood global services mgs logo" width={120} height={27} priority />
                </Link>

                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="nav-pill">
                                    <Typography component={"span"} variant="h6">
                                        Home
                                    </Typography>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="h6">
                                        Services
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[800px] grid-cols-3 gap-x-3 gap-y-3">
                                        <NavigationMenuContentItem href="/services#smart-contracts">
                                            <Stack gap={1}>
                                                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                                                    <Image src={menuSmartContracts} height={20} width={20} alt="mgs mood global services smart contracts" priority></Image>
                                                    <Typography component="span" variant="body2">Smart Contracts</Typography>
                                                </Stack>
                                                <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                    End-to-end development from
                                                    chain setup to dApp deployment.
                                                </Typography>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services#infra-and-protocols">
                                            <Stack gap={1}>
                                                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                                                    <Image src={menuInfra} height={20} width={20} alt="mgs mood global services smart contracts" priority></Image>
                                                    <Typography component="span" variant="body2">Infra & Protocols</Typography>
                                                </Stack>
                                                <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                    We design and implement robust blockchain infrastructure
                                                </Typography>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services#ai-systems">
                                            <Stack gap={1}>
                                                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                                                    <Image src={menuAI} height={20} width={20} alt="mgs mood global services smart contracts" priority></Image>
                                                    <Typography component="span" variant="body2">AI Systems</Typography>
                                                </Stack>
                                                <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                    Automation, insight generation, and data-driven decision-making
                                                </Typography>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services#product-dev">
                                            <Stack gap={1}>
                                                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                                                    <Image src={menuDev} height={20} width={20} alt="mgs mood global services smart contracts" priority></Image>
                                                    <Typography component="span" variant="body2">Product Dev</Typography>
                                                </Stack>
                                                <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                    Blockchain-based product development and UX/Ui design
                                                </Typography>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services#gtm-and-legal">
                                            <Stack gap={1}>
                                                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                                                    <Image src={menuGTM} height={20} width={20} alt="mgs mood global services smart contracts" priority></Image>
                                                    <Typography component="span" variant="body2">GTM & Legal</Typography>
                                                </Stack>
                                                <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                    Market insight with<br />legal precision
                                                </Typography>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="h6">
                                        Products
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[800px] grid-cols-1 gap-x-3 gap-y-3">
                                        <NavigationMenuContentItem href="/products/launch">
                                            <Stack direction={"row"} alignItems={"stretch"} justifyContent={"space-between"} gap={1.5}>
                                                <Stack alignItems={"center"} justifyContent={"center"} sx={{ overflow: "hidden", width: "15%" }}>
                                                    <Image src={menuLaunch} width={80} height={80} alt="launch" priority style={{
                                                        width: "100%",
                                                        height: "100%"
                                                    }}></Image>
                                                </Stack>
                                                <Stack gap={1} width={"70%"} height={"100%"} justifyContent={"space-between"}>
                                                    <Typography component="span" variant="subtitle1" color={theme.palette.brand.mgsPurple1.main}>Launch your business online with SiteLab’s AI</Typography>
                                                    <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                        Generated websites, tailored for SMEs. Enjoy quick setup, cost-effective solutions, and no technical expertise needed to create a professional, modern website.
                                                    </Typography>
                                                </Stack>
                                                <Stack flexGrow={1} justifyContent={"end"}>
                                                    <SideTabbedButton color="#1D1D1D" shadowColor="#292929" height={40} hoverShiftX={1.5} hoverShiftY={-1}>
                                                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                                                            <Typography component={"span"} variant="h6" sx={{
                                                                whiteSpace: "nowrap"
                                                            }}>
                                                                Coming soon
                                                            </Typography>
                                                        </Stack>
                                                    </SideTabbedButton>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/products/explore">
                                            <Stack direction={"row"} alignItems={"stretch"} justifyContent={"space-between"} gap={1.5}>
                                                <Stack alignItems={"center"} justifyContent={"center"} sx={{ overflow: "hidden", width: "15%" }}>
                                                    <Image src={menuExplore} width={80} height={80} alt="launch" priority style={{
                                                        width: "100%",
                                                        height: "100%"
                                                    }}></Image>
                                                </Stack>
                                                <Stack gap={1} width={"70%"} height={"100%"} justifyContent={"space-between"}>
                                                    <Typography component="span" variant="subtitle1" color={theme.palette.brand.mgsPurple1.main}>Explore all EVM-compatible blockchains </Typography>
                                                    <Typography component="span" variant="body2" color={theme.palette.text.secondary}>
                                                        Query wallet addresses, retrieve transaction details, or append custom notes through natural conversation — faster and smarter than traditional tools like Blockscan
                                                    </Typography>
                                                </Stack>
                                                <Stack flexGrow={1} justifyContent={"end"}>
                                                    <SideTabbedButton color="#1D1D1D" shadowColor="#292929" height={40} hoverShiftX={1.5} hoverShiftY={-1}>
                                                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                                                            <Typography component={"span"} variant="h6" sx={{
                                                                whiteSpace: "nowrap"
                                                            }}>
                                                                Coming soon
                                                            </Typography>
                                                        </Stack>
                                                    </SideTabbedButton>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/blog" className="nav-pill">
                                    <Typography component={"span"} variant="h6">
                                        Blog
                                    </Typography>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="h6" sx={{
                                        whiteSpace: "nowrap"
                                    }}>
                                        About us
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[800px] h-[275px] items-stretch [grid-template-columns:1fr_1px_1fr_1px_1fr]">
                                        <PlainContentItem href="/team" className="pr-3">
                                            <Stack paddingX={1.5} paddingTop={0.5} paddingBottom={1.5}>
                                                <Typography component="span" variant="subtitle1" color={theme.palette.brand.mgsPurple1.main}>Team</Typography>
                                                <Stack alignItems={"center"} justifyContent={"center"} paddingX={2} paddingTop={8}>
                                                    <Image src={menuTeam} width={150} height={75} alt="team"></Image>
                                                </Stack>
                                            </Stack>
                                        </PlainContentItem>
                                        <div aria-hidden className="bg-[#292929]" />
                                        <PlainContentItem href="/vacancies" className="px-3">
                                            <Stack height={"100%"} justifyContent={"space-between"} paddingX={1} paddingTop={0.5} paddingBottom={1.5}>
                                                <Typography component="span" variant="subtitle1" color={theme.palette.brand.mgsPurple1.main}>Careers</Typography>
                                                <Typography component="span" variant="body2">
                                                    Check out our open roles and become part of a team that’s shaping the future
                                                </Typography>
                                                <SideTabbedButton fullWidth color="#1D1D1D" shadowColor="#292929" height={40} hoverShiftX={1.5} hoverShiftY={-1}>
                                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                                                        <Typography component={"span"} variant="h6" sx={{
                                                            whiteSpace: "nowrap"
                                                        }}>
                                                            Join the team
                                                        </Typography>
                                                    </Stack>
                                                </SideTabbedButton>
                                            </Stack>
                                        </PlainContentItem>
                                        <div aria-hidden className="bg-[#292929]" />
                                        <PlainContentItem href="/" className="pl-3">
                                            <Stack height={"100%"} justifyContent={"space-between"} paddingX={1.5} paddingTop={0.5} paddingBottom={1.5}>
                                                <Typography component="span" variant="subtitle1" color={theme.palette.brand.mgsPurple1.main}>Portfolio</Typography>
                                                <Stack alignItems={"center"} justifyContent={"center"} paddingX={2}>
                                                    <Image src={menuPortfolio} width={150} height={75} alt="team"></Image>
                                                </Stack>
                                                <SideTabbedButton fullWidth color="#1D1D1D" shadowColor="#292929" height={40} hoverShiftX={1.5} hoverShiftY={-1}>
                                                    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                                                        <Typography component={"span"} variant="h6" sx={{
                                                            whiteSpace: "nowrap"
                                                        }}>
                                                            View
                                                        </Typography>
                                                    </Stack>
                                                </SideTabbedButton>
                                            </Stack>
                                        </PlainContentItem>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:block">
                    <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                        <div className="flex items-center justify-center gap-1">
                            <Typography component="span" variant="h6" marginRight={0.5}>
                                Contact us&nbsp;
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                </span>
                            </span>
                        </div>
                    </SideTabbedButton>
                </div>
                <Stack display={{ xs: "block", lg: "none" }} direction="row" alignItems="center" justifyContent="end" gap={1}>
                    <Button size="medium" variant="contained" color="primary" sx={{
                        backgroundColor: "transparent",
                        backgroundImage: `url(${mobileContactButtonBg.src})`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        color: theme.palette.text.primary,
                        fontWeight: 400,
                        fontSize: "1.1rem",
                        paddingX: 2.5,
                        paddingTop: 0.5,
                        paddingBottom: 0.75,
                        textTransform: "none",
                    }}
                    onClick={() => {
                        window.location.href = "/contact";
                    }}
                    >
                        Contact us
                    </Button>
                    <IconButton>
                        <Image src={mobileMenuButton} alt="menu button" width={35} height={35} style={{ display: "block" }} />
                    </IconButton>
                </Stack>
            </div>
        </header>
    );
}
