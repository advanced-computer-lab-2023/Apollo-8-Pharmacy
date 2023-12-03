import mongoose from 'mongoose';
import PharmacistModel from '../models/pharmacist.js';
import UserModel from '../models/user.js';
import OrderModel from '../models/order.js';
import MedicineModel from '../models/medicine.js';
import bcrypt from "bcrypt";
const saltRounds = 10;

const createPharmacist = async (req, res) => {
  const {
    username,
    name,
    type,
    email,
    password,
    birthDate,
    hourlyRate,
    hospital,
    eduBackground,
    wallet,
    status,
  } = req.body;
  let files = {}
   req.files.forEach(file => {
    if (file.fieldname == "idFile") {
      files = { ...files, idFile: file.filename }
    } else if (file.fieldname == "degreeFile") {
      files = { ...files, degreeFile: file.filename }
    } else if (file.fieldname == "licenseFile") {
      files = { ...files, licenseFile: file.filename }
    }
   });
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await UserModel.findOne({ username });
  if (!existingUser) {
    try {
      const user = new UserModel({ username, password, type });
      user.password = hashedPassword;
      console.log(user.password);
      await user.save();
      console.log(user);
      const pharmacist = new PharmacistModel({
        user: user._id,
        name,
        email,
        birthDate,
        hourlyRate,
        hospital,
        eduBackground,
        wallet,
        status,
        ...files
      });
      await pharmacist.save();
      res.status(200).json(pharmacist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json("Username already exist");
  }
};

const getPharmacists = async (req, res) => {
  try {
    const pharmacists = await PharmacistModel.find();
    console.log(pharmacists);
    res.status(200).json(pharmacists);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const getPharmacistById = async (req, res) => {
  try {
    const pharmacist = await PharmacistModel.findById(
      new mongoose.Types.ObjectId(req.params.id)
    );
    if (!pharmacist) return res.status(404).send("Pharmacist not found");
    res.status(200).send(pharmacist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const acceptPharmacist = async (req, res) => {
  try {
    const pharmacist = await PharmacistModel.findByIdAndUpdate(
      req.params.id,
      { status: 'Accepted' },
      { new: true }
    );
    if (!pharmacist) {
      return res.status(404).json({ error: 'Pharmacist not found' });
    }
    res.status(200).json(pharmacist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; const rejectPharmacist = async (req, res) => {
  try {
    const pharmacist = await PharmacistModel.findByIdAndUpdate(
      req.params.id,
      { status: 'Rejected' },
      { new: true }
    );
    if (!pharmacist) {
      return res.status(404).json({ error: 'Pharmacist not found' });
    }
    res.status(200).json(pharmacist);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getPharmacistSalesReport = async (req, res) => {
  try {
    const pharmacistId = req.params.id;
    const selectedMonth = req.query.month || (new Date().getMonth() + 1);

    const startDate = new Date(2023, selectedMonth - 1, 1);
    const endDate = new Date(2023, selectedMonth, 0, 23, 59, 59, 999);

    console.log(startDate);

    // Find orders for the chosen month and pharmacist
    const orders = await OrderModel.find({
      // status: 'Delivered',
      pharmacist: pharmacistId,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    console.log(orders);

    // Extract medicine ids from the orders
    const medicineIds = orders.flatMap(order => order.items.map(item => item.medicine));

    // Find medicines based on the extracted ids
    const medicines = await MedicineModel.find({ _id: { $in: medicineIds } });

    // Calculate total sales for each medicine
    const salesReport = medicines.map(medicine => {
      const totalSales = orders.reduce((acc, order) => {
        const item = order.items.find(item => item.medicine.equals(medicine._id));
        return acc + (item ? medicine.price * item.quantity : 0);
      }, 0);

      return {
        medicineName: medicine.medicineName,
        totalSales,
      };
    });

    console.log(salesReport);

    res.status(200).send(salesReport);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export default {
  createPharmacist,
  getPharmacists,
  getPharmacistById,
  acceptPharmacist,
  rejectPharmacist,
  getPharmacistSalesReport
}