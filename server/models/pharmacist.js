import mongoose from "mongoose";

const pharmacistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    eduBackground: {
      type: String,
      required: true,
    },
    wallet: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      required: true,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const PharmacistModel = mongoose.model("Pharmacist", pharmacistSchema);
export default PharmacistModel;
