import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import pharmacistRoutes from "./routes/pharmacist.js";
import patientRoutes from "./routes/patient.js";
import adminRoutes from "./routes/admin.js";
import medicineRoutes from "./routes/medicine.js";

// const multer = require('multer');
// const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));


// routes
app.use("/pharmacist", pharmacistRoutes);
app.use("/patient", patientRoutes);
app.use("/admin", adminRoutes);
app.use("/medicine", medicineRoutes);