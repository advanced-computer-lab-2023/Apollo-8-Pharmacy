import express from "express";
import controllers from "../controllers/medicine.js";

const router = express.Router();

router.put("/:id", controllers.updateMedicine);
router.get("/filter", controllers.filterMedicine);

export default router;