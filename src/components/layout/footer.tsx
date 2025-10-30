'use client';

import { Stack, Typography, Box, Link as MUILink } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';
import theme from '@/theme/theme';


import notionIcon from '@/assets/images/icons/notionIcon.webp';
import linkedinIcon from '@/assets/images/icons/linkedinIcon.webp';
import githubIcon from '@/assets/images/icons/githubIcon.webp';
import xIcon from '@/assets/images/icons/XIcon.webp';
import instagramIcon from '@/assets/images/icons/instagramIcon.webp';

export default function Footer() {
    return (
        <Stack
            component="footer"
            width="100%"
            maxWidth="100%"
            sx={{
                color: 'text.primary',
                pt: { xs: 6, md: 10 },
                pb: { xs: 4, md: 3 },
            }}
        >
            {/* Content container */}
            <Stack
                maxWidth="100%"
                width="100%"
                direction={{ xs: 'column', md: 'row' }}
                gap={{ xs: 6, md: 8, lg: 12 }}
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ mx: 'auto', px: { xs: 2, sm: 4, lg: 8 } }}
            >
                {/* Left: Logo + blurb + socials */}
                <Stack width={{ xs: "100%", md: "38%" }} gap={3}>
                    <Box sx={{ width: 140, height: 'auto' }}>
                        <Image
                            src={logo}
                            alt="Mood Global Services"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                        />
                    </Box>

                    <Stack gap={1}>
                        <Typography variant="h5" fontWeight={500}>
                            Mood Global Services B.V.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 520, lineHeight: 1.6 }}>
                            A blockchain firm dedicated to promoting business
                            growth through digital infrastructure solutions.
                        </Typography>
                    </Stack>

                    {/* Social icons (placeholders) */}
                    <Stack direction="row" gap={2} alignItems="center">
                        <MUILink href="https://www.notion.so/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={notionIcon} alt="Notion" width={44} height={44} />
                        </MUILink>
                        <MUILink href="https://www.linkedin.com/company/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinIcon} alt="LinkedIn" width={44} height={44} />
                        </MUILink>
                        <MUILink href="https://www.github.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={githubIcon} alt="GitHub" width={44} height={44} />
                        </MUILink>
                        <MUILink href="https://www.x.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={xIcon} alt="X" width={44} height={44} />
                        </MUILink>
                        <MUILink href="https://www.instagram.com/moodglobalservices" target="_blank" rel="noopener noreferrer">
                            <Image src={instagramIcon} alt="Instagram" width={44} height={44} />
                        </MUILink>
                    </Stack>
                </Stack>

                {/* Middle: Navigate */}
                <Stack width={{ xs: "100%", md: "22%" }} gap={2}>
                    <Typography variant="h6" fontWeight={300}>Navigate</Typography>
                    <Stack gap={2.25}>
                        <MUILink href="/" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>Home</MUILink>
                        <MUILink href="/services" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>Services</MUILink>

                        <MUILink href="/siteLab" underline="none" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            
                        }}
                        onClick={(e) => {
                           e.preventDefault();
                        }}
                        >
                            <FooterRowWithBadge label="SiteLab" />
                        </MUILink>
                        <MUILink href="/blockAI" underline="none" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        >
                            <FooterRowWithBadge label="BlockAI" />
                        </MUILink>

                        <MUILink href="/about-us" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>About Us</MUILink>
                    </Stack>
                </Stack>

                {/* Middle-right: Legal */}
                <Stack width={{ xs: "100%", md: "22%" }} gap={2}>
                    <Typography variant="h6" fontWeight={300}>Legal</Typography>
                    <Stack gap={2.25}>
                        <MUILink href="/privacy-policy" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>Privacy Policy</MUILink>
                        <MUILink href="/terms-and-conditions" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>Terms and Conditions</MUILink>
                        <MUILink href="/cookies-policy" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>Cookies policy</MUILink>
                    </Stack>
                </Stack>

                {/* Right: Contact */}
                <Stack width={{ xs: "100%", md: "22%" }} gap={2}>
                    <Typography variant="h6" fontWeight={300}>Contact</Typography>
                    <Stack gap={2.25} color="text.secondary">
                        <MUILink href="https://maps.app.goo.gl/1234567890" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>
                            Overtoom 141, 1054 HG
                            <br />Amsterdam, Netherlands
                        </MUILink>

                        <MUILink
                            href="mailto:info@moodglobalservices.com"
                            underline="hover"
                            color="text.secondary"
                            variant="body2"
                            sx={{
                                width: 'fit-content',
                                transition: 'color 300ms ease',
                                "&:hover": {
                                    color: theme.palette.text.primary,
                                }
                            }}
                        >
                            info@moodglobalservices.com
                        </MUILink>

                        <MUILink href="https://www.kvk.nl/zoeken/bedrijf/85502081" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>KVK: 85502081</MUILink>
                        <MUILink href="tel:+31619565119" underline="hover" color="text.secondary" variant="body2" sx={{
                            width: 'fit-content',
                            transition: 'color 300ms ease',
                            "&:hover": {
                                color: theme.palette.text.primary,
                            }
                        }}>+31-6-19565119</MUILink>
                    </Stack>
                </Stack>
            </Stack>

            {/* Bottom bar */}
            <Stack
                sx={{
                    mt: { xs: 6, md: 10 },
                    borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                }}
            >
                <Stack
                    sx={{
                        maxWidth: "100%",
                        px: { xs: 2, sm: 4, lg: 8 },
                        pt: 2.5,
                    }}
                >
                    <Typography variant="subtitle2" fontWeight={300} color="text.secondary">
                        © {new Date().getFullYear()} Mood Global Services B.V. All rights reserved.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

/* — Helpers — */

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <Typography
            variant="body2"
            fontWeight={300}
            color="text.secondary"
            sx={{
                cursor: 'pointer',
                transition: 'color 160ms ease',
                '&:hover': { color: 'text.primary' },
            }}
        >
            {children}
        </Typography>
    );
}

function FooterRowWithBadge({ label }: { label: string }) {
    return (
        <Stack direction="row" alignItems="center" gap={1.25}>
            <FooterLink>{label}</FooterLink>
            <Badge>Coming Soon</Badge>
        </Stack>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                px: 1.25,
                py: 0.25,
                borderRadius: 1.25,
                border: `1px solid ${theme.palette.brand.border1.main}`,
                color: 'text.secondary',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                textDecoration: 'none !important',
                animation: 'none !important',
                transition: 'none !important',
            }}
        >
            {children}
        </Box>
    );
}
