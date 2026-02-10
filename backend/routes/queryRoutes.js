import express from "express";
import { submitQuery,getAllQueries,deleteQuery } from "../controllers/queryController.js";

const router = express.Router();

router.post("/query", submitQuery);

router.get("/queries", getAllQueries)
router.delete("/queries/:id", deleteQuery)

export default router;
