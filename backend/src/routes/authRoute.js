import express from "express";
import { loginController, logoutController, signupController, updateProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// for rate limit 5 if we refrest page more tham 5 time then it dont show this message, instead it show error message: {"message":"Rate limit exceeded. Please try again later."}
// router.get("/test", arcjetProtection, (req, res) => {
//     res.status(200).json({ message: "Test route" });
// })

router.use(arcjetProtection);

router.post("/signup", signupController);
router.post("/login", arcjetProtection, loginController);
router.post("/logout", logoutController);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user))

export default router;