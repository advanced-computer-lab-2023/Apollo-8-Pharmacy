import express from "express";
import controllers from "../controllers/pharmacist.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// to test this send a post request to this route: http://localhost:9000/pharmacist
router.post("/", uploadMiddleware, controllers.createPharmacist);
router.get("/", controllers.getPharmacists);
router.get("/:id", controllers.getPharmacistById);
router.put("/accept/:id", controllers.acceptPharmacist);
router.put("/reject/:id", controllers.rejectPharmacist);
export default router;