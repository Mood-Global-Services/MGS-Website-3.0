"use client"

import { Stack } from "@mui/material";
import ServicesMarqueeTitle from "@/components/home/servicesTitleMarquee";
import ServicesLayer2Banner from "@/components/home/servicesLayer2Banner";
import ServicesList from "@/components/home/servicesList";
import MobileServicesList from "@/components/home/mobile/mobileServicesList";

const Services = () => {

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingX={{ xs: 2, lg: 6 }}
            position="relative"
            gap={{ xs: 2, lg: 4 }}
        >
            <ServicesMarqueeTitle />
            <ServicesLayer2Banner />
            <ServicesList />
            <MobileServicesList />
        </Stack>
    );
};

export default Services;