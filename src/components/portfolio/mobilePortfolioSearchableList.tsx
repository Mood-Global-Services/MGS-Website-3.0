"use client"
import { useState, useEffect } from "react";
import { Stack, Typography, Collapse, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox, IconButton } from "@mui/material";
import { mobilePortfolioItems, type MobilePortfolioItem } from "@/data/mobilePortfolio";
import SideTabbedButton from "@/components/generic/SideTabbedButton";
import theme from "@/theme/theme";
import Image from "next/image";

import arrow from "@/assets/images/icons/arrow.webp"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

const tools = ["UI/UX", "Frontend", "Backend", "Blockchain", "DevOps", "DB/Storage"];
const types = ["DeFi", "RWA", "NFT", "L1/L2", "AI", "Social"];

const PortfolioSearchableList = () => {

    const [openTools, setOpenTools] = useState<boolean>(false);
    const [openTypes, setOpenTypes] = useState<boolean>(false);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState<MobilePortfolioItem[]>(mobilePortfolioItems);

    const handleToggleTool = (tool: string) => {
        setSelectedTools(prev => prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]);
    };

    const handleToggleType = (type: string) => {
        setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    };

    useEffect(() => {
        setFilteredItems(
            selectedTools.length > 0 && selectedTypes.length > 0 ?
                mobilePortfolioItems.filter(item => item.tools.some(tool => selectedTools.includes(tool)) && item.type.some(type => selectedTypes.includes(type)))
                    .sort((a: MobilePortfolioItem, b: MobilePortfolioItem) => a.title.localeCompare(b.title))
                :
                mobilePortfolioItems.sort((a: MobilePortfolioItem, b: MobilePortfolioItem) => a.title.localeCompare(b.title))
        );
    }, [selectedTools, selectedTypes]);

    return (
        <Stack width={{ xs: "90%", lg: "70%" }} alignItems="center" marginX="auto" gap={2}>
            <Stack width="100%" direction={{ xs: "column", lg: "row" }} alignItems="start" justifyContent="center" gap={2}>
                <Stack width={{ xs: "100%", lg: "50%" }} alignItems="center" padding={1} borderRadius={2} sx={{
                    border: "1px solid #6F6F6F",
                    backgroundColor: "#0F0F0F4D",
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
                        onClick={() => setOpenTypes(!openTypes)}
                        sx={{
                            cursor: "pointer",
                            paddingLeft: 0.5,
                        }}
                    >
                        {
                            selectedTypes.length > 0 ? (
                                <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                                    {selectedTypes.map((type, index) => (
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
                                            <IconButton onClick={() => { setOpenTypes(true); handleToggleType(type); setOpenTypes(true) }} sx={{
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
                                <Typography variant="subtitle1" fontWeight={400}>
                                    Type of project
                                </Typography>
                            )
                        }
                        <KeyboardArrowDownIcon fontSize="small" />
                    </Stack>
                    <Collapse in={openTypes} sx={{
                        width: "100%",
                        borderTop: openTypes ? "1px solid #242424" : "1px solid transparent",
                        transition: " border-color 0.05s ease-in-out",
                        marginTop: openTypes ? 1 : 0,
                    }}>
                        <Stack width="100%">
                            <List dense disablePadding sx={{
                                width: "100%",
                                gap: 1,
                            }}>
                                {types.map((type, index) => (
                                    <ListItem key={`type-${index}`} sx={{
                                        width: "100%",
                                        paddingX: 0,
                                        paddingY: 0,
                                        borderRadius: 1,
                                    }}>
                                        <ListItemButton role={undefined} onClick={() => handleToggleType(type)} dense sx={{
                                            paddingLeft: 1,
                                            gap: 1,
                                        }}>
                                            <ListItemIcon sx={{
                                                minWidth: 0
                                            }}>
                                                <Checkbox
                                                    edge="start"
                                                    checked={selectedTypes.includes(type)}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    sx={{
                                                        paddingRight: 0,
                                                        color: selectedTypes.includes(type) ? theme.palette.text.primary : theme.palette.text.secondary,
                                                        "&.Mui-checked": {
                                                            color: theme.palette.text.primary,
                                                        },
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary={type} sx={{
                                                fontWeight: 300,
                                                color: selectedTypes.includes(type) ? theme.palette.text.primary : theme.palette.text.secondary,
                                            }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </Collapse>
                </Stack>
                <Stack width={{ xs: "100%", lg: "50%" }} alignItems="center" padding={1} borderRadius={2} sx={{
                    border: "1px solid #6F6F6F",
                    backgroundColor: "#0F0F0F4D",
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
                        onClick={() => setOpenTools(!openTools)}
                        sx={{
                            cursor: "pointer",
                            paddingLeft: 0.5,
                        }}
                    >
                        {
                            selectedTools.length > 0 ? (
                                <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
                                    {selectedTools.map((tool, index) => (
                                        <Stack key={`tool-${index}`} direction="row" alignItems="center" gap={1} sx={{
                                            border: "0.3px solid #656565",
                                            backgroundColor: "#0F0F0F",
                                            borderRadius: 1,
                                            paddingX: 1,
                                            paddingY: 0.5,
                                        }}>
                                            <Typography variant="subtitle2" fontWeight={400}>
                                                {tool}
                                            </Typography>
                                            <IconButton onClick={() => { setOpenTools(true); handleToggleTool(tool); setOpenTools(true) }} sx={{
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
                                <Typography variant="subtitle1" fontWeight={400}>
                                    Type of tool
                                </Typography>
                            )
                        }
                        <KeyboardArrowDownIcon fontSize="small" />
                    </Stack>
                    <Collapse in={openTools} sx={{
                        width: "100%",
                        borderTop: openTools ? "1px solid #242424" : "1px solid transparent",
                        transition: " border-color 0.05s ease-in-out",
                        marginTop: openTools ? 1 : 0,
                    }}>
                        <Stack width="100%">
                            <List dense disablePadding sx={{
                                width: "100%",
                                gap: 1,
                            }}>
                                {tools.map((tool, index) => (
                                    <ListItem key={`tool-${index}`} sx={{
                                        width: "100%",
                                        paddingX: 0,
                                        paddingY: 0,
                                        borderRadius: 1,
                                    }}>
                                        <ListItemButton role={undefined} onClick={() => handleToggleTool(tool)} dense sx={{
                                            paddingLeft: 1,
                                            gap: 1,
                                        }}>
                                            <ListItemIcon sx={{
                                                minWidth: 0
                                            }}>
                                                <Checkbox
                                                    edge="start"
                                                    checked={selectedTools.includes(tool)}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    sx={{
                                                        paddingRight: 0,
                                                        color: selectedTools.includes(tool) ? theme.palette.text.primary : theme.palette.text.secondary,
                                                        "&.Mui-checked": {
                                                            color: theme.palette.text.primary,
                                                        },
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary={tool} sx={{
                                                fontWeight: 300,
                                                color: selectedTools.includes(tool) ? theme.palette.text.primary : theme.palette.text.secondary,
                                            }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </Collapse>
                </Stack>
            </Stack>
            {filteredItems.map((item: MobilePortfolioItem) => (
                <Stack key={item.id} width="100%" height="fit-content" direction={{ xs: "column", lg: "row" }} alignItems="stretch" justifyContent="space-between" sx={{
                    borderRadius: { xs: 2, lg: 2 },
                    border: "1px solid #2F2F2F",
                    background: "#0F0F0F4D",
                    overflow: "hidden",
                    padding: { xs: 0, lg: 2 },
                    gap: { xs: 2, lg: 6 }
                }}>
                    <Stack width={{ xs: "100%", lg: "40%" }} height={{ xs: 240, lg: "auto" }} alignItems="center" justifyContent="center">
                        {
                            item.asset && <item.asset />
                        }
                    </Stack>
                    <Stack width={{ xs: "100%", lg: "60%" }} flexGrow={1} justifyContent="space-between" paddingX={{ xs: 2, lg: 0 }} paddingBottom={{ xs: 2, lg: 0 }} gap={{ xs: 3, lg: 0 }}>
                        <Stack height="fit-content" width="100%" direction="row" alignItems="center" flexWrap="wrap" gap={{ xs: 0.5, lg: 1 }}>
                            {item.tools.map((tool, index) => (
                                <Typography key={`tool-${index}`} variant="body2" fontWeight={400} sx={{
                                    backgroundColor: theme.palette.brand.mgsBlue1.main,
                                    paddingY: 1,
                                    paddingX: { xs: 1.5, lg: 2 },
                                    borderRadius: 10,
                                    fontSize: { xs: "0.7rem !important", lg: "unset !important" },
                                }}>{tool}</Typography>
                            ))}
                        </Stack>
                        <Stack gap={1}>
                            <Typography variant="h5" fontWeight={500}>{item.title}</Typography>
                            <Typography variant="body2" fontWeight={400} color={theme.palette.text.secondary}>{item.description}</Typography>
                        </Stack>
                        <Stack width="100%" direction={{ xs: "column", lg: "row" }} justifyContent="space-between" alignItems="center" gap={{ xs: 4, lg: 2 }}>
                            <Stack height="fit-content" width={{ xs: "100%", lg: "fit-content" }} direction="row" alignItems="center" justifyContent={{ xs: "start", lg: "center" }} flexWrap="wrap" gap={1}>
                                {item.type.map((type, index) => (
                                    <Typography key={`type-${index}`} variant="body2" fontWeight={400} sx={{
                                        backgroundColor: "#0F0F0F",
                                        border: "1px solid #434343",
                                        boxShadow: "0px 2px 0px 0px #434343",
                                        paddingY: 1,
                                        paddingX: 2,
                                        borderRadius: 10,
                                    }}>{type}</Typography>
                                ))}
                            </Stack>
                            <Stack width="fit-content" justifyContent="end" display={{ xs: "none", lg: "block" }}>
                                <SideTabbedButton paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={1}>
                                            Visit website
                                        </Typography>
                                        <span className="arrow-clip">
                                            <span className="arrow-slide">
                                                <Image src={arrow} alt="arrow animation" width={20} height={20} style={{ display: "block" }} />
                                            </span>
                                        </span>
                                    </div>
                                </SideTabbedButton>
                            </Stack>
                            <Stack width="100%" justifyContent="center" display={{ xs: "block", lg: "none" }}>
                                <SideTabbedButton fullWidth paddingX={18} hoverShiftX={1.5} hoverShiftY={-1}>
                                    <div className="flex items-center justify-center gap-1">
                                        <Typography component="span" variant="h6" marginRight={1}>
                                            Visit website
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
            ))}
        </Stack>
    )
}

export default PortfolioSearchableList;