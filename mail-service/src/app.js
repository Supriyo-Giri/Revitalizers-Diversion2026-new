import express from "express"
import { connectRabbitMQ, consumeUserEvents } from "./utils/rabbitMQ.js";
import logger from "./utils/logger.js";

const app = express();

app.get("/",(req,res)=>{
  logger.info("Mail-Server up and running...");
  res.status(200).json({
    message:"mail service is up and running",
    success: true
  })
})

const startMailService = async () => {
  try {
    await connectRabbitMQ();
    await consumeUserEvents();

    logger.info("Mail Service started successfully");

  } catch (error) {
    logger.error(`Failed to start Mail Service: ${error}`);
    process.exit(1);
  }
};

startMailService();

export default app;