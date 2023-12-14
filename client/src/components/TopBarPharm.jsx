import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import axios from "axios";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { config } from "../config/config";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WalletIcon from "@mui/icons-material/Wallet";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';
import Popover from "@mui/material/Popover";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [unseenNotifications, setunseenNotifications] = useState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [notfications, setData] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:9000/pharmacist/getNotfication")
      .then((response) => {
        
        var num=0;
        for (let i = 0; i < response.data.length; i++) {
          if(response.data[i].state==="Unread"){
            num++;
          }
        }
        setunseenNotifications(num);
        setData(response.data.reverse());
        setDataFetched(true);
      })
      .catch((error) => {
        console.log(error);
        setDataFetched(true);
      });
  }, []);

  const handleOpenPopover = (event) => {
    
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    console.log("9999");
    axios
      .get("http://localhost:9000/pharmacist/sawNotfication")
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("out")
    setPopoverAnchorEl(null);
  };

  const openPopover = Boolean(popoverAnchorEl);


  const logOut = (event) => {
    sessionStorage.removeItem("token");
    window.location.pathname = "/";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handelSales = () => {
    navigate("/MedicineSales");
  };
  const Change = () => {
    window.location.pathname = "/ChangePasswordPharm";
  };
  const handleHome = () => {
    navigate("/HomePagePharm");
  };
  const handleMyWallet = () => {
    navigate("/PharmacistWallet");
  };
  const handleMedicine = () => {
    navigate("/medicinesListPharmacist");
  };
  const handleAddMed = () => {
    navigate("/AddMedicine");
  };
  const handleCloseNavMenu = () => {
    //   navigate("/cart");
    setAnchorElNav();
  };

  const handleChatNavigate = () => {
    navigate("/ChatPharmacist");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{ height: "100px", backgroundColor: "rgb(0,140,990" }}
      position="static"
    >
      <Container style={{ marginTop: "10px" }} maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Elha2ony
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              width: "80%",
            }}
          >
            <Button
              onClick={handleHome}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              Home{" "}
            </Button>
            <Button
              onClick={handleMedicine}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              Medicine List{" "}
            </Button>
            <Button
              onClick={handleAddMed}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              Add Medicine{" "}
            </Button>
            <Button
              onClick={handelSales}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              Sales Report{" "}
            </Button>
            <Button
              onClick={Change}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {" "}
              Change Pass
            </Button>
          </Box>
          <div style={{ marginLeft: "8%" }}>
            <Box
              style={{ color: "white", backgroundColor: "white" }}
              sx={{
                marginLeft: "-10%",
                width: 500,
                maxWidth: "100%",
                borderRadius: "100px",
                borderColor: "rgba(0, 140, 990, 0.1)",
              }}
            ></Box>
          </div>
          
          <Badge style={{marginRight:"40px", transform: 'none'}} overlap="circular" badgeContent={unseenNotifications} color="secondary">
          <IconButton style={{color:"yellow"}}  aria-label="notifications" onClick={handleOpenPopover}>
            <NotificationsIcon style={{ fontSize: '2rem' }}/>
          </IconButton>
        </Badge>

         {/* Popover with Notification Data */}
         <Popover
            open={openPopover}
            anchorEl={popoverAnchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div>
            {dataFetched ? (
             <div>
      {notfications.map((notifi, index) => (
          <Card sx={{ display: "flex", maxWidth: 500,backgroundColor:"skyblue",border:"solid",borderBlockWidth:"1px" }}>
    {/* Smaller image and align to the left */}
    <CardMedia
      component="img"
      alt="Notification Image"
      height="70"
      src={config.STORAGE_URL + notifi.img}
      sx={{ alignSelf: "center", marginLeft: 1 }}
    />
    <CardContent>
      <div>
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
          Medicine Out Of Stock
        </Typography>
        {/* Text */}
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          {notifi.data}
        </Typography>
        {/* Boolean value (example: true) */}
          <Typography variant="body2" style={{color:"black"}} color="text.secondary">
            {notifi.state}----{notifi.time} UK
          </Typography>
        </div>
      </CardContent>
    </Card>
    ))}
   </div>
   ) : (
    <p>Loading...</p>
  )}
  </div>
          </Popover>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title=" Chat">
              <IconButton
                style={{ paddingLeft: "20px" }}
                onClick={handleChatNavigate}
                sx={{ p: 0 }}
              >
                <ChatIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Wallet">
              <IconButton style={{}} onClick={handleMyWallet} sx={{ p: 0 }}>
                <WalletIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title=" Logout">
              <IconButton
                style={{ paddingLeft: "20px" }}
                onClick={logOut}
                sx={{ p: 0 }}
              >
                <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
