import express from "express";
import {
  getPartners,
  getPartnerById,
  addPartner,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js";

import { uploadPartner } from "../config/multer.js";

const router = express.Router();

router.get("/", getPartners);
router.get("/:id", getPartnerById);
router.post("/", uploadPartner.single("logo"), addPartner);
router.put("/:id", uploadPartner.single("logo"), updatePartner);
router.delete("/:id", deletePartner);

export default router;
