"use client"
import { useState } from "react";
import { InputBase, Stack, Typography, Collapse, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox, IconButton, ListSubheader, Divider, TextareaAutosize } from "@mui/material";
import Footer from "@/components/layout/footer";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import theme from "@/theme/theme";
import Image from "next/image";

import contactPageBg from "@/assets/images/contactPage/contactPageBg.svg?url";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import arrow from "@/assets/images/icons/arrow.webp"

interface InquiryType {
    title: string;
    options: string[];
}

type SelectedInquiryMap = Record<string, string[]>;



const entityTypes = ["Individual", "Startup", "Corporation", "Institution"];
const inquiryTypes: InquiryType[] = [
    {
        title: "Smart Contracts",
        options: [
            "ERC Standards",
            "Custom Logic",
            "DApps",
            "Oracles",
            "Audits",
        ]
    },
    {
        title: "DeFi",
        options: [
            "DeFi Development",
            "DeFi Audit",
            "DeFi Deployment",
        ]
    },
    {
        title: "NFT",
        options: [
            "NFT Development",
            "NFT Audit",
            "NFT Deployment",
        ]
    },
    {
        title: "L1/L2",
        options: [
            "L1/L2 Development",
            "L1/L2 Audit",
            "L1/L2 Deployment",
        ]
    },
    {
        title: "AI",
        options: [
            "AI Development",
            "AI Audit",
            "AI Deployment",
        ]
    },
    {
        title: "Social",
        options: [
            "Social Development",
            "Social Audit",
            "Social Deployment",
        ]
    },
]

