import express from "express";
import {uploadTestimonial} from "../config/multer.js";
import {
  getTestimonials,
  getTestimonialById,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/testimonials", getTestimonials);
router.get("/testimonials/:id", getTestimonialById);

router.post(
  "/testimonials",
  uploadTestimonial.single("image"),
  addTestimonial
);

router.put(
  "/testimonials/:id",
  uploadTestimonial.single("image"),
  updateTestimonial
);

router.delete("/testimonials/:id", deleteTestimonial);

export default router;
