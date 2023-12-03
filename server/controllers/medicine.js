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
    } = req.body;
    let files = {}
    req.files.forEach(file => {
      if (file.fieldname == "image") {
        files = { ...files, image: file.filename }
      }
    });

    const medicine = new MedicineModel({
      medicineName,
      price,
      quantity,
      ingredients,
      description,
      medicineStatus,
      sales,
      medicinalUse,
      ...files
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
    const medicine = await MedicineModel.find({ medicineName: { $regex: new RegExp(lowerName, 'i') } });
    res.status(200).json(medicine);
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}


const updateMedicine = async (req, res) => {
  const {
    description,
    ingredients,
    price,
  } = req.body;
  try {
    const medicine = await MedicineModel.findByIdAndUpdate(req.params.id, { $set: { description, ingredients, price } }, { new: true });
    res.status(200).json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// filter medicine using medicinal use
const filterMedicine = async (req, res) => {
  try {
    const { medicinalUse } = req.query;

    const medicines = await MedicineModel.find({ medicinalUse: { $regex: medicinalUse, $options: 'i' } });

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

    //console.log(selectedData);

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
        _id: item._id,
        medicineName: item.medicineName,
        price: item.price,
        ingredients: item.ingredients,
        description: item.description,
        medicineStatus: item.medicineStatus,
        medicinalUse: item.medicinalUse,
        quantity: item.quantity,
        image: item.image
      };
    });

    //console.log(selectedData);

    res.status(200).json(selectedData);
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//ss
const updateArchiveStatus = async (req, res) => {
  const { medicineId, archivedStatus } = req.body;

  try {
    if (!medicineId || !archivedStatus) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const updatedMedicine = await MedicineModel.findByIdAndUpdate(
      medicineId,
      { $set: { archiveStatus: archivedStatus } },
      { new: true }
    );

    if (!updatedMedicine) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    return res.status(200).json(updatedMedicine);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



//ss


export default {
  updateMedicine,
  filterMedicine,
  addMedicine,
  searchByName,
  medicineDetails,
  listMedicines,
  updateArchiveStatus
}