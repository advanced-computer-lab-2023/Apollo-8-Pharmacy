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
  console.log(req.body)
  try {
    const user = new UserModel({ username, password, type });
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
    console.log(pharmacist);
    res.status(200).json(pharmacist);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

export default {
  createPharmacist
}