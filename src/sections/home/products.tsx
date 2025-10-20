"use client"

import { useRef } from "react";
import { Stack } from "@mui/material";
import ProductsMarqueeTitle from "@/components/home/ProductsMarqueeTitle";
import ProductsBanner1 from "@/components/home/productsBanner1";
import ProductsBanner2 from "@/components/home/productsBanner2";

const Products = () => {
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
            <ProductsMarqueeTitle />
            <ProductsBanner1 />
            <ProductsBanner2 />
        </Stack>
    );
};

export default Products;