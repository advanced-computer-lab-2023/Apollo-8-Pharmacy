import PharmacistModel from '../models/pharmacist.js';
import UserModel from '../models/user.js';

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
  // const salt = await bcrypt.genSalt(saltRounds);
  // const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await UserModel.findOne({ username });
  if (!existingUser) {
    try {
      const user = new UserModel({ username, password, type });
      // user.password = hashedPassword;
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
  const { user } = req.body;
  try {
    const pharmacist = await PharmacistModel.findOne({ user });
    if (!pharmacist) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(pharmacist);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  createPharmacist, getPharmacists, getPharmacistById
}