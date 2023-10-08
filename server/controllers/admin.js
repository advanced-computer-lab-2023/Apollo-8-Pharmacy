
import PatientModel from '../models/patient.js';
import PharmacistModel from '../models/pharmacist.js';
import UserModel from '../models/user.js';

const createUser = async (req, res) => {
  const {
    username,
    password,
    type,

  } = req.body;
  console.log(req.body)
  try {
    const user = new UserModel({ username, password, type });
    await user.save();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

const addAdministrator = async (req, res) => {
  const {
    username,
    password
  } = req.body;
  try {
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken ,please choose a different username' });
    }
    const newAdmin = new UserModel({
      username,
      password,
      type: 'admin'
    });
    await newAdmin.save();
    console.log(newAdmin);
    res.status(200).json(newAdmin);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const removeUser = async (req, res) => {
  const {
    username
  } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "The User is not found" });
    }
    if (user.type == 'patient') {
      await PatientModel.deleteOne({ user: user._id });
    }
    else if (user.type == 'pharmacist') {
      await PharmacistModel.deleteOne({ user: user._id });
    }
    await UserModel.deleteOne({ username });
    res.status(200).json({ message: "The User removed successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
};

export default {
  createUser, getUsers,
  addAdministrator, removeUser
}
