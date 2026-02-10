import express from "express";
import {
  getAllHistory,
  getHistoryById,
  addHistory,
  updateHistory,
  deleteHistory,
} from "../controllers/historyController.js";
import { uploadHistory } from "../config/multer.js";

const router = express.Router();

router.get("/", getAllHistory);
router.get("/:id", getHistoryById);
router.post("/", uploadHistory.single("image"), addHistory);
router.put("/:id", uploadHistory.single("image"), updateHistory);
router.delete("/:id", deleteHistory);

export default router;
