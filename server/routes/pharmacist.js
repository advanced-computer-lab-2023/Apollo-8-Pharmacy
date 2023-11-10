import express from "express";
import controllers from "../controllers/pharmacist.js";
import Auth from "../Authentication/login.js"

const router = express.Router();
//login
router.post("/PharmicistLogin",Auth.loginPharmacist)

// to test this send a post request to this route: http://localhost:9000/pharmacist
router.post("/", controllers.createPharmacist);
router.get("/", controllers.getPharmacists);
router.get("/:id", controllers.getPharmacistById);
router.put("/accept/:id",controllers.acceptPharmacist);
router.put("/reject/:id",controllers.rejectPharmacist);
export default router;