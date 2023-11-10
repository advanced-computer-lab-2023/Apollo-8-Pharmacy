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
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HearingIcon from '@mui/icons-material/Hearing';
import StrollerIcon from '@mui/icons-material/Stroller';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import HealingIcon from '@mui/icons-material/Healing';
import MasksIcon from '@mui/icons-material/Masks';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';


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
                                <BloodtypeIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Blood Diseases" />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SevereColdIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Cold & Cough" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HearingIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Ear Medications" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VisibilityIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Eye Medications" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <StrollerIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Infants & Kids" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <CoronavirusIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Hepatics C Virus" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <VaccinesIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Syringes" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HealingIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pain Relief" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MasksIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Masks" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SanitizerIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Body Cleansers" />
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeviceThermostatIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Thermometer" />
                        </ListItemButton>

                    </ListItem>


                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <PsychologyIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Brain & Memory" />
                        </ListItemButton>

                    </ListItem>


                    <ListItem disablePadding style={{ color: "white" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <FavoriteIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Heart" />
                        </ListItemButton>

                    </ListItem>




                </List>
            </nav>
            <Divider />

        </Box>
    );
}

export default filterList;