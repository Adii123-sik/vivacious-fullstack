import express from "express";
import {
  createService,
  getServices,
  getServiceBySlug,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

import { uploadService } from "../config/multer.js";

const router = express.Router();

/* GET ALL */
router.get("/", getServices);

/* GET SINGLE BY SLUG */
router.get("/:slug", getServiceBySlug);

/* CREATE */
router.post(
  "/",
  uploadService.single("service_banner_image"),
  createService
);

/* UPDATE BY SLUG */
router.put(
  "/:slug",
  uploadService.single("service_banner_image"),
  updateService
);

/* DELETE BY SLUG */
router.delete("/:slug", deleteService);

export default router;
