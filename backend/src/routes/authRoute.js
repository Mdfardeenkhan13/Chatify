import express from "express";
import { loginController, logoutController, signupController, updateProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);

router.post("/login", loginController);

router.post("/logout", logoutController);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user))

export default router;