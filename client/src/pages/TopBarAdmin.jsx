import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';

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


function ResponsiveAppBar() {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleHome = () => {
        navigate("/HomePageAdmin");
    };
    const handleAddAdmin = () => {
        navigate("/addAdmin");
    };
    const handleRemoveUser = () => {
        navigate("/removeUser");
    };
    const handleMedList = () => {
        navigate("/medicinesListAdmin");
    };
    const handlePharmList = () => {
        navigate("/pharmacists");
    };
    const handlePatList = () => {
        navigate("/patients");
    };
    const handlePharmPend = () => {
        navigate("/pharmacistsListPending");
    };
    const handleCloseNavMenu = () => {
        //   navigate("/cart");
        setAnchorElNav();
    };
    const logOut = (event) => {
        sessionStorage.removeItem('token');
        window.location.pathname = '/';
    };
    const Change = () => {
        window.location.pathname = '/ChangePassAdm';
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleChangePassword = () => {
        navigate("/ChangePassAdm");
    };

    return (
        <AppBar style={{ height: "100px", backgroundColor: "rgb(0,140,990" }} position="static" >
            <Container style={{ marginTop: "10px" }} maxWidth="xl" >
                <Toolbar disableGutters>

                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Elha2ony
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button onClick={handleHome} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Home     </Button>
                        <Button onClick={handlePatList} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Patients List     </Button>
                        <Button onClick={handlePharmList} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Pharmacist List     </Button>
                        <Button onClick={handleMedList} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Medicine List     </Button>
                        <Button onClick={handlePharmPend} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Pharmacist Pending     </Button>
                        <Button onClick={handleRemoveUser} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Remove User     </Button>
                        <Button onClick={handleAddAdmin} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Add Admin     </Button>
                        <Button onClick={Change} sx={{ my: 2, color: 'white', display: 'block', marginLeft: '2%', fontSize: '12px' }}> Change Password     </Button>


                    </Box>



                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Logout">
                            <IconButton style={{ paddingLeft: "20px" }} onClick={logOut} sx={{ p: 0 }}>

                                <AccountCircleIcon fontSize='large' sx={{ color: "white" }} />
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>


        </AppBar >
    )
}
export default ResponsiveAppBar;