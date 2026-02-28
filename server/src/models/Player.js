// const mongoose = require("mongoose");
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  inventory: {
    type: [String],
    default: ["LinearSearch"]
  },
  defeatedBosses: {
    type: [String],
    default: []
  }
});

const Player = mongoose.model("Player", playerSchema);
export default Player;