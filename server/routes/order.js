import express from "express";
import controllers from "../controllers/order.js";

const router = express.Router();
router.post("/", controllers.addOrder);
router.get("/", controllers.viewOrderDetails);
router.post("/cancel", controllers.cancelOrder);

export default router;