import { Stack, Typography, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import theme from "src/theme/theme";

// logos
import specialChevron from '@/assets/images/specialChevron.webp'

const ProductsMarqueeTitle = () => {
    return (
        <Stack width={'100%'} alignItems={'center'} justifyContent={'start'} gap={{xs:0, lg:2}} paddingX={{ xs: 2, lg: 4 }} paddingTop={{xs: 4, lg: 6}} marginBottom={{xs:0, lg:6}} position={'relative'} overflow={'hidden'}>
            <Box width={{ xs: '5vw', lg: '6vw' }} height={'100%'} position={'absolute'} left={0} zIndex={2} sx={{
                boxShadow: `5px 0px 80px 50px ${theme.palette.brand.mgsBlack.main}`,
                backgroundColor: theme.palette.brand.mgsBlack.main,
                blur: '8px'
            }} />
            <Stack width={'100%'}>
                <Marquee speed={30} pauseOnHover style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
                    <Stack width={"fit-content"} direction={"row"} alignItems={{xs:"end",lg:"start"}} justifyContent={"center"} gap={1} marginX={{xs:1.5,lg:4}}>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only" style={{
                            transform: "scaleX(-1)"
                        }}></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only" style={{
                            transform: "scaleX(-1)",
                        }}></Image>
                        <Typography variant="h1" className="chno" lineHeight={1} sx={{
                            fontSize: {xs:"2rem !important",lg:"3.375rem !important"},
                            lineHeight: { xs:"1.2 !important",lg:"1 !important"},
                            marginLeft: 1,
                        }}>PRODUCTS</Typography>
                        <Image alt="special chevron mgs" src={specialChevron} height={60} width={40} className="desktop-only"></Image>
                        <Image alt="special chevron mgs" src={specialChevron} height={30} width={20} className="mobile-only"></Image>
                    </Stack>
            </Marquee>
            </Stack>

            <Box width={{ xs: '5vw', lg: '6vw' }} height={'100%'} position={'absolute'} right={0} zIndex={2} sx={{
                boxShadow: `5px 0px 80px 50px ${theme.palette.brand.mgsBlack.main}`,
                backgroundColor: theme.palette.brand.mgsBlack.main,
                blur: '8px'
            }} />
        </Stack>
    )
}

export default ProductsMarqueeTitle;