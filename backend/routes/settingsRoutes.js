import express from "express";
import { getSettings, updateSettings } from "../controllers/settingsController.js";
import { uploadSettings } from "../config/multer.js";

const router = express.Router();

router.get("/", getSettings);

router.put(
  "/",
  uploadSettings.fields([
    { name: "why_image", maxCount: 1 },
    { name: "logo_image", maxCount: 1 }
  ]),
  updateSettings
);

export default router;
