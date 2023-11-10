import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const steps = ['Cart', 'Details', 'Payment', 'Review'];


function stepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };



    return (
        <Box sx={{ width: '60%', marginLeft: '20%', marginTop: '2%', color: "rgb(0,140,990" }}>
            <Stepper style={{ color: "rgb(0,140,990" }} activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel style={{ color: "rgb(0,140,990", }}   {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Alert style={{ marginTop: '5%', fontSize: '18px', backgroundColor: ' RGB(50, 205, 50)' }} variant="filled" severity="success">
                        You can view all of your Orders at <a href="./MyOrders" style={{}}>  My Orders</a>
                    </Alert>

                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography style={{ color: "rgb(0,140,990" }} sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            style={{ color: 'rgb(0,140,990' }}
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button style={{ color: "rgb(0,140,990" }} onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
export default stepper;