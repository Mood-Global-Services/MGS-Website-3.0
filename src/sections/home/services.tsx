"use client"

import { useRef } from "react";
import { Stack } from "@mui/material";
import ServicesMarqueeTitle from "@/components/home/servicesTitleMarquee";
import ServicesLayer2Banner from "@/components/home/servicesLayer2Banner";
import ServicesList from "@/components/home/servicesList";

const Services = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <Stack
            ref={heroRef}
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingX={6}
            position="relative"
            gap={4}
        >
            <ServicesMarqueeTitle />
            <ServicesLayer2Banner />
            <ServicesList />
        </Stack>
    );
};

export default Services;