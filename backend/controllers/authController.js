import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN API HIT 👉", email);

  const sql = "SELECT * FROM admins WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      console.error("❌ DB ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const admin = result[0];

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("🔐 JWT GENERATED");

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: true,        // 🔥 HTTPS required
      sameSite: "none",    // 🔥 Cross-origin (Vercel → Render)
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
      message: "Login successful"
    })
  });
};
