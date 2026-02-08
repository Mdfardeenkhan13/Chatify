import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Signup here");
});

router.get("/login", (req, res) => {
    res.send("Login here")
});

router.get("/logout", (req, res) => {
    res.send("Logout here")
});

export default router;