import express from "express";
import controllers from "../controllers/medicine.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.put("/:id", controllers.updateMedicine);
router.get("/filter", controllers.filterMedicine);
router.get("/search", controllers.searchByName);
router.get("/listMedicines", controllers.listMedicines);
router.get("/medicineDetails", controllers.medicineDetails);
router.post("/addMedicine", uploadMiddleware, controllers.addMedicine);


export default router;

//
//652ae837203548e19b62d477
//652ae837203548e19b62d477    70 
//652ae661203548e19b62d45b    200