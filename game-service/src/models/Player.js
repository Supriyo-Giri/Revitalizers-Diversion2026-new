// const mongoose = require("mongoose");
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  // playerId: {
  //   type: mongoose.Schema.Types.ObjectId
  // },
  username: { type: String, required: true },
  email: { type: String, required: true, unique:true },

  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  inventory: {
    type: [String],
    default: ["LinearSearch","Print"]
  },
  defeatedBosses: {
    type: [String],
    default: []
  }
});

const Player = mongoose.model("Player", playerSchema);
export default Player;
