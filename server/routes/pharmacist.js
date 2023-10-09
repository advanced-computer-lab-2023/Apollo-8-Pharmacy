import express from "express";
import controllers from "../controllers/pharmacist.js";

const router = express.Router();

// to test this send a post request to this route: http://localhost:9000/pharmacist
router.post("/", controllers.createPharmacist);
router.get("/", controllers.getPharmacists);
router.get("/:id", controllers.getPharmacistById);
router.put("/accept/:id",controllers.acceptPharmacist);
router.put("/reject/:id",controllers.rejectPharmacist);
export default router;