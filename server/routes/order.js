import express from "express";
import controllers from "../controllers/order.js";

const router = express.Router();
router.post("/add", controllers.addOrder);
router.get("/orderDetails", controllers.viewOrderDetails);
router.put("/cancel", controllers.cancelOrder);
router.get("/getOrders" , controllers.getOrders);

export default router;