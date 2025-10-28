'use client';

import dynamic from 'next/dynamic';
import { Stack, Box, Typography } from '@mui/material';
import Image from "next/image";
import theme from "@/theme/theme";
import type { ButtonGroupProps } from 'react-multi-carousel';
import { useState } from 'react';

import buttonArrow from "@/assets/images/buttonArrow.webp"
import YouCanFindUsSliderCard from './youCanFindUsSliderCard';

import findUsAsset from "@/assets/images/findUsAsset.webp"
import findUsImage1 from "@/assets/images/findUsImage1.svg?url"
import findUsImage2 from "@/assets/images/findUsImage2.svg?url"

import EastIcon from '@mui/icons-material/East';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

// Cards:



const CustomButtonGroup = ({ next, previous }: ButtonGroupProps) => (
    <Stack
        width="fit-content"
        height="fit-content"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{
            position: "absolute",
            left: { xs: 8, md: 12 },
            bottom: { xs: 8, md: 0 },
            zIndex: 10,
            gap: 1, // small space between arrows (theme.spacing(1))
        }}
    >
        <Arrow side="left" onClick={() => previous?.()}>
            <Image src={buttonArrow} alt="Previous" width={50} height={50} className="arrow-image" style={{ transform: "rotate(180deg)" }} />
        </Arrow>

        <Arrow side="right" onClick={() => next?.()}>
            <Image src={buttonArrow} alt="Next" width={50} height={50} className="arrow-image" />
        </Arrow>
    </Stack>
);


function Arrow({
    side, onClick, children,
}: { side: 'left' | 'right'; onClick?: () => void; children: React.ReactNode }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                // no absolute positioning here
                width: { xs: 20, md: 28 },
                height: { xs: 20, md: 28 },
                borderRadius: '9999px',
                bgcolor: theme.palette.background.default,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                userSelect: 'none',
                // tint image when hovering the button (not just the img)
                "&:hover .arrow-image": {
                    filter:
                        "brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(2000%) hue-rotate(205deg) contrast(95%)",
                },
            }}
            role="button"
            aria-label={side === 'left' ? 'Previous' : 'Next'}
        >
            {children}
        </Box>
    );
}

const PortfolioSlider = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1820 }, items: 2 },
        desktop: { breakpoint: { max: 1820, min: 1024 }, items: 2 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
    };

    // track which index is visually centered
    const [, setCenterIdx] = useState(1); // start at 1 (middle of first 3)

    const handleAfterChange = (previousSlide: number, { slidesToShow }: { slidesToShow: number }) => {
        const middle = previousSlide + Math.floor(slidesToShow / 2);
        setCenterIdx(middle);
    };

    return (
        <Stack
            width="100%"
            alignItems="center"
            paddingY={{ xs: 1, lg: 2 }}
            position="relative"
            sx={{
                '& .carousel-container': { width: '100%', height: '100%' },
              
                // Keep sides clipped, but allow vertical overflow (for the pop-out image)
                '& .react-multi-carousel-list': {
                  overflowX: 'clip',
                  overflowY: 'visible',
                },
              
                // Track can be visible; list still clips X
                '& .react-multi-carousel-track': {
                  overflow: 'visible',
                },
              
                '& .carousel-item': {
                  padding: { xs: '0 10px', md: '0 8px', lg: '0 6px' },
                  height: '100%',
                  marginBottom: { xs: 2, md: 2, lg: 4, xl: 6 },
                  overflow: 'visible',
                },
              }}
              
        >
            <Carousel
                responsive={responsive}
                infinite
                swipeable
                
                arrows={false}
                renderButtonGroupOutside
                customButtonGroup={<CustomButtonGroup />}
                containerClass="carousel-container"
                itemClass="carousel-item"
                sliderClass="slider"
                afterChange={handleAfterChange}
            >
                <YouCanFindUsSliderCard cardContent={
                    <Stack flexGrow={1} gap={1} direction="column" alignItems="center" justifyContent="end" position="relative">
                        <Image src={findUsImage1} alt="Find Us Image 1" width={500} height={500} className="find-us-image" style={{
                            width: "92%",
                            height: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "-5%",
                            marginBottom: "-8%",
                            zIndex: 2,
                        }} />
                        <Stack width="92%" direction="row" alignItems="center" justifyContent="end" gap={0.5} sx={{
                                marginTop: "-3%",
                                marginBottom: "4%",
                            }}>
                            <Typography variant="caption" fontWeight={400} color={theme.palette.text.primary} textAlign="end">
                                LinkedIn
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <EastIcon fontSize="small" style={{ transform: "rotate(-45deg)", fontSize: "1rem" }} />
                                </span>
                            </span>
                        </Stack>
                        <Image src={findUsAsset} alt="Find Us Asset" width={100} height={100} className="find-us-asset" style={{
                            width: "92%",
                            height: "100%",
                            objectFit: "cover",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }} />
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={4} paddingY={2} paddingX={4}>
                            <Stack gap={0.5}>
                                <Typography variant="h6" fontWeight={600} color={theme.palette.text.primary} textAlign="center">
                                    03
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={300} color={theme.palette.text.primary} textAlign="center">
                                    AUG
                                </Typography>
                            </Stack>
                            <Typography variant="body2" fontSize="0.8rem !important" fontWeight={400} color={theme.palette.text.secondary}>
                                Dive into highlights from our recent events and discover real insights, strategies, and innovations shaping the decentralized world.
                            </Typography>
                        </Stack>
                    </Stack>
                } />
                <YouCanFindUsSliderCard cardContent={
                    <Stack flexGrow={1} gap={1} direction="column" alignItems="center" justifyContent="end">
                        <Image src={findUsImage2} alt="Find Us Image 2" width={500} height={500} className="find-us-image" style={{
                            width: "92%",
                            height: "auto",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "-5%",
                            marginBottom: "-8%",
                            zIndex: 2,
                        }} />
                        <Stack width="92%" direction="row" alignItems="center" justifyContent="end" gap={0.5} sx={{
                                marginTop: "-3%",
                                marginBottom: "4%",
                            }}>
                            <Typography variant="caption" fontWeight={400} color={theme.palette.text.primary} textAlign="end">
                                LinkedIn
                            </Typography>
                            <span className="arrow-clip">
                                <span className="arrow-slide">
                                    <EastIcon fontSize="small" style={{ transform: "rotate(-45deg)", fontSize: "1rem" }} />
                                </span>
                            </span>
                        </Stack>
                        <Image src={findUsAsset} alt="Find Us Asset" width={100} height={100} className="find-us-asset" style={{
                            width: "92%",
                            height: "100%",
                            objectFit: "cover",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }} />
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={4} paddingY={2} paddingX={4}>
                            <Stack gap={0.5}>
                                <Typography variant="h6" fontWeight={600} color={theme.palette.text.primary} textAlign="center">
                                    04
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={300} color={theme.palette.text.primary} textAlign="center">
                                    AUG
                                </Typography>
                            </Stack>
                            <Typography variant="body2" fontSize="0.8rem !important" fontWeight={400} color={theme.palette.text.secondary}>
                                On-chain markets are the future, and we’re building them with automation and decentralized indices.
                            </Typography>
                        </Stack>
                    </Stack>
                } />
            </Carousel>
        </Stack>
    );
};

export default PortfolioSlider;
