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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img2 from '../pictures/med1.jpeg'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function order(props) {

    return (
        <div style={{ backgroundColor: "white", borderRadius: '20px', margin: '30px', width: '70%', height: '50px' }}>
            <h3 style={{ font: "Arial", fontWeight: 'bold', color: "black", margin: "10px", display: 'flex', justifyContent: 'space-between', marginLeft: '40px' }}>  {props.id}   <h4 style={{ justifyContent: 'space-between' }}>  {props.status} </h4> <h4 style={{ justifyContent: 'space-between' }}>{props.date} </h4>  <h4 style={{ justifyContent: 'space-between', marginRight: '40px' }}>{props.price}LE </h4>
                <IconButton >

                    <ArrowForwardIcon size="large"
                        style={{ marginTop: '5px' }}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"

                        color="inherit" />                              </IconButton>
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

        </div>);
}
export default order;