import { Stack, Typography, Grid } from "@mui/material";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";
import Image from "next/image";

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

export default function TeamPage() {

    return (
        <Stack width={"100%"} alignItems={"center"} gap={4} paddingTop={10}>
            <Typography variant="h1" component="h1" fontSize="3.75rem !important" className="chno" fontWeight={500} textAlign="center" textTransform="uppercase" color={theme.palette.brand.mgsBlue1.main}>
                Meet our Team
            </Typography>
            <Stack width="50%" marginX="auto" gap={2} direction="row" alignItems="center" justifyContent="center" flexWrap="wrap">
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
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
                    <Typography variant="body1" component="p" fontWeight={400}>
                        Singapore
                    </Typography>
                </Stack>
            </Stack>
            <Stack width="100%" marginX="auto" gap={2} paddingBottom={4} marginTop={-4} overflow="hidden">
                <Image src={teamMap} alt="Team Map" width={1000} height={1000} style={{
                    width: "90%",
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                    objectFit: "cover",
                }} />
            </Stack>
            <Grid container spacing={4} width="75%" marginX="auto" height="fit-content">
                {teamMembers.map((member: TeamMember) => (
                    <Grid size={3} key={member.name}>
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
                                        <Image src={member.flag} alt={member.name} width={20} height={20} />
                                        <Typography variant="body1" component="p" fontWeight={400}>
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
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
