import "../../App.css";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

function order(props) {
  const navigate = useNavigate();
  const handleRemoveOrder = async () => {
    try {
      if (!props.orderId) {
        console.error("order or its ID is undefined.");
        return;
      }

      const response = await axios.put(`http://localhost:9000/order/cancel`, {
        orderId: props.orderId,
      });

      if (response.data) {
        // Update state to remove the item from the cartItems array
        props.setOrderItems((prevItems) =>
          prevItems.filter((item) => item._id !== props.orderId)
        );
      }
    } catch (error) {
      console.error("Error decrementing medicine:", error);
    }
  };

  function handleDetails(id) {
    // Navigate to another route and pass the ID as a prop
    navigate(`/myorders/${id}`);
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        margin: "30px",
        width: "70%",
        height: "50px",
      }}
    >
      <h3
        style={{
          font: "Arial",
          fontWeight: "bold",
          color: "black",
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "40px",
        }}
      >
        {" "}
        {props.deliveryAddress}{" "}
        <h4 style={{ justifyContent: "space-between" }}> {props.status} </h4>{" "}
        <h4 style={{ justifyContent: "space-between" }}>
          {props.paymentMethod}{" "}
        </h4>{" "}
        <h4 style={{ justifyContent: "space-between", marginRight: "40px" }}>
          {props.total}{" "}
        </h4>
        <IconButton style={{ marginLeft: "40%" }}>
          <ArrowForwardIcon
            size="large"
            style={{ marginTop: "5px" }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => handleDetails(props.orderId)}
            color="inherit"
          />{" "}
        </IconButton>
        <Button style={{}} size="small" onClick={handleRemoveOrder}>
          <HighlightOffIcon />
        </Button>
      </h3>
      {/* if ({props.status == "pending"}) {
                <h3 style={{ color: 'grey' }}> pending</h3>
            }
            if ({props.status == "Delivered"}) {
                <h3 style={{ color: 'Green' }}> Delivered</h3>
            }
            if ({props.status == "Cancelled"}) {
                <h3 style={{ color: 'Red' }}> Cancelled</h3>
            } */}
    </div>
  );
}
export default order;
