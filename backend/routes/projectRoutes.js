import express from "express";
import {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import { uploadProject } from "../config/multer.js";

const router = express.Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.post(
  "/projects",
  uploadProject.single("image"),
  addProject
);
router.put(
  "/projects/:id",
  uploadProject.single("image"),
  updateProject
);
router.delete("/projects/:id", deleteProject);

export default router;
