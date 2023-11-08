import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import "../App.css";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { height } from '@mui/system';
import imgSrc from "../pictures/banner.jpg"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ResponsiveAppBar from './TopBar';



function filterList() {
    return (

        <Box style={{ backgroundColor: "rgb(0,140,990)", color: "black", marginBottom: '3%' }} sx={{ width: '100%', maxWidth: '25%', bgcolor: 'white' }}>
            <nav aria-label="main mailbox folders">
                <List style={{}}>
                    <ListItem style={{ color: "white" }} disablePadding>

                        <ListItemText primary="Categories" style={{ marginLeft: "5%", marginTop: "10%" }} />
                    </ListItem >
                    <ListItem disablePadding style={{ color: "white" }} >
                        <ListItemButton >
                            <ListItemIcon>
                                <HomeIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MedicationIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Popular Products" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MedicalServicesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="All Products" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 1" />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 2" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 3" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 4" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 5" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 6" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Filter 7" />
                        </ListItemButton>

                    </ListItem>

                </List>
            </nav>
            <Divider />

        </Box>
    );
}

export default filterList;