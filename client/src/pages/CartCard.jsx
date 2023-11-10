import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import "../App.css";

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { height } from '@mui/system';
import imgSrc from "../pictures/banner.jpg"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';

import ResponsiveAppBar from './TopBar';
import Ads from './Ads';
import FilterList from './FilterList';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img2 from '../pictures/med1.jpeg'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from "axios"



function card(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const [totalPrice, setTotalPrice] = useState(props.price * props.quantity);
  const handleIncrementCard = async () => {
    try {
      if (!props.medicineId) {
        console.error('Medicine or its ID is undefined.');
        return;
      }

      const response = await axios.put(
        `http://localhost:9000/patient/654e55dc1c5ff871bec6b1aa/incMed`,
        { medicineId: props.medicineId, quantity: quantity + 1 }
      );

      if (response.data) {
        setQuantity((prevQuantity) => prevQuantity + 1);
        updateTotalPrice(quantity + 1);
      }
    } catch (error) {
      console.error('Error incrementing medicine:', error);
    }
  };

  const handleDecrementCard = async () => {
    try {
      if (!props.medicineId) {
        console.error('Medicine or its ID is undefined.');
        return;
      }

      const response = await axios.put(
        `http://localhost:9000/patient/654e55dc1c5ff871bec6b1aa/decMed`,
        { medicineId: props.medicineId, quantity: quantity - 1 }
      );

      if (response.data) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        updateTotalPrice(quantity - 1);
      }
    } catch (error) {
      console.error('Error decrementing medicine:', error);
    }
  };
  const handleRemoveCard = async () => {
    try {
      if (!props.medicineId) {
        console.error('Medicine or its ID is undefined.');
        return;
      }
  
      const response = await axios.delete(
        `http://localhost:9000/patient/654e55dc1c5ff871bec6b1aa/removeFromCart`,
        { data: { medicineId: props.medicineId } }
      );
  
      if (response.data) {
        // Update state to remove the item from the cartItems array
        props.setCartItems((prevItems) =>
          prevItems.filter((item) => item.medicine._id !== props.medicineId)
        );
      }
    } catch (error) {
      console.error('Error decrementing medicine:', error);
    }
  };
  const updateTotalPrice = (newQuantity) => {
    const newTotalPrice = props.price * newQuantity;
    setTotalPrice(newTotalPrice);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '30px' }}>
      <img src={props.image} alt="" />
      <Button style={{ left: '20%', bottom: '55px', margin: '0px' }} size="small" onClick={handleRemoveCard}>
        <HighlightOffIcon />
      </Button>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleIncrementCard}>
          Add <AddCircleIcon />
        </Button>
        <Button size="small" onClick={handleDecrementCard}>
          Remove <RemoveCircleIcon />
        </Button>
        <Typography style={{ marginLeft: '10px' }} variant="body2" color="text.secondary">
          Price: {props.price} x {quantity} = {totalPrice}
        </Typography>
      </CardActions>
    </Card>
  );
}
export default card;