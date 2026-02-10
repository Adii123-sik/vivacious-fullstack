import express from "express";
import {
  getBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import { uploadBlog } from "../config/multer.js";

const router = express.Router();

/* ================= PUBLIC ================= */
router.get("/blogs", getBlogs);

/* ✅ NEW – DIRECT ID ROUTE */
router.get("/blogs/:id", getBlogById);

/* (optional – old route agar kahin use ho raha ho) */
router.get("/blogs/id/:id", getBlogById);

/* ================= ADMIN ================= */
router.post(
  "/blogs",
  uploadBlog.single("image"),
  addBlog
);

router.put(
  "/blogs/:id",
  uploadBlog.single("image"),
  updateBlog
);

router.delete("/blogs/:id", deleteBlog);

export default router;
