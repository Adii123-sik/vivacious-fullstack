import express from "express";
import {
  getTeam,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";

import { uploadTeam } from "../config/multer.js";

const router = express.Router();

router.get("/team", getTeam);
router.get("/team/:id", getTeamById);
router.post("/team", uploadTeam.single("image"), addTeam);
router.put("/team/:id", uploadTeam.single("image"), updateTeam);
router.delete("/team/:id", deleteTeam);

export default router;
