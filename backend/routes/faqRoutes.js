import express from "express";
import {
  getFAQs,
  getFAQById,
  addFAQ,
  updateFAQ,
  deleteFAQ,
} from "../controllers/faqController.js";

const router = express.Router();

router.get("/", getFAQs);
router.get("/:id", getFAQById);
router.post("/", addFAQ);
router.put("/:id", updateFAQ);
router.delete("/:id", deleteFAQ);

export default router;
