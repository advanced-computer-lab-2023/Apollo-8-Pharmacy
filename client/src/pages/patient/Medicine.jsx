import AppBar from "@mui/material/AppBar";
import "../../App.css";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "../../components/TopBar";
import FilterList from "../../components/FilterList";
import MedicineCard from "../../components/MedicineCard";
import Pagination from "@mui/material/Pagination";
import BottomBar from "../../components/BottomBar";
import { useEffect, useState } from "react";
import axios from "axios";

function listMedicine() {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/medicine/listMedicines`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data) {
          console.log(response.data); // Log the response to the console
          setMedicine(response.data);
          console.log("Medicine length:", response.data.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

        <FilterList />

        <div
          style={{
            backgroundColor: "",
            marginLeft: "25%",
            marginTop: "-62%",
            overflowX: "auto",
          }}
        >
          {medicine.map((item) => (
            <MedicineCard
              key={item._id}
              name={item.medicineName}
              image={item.image} // Assuming your backend sends the image URL
              info={item.description}
              quantity={item.quantity}
              price={item.price}
              medicineId={item._id}
              setMedicine={setMedicine}
            />
          ))}
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
export default listMedicine;
