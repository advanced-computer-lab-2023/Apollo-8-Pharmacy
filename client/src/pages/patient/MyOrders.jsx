import AppBar from "@mui/material/AppBar";
import "../../App.css";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import ResponsiveAppBar from "../../components/TopBar";
import Order from "./orderCard";
import BottomBar from "../../components/BottomBar";
import { useEffect, useState } from "react";
import axios from "axios";

function myOrders() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/order/getOrders`;
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data) {
          console.log(response.data); // Log the response to the console
          setOrderItems(response.data);
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

        <div
          style={{
            backgroundColor: "rgb(0,140,990)",
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
            <ShoppingBasketSharpIcon
              fontSize="large"
              sx={{ color: "white", marginRight: "20px" }}
            />
            My Orders{" "}
          </h1>
        </div>

        <div style={{}}>
          {orderItems &&
            orderItems.map((item, index) => (
              <Order
                key={index}
                deliveryAddress={item.deliveryAddress}
                paymentMethod={item.paymentMethod}
                status={item.status}
                total={item.total}
                orderId={item._id}
                setOrderItems={setOrderItems}
              />
            ))}
        </div>
        <BottomBar />
      </AppBar>
    </div>
  );
}
export default myOrders;
