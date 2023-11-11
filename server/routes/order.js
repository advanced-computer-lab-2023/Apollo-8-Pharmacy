import express from "express";
import controllers from "../controllers/order.js";

const router = express.Router();
router.post("/:id", controllers.addOrder);
router.get("/:id", controllers.viewOrderDetails);
router.post("/:id/cancel", controllers.cancelOrder);

export default router;