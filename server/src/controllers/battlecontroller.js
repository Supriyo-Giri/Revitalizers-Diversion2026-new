import npcs from "../data/npcs.js";
import Player from "../models/Player.js";
// import model from "../utils/gemini.js";
import logger from "../utils/logger.js";
// import { generateText } from "../utils/gemini.js";
import { generateText } from "../utils/gemini.js";

export const fightNPC = async (req, res) => {
  const { npcId, toolSequence, playerId } = req.body;

  const npc = npcs.find(n => n.id === npcId);
  if (!npc) return res.status(404).json({ error: "NPC not found" });

  const player = await Player.findById(playerId);
  if (!player) return res.status(404).json({ error: "Player not found" });

  const prompt = `
You are an algorithm judge.

Mission:
${npc.mission.title}
${npc.mission.description}

Required Time Complexity:
${npc.requiredComplexity}

Player Algorithm Flow:
${toolSequence.join(" -> ")}

Evaluate:
1. Is the algorithm logically valid?
2. What is its overall time complexity?
3. Does it meet or exceed the required complexity?

Respond ONLY in JSON:
{
  "valid": true/false,
  "complexity": "O(...)",
  "meetsRequirement": true/false,
  "reason": "short explanation"
}
`;

  try {
    const resultText = (await generateText(prompt)).trim();
    let aiResult;

    try {
      aiResult = JSON.parse(resultText);
    } catch {
      const jsonMatch = resultText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          aiResult = JSON.parse(jsonMatch[0]);
        } catch {
          logger.error("Failed to parse extracted JSON", { extractedText: jsonMatch[0] });
          return res.status(500).json({ error: "Invalid AI response" });
        }
      } else {
        logger.error("No JSON found in AI response", { responseText: resultText });
        return res.status(500).json({ error: "Invalid AI response" });
      }
    }

    // Schema check
    if (
      typeof aiResult.valid !== "boolean" ||
      typeof aiResult.meetsRequirement !== "boolean"
    ) {
      logger.error("AI returned invalid schema", { aiResult });
      return res.status(500).json({ error: "AI returned invalid schema" });
    }

    if (aiResult.valid && aiResult.meetsRequirement) {
      player.xp += npc.rewardXP;
      await player.save();

      return res.json({
        success: true,
        xpGained: npc.rewardXP,
        ai: aiResult
      });
    } else {
      return res.json({ success: false, ai: aiResult });
    }
  } catch (err) {
    logger.error("AI evaluation failed", { error: err });
    return res.status(500).json({ error: "AI evaluation failed", message: err.message,
      api:process.env.GEMINI_API_KEY
     });
  }
};