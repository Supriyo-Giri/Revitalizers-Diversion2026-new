import Player from "../models/Player.js"
import bosses from "../data/bosses.js"
import logger from "../utils/logger.js";

// Create new player
export const createPlayer = async (req, res) => {
  try {
    const username = req.body.username;
    const user =  await Player.findOne({username})
    if(user){
      return res.status(400).json({
        message: "Username already exists"
      })
    }
    const player = await Player.create({
      username: username
    });
    logger.info(`Player: ${player.username} created`);
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Load Full Player Profile
export const loadPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.json({
      _id: player._id,
      username: player.username,
      level: player.level,
      xp: player.xp,
      inventory: player.inventory,
      defeatedBosses: player.defeatedBosses
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Unlock boss reward
export const unlockReward = async (req, res) => {
  const { playerId, bossId } = req.body;

  const player = await Player.findById(playerId);
  const boss = bosses.find(b => b.id === bossId);

  if (!player || !boss) {
    return res.status(404).json({ error: "Invalid data" });
  }

  if (!player.defeatedBosses.includes(bossId)) {
    player.defeatedBosses.push(bossId);

    if (!player.inventory.includes(boss.unlockReward)) {
      player.inventory.push(boss.unlockReward);
    }

    player.xp += 100;

    // simple level scaling
    if (player.xp >= player.level * 200) {
      player.level += 1;
    }

    await player.save();
  }

  res.json(player);
};