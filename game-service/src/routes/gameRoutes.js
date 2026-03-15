
import express from "express";
import { getNpcById, getTools } from "../controllers/gamecontroller.js";
const router = express.Router();

router.get("/tools",getTools);
// router.get("/bosses", getBosses);
// router.get("/bosses/:id", getBossById);
router.get("/npc/:id", getNpcById);

export default router;