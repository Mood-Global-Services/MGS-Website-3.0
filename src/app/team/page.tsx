import { Stack, Typography, Grid } from "@mui/material";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";
import Image from "next/image";
import SideTabbedButton from "@/components/generic/SideTabbedButton";

import NetherlandsFlag from "@/assets/images/teamPage/NL.svg?url";
import UkraineFlag from "@/assets/images/teamPage/UA.svg?url";
import ItalyFlag from "@/assets/images/teamPage/IT.svg?url";
import UnitedKingdomFlag from "@/assets/images/teamPage/GB.svg?url";
import IndiaFlag from "@/assets/images/teamPage/IN.svg?url";
import PakistanFlag from "@/assets/images/teamPage/PK.svg?url";
import NigeriaFlag from "@/assets/images/teamPage/NG.svg?url";
import IranFlag from "@/assets/images/teamPage/IR.svg?url";
import MoroccoFlag from "@/assets/images/teamPage/MA.svg?url";
import SingaporeFlag from "@/assets/images/teamPage/SG.svg?url";

import teamMap from "@/assets/images/teamPage/teamMap.svg?url";

import { teamMembers, type TeamMember } from "@/data/team";

import weAreHiringBg from "@/assets/images/teamPage/weAreHiringBg.webp";
import arrow from "@/assets/images/icons/arrow.webp"

import teamGradient from "@/assets/images/teamPage/teamGradient.webp";

