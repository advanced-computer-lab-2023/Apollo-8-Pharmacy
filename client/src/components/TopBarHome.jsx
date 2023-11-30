import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Medicine", "My Cart", "My Orders"];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleDoctorList = () => {
    navigate("/AllDoctors");
  };
  const handleHome = () => {
    navigate("/HomePage");
  };
  const handlePresList = () => {
    navigate("/PrescriptionsList");
  };
  const handleAddFamilyMember = () => {
    navigate("/patientFamilyAppointments");
  };
  const handlePack = () => {
    navigate("/PatientHP_FM");
  };
  const handleMyApp = () => {
    navigate("/PatientAppointments");
  };
  const handleHealthRecords = () => {
    navigate("/viewHealth/:patientID");
  };
  const handleMyWallet = () => {
    navigate("/PatientWallet/:patientName");
  };
  const handleCloseNavMenu = () => {
    //   navigate("/cart");
    setAnchorElNav();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{
        height: "100px",
        backgroundColor: "rgb(0,140,990)",
      }}
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
            Elha2ony Pharmacy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
