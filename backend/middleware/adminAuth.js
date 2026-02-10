import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // ✅ cookie se token lo
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ✅ token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Auth failed" });
  }
};

export default adminAuth;
