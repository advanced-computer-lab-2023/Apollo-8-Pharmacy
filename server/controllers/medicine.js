import mongoose from 'mongoose';
import MedicineModel from '../models/medicine.js';

const updateMedicine = async (req, res) => {
  const {
    description,
    price,
  } = req.body;
  try {
    const medicine = await MedicineModel.findByIdAndUpdate(req.params.id, { $set: { description, price } }, { new: true });
    res.status(200).json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// filter medicine using medicinal use
const filterMedicine = async (req, res) => {
  try {
    const { medicinalUse } = req.body;
    const medicines = await MedicineModel.find({ medicinalUse })
    if (!medicines) return res.status(200).send({ message: "No medicine found" });
    return res.status(200).send(medicines);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export default {
  updateMedicine,
  filterMedicine
}