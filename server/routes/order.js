import express from "express";
import controllers from "../controllers/order.js";

const router = express.Router();
//router.post("/:id/add", controllers.addOrder);
router.get("/:id/:orderId", controllers.viewOrderDetails);
router.post("/:id/:orderId/cancel", controllers.cancelOrder);

export default router;