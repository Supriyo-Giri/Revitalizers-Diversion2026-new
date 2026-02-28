import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDb } from "./config/connectDb.js";
import logger from "./utils/logger.js";
import playerRoutes from "./routes/playerRoutes.js";
import battleRoutes from "./routes/battleRoutes.js"
import gameRoutes from "./routes/gameRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/player", playerRoutes);
app.use("/api/battle",battleRoutes)
app.use("/api/game",gameRoutes)

// Health check
app.get("/", (req, res) => {
  res.json({
    status: "AlgoQuest API Running",
    version: "1.0.0",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack || err.message);
  res.status(500).json({ error: "Something went wrong" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  connectDb();
  logger.info(`Server running on port ${PORT}`);
});