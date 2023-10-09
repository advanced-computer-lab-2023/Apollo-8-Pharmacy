import express from "express";
import controllers from "../controllers/medicine.js";

const router = express.Router();

router.put("/:id", controllers.updateMedicine);
router.get("/filter", controllers.filterMedicine);
router.get("/search" , controllers.searchByName);
router.get("/listMedicines" , controllers.listMedicines);
router.get("/medicineDetails" , controllers.medicineDetails);
router.post("/addMedicine", controllers.addMedicine);


export default router;