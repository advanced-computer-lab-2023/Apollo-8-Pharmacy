import mongoose from 'mongoose';
import MedicineModel from '../models/medicine.js';


// add a new medicine with all the details 
const addMedicine = async (req, res) => {
  try {

      const {
          medicineName,
          price,
          quantity,
          ingredients,
          medicineStatus,
          description,
          sales,
          medicinalUse,
          path,
      } = req.body;

      const medicine = new MedicineModel({
          medicineName,
          price,
          quantity,
          ingredients,
          description,
          medicineStatus,
          sales,
          medicinalUse,
          path,
      });
      await medicine.save();
      console.log(medicine);
      res.status(200).json(medicine);
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}

// search a medicine by name 
const searchByName = async (req, res) => {
  try {
      const lowerName = req.body.name.toLowerCase();
      const medicine = await MedicineModel.find({medicineName: { $regex: new RegExp(lowerName, 'i') }});
      res.status(200).json(medicine);
  }
  catch (error) {
      res.status(400).json({ error: error.message })
  }
}


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

// this returns name , quantity and sales of all medicines (for pharmacist only) 
const medicineDetails = async (req, res) => {
  try {
      const medicines = await MedicineModel.find();
      const selectedData = medicines.map((item) => {
          return {
            medicineName: item.medicineName,
            quantity: item.quantity,
            sales: item.sales
          };
        });
        
        console.log(selectedData);
        
      res.status(200).json(selectedData);
  }
  catch (error) {
      res.status(400).json({ error: error.message })
  }
}


// list specific details of all medicines 
const listMedicines = async (req, res) => {
  try {
      const medicines = await MedicineModel.find();
      const selectedData = medicines.map((item) => {
          return {
            medicineName: item.medicineName,
            price: item.price,
            ingredients: item.ingredients,
            description: item.description,
            medicineStatus: item.medicineStatus,
            medicalUse: item.medicalUse,
            quantity: item.quantity,
            path: item.path
          };
        });
        
        console.log(selectedData);
        
      res.status(200).json(selectedData);
  }
  catch (error) {
      res.status(400).json({ error: error.message })
  }
}



export default {
  updateMedicine,
  filterMedicine,
  addMedicine,
  searchByName,
  medicineDetails, 
  listMedicines
}