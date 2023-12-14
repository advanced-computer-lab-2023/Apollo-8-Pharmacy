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
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import WalletIcon from "@mui/icons-material/Wallet";
const pages = ["Home", "Medicine", "My Cart", "My Orders"];

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
  const handleCart = () => {
    navigate("/cart");
  };
  const Change = () => {
    window.location.pathname = "/ChangePassword";
  };
  const handleHome = () => {
    navigate("/HomePage");
  };
  const handleMyWallet = () => {
    navigate("/PatientWallet");
  };
  const handleMedicine = () => {
    navigate("/ListMedicine");
  };
  const handleOrders = () => {
    navigate("/MyOrders");
  };
  const handlePrescription = () => {
    navigate("/PrescriptionList");
  };
  const handleOutOfStock = () => {
    navigate("/OutOfStock");
  };
  const handleCloseNavMenu = () => {
    //   navigate("/cart");
    setAnchorElNav();
  };
  const handleChatNavigate = () => {
    navigate("/Chat");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: "rgb(0,140,990" }} position="static">
      <Container maxWidth="xl">
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              width: "80%",
            }}
          >
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleHome}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Home{" "}
            </Button>
            <Button
              onClick={handleMedicine}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Medicine{" "}
            </Button>
            <Button
              onClick={handleOrders}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Orders{" "}
            </Button>
            <Button
              onClick={handlePrescription}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Prescriptions
            </Button>
            <Button
              onClick={Change}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Change Password
            </Button>
            <Button
              onClick={handleOutOfStock}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginRight: "2%",
                marginLeft: "2%",
                fontSize: "12px",
              }}
            >
              {" "}
              Medecines OutOfStock
            </Button>
          </Box>
          <div style={{ marginLeft: "20%" }}>
            <Box
              style={{ color: "white", backgroundColor: "white" }}
              sx={{
                marginLeft: "-20%",
                borderRadius: "100px",
                borderColor: "rgba(0, 140, 990, 0.1)",
              }}
            ></Box>
          </div>

          <Box sx={{ flexGrow: 0, marginRight: '2%' }}>
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
          <Box sx={{ flexGrow: 0, marginRight: '2%' }}>
            <Tooltip title="My Wallet">
              <IconButton style={{}} onClick={handleMyWallet} sx={{ p: 0 }}>
                <WalletIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open Your Shopping Cart">
              <IconButton
                style={{ paddingLeft: "10px" }}
                onClick={handleCart}
                sx={{ p: 0 }}
              >
                <ShoppingBasketSharpIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <p></p>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton
                style={{ paddingLeft: "10px" }}
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
