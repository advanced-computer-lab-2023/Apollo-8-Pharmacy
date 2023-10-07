import express from "express";
import controllers from "../controllers/pharmacist.js";

const router = express.Router();

// to test this send a post request to this route: http://localhost:9000/pharmacist
router.post("/", controllers.createPharmacist);

export default router;