import express from "express";
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

import { uploadService } from "../config/multer.js";

const router = express.Router();

/* GET ALL */
router.get("/", getServices);

/* GET ONE */
router.get("/:id", getServiceById);

/* CREATE */
router.post(
  "/",
  uploadService.single("service_banner_image"),
  createService
);

/* UPDATE */
router.put(
  "/:id",
  uploadService.single("service_banner_image"),
  updateService
);

/* DELETE */
router.delete("/:id", deleteService);

export default router;
