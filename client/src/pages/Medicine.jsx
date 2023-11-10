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
import MedicineCard from './MedicineCard';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Order from './orderCard';
import Pagination from '@mui/material/Pagination';


import img1 from '../pictures/med1.jpeg'
import img2 from '../pictures/mor.png'
import img3 from '../pictures/asp.jpg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BottomBar from './BottomBar';

import { useEffect, useState } from "react";




const name = ['Panadol', 'Morphine', 'Aspirin', 'Insulin', 'Concerta', 'Tramadol'];
const info = 'Paracetamol is a non-opioid analgesic and antipyretic agent used to treat fever and mild to moderate pain.'
const ingred = ['abc', 'efg', 'dbudhuh']
const use = ['Dont Know', 'Ay haga', 'Wla Haga']


function listMedicine() {



    return (
        <div style={{ marginRight: "-5%", marginLeft: "-5%", }} >
            <AppBar style={{ height: "100%", backgroundColor: "#F0F0F0", overflowY: "auto", }}>

                <ResponsiveAppBar />


                <FilterList />
                <div style={{ backgroundColor: '', marginLeft: '25%', marginTop: '-62%', display: 'flex', flexWrap: 'nowrap' }}>
                    <MedicineCard name={name[0]} image={img1} info={info} ingred={ingred[0]} use={use[0]} />
                    <MedicineCard name={name[1]} image={img2} info={info} ingred={ingred[1]} use={use[1]} />
                    <MedicineCard name={name[2]} image={img3} info={info} ingred={ingred[2]} use={use[2]} />




                </div>
                <div style={{ backgroundColor: '', marginLeft: '25%', marginTop: '-2%', display: 'flex', flexWrap: 'nowrap' }}>
                    <MedicineCard name={name[3]} image={img3} info={info} />
                    <MedicineCard name={name[4]} image={img3} info={info} />
                    <MedicineCard name={name[5]} image={img3} info={info} />




                </div>
                <Stack spacing={2} style={{ marginLeft: '50%', marginTop: '2%', marginBottom: '-2%' }}>
                    <Pagination count={10} color="primary" size="large" style={{ color: 'blue' }} />

                </Stack>
                <BottomBar />


            </AppBar >

        </div >

    );
}
export default listMedicine;