import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

/* ================= ROUTES ================= */
import authRoutes from "./routes/authRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

/* ================= CONFIG ================= */
dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

// JSON & Form support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// CORS (Admin + Frontend + Render safe)


app.use(cors({
  origin: [
    "https://vivacious-fullstack-sn2x.vercel.app",  // Admin Panel
    "https://vivacious-fullstack-w3kt.vercel.app"   // Public Gatsby
  ],
  credentials: true
}));


/* ================= HEALTH CHECK ================= */

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running 🚀",
    time: new Date(),
  });
});

/* ================= ROUTES ================= */

// Auth
app.use("/api/admin", authRoutes);

// Public / Queries
app.use("/api", queryRoutes);

// Main modules
app.use("/api", testimonialRoutes);
app.use("/api", teamRoutes);
app.use("/api", projectRoutes);
app.use("/api", blogRoutes);
app.use("/api", pricingRoutes);

// Separated paths
app.use("/api/partners", partnerRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/services", serviceRoutes);

/* ================= GLOBAL ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

/* ================= SERVER START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
