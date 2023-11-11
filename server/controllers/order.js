import mongoose from 'mongoose';
import OrderModel from '../models/order.js';
import PatientModel from '../models/patient.js';


const addOrder = async (req, res) => {
  console.log("req");

  const patientId = req.params.id; 
  console.log(patientId);
  const { deliveryAddresses, paymentMethod } = req.body;

  try {
    // Assuming you have a utility function to calculate the total price of items
    //const totalPrice = calculateTotalPrice(items);

    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const order = new OrderModel({
      patient: patientId,
      cart: patient.cart, // Assuming the patient has a cart associated with it
      //items,
      deliveryAddresses,
      paymentMethod,
      //totalPrice,
      status: 'Pending',
    });

    await order.save();

    // Clear the patient's cart after placing the order (modify based on your actual logic)
    //patient.cart = [];
    await patient.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  
const viewOrderDetails = async (req, res) => {
    const orderId = req.params.orderId;
  
    try {
      const order = await OrderModel.findById(orderId).populate('patient cart.items.medicine');
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
const cancelOrder = async (req, res) => {
    const orderId = req.params.orderId;
  
    try {
      const order = await OrderModel.findById(orderId);
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      if (order.status !== 'Pending') {
        return res.status(400).json({ error: 'Cannot cancel order. Status is not Pending.' });
      }
  
      order.status = 'Cancelled';
      await order.save();
  
      res.status(200).json({ message: 'Order cancelled successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
      
  export default {
    addOrder,
    viewOrderDetails,
    cancelOrder
  }
  