import mongoose from 'mongoose';
import PatientModel from '../models/patient.js';
import UserModel from '../models/user.js';
import bcrypt from "bcrypt";
const saltRounds = 10;

const createPatient = async (req, res) => {
  const {
    username,
    name,
    type,
    email,
    password,
    birthDate,
    gender,
    phone,
    emergencyName,
    emergencyNo,
    emergencyRel,
    adresses,
    status,
  } = req.body;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await UserModel.findOne({ username });
  if (!existingUser) {
    try {
      const user = new UserModel({ username, password, type });
      user.password = hashedPassword;
      console.log(user.password);
      console.log(req.body);

      await user.save();
      console.log(user);
      const patient = new PatientModel({
        user: user._id,
        name,
        email,
        birthDate,
        gender,
        phone,
        emergencyName,
        emergencyNo,
        emergencyRel,
        adresses,
        status,
      });
      await patient.save();
      console.log(patient);
      res.status(200).json(patient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json("Username already exist");
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await PatientModel.find();
    console.log(patients);
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await PatientModel.find({ user: new mongoose.Types.ObjectId(req.params.id) });
    if (!patient) return res.status(404).send("Patient not found");
    return res.status(200).send(patient);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//s
const addToCart = async (req, res) => {
  const patientId = req.params.id;
  const { medicineId, quantity } = req.body;

  try {
    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const existingCartItem = patient.cart.find(item => item.medicine.equals(medicineId));

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      patient.cart.push({ medicine: medicineId, quantity: quantity || 1 });
    }

    await patient.save();
    const populatedPatient = await PatientModel.findById(patientId).populate('cart.medicine');

    res.status(200).json(populatedPatient.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const viewCart = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patient = await PatientModel.findById(patientId).populate('cart.medicine');

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const cartDetails = patient.cart.map(item => ({
      medicine: item.medicine,
      quantity: item.quantity,
    }));

    res.status(200).json(cartDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const removeFromCart = async (req, res) => {
  const patientId = req.params.id;
  const { medicineId } = req.body;

  try {
    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const cartItemIndex = patient.cart.findIndex(item => item.medicine.equals(medicineId));

    if (cartItemIndex !== -1) {
      // If the item is found, remove it from the cart
      patient.cart.splice(cartItemIndex, 1);
    } else {
      return res.status(404).json({ error: 'Item not found in the cart' });
    }

    await patient.save();

    const populatedPatient = await PatientModel.findById(patientId).populate('cart.medicine');

    res.status(200).json(populatedPatient.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const incMedicine = async (req, res) => {
  const patientId = req.params.id; // Assuming you're passing the patientId in the route parameters
  const { medicineId } = req.body;

  try {
    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const cartItem = patient.cart.find(item => item.medicine.equals(medicineId));

    if (cartItem) {
      if (medicineId.quantity > cartItem.quantity) {
        cartItem.quantity += 1;
      } else {
        return res.status(404).json({ error: 'sorry we do not have enough amount of th medicine' });
      }

    } else {
      return res.status(404).json({ error: 'Item not found in the cart' });
    }

    await patient.save();
    const populatedPatient = await PatientModel.findById(patientId).populate('cart.medicine');
    res.status(200).json(populatedPatient.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const decMedicine = async (req, res) => {
  const patientId = req.params.id; // Assuming you're passing the patientId in the route parameters
  const { medicineId } = req.body;

  try {
    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const cartItem = patient.cart.find(item => item.medicine.equals(medicineId));

    if (cartItem.quantity > 0) {
      cartItem.quantity -= 1;
    } else {
      return res.status(404).json({ error: 'Item not found in the cart' });
    }

    await patient.save();
    const populatedPatient = await PatientModel.findById(patientId).populate('cart.medicine');
    res.status(200).json(populatedPatient.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const viewOrderDetails = async (req, res) => {
  const patientId = req.params.id;
  const orderId = req.params.orderId;

  try {
    const order = await OrderModel.findById(orderId).populate('patient items.medicine');

    if (!order || !order.patient.equals(patientId)) {
      return res.status(404).json({ error: 'Order not found for the patient' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const cancelOrder = async (req, res) => {
  const patientId = req.params.id;
  const orderId = req.params.orderId;

  try {
    const order = await OrderModel.findById(orderId);

    if (!order || !order.patient.equals(patientId)) {
      return res.status(404).json({ error: 'Order not found for the patient' });
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

//s

export default {
  createPatient,
  getPatients,
  getPatientById,
  addToCart,
  viewCart,
  removeFromCart,
  incMedicine,
  decMedicine,
  viewOrderDetails,
  cancelOrder
}