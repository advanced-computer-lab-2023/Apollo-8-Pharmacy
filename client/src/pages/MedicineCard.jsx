import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import "../App.css";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
import imgSrc from "../pictures/banner.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import ResponsiveAppBar from "./TopBar";
import Ads from "./Ads";
import FilterList from "./FilterList";
import Card1 from "./CartCard";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Order from "./orderCard";
import Pagination from "@mui/material/Pagination";

import img1 from "../pictures/med1.jpeg";
import img2 from "../pictures/mor.png";
import img3 from "../pictures/asp.jpg";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import BottomBar from "./BottomBar";

import { useEffect, useState } from "react";
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
        { data: { medicineId: props.medicineId } }
      );

      if (response.data) {
        props.setMedicine((prevItems) =>
          prevItems.filter((item) => item.medicine._id !== props.medicineId)
        );
      }
    } catch (error) {
      console.error("Error adding medicine to cart:", error);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "30px", minWidth: '600px' }}>
      <img style={{ marginTop: "10px" }} src={props.image} alt="" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
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
