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


    const logOut = (event) => {
        sessionStorage.removeItem('token');
        window.location.pathname = '/';
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handelSales = () => {
        navigate("/MedicineSales");
    };
    const Change = () => {
        window.location.pathname = '/ChangePasswordPharm';
    };
    const handleHome = () => {
        navigate("/HomePagePharm");
    };
    const handleMedicine = () => {
        navigate("/listMedicinepharm");
    };
    const handleAddMed = () => {
        navigate("/AddMedicine");
    };
    const handleCloseNavMenu = () => {
        //   navigate("/cart");
        setAnchorElNav();
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                        <Button onClick={handleHome} sx={{ my: 2, color: 'white', display: 'block' }}> Home     </Button>
                        <Button onClick={handleMedicine} sx={{ my: 2, color: 'white', display: 'block' }}> Medicine     </Button>
                        <Button onClick={handleAddMed} sx={{ my: 2, color: 'white', display: 'block' }}> Add Medicine     </Button>
                        <Button onClick={handelSales} sx={{ my: 2, color: 'white', display: 'block' }}> Medicine Sales     </Button>
                        <Button onClick={Change} sx={{ my: 2, color: 'white', display: 'block' }}> Change Pass</Button>


                    </Box>
                    <div style={{ marginLeft: '8%' }}>

                        <Box
                            style={{ color: "white", backgroundColor: "white" }}
                            sx={{
                                marginLeft: "-10%",
                                width: 500,
                                maxWidth: '100%',
                                borderRadius: '100px',
                                borderColor: 'rgba(0, 140, 990, 0.1)',
                            }}

                        >

                            <TextField placeholder='Searching for...' fullWidth id="fullWidth"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                }}
                            />

                        </Box>

                    </div>
                    <Button style={{ right: "8%", borderRadius: '100px', height: '56px', width: '160px', backgroundColor: "rgb(0,0,139)" }} variant="contained">Search</Button>




                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title=" Logout">
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