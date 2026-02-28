import express from "express";
import { createPlayer,loadPlayer, unlockReward } from "../controllers/playercontroller.js";

const router = express.Router();


// Create player
router.post("/new", createPlayer);

// Load full player data (save file)
router.get("/:id",loadPlayer);

// Unlock reward
router.post("/unlock",unlockReward);

export default router;