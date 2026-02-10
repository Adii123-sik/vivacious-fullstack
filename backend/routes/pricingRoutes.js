import express from "express";
import {
  getPricing,
  getPricingById,
  addPricing,
  updatePricing,
  deletePricing,
} from "../controllers/pricingController.js";

const router = express.Router();

router.get("/pricing", getPricing);
router.get("/pricing/:id", getPricingById);
router.post("/pricing", addPricing);
router.put("/pricing/:id", updatePricing);
router.delete("/pricing/:id", deletePricing);

export default router;
