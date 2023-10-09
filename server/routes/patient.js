import express from "express";
import controllers from "../controllers/patient.js";

const router = express.Router();

// to test this send a post request to this route: http://localhost:9000/patient
router.post("/", controllers.createPatient);
router.get("/", controllers.getPatients);
router.get("/:id", controllers.getPatientById);

export default router;