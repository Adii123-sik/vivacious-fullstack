import express from "express";
import {
  getBlogs,
  getBlogBySlug,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogById
} from "../controllers/blogController.js";

import { uploadBlog } from "../config/multer.js";

const router = express.Router();

/* ================= PUBLIC ================= */
router.get("/blogs", getBlogs);

router.get("/blogs/id/:id", getBlogById);


/* ✅ SLUG ROUTE */
router.get("/blogs/:slug", getBlogBySlug);

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
