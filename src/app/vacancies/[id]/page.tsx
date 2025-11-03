"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { vacancies, type Vacancy } from "@/data/vacancies";
import VacancyHero from "@/sections/vacancies/vacancyHero";
import { Box, Stack, Typography, Divider, InputBase, Checkbox } from "@mui/material";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import UploadField from "@/components/generic/uploadField";
import theme from "@/theme/theme";
import Image from "next/image";
import Footer from "@/components/layout/footer";

import arrow from "@/assets/images/icons/arrow.webp"



export default function VacancyPage() {

    const params = useParams();
    const id = params.id as string;
    const vacancy = vacancies.find((vacancy: Vacancy) => vacancy.id === id);

    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [linkedinProfile, setLinkedinProfile] = useState("");
    const [portoflio, setPortoflio] = useState("");
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
    const [agreeToProcessing, setAgreeToProcessing] = useState(false);

    return (
        <Stack width={"100%"} alignItems={"center"} gap={4}>
            <VacancyHero title={vacancy?.title ?? ""} />
            <Stack width={{ xs: "90%", lg: "60%" }} marginX="auto" sx={{
                border: `1px solid ${theme.palette.brand.border1.main}`,
                borderRadius: 2,
                backgroundColor: "#0F0F0F",
                padding: 4,
            }}>
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        About this role
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.aboutThisRole ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={400} textTransform="capitalize">
                                            {key}:&nbsp;
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                        {value}
                                    </Typography>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Role Overview
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.roleOverview ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Requirements
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.requirements ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Preferred Qualifications
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.qualifications ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack gap={3}>
                    <Typography variant="h5" component="h5" fontWeight={500}>
                        Why Join Us?
                    </Typography>
                    <Stack gap={1}>
                        {
                            Object.entries(vacancy?.whyJoinUs ?? {}).map(([key, value]) => (
                                <Stack key={key} direction="row" alignItems="center">
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <Box sx={{
                                            width: 10,
                                            height: 10,
                                            backgroundColor: theme.palette.brand.mgsBlue2.main,
                                        }}></Box>
                                        <Typography variant="body1" component="p" fontWeight={300} color={theme.palette.text.secondary} textTransform="capitalize">
                                            {value}
                                        </Typography>
                                    </Stack>

                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Divider sx={{
                    borderBottom: `1px solid ${theme.palette.brand.border1.main}`,
                    marginY: 5,
                }} />
                <Stack width="100%" height="100%" direction={{xs: "column", lg: "row"}} alignItems="start" justifyContent="center" gap={2}>
                    <Stack width={{xs: "100%", lg: "50%"}} gap={2}>
                        <Typography variant="h2" component="h2" className="chno" fontWeight={500}>
                            Apply for this position
                        </Typography>
                    </Stack>
                    <Stack width={{xs: "100%", lg: "50%"}} gap={2} paddingTop={2}>
                        <InputBase
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                            type="text"
                            sx={{
                                width: "100%",
                                border: "1px solid #2F2F2F",
                                borderRadius: 2,
                                padding: 1,
                                background: "transparent",
                                color: theme.palette.text.primary,
                                "&::placeholder": {
                                    color: theme.palette.text.secondary,
                                },
                                "&:hover": {
                                    borderColor: "#FFFFFF",
                                }
                            }}
                        />
                        <InputBase
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            placeholder="Email Address"
                            type="email"
                            sx={{
                                width: "100%",
                                border: "1px solid #2F2F2F",
                                borderRadius: 2,
                                padding: 1,
                                background: "transparent",
                                color: theme.palette.text.primary,
                                "&::placeholder": {
                                    color: theme.palette.text.secondary,
                                },
                                "&:hover": {
                                    borderColor: "#FFFFFF",
                                }
                            }}
                        />
                        <InputBase
                            value={linkedinProfile}
                            onChange={(e) => setLinkedinProfile(e.target.value)}
                            placeholder="Linkedin Profile (URL)"
                            type="url"
                            sx={{
                                width: "100%",
                                border: "1px solid #2F2F2F",
                                borderRadius: 2,
                                padding: 1,
                                background: "transparent",
                                color: theme.palette.text.primary,
                                "&::placeholder": {
                                    color: theme.palette.text.secondary,
                                },
                                "&:hover": {
                                    borderColor: "#FFFFFF",
                                }
                            }}
                        />
                        <InputBase
                            value={portoflio}
                            onChange={(e) => setPortoflio(e.target.value)}
                            placeholder="Portoflio (URL)"
                            type="url"
                            sx={{
                                width: "100%",
                                border: "1px solid #2F2F2F",
                                borderRadius: 2,
                                padding: 1,
                                background: "transparent",
                                color: theme.palette.text.primary,
                                "&::placeholder": {
                                    color: theme.palette.text.secondary,
                                },
                                "&:hover": {
                                    borderColor: "#FFFFFF",
                                }
                            }}
                        />
                        <UploadField value={resumeFile} onChange={setResumeFile} label="Upload Resume" />
                        <UploadField value={coverLetterFile} onChange={setCoverLetterFile} label="Upload Cover Letter" />
                        <Stack width="100%" direction={{ xs: "column", lg: "row" }} alignItems="center" justifyContent={{ xs: "center", lg: "space-between" }} mt={2} gap={{ xs: 2, lg: 0 }}>
                            <Stack width={{ xs: "100%", lg: "fit-content" }} direction="row" alignItems="center" justifyContent={{ xs: "start", lg: "center" }} gap={1}>
                                <Checkbox
                                    edge="start"
                                    checked={agreeToProcessing}
                                    onChange={() => setAgreeToProcessing(!agreeToProcessing)}
                                    tabIndex={-1}
                                    disableRipple
                                    sx={{
                                        paddingRight: 0,
                                        color: theme.palette.text.primary,
                                        "&.Mui-checked": { color: theme.palette.text.primary },
                                    }}
                                />
                                <Typography component="span" variant="caption" fontWeight={300} color={theme.palette.text.secondary}>
                                    I agree to the processing of personal data
                                </Typography>
                            </Stack>
                            <Stack display={{ xs: "none", lg: "block" }} width="fit-content">
                                <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={0.5}>
                                            Send
                                        </Typography>
                                        <span className="arrow-clip">
                                            <span className="arrow-slide">
                                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                            </span>
                                        </span>
                                    </div>
                                </SideTabbedButton>
                            </Stack>
                            <Stack display={{ xs: "block", lg: "none" }} width="100%" justifyContent="center" alignItems="center">
                                <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={0.5}>
                                            Send
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

            </Stack>
            <Stack width={"100%"} alignItems={"center"} position={"relative"} sx={{
                borderTop: `1px solid ${theme.palette.brand.border1.main}`,
                marginTop: 6,
            }}>
                <Footer />
            </Stack>
        </Stack>
    );
}
