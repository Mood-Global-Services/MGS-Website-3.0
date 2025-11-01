'use client';

import "@/styles/carousel.css"
import dynamic from 'next/dynamic';
import { Stack, Box } from '@mui/material';
import Image from "next/image";
import theme from "@/theme/theme";
import type { ButtonGroupProps } from 'react-multi-carousel';
import { useState } from 'react';

import buttonArrow from "@/assets/images/buttonArrow.webp"

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

// Cards:
import FractionnaireCard from "@/components/home/portfolioSliderCards/fractionnaire";
import ColichainCard from './portfolioSliderCards/colichain';
import TrustifyCard from './portfolioSliderCards/trustify';
import UnicoverCard from './portfolioSliderCards/unicover';
import MorningsideCard from './portfolioSliderCards/morningside';
import ColiseumCard from './portfolioSliderCards/coliseum';
import ModusCard from './portfolioSliderCards/modus';
import SpyralCard from './portfolioSliderCards/spyral';


const CustomButtonGroup = ({ next, previous }: ButtonGroupProps) => (
  <>
    <Arrow side="left" onClick={() => previous?.()}>
        <Image src={buttonArrow} alt="arrow" width={100} height={100} className="arrow-image" style={{
            transform: "rotate(180deg)",
        }} />
    </Arrow>
    <Arrow side="right" onClick={() => next?.()}>
        <Image src={buttonArrow} alt="arrow" width={100} height={100} className="arrow-image" />
    </Arrow>
  </>
);

function Arrow({
  side, onClick, children,
}: { side: 'left'|'right'; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
        left: side === 'left' ? { xs: -10, md: -16 } : 'auto',
        right: side === 'right' ? { xs: -10, md: -16 } : 'auto',
        zIndex: 5, width: { xs: 36, md: 44 }, height: { xs: 36, md: 44 },
        borderRadius: '9999px', bgcolor: theme.palette.background.default, border: `6px solid ${theme.palette.background.default}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,0,0,0.15)', userSelect: 'none',
        "& .arrow-image": {
          "&:hover": {
            filter: "brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(2000%) hue-rotate(205deg) contrast(95%)",
          },
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
    superLargeDesktop: { breakpoint: { max: 4000, min: 1820 }, items: 3 },
    desktop:          { breakpoint: { max: 1820, min: 1024 }, items: 3 },
    tablet:           { breakpoint: { max: 1024, min: 640 },  items: 2 },
    mobile:           { breakpoint: { max: 640,  min: 0 },    items: 1 },
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
        '& .carousel-container': { width: '100%', overflow: 'hidden' },
        // GAP between items → set half the desired gap as horizontal padding:
        // e.g. 32px gap on desktop = '0 16px'
        '& .carousel-item': { padding: { xs: '0 10px', md: '0 16px', lg: '0 6px' } },
      }}
    >
      <Carousel
        responsive={responsive}
        infinite
        swipeable
        autoPlay
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroup />}
        containerClass="carousel-container"
        itemClass="carousel-item"
        sliderClass="slider"
        afterChange={handleAfterChange}
      >
        <FractionnaireCard />
        <ColichainCard />
        <TrustifyCard />
        <UnicoverCard />
        <SpyralCard />
        <MorningsideCard />
        <ColiseumCard />
        <ModusCard />
      </Carousel>
    </Stack>
  );
};

export default PortfolioSlider;
