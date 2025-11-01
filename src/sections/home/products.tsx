"use client"

import { Stack } from "@mui/material";
import ProductsMarqueeTitle from "@/components/home/ProductsMarqueeTitle";
import ProductsBanner1 from "@/components/home/productsBanner1";
import ProductsBanner2 from "@/components/home/productsBanner2";

const Products = () => {

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            paddingX={{ xs: 2, lg: 6 }}
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