import express from "express";
import controllers from "../controllers/pharmacist.js";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import Auth from "../Authentication/login.js"
import Middle from "../Authentication/Middleware.js"

const router = express.Router();
//login
router.post("/PharmicistLogin", Auth.loginPharmacist)

// to test this send a post request to this route: http://localhost:9000/pharmacist
router.post("/", uploadMiddleware, controllers.createPharmacist);

router.get("/",Middle.requireAuthAdmin, controllers.getPharmacists);
router.get("/:id",Middle.requireAuthAdmin ,controllers.getPharmacistById);
router.put("/accept/:id",Middle.requireAuthAdmin, controllers.acceptPharmacist);
router.put("/reject/:id",Middle.requireAuthAdmin, controllers.rejectPharmacist);
router.get("/sales/:month?",Middle.requireAuthPhatmacist, controllers.getPharmacistSalesReport);
export default router;