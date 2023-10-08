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
  type: {
    type: String,
    enum: ['pharmacist','admin','patient'],
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
