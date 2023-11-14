import express from "express";
import controllers from "../controllers/patient.js";
import Auth from "../Authentication/login.js"
import Middle from "../Authentication/Middleware.js"
const router = express.Router();
//login
router.post("/patientLogin", Auth.loginPatient)

// to test this send a post request to this route: http://localhost:9000/patient
router.post("/", controllers.createPatient);
router.get("/", controllers.getPatients);
router.get("/:id", controllers.getPatientById);
router.post('/addToCart', Middle.requireAuthPatient, controllers.addToCart);
router.get('/:id/viewCart', Middle.requireAuthPatient, controllers.viewCart);
router.delete('/:id/removeFromCart', controllers.removeFromCart);
router.put('/:id/incMed', controllers.incMedicine);
router.put('/:id/addAddress', controllers.addAddressToPatient);
router.put('/updateWallet', controllers.updateWallet);
router.put('/:id/decMed', controllers.decMedicine);
router.get('/:id/orders/:orderId', controllers.viewOrderDetails);
router.get('/:id/getCartTotal', controllers.getCartTotal);
router.post('/:id/orders/:orderId/cancel', controllers.cancelOrder);



export default router;