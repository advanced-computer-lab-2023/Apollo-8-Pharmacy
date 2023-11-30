import "../App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { config } from "../config/config";
import axios from "axios";

function MedicineCard(props) {
  const handleAddCard = async () => {
    try {
      if (!props.medicineId) {
        console.error("Medicine or its ID is undefined.");
        return;
      }

      const response = await axios.post(
        `http://localhost:9000/patient/addToCart`,
        { medicineId: props.medicineId }
      );

      if (response.data) {
        // props.setMedicine((prevItems) =>
        //   prevItems.filter((item) => item.medicine._id !== props.medicineId)
        // );
      }
    } catch (error) {
      console.error("Error adding medicine to cart:", error);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "30px", minWidth: "600px" }}>
      <img style={{ marginTop: "10px" }} src={props.image} alt="" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <img
          style={{ height: 200, width: 200 }}
          src={config.STORAGE_URL + props.image}
          className="card-img-top"
        />
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          quantity:{props.quantity}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          price: {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography
          style={{ marginRight: "", marginBottom: "5px", fontSize: "18px" }}
          variant="body2"
          color="text.primary"
        >
          Price: {props.price}
        </Typography>
        <Button
          style={{ marginLeft: "50%" }}
          size="small"
          onClick={handleAddCard}
        >
          {" "}
          Add <AddCircleIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
MedicineCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  info: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  medicineId: PropTypes.string,
  setMedicine: PropTypes.func,
};

export default MedicineCard;
