import express from "express"
import { fightNPC } from "../controllers/battlecontroller.js";

const router = express.Router();

router.post("/fight-npc",fightNPC)

export default router;