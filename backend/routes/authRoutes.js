import express from "express";
import { adminLogin } from "../controllers/authController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

/* 1️⃣ LOGIN (already hai – perfect) */
router.post("/login", adminLogin);

/* 2️⃣ AUTO LOGIN CHECK (NEW – ye hi main magic hai 🔥) */
router.get("/check", adminAuth, (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

/* 3️⃣ LOGOUT (optional but recommended) */
router.post("/logout", (req, res) => {
  res.clearCookie("adminToken");
  res.json({ message: "Logged out" });
});

export default router;