export default function TeamPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} paddingTop={{ xs: 4, lg: 10 }} position="relative" overflow="hidden">
            <Stack width="100%" height="100%" position="relative" alignItems="center">
                <Stack alignItems="center" justifyContent="center" gap={4}>
                    <Typography variant="h1" component="h1" fontSize={{ xs: "2rem !important", lg: "3.75rem !important" }} className="chno" fontWeight={500} textAlign="center" textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main}>
                        Meet our Team
                    </Typography>
                    <Stack width={{ xs: "95%", lg: "60%" }} marginX="auto" gap={2} direction="row" alignItems="center" justifyContent="center" flexWrap="wrap">
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={NetherlandsFlag} alt="Netherlands Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Netherlands
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={ItalyFlag} alt="Italy Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Italy
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={UnitedKingdomFlag} alt="United Kingdom Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                United Kingdom
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={UkraineFlag} alt="Ukraine Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Ukraine
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={IndiaFlag} alt="India Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                India
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={PakistanFlag} alt="Pakistan Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Pakistan
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={NigeriaFlag} alt="Nigeria Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Nigeria
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={IranFlag} alt="Iran Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Iran
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={MoroccoFlag} alt="Morocco Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Morocco
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1} sx={{
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: 1,
                            border: `1px solid #323941`,
                            backgroundColor: "#0A1119",
                            paddingX: 2,
                            paddingY: 1.25,
                            gap: 1,
                        }}>
                            <Image src={SingaporeFlag} alt="Singapore Flag" width={25} height={25} />
                            <Typography variant="body1" component="p" fontWeight={400} fontSize={{ xs: "0.8rem !important", lg: "1rem !important" }}>
                                Singapore
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width="100%" marginX="auto" gap={2} paddingBottom={{ xs: 4, lg: 4 }} marginTop={{ xs: 4, lg: -4 }} overflow="hidden" sx={{
                    scale: { xs: 1.4, lg: 1 },
                }}>
                    <Image src={teamMap} alt="Team Map" width={1000} height={1000} style={{
                        width: "90%",
                        height: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                        objectFit: "cover",
                    }} />
                </Stack>
                <Grid container spacing={{ xs: 2, lg: 4 }} width={{ xs: "95%", lg: "75%" }} marginX="auto" height="fit-content">
                    {teamMembers.map((member: TeamMember) => (
                        <Grid size={{ xs: 6, lg: 3 }} key={member.name}>
                            <Stack width="100%" gap={1.5} className="team-member-card" sx={{
                                border: "solid 1px #EEE4E421",
                                borderRadius: 1.5,
                                minHeight: 300,
                                position: "relative",
                                transition: "border 0.3s ease-in-out",
                                "&:hover": {
                                    "&.team-member-card": {
                                        border: "solid 1.5px #5D5D5D",
                                    },
                                }

                            }}>
                                <Stack height={250} width="100%" position="relative" sx={{
                                    marginTop: member.marginTop,
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    zIndex: 1,
                                    display: { xs: "none", lg: "block" },
                                }}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={1000}
                                        height={1000}
                                        className="team-member-image"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            scale: member.scale,
                                        }}
                                    />
                                </Stack>
                                <Stack height={250} width="100%" position="relative" sx={{
                                    marginTop: member.mobileMarginTop,
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    zIndex: 1,
                                    display: { xs: "block", lg: "none" },
                                }}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={1000}
                                        height={1000}
                                        className="team-member-image"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            scale: member.mobileScale,
                                        }}
                                    />
                                </Stack>
                                <Stack padding={2} gap={1.5} sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 1.5,
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 2,
                                    height: "fit-content",
                                    width: "100%",
                                }}>
                                    <Stack direction="row" alignItems="center" gap={0.5}>
                                        <Typography variant="caption" component="p" fontWeight={300} sx={{
                                            backgroundColor: "#1E1E1E",
                                            paddingX: 1,
                                            paddingY: 0.25,
                                            borderRadius: 1,
                                        }}>
                                            Linkedin
                                        </Typography>
                                        <Typography variant="caption" component="p" fontWeight={300} sx={{
                                            backgroundColor: "#1E1E1E",
                                            paddingX: 1,
                                            paddingY: 0.25,
                                            borderRadius: 1,
                                        }}>
                                            X
                                        </Typography>
                                    </Stack>
                                    <Stack gap={0.5}>
                                        <Stack direction="row" alignItems="center" gap={1}>
                                            <Image src={member.flag} alt={member.name} width={20} height={20} style={{
                                                marginTop: 0.5
                                            }} />
                                            <Typography variant="body1" component="p" fontWeight={400} sx={{
                                                fontSize: { xs: "0.9rem !important", lg: "1.2rem !important" },
                                            }}>
                                                {member.name}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="caption" component="p" fontWeight={300}>
                                            {member.position}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Stack width="100%" alignItems={"center"} position={"relative"} sx={{
                    paddingTop: { xs: 0, lg: 6 },
                    zIndex: 2,
                }}>
                    <Stack width={{ xs: "95%", lg: "50%" }} marginX="auto" marginY={8} direction="row" alignItems="center" justifyContent="center" flexWrap="wrap" sx={{
                        backgroundColor: "#0A1119",
                        borderRadius: 2,
                        border: "solid 0.5px #EEE4E421",
                        backgroundImage: `url(${weAreHiringBg.src})`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "drop-shadow(0px 21px 59.8px rgba(0, 0, 0, 0.27))"
                    }}>
                        <Stack gap={4} alignItems="center" justifyContent="center" padding={{ xs: 4, lg: 8 }}>
                            <Typography variant="h2" component="h2" fontSize="2.75rem !important" className="chno" fontWeight={500} textAlign="center" textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main}>
                                We&apos;re Hiring!
                            </Typography>
                            <Stack gap={2} alignItems="center" justifyContent="center">
                                <Typography variant="h5" component="h5" fontWeight={400} textAlign="center">
                                    Start doing work that matters.
                                </Typography>
                                <Typography variant="body1" component="p" fontWeight={400} textAlign="center" sx={{
                                    width: "60%",
                                }}>
                                    We&apos;re 100% remote team spread all across the world and looking for talented people.
                                </Typography>
                            </Stack>
                            <Stack width="40%" marginX="auto" alignItems="center" justifyContent="center" display={{ xs: "none", lg: "block" }}>
                                <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={1}>
                                            View Open Positions
                                        </Typography>
                                        <span className="arrow-clip">
                                            <span className="arrow-slide">
                                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                            </span>
                                        </span>
                                    </div>
                                </SideTabbedButton>
                            </Stack>
                            <Stack width="80%" marginX="auto" alignItems="center" justifyContent="center" display={{ xs: "block", md: "none" }}>
                                <SideTabbedButton fullWidth paddingX={10} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={1}>
                                            View Open Positions
                                        </Typography>
                                        <span className="arrow-clip">
                                            <span className="arrow-slide">
                                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                            </span>
                                        </span>
                                    </div>
                                </SideTabbedButton>
                            </Stack>
                        </Stack>
                    </Stack>

                </Stack>
                <Stack width="100%" height="60vh" position="relative" alignItems="center" sx={{
                    position: "absolute",
                    bottom: "0%",
                    left: 0,
                    right: 0,
                    zIndex: 0,
                    overflow: "hidden",
                    backgroundImage: `url(${teamGradient.src})`,
                    backgroundSize: "120% 110%",
                    backgroundPosition: "center -10%",
                    backgroundRepeat: "no-repeat",
                }}>
                    <Stack sx={{
                        width: "100%",
                        height: "35%",
                        background: "linear-gradient(180deg, #0B0B0B 0%, rgba(11, 11, 11, 0) 100%);",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                    }}>

                    </Stack>
                </Stack>
            </Stack>
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
