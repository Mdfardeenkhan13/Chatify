import express from "express";
import { loginController, logoutController, signupController } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupController);

router.get("/login", loginController);

router.get("/logout", logoutController);

export default router;