import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';



export default function AddressForm() {
    const [data, setData] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [paymentMethod, setpaymentMethod] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [total, setTotal] = useState();

    const patientId = '652aebde203548e19b62d4b1';

    const handleAddAddress = () => {
        axios
            .put(`http://localhost:9000/patient/${patientId}/addAddress`, { "newAddress": newAddress })
            .then((response) => {
                axios
                    .get(`http://localhost:9000/patient/${patientId}`)
                    .then((response) => {
                        setData(response.data.adresses);
                        //console.log(response.data);
                        console.log(data);

                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
                setNewAddress('');
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:9000/patient/${patientId}`)
            .then((response) => {
                setData(response.data.adresses);
                //console.log(response.data);
                console.log(data);

            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
    };

    const handleWalletPayment = async () => {
        axios.get(`http://localhost:9000/patient/${patientId}/getCartTotal`).then((response) => {
            try {
                setpaymentMethod("Wallet");
                setTotal(response);
                axios.put(`http://localhost:8000/patient/updateWallet`, {
                    patientId: patientId,
                    paymentAmount: -total,
                });
            } catch (error) {
                console.error('Error updating wallet:', error);
            }
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    };
    const handlePlaceOrder = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/order/add`, {
                deliveryAddress: selectedAddress
                , paymentMethod: paymentMethod
            });
        } catch (error) {
            console.error('Error updating wallet:', error);
        }
    };

    const handleCardPayment = () => {
        axios.post("http://localhost:9000/Checkout").then((response) => {
            setpaymentMethod("CreditCard");
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });

    };

    const handleCashOnDelivery = () => {
        setpaymentMethod("CashOnDelivery");
    };
    return (
        <React.Fragment>
            {/* <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography> */}
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <TextField
                        id="address1"
                        name="address1"
                        label="Enter New Address"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddAddress}
                    >
                        Add Address
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="address-dropdown-label">Choose an existing address</InputLabel>
                        <Select
                            labelId="address-dropdown-label"
                            id="address-dropdown"
                            name="selectedAddress"
                            onChange={handleAddressChange}
                            autoComplete="shipping address"
                        >
                            <MenuItem value="">Select an address</MenuItem>
                            {data?.map((address) => (
                                <MenuItem key={address} value={address}>
                                    {address}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* Buttons for payment options */}
                    <div><br></br></div>
                    <div>
                        <Button variant="contained" color="primary" onClick={handleWalletPayment} style={{ marginRight: '5px' }}>
                            Pay by Wallet
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCardPayment} style={{ marginRight: '5px' }}>
                            Pay by CreditCard
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleWalletPayment}>
                            Pay on Delivery
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            color="primary"

                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}