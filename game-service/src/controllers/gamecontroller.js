import tools from "../data/tools.js";
// import bosses from "../data/bosses.js";
// import npcs from "../data/npcs.js"
import logger from "../utils/logger.js"

export const getTools = (req, res) => {
  logger.info("Get Tools controller was hit");
  try {
    return res.status(200).json(tools);
  } catch (error) {
    logger.error(`Error in get tools controller: ${error.message}`)
  }
};

// export const getBosses = (req, res) => {
//   logger.info("Get Bosses controller was hit");
//   try {
//     return res.status(200).json(bosses);
//   } catch (error) {
//     logger.error(`Error in get bosses controller: ${error.message}`)
//   }
// };

// export const getBossById = (req, res) => {
//   logger.info("Get Bosses controller was hit");  
//   try {
//     const boss = bosses.find(b => b.id === req.params.id);
//     return res.status(200).json(boss);
//   } catch (error) {
//     logger.error(`Error in get boss by id controller: ${error.message}`)
//   }
// };

// export const getNPCs = (req, res) => {
//   try {
//     return res.status(200).json(npcs);
//   } catch (error) {
//     logger.error(`Error in get npcs controller: ${error.message}`)
//   }
// };

