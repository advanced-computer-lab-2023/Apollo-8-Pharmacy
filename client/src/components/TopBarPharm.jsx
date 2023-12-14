import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WalletIcon from "@mui/icons-material/Wallet";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
              marginRight: '-40%',
              marginLeft: '5%'

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

          <Box sx={{ flexGrow: 0, marginRight: '2%' }}>
            <Tooltip title=" Chat">
              <IconButton
                onClick={handleChatNavigate}
                sx={{ p: 0 }}
              >
                <ChatIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: '2%' }}>
            <Tooltip title="My Wallet">
              <IconButton style={{}} onClick={handleMyWallet} sx={{ p: 0 }}>
                <WalletIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: '1%' }}>

            <Tooltip title=" Logout">
              <IconButton
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
