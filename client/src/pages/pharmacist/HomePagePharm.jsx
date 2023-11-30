import AppBar from "@mui/material/AppBar";
import "../../App.css";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import ResponsiveAppBar from "../../components/TopBarPharm";
import Ads from "../../components/Ads";
import FilterList from "../../components/FilterList";
import MedicineCard from "../../components/MedicineCard";
import img1 from "../../pictures/med1.jpeg";
import img2 from "../../pictures/mor.png";
import img3 from "../../pictures/asp.jpg";
import BottomBar from "../../components/BottomBar";

function homePagePharm() {
  const name = [
    "Panadol",
    "Morphine",
    "Aspirin",
    "Insulin",
    "Concerta",
    "Tramadol",
  ];
  const info =
    "Paracetamol is a non-opioid analgesic and antipyretic agent used to treat fever and mild to moderate pain.";

  return (
    <div style={{ marginRight: "-5%", marginLeft: "-5%" }}>
      <AppBar
        style={{
          height: "100%",
          backgroundColor: "#F0F0F0",
          overflowY: "auto",
        }}
      >
        <ResponsiveAppBar />

        <Ads />

        <FilterList />
        <div
          style={{
            backgroundColor: "",
            marginLeft: "25%",
            marginTop: "-62%",
            display: "block",
            flexWrap: "nowrap",
          }}
        >
          <MedicineCard name={name[0]} image={img1} info={info} />
          <MedicineCard name={name[1]} image={img2} info={info} />
          <MedicineCard name={name[2]} image={img3} info={info} />
        </div>

        <Stack
          spacing={2}
          style={{ marginLeft: "50%", marginTop: "2%", marginBottom: "-2%" }}
        >
          <Pagination
            count={10}
            color="primary"
            size="large"
            style={{ color: "blue" }}
          />
        </Stack>
        <BottomBar />
      </AppBar>
    </div>
  );
}
export default homePagePharm;
