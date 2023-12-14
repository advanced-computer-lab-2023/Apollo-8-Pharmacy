import AppBar from "@mui/material/AppBar";
import "../../App.css";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "../../components/TopBar";
import Card from "@mui/material/Card";
import BottomBar from "../../components/BottomBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function orderDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/order/orderDetails/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data) {
          console.log(response.data); // Log the response to the console
          setOrder(response.data);
          console.log("order length:", response.data.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleHome = () => {
    navigate("/MyOrders");
  };
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

        <div>
          <Card>
            {order && (
              <div>
                <p>Status: {order.status}</p>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>Medicines List:</p>
              </div>
            )}
          </Card>
        </div>

        <div>
          <Card>
            {order && (
              <div>
                <p>{order.status}</p>
                <p>{order.paymentMethod}</p>
                <p>Medicines:</p>
              </div>
            ) &&
              order.items.map((item, index) => (
                <div>
                  <p>name: {item.medicine.medicineName}</p>
                  <p>price: {item.medicine.price}</p>
                  <p>quantity: {item.quantity}</p>
                </div>
              ))}
          </Card>
        </div>

        <Stack
          spacing={2}
          style={{ marginLeft: "50%", marginTop: "2%", marginBottom: "-2%" }}
        ></Stack>

        <button className="btn btn-primary rounded-2"
          style={{
            position: 'fixed',
            bottom: '5%',
            right: '5%',
            width: '5%',
            height: '40px',
          }}

          onClick={handleHome}
        >
          Back
        </button>
        <BottomBar />
      </AppBar>
    </div>
  );
}
export default orderDetails;
