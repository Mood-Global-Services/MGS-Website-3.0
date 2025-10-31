"use client";

import * as React from "react";
import { useEffect } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
    Divider,
    Link as MUILink,
    Box,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import theme from "@/theme/theme";

import mobileMenuBg from "@/assets/images/mobileMenuBg.webp";
import mobileMenuChevron from "@/assets/images/icons/mobileMenuChevron.svg?url";

import notionIcon from '@/assets/images/icons/notionIcon.webp';
import linkedinIcon from '@/assets/images/icons/linkedinIcon.webp';
import githubIcon from '@/assets/images/icons/githubIcon.webp';
import xIcon from '@/assets/images/icons/XIcon.webp';
import instagramIcon from '@/assets/images/icons/instagramIcon.webp';

type NavItem = { label: string; href: string; disabled?: boolean };

const OFFSET = "5rem"; // distance from the top

type Props = {
    open: boolean;
    closeAction: () => void;
    items: NavItem[];
    width?: number | string;
};

export default function MobileMenu({ open, closeAction, items, width = 340 }: Props) {
    const pathname = usePathname();
    const normalize = (p: string) => (p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={closeAction}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
                sx: {
                    // offset the drawer
                    top: OFFSET,
                    height: `calc(100% - ${OFFSET})`,
                    width,
                    bgcolor: "#0c0c0c",
                    backgroundImage: `url(${mobileMenuBg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "1px solid #292929"
                },
            }}
            // optional: dim the page slightly
            slotProps={{
                backdrop: {
                    sx: { backgroundColor: "transparent" },
                },
            }}
        >
            <Stack width="100%" height="100%" justifyContent="space-between">
                {/* Links */}
                <List disablePadding>
                    {items.map((item, i) => {
                        const path = normalize(pathname || "/");
                        const href = normalize(item.href);
                        const active =
                            path === href ||
                            (href !== "/" && path.startsWith(href + "/"));
                        return (
                            <React.Fragment key={item.href + i}>
                                <ListItem disableGutters disablePadding sx={{
                                    background: "rgba(255,255,255,0.02)",

                                }}>
                                    <ListItemButton
                                        component={item.disabled ? "div" : Link}
                                        href={item.disabled ? undefined : item.href}
                                        onClick={closeAction}
                                        disabled={!!item.disabled}
                                        sx={{
                                            py: 2.25,
                                            px: 3,
                                        }}
                                    >
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                                            <Stack direction="row" alignItems="center" gap={1}>
                                                <Typography
                                                    variant="h6"
                                                    fontWeight="300 !important"
                                                    fontSize="1.2rem !important"
                                                    color={active ? theme.palette.text.primary : theme.palette.text.secondary}
                                                >
                                                    {item.label}
                                                </Typography>
                                                {
                                                    item.disabled ? (
                                                        <Badge>Coming soon</Badge>
                                                    ) : null
                                                }
                                            </Stack>
                                            {
                                                item.disabled ? null : (
                                                    <Image src={mobileMenuChevron} alt="mobile menu chevron" width={12} height={12} style={{ display: "block" }} />
                                                )
                                            }
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                                {i < items.length - 1 && (
                                    <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </List>

                {/* Footer / tagline */}
                <Stack alignItems="center" gap={4} pb={3} px={3}>
                    <Stack spacing={1}>
                        <Typography variant="h6" textAlign="center">
                            Mood Global Services B.V.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="rgba(255,255,255,0.7)"
                            textAlign="center"
                        >
                            A blockchain firm dedicated to promoting business growth through
                            digital infrastructure solutions.
                        </Typography>
                    </Stack>
                    <Stack width="100%" direction="row" gap={2} alignItems="center" justifyContent="center">
                        <MUILink href="https://www.notion.so/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={notionIcon} alt="Notion" width={60} height={60} />
                        </MUILink>
                        <MUILink href="https://www.linkedin.com/company/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinIcon} alt="LinkedIn" width={60} height={60} />
                        </MUILink>
                        <MUILink href="https://www.github.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={githubIcon} alt="GitHub" width={60} height={60} />
                        </MUILink>
                        <MUILink href="https://www.x.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={xIcon} alt="X" width={60} height={60} />
                        </MUILink>
                        <MUILink href="https://www.instagram.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={instagramIcon} alt="Instagram" width={60} height={60} />
                        </MUILink>
                    </Stack>
                </Stack>
            </Stack>
        </Drawer>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                px: 1.25,
                pt: 0.25,
                pb: 0.5,
                borderRadius: 1.25,
                border: `0.3px solid #626262`,
                backgroundColor: "#101010",
                color: 'text.secondary',
                fontSize: '0.9rem',
                textDecoration: 'none !important',
                animation: 'none !important',
                transition: 'none !important',
            }}
        >
            {children}
        </Box>
    );
}