import React from "react";
import AppBar from "@mui/material/AppBar";
import "../../App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/TopBar";
import Card1 from "./CartCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BottomBar from "../../components/BottomBar";
import axios from "axios";
import PrescriptionCard from "../../components/PrescriptionCard";

import { useEffect, useState } from "react";

function PrescriptionList() {
  const [cartItems, setCartItems] = useState([]);
  const patientId = "65212c32f90a57e39e26a1c2";
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `http://localhost:9000/patient/viewCart`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data) {
          console.log(response.data); // Log the response to the console
          setCartItems(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [patientId]);

  function handleCheckout(id) {
    // Navigate to another route and pass the ID as a prop
    navigate(`/Checkout`);
  }

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
        <div
          style={{
            backgroundColor: "rgb(65, 105, 225)",
            borderRadius: "50px",
            margin: "10px",
            width: "30%",
            marginLeft: "35%",
          }}
        >
          <h1
            style={{
              font: "Arial",
              fontWeight: "bold",
              color: "white",
              margin: "10px",
            }}
          >
            <ShoppingCartIcon
              fontSize="large"
              sx={{ color: "white", marginRight: "20px" }}
            />
            My Prescriptions
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            display: "flex",
            marginLeft: "7%",
          }}
        >
          {cartItems && cartItems.map((item, index) => <PrescriptionCard />)}
        </div>
        <BottomBar />
      </AppBar>
    </div>
  );
}
export default PrescriptionList;
