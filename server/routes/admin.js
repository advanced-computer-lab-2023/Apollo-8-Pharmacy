import express from "express";
import controllers from "../controllers/admin.js";
import Auth from "../Authentication/login.js"
import forget from "../Authentication/forget.js"
import changePass from "../Authentication/changePass.js";

const router = express.Router();


router.post("/forget",forget.forget)
router.post("/compare",forget.compare)
router.post("/chanePass",changePass.changePass)
router.post("/adminLogin",Auth.loginAdmin)

// to test this send a post request to this route: http://localhost:8000/doctor
router.post("/createUser", controllers.createUser);
router.get("/getUsers", controllers.getUsers);
router.post("/addAdministrator", controllers.addAdministrator);
router.delete("/removeUser", controllers.removeUser);
export default router;