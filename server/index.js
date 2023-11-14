import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import pharmacistRoutes from "./routes/pharmacist.js";
import patientRoutes from "./routes/patient.js";
import adminRoutes from "./routes/admin.js";
import medicineRoutes from "./routes/medicine.js";
import orderRoutes from "./routes/order.js";
import stripe from 'stripe';
const stripeInstance = new stripe('sk_test_51OAbKKFG7BNY2kzIjyhX3ByBqijkVoASpjD4fcyOIjGcYiyxMdpHzQAf2rX7bBcokOGHeo7uwxDLX8mkStLJD3pj001MnvPqcn');



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

// images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the directory where your images are located
const imagesDirectory = path.join(__dirname, './uploads');

// Set up a route to serve images
app.use('/images', express.static(imagesDirectory));

// routes
app.use("/pharmacist", pharmacistRoutes);
app.use("/patient", patientRoutes);
app.use("/admin", adminRoutes);
app.use("/medicine", medicineRoutes);
app.use("/order", orderRoutes);

const PACKAGE_DOMAIN = 'http://localhost:5174/Checkout/';

app.post('/Checkout', async (req, res) => {
  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price: 'price_1OAhcrFG7BNY2kzIxPQqkTZi', // Replace with the actual Price ID from your Stripe Dashboard
        quantity: 1
      }, 
    ],
    success_url: `${PACKAGE_DOMAIN}?success=true`,
    cancel_url: `${PACKAGE_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));