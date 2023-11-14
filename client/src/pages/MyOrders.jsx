import * as React from 'react';
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
import Card1 from './CartCard'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Order from './orderCard';

import img1 from '../pictures/med1.jpeg'
import img2 from '../pictures/mor.png'
import img3 from '../pictures/asp.jpg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BottomBar from './BottomBar';
import { useEffect,useState } from "react";
import axios from "axios"


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
        <div style={{ marginRight: "-5%", marginLeft: "-5%", }} >
            <AppBar style={{ height: "100%", backgroundColor: "#F0F0F0", overflowY: "auto", }}>

                <ResponsiveAppBar />

                <div style={{ backgroundColor: "rgb(0,140,990)", borderRadius: '50px', margin: '10px', width: '30%', marginLeft: '35%' }}>
                    <h1 style={{ font: "Arial", fontWeight: 'bold', color: "white", margin: "10px" }}>
                        <ShoppingBasketSharpIcon fontSize='large' sx={{ color: "white", marginRight: '20px' }} />
                        My Orders </h1>
                </div>

                <div style={{}}>
                {orderItems && orderItems.map((item, index) => (
                    <Order key={index}
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

            </AppBar >


        </div >

    );
}
export default myOrders;