export default function ContactPage() {

    const [openEntityTypes, setOpenEntityTypes] = useState<boolean>(false);
    const [selectedEntityTypes, setSelectedEntityTypes] = useState<string[]>([]);

    const handleToggleEntityType = (type: string) => {
        setSelectedEntityTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    };

    const [openInquiryTypes, setOpenInquiryTypes] = useState<boolean>(false);
    const [selectedInquiryOptions, setSelectedInquiryOptions] = useState<SelectedInquiryMap>({});

    const handleToggleInquiryOption = (groupTitle: string, option: string) => {
        setSelectedInquiryOptions(prev => {
            const current = new Set(prev[groupTitle] ?? []);
            if (current.has(option)) {
                current.delete(option);
            } else {
                current.add(option);
            }
            return { ...prev, [groupTitle]: Array.from(current) } as SelectedInquiryMap;
        });
    };


    return (
        <Stack width={"100%"} alignItems={"center"} gap={{ xs: 4, lg: 8 }}>
            <Stack width={"100%"} height="55vh" sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                display: { xs: "none", lg: "block" },
            }}>
                <Image src={contactPageBg} alt="contact page background" width={1000} height={1000} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }} />
            </Stack>
            <Stack width={"100%"} height="35vh" sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
                display: { xs: "block", lg: "none" },
            }}>
                <Image src={contactPageBg} alt="contact page background" width={1000} height={1000} style={{
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                    marginTop: "-10%",
                    transform: "scaleX(-1)",
                }} />
            </Stack>
            <Stack width={"100%"} height="10vh" sx={{
                display: { xs: "block", lg: "none" },
                background: "linear-gradient(180deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)",
                marginTop: {xs: "-58%", lg: "-60%"},
                position: "relative",
                zIndex: 2,
            }}>

            </Stack>
            <Stack
                width={{ xs: "90%", lg: "80%" }}
                marginX="auto"
                direction={{ xs: "column", lg: "row" }}
                alignItems="stretch"
                justifyContent="space-between"
                marginTop={{ xs: "-42%", lg: "-25%" }}
                position={"relative"}
                sx={{
                    zIndex: 2,
                }}
            >
                <Stack width={{ xs: "100%", lg: "50%" }} flexGrow={1} justifyContent="space-between" marginBottom={{ xs: 4, lg: 16 }}>
                    <Stack width="100%" gap={2}>
                        <Typography
                            variant="h1"
                            component="h1"
                            fontSize={{ xs: "2rem !important", lg: "3.75rem !important" }}
                            className="chno"
                            fontWeight={500}
                            textTransform="uppercase"
                        >
                            Let’s Build the Future Together
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            fontWeight={300}
                            fontSize={{ xs: "1rem !important", lg: "1rem !important" }}
                            color={theme.palette.text.secondary}
                            sx={{
                                width: { xs: "100%", lg: "80%" },
                            }}
                        >
                            Reach out to explore services, partnerships, or collaborations in blockchain and digital finance..
                        </Typography>
                    </Stack>
                    <Stack gap={2} display={{ xs: "none", lg: "flex" }}>
                        <Typography
                            variant="body1"
                            component="p"
                            fontWeight={300}
                            color={theme.palette.text.secondary}
                        >
                            Overtoom 141, 1054 HG  Amsterdam, Netherlands
                        </Typography>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Typography
                                variant="body1"
                                component="p"
                                fontWeight={300}
                                color={theme.palette.text.secondary}
                            >
                                info@moodglobalservices.com
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                fontWeight={300}
                                color={theme.palette.text.secondary}
                            >
                                KVK: 85502081
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                fontWeight={300}
                                color={theme.palette.text.secondary}
                            >
                                +31-6-19565119
                            </Typography>
                        </Stack>

                    </Stack>
                </Stack>
                <Stack width={{ xs: "100%", lg: "50%" }} flexGrow={1} gap={2} sx={{
                    background: { xs: "transparent", lg: "#0F0F0FB2" },
                    border: { xs: "none", lg: "1px solid #181818" },
                    backdropFilter: { xs: "none", lg: "blur(89.80000305175781px)" },
                    borderRadius: { xs: 0, lg: 2 },
                    paddingY: { xs: 2, lg: 4 },
                    paddingX: { xs: 2, lg: 4 },
                    alignItems: "center",
                    gap: 4,
                }}>
                    <Typography
                        variant="body1"
                        component="p"
                        fontWeight={300}
                        textAlign="center"
                        sx={{
                            width: "90%",
                        }}
                    >
                        Complete the form and our team will respondwith the information and support you need.
                    </Typography>
                    <Stack width="100%" gap={2}>
                        <InputBase
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
                            placeholder="Email"
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
                            placeholder="Phone Number"
                            type="tel"
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
                        <Stack width="100%" alignItems="center" paddingX={1} paddingY={1.25} borderRadius={2} sx={{
                            border: "1px solid #2F2F2F",
                            "&:hover": {
                                borderColor: "#FFFFFF",
                            }
                        }}>
                            <Stack
                                component="div"
                                width="100%"
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                onClick={() => setOpenEntityTypes(!openEntityTypes)}
                                sx={{
                                    cursor: "pointer",
                                    paddingLeft: 0.5,
                                }}
                            >
                                {
                                    selectedEntityTypes.length > 0 ? (
                                        <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                                            {selectedEntityTypes.map((type, index) => (
                                                <Stack key={`type-${index}`} direction="row" alignItems="center" gap={1} sx={{
                                                    border: "0.3px solid #656565",
                                                    backgroundColor: "#0F0F0F",
                                                    borderRadius: 1,
                                                    paddingX: 1,
                                                    paddingY: 0.5,
                                                }}>
                                                    <Typography variant="subtitle2" fontWeight={400}>
                                                        {type}
                                                    </Typography>
                                                    <IconButton onClick={() => { setOpenEntityTypes(true); handleToggleEntityType(type); setOpenEntityTypes(true) }} sx={{
                                                        backgroundColor: "#7F7E7E",
                                                        padding: 0.25,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        "&:hover": {
                                                            backgroundColor: "#7F7E7E",
                                                            opacity: 0.8,
                                                        },
                                                    }}>
                                                        <ClearIcon fontSize="small" sx={{
                                                            fontSize: "0.8rem",
                                                        }} />
                                                    </IconButton>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    ) : (
                                        <Typography variant="subtitle1" fontWeight={400} color={theme.palette.text.secondary}>
                                            Type of project
                                        </Typography>
                                    )
                                }
                                <KeyboardArrowDownIcon fontSize="small" sx={{
                                    color: theme.palette.text.secondary,
                                }} />
                            </Stack>
                            <Collapse in={openEntityTypes} sx={{
                                width: "100%",
                                borderTop: openEntityTypes ? "1px solid #242424" : "1px solid transparent",
                                transition: " border-color 0.05s ease-in-out",
                                marginTop: openEntityTypes ? 1 : 0,
                            }}>
                                <Stack width="100%">
                                    <List dense disablePadding sx={{
                                        width: "100%",
                                        gap: 1,
                                    }}>
                                        {entityTypes.map((type, index) => (
                                            <ListItem key={`type-${index}`} sx={{
                                                width: "100%",
                                                paddingX: 0,
                                                paddingY: 0,
                                                borderRadius: 1,
                                            }}>
                                                <ListItemButton role={undefined} onClick={() => handleToggleEntityType(type)} dense sx={{
                                                    paddingLeft: 1,
                                                    gap: 1,
                                                }}>
                                                    <ListItemIcon sx={{
                                                        minWidth: 0
                                                    }}>
                                                        <Checkbox
                                                            edge="start"
                                                            checked={selectedEntityTypes.includes(type)}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            sx={{
                                                                paddingRight: 0,
                                                                color: selectedEntityTypes.includes(type) ? theme.palette.text.primary : theme.palette.text.secondary,
                                                                "&.Mui-checked": {
                                                                    color: theme.palette.text.primary,
                                                                },
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={type} sx={{
                                                        fontWeight: 300,
                                                        color: selectedEntityTypes.includes(type) ? theme.palette.text.primary : theme.palette.text.secondary,
                                                    }} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Stack>
                            </Collapse>
                        </Stack>
                        <Stack
                            width="100%"
                            alignItems="center"
                            paddingX={1}
                            paddingY={1.25}
                            borderRadius={2}
                            sx={{
                                border: "1px solid #2F2F2F",
                                "&:hover": { borderColor: "#FFFFFF" },
                            }}
                        >
                            <Stack
                                component="div"
                                width="100%"
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                onClick={() => setOpenInquiryTypes(!openInquiryTypes)}
                                sx={{ cursor: "pointer", paddingLeft: 0.5 }}
                            >
                                {Object.entries(selectedInquiryOptions).some(([, arr]) => arr.length) ? (
                                    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                                        {Object.entries(selectedInquiryOptions).flatMap(([group, opts]) =>
                                            opts.map((opt, i) => (
                                                <Stack
                                                    key={`${group}-${opt}-${i}`}
                                                    direction="row"
                                                    alignItems="center"
                                                    gap={1}
                                                    sx={{
                                                        border: "0.3px solid #656565",
                                                        backgroundColor: "#0F0F0F",
                                                        borderRadius: 1,
                                                        px: 1,
                                                        py: 0.5,
                                                    }}
                                                >
                                                    <Typography variant="subtitle2" fontWeight={400}>
                                                        {opt}
                                                    </Typography>
                                                    <IconButton
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setOpenInquiryTypes(true);
                                                            handleToggleInquiryOption(group, opt);
                                                        }}
                                                        sx={{
                                                            backgroundColor: "#7F7E7E",
                                                            p: 0.25,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            "&:hover": { backgroundColor: "#7F7E7E", opacity: 0.8 },
                                                        }}
                                                    >
                                                        <ClearIcon fontSize="small" sx={{ fontSize: "0.8rem" }} />
                                                    </IconButton>
                                                </Stack>
                                            ))
                                        )}
                                    </Stack>
                                ) : (
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={400}
                                        color={theme.palette.text.secondary}
                                    >
                                        Type of project
                                    </Typography>
                                )}

                                <KeyboardArrowDownIcon
                                    fontSize="small"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        transition: "transform 0.15s ease",
                                        transform: openInquiryTypes ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                />
                            </Stack>

                            <Collapse
                                in={openInquiryTypes}
                                sx={{
                                    width: "100%",
                                    maxHeight: 240,
                                    overflowY: "auto",
                                    borderTop: openInquiryTypes ? "1px solid #242424" : "1px solid transparent",
                                    transition: "border-color 0.05s ease-in-out",
                                    mt: openInquiryTypes ? 1 : 0,
                                }}
                            >
                                <Stack width="100%">
                                    <List dense disablePadding sx={{ width: "100%" }}>
                                        {inquiryTypes.map((group, gi) => (
                                            <Stack key={`group-${gi}`} sx={{ mb: 1, borderRadius: 1 }}>
                                                <ListSubheader
                                                    disableSticky
                                                    sx={{
                                                        pl: 1,
                                                        pt: 1,
                                                        bgcolor: "transparent",
                                                        fontSize: "1.2rem",
                                                        color: theme.palette.text.primary,
                                                        fontWeight: 400,
                                                    }}
                                                >
                                                    {group.title}
                                                </ListSubheader>

                                                {group.options.map((opt, oi) => {
                                                    const checked =
                                                        (selectedInquiryOptions[group.title] ?? []).includes(opt);
                                                    return (
                                                        <ListItem key={`opt-${gi}-${oi}`} sx={{ px: 0, py: 0 }}>
                                                            <ListItemButton
                                                                role="checkbox"
                                                                aria-checked={checked}
                                                                onClick={() => handleToggleInquiryOption(group.title, opt)}
                                                                dense
                                                                sx={{ pl: 1, gap: 1 }}
                                                            >
                                                                <ListItemIcon sx={{ minWidth: 0 }}>
                                                                    <Checkbox
                                                                        edge="start"
                                                                        checked={checked}
                                                                        tabIndex={-1}
                                                                        disableRipple
                                                                        sx={{
                                                                            pr: 0,
                                                                            color: checked
                                                                                ? theme.palette.text.primary
                                                                                : theme.palette.text.secondary,
                                                                            "&.Mui-checked": { color: theme.palette.text.primary },
                                                                        }}
                                                                    />
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={opt}
                                                                    sx={{
                                                                        fontWeight: 300,
                                                                        color: checked
                                                                            ? theme.palette.text.primary
                                                                            : theme.palette.text.secondary,
                                                                    }}
                                                                />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    );
                                                })}
                                                {gi < inquiryTypes.length - 1 && (
                                                    <Divider
                                                        sx={{
                                                            mt: 1,
                                                            borderBottom: "1px solid #242424",
                                                        }}
                                                    />
                                                )}
                                            </Stack>
                                        ))}
                                    </List>
                                </Stack>
                            </Collapse>
                        </Stack>
                        <TextareaAutosize
                            placeholder="Message"
                            minRows={4}
                            style={{
                                width: "100%",
                                border: "1px solid #2F2F2F",
                                borderRadius: "0.6rem",
                                padding: "0.6rem",
                                background: "transparent",
                                color: theme.palette.text.primary,
                            }}
                        />
                        <Stack width="100%" direction={{ xs: "column", lg: "row" }} alignItems="center" justifyContent={{ xs: "center", lg: "space-between" }} mt={2} gap={{ xs: 2, lg: 0 }}>
                            <Stack width={{ xs: "100%", lg: "fit-content" }} direction="row" alignItems="center" justifyContent={{ xs: "start", lg: "center" }} gap={1}>
                                <Checkbox
                                    edge="start"
                                    checked={true}
                                    tabIndex={-1}
                                    disableRipple
                                    sx={{
                                        paddingRight: 0,
                                        color: theme.palette.text.primary,
                                        "&.Mui-checked": { color: theme.palette.text.primary },
                                    }}
                                />
                                <Typography component="span" variant="body2" fontWeight={300} color={theme.palette.text.secondary}>
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
                        <Stack display={{ xs: "block", lg: "none" }} width="100%" justifyContent="center" alignItems="center" sx={{
                            backgroundColor: "#0F0F0F",
                            border: "1px solid #2F2F2F",
                            borderRadius: 2,
                            paddingY: 2,
                            paddingX: 4,
                            marginTop: 2,
                        }}>
                            <Typography
                                variant="h6"
                                component="p"
                                fontWeight={500}
                                color={theme.palette.text.primary}
                                textAlign="center"
                                marginBottom={2.5}
                            >
                                Stay in contact with us
                            </Typography>
                            <Stack gap={1.5}>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    fontWeight={300}
                                    color={theme.palette.text.secondary}
                                    textAlign="center"
                                >
                                    Overtoom 141, 1054 HG  Amsterdam, Netherlands
                                </Typography>
                                <Stack alignItems="center" gap={1}>
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        fontWeight={300}
                                        color={theme.palette.text.secondary}
                                        textAlign="center"
                                    >
                                        info@moodglobalservices.com
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        fontWeight={300}
                                        color={theme.palette.text.secondary}
                                        textAlign="center"
                                    >
                                        KVK: 85502081
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        fontWeight={300}
                                        color={theme.palette.text.secondary}
                                        textAlign="center"
                                    >
                                        +31-6-19565119
                                    </Typography>
                                </Stack>

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
