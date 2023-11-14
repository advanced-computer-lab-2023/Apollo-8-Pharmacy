import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  PIN:{
    type:Number
  },
  type: {
    type: String,
    enum: ['Pharmacist', 'Admin', 'Patient'],
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
