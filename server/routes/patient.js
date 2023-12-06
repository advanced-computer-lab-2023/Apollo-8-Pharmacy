import express from "express";
import controllers from "../controllers/patient.js";
import Auth from "../Authentication/login.js"
import Middle from "../Authentication/Middleware.js"
const router = express.Router();
//login
router.post("/patientLogin", Auth.loginPatient)

// to test this send a post request to this route: http://localhost:9000/patient
//no middleware needed
router.post("/", controllers.createPatient);
//
router.get("/", Middle.requireAuthAdmin, controllers.getPatients);
//check as two persons is usning it
router.get("/byId", Middle.requireAuth, controllers.getPatientById);
//not found in front checkk but tmam
router.post('/addToCart', Middle.requireAuthPatient, controllers.addToCart);

router.get('/viewCart', Middle.requireAuthPatient, controllers.viewCart);
router.delete('/:id/removeFromCart', Middle.requireAuthPatient, controllers.removeFromCart);
router.put('/:id/incMed', Middle.requireAuthPatient, controllers.incMedicine);
router.put('/addAddress', Middle.requireAuthPatient, controllers.addAddressToPatient);
router.put('/updateWallet', Middle.requireAuthPatient, controllers.updateWallet);
router.put('/:id/decMed', Middle.requireAuthPatient, controllers.decMedicine);
router.get('/:id/orders/:orderId', Middle.requireAuthPatient, controllers.viewOrderDetails);
router.get('/getCartTotal', Middle.requireAuthPatient, controllers.getCartTotal);
router.post('/:id/orders/:orderId/cancel', Middle.requireAuthPatient, controllers.cancelOrder);
router.get("/getWallet", Middle.requireAuthPatient, controllers.getWallet)


export default router;