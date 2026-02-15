import express from "express";
import {
  getAllOfflineServices,
  createService,
  updateService,
  deleteService
} from "../controllers/offlineServiceController.js";

const router = express.Router();

router.get("/", getAllOfflineServices);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
