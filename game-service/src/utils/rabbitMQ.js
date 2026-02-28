import amqp from "amqplib";
import logger from "./logger.js"
import { env } from "./env.js";

const RABBITMQ_URL = env.RABBITMQ_URL;

const EXCHANGE_NAME = "user_events";
const EXCHANGE_TYPE = "topic";

let channel;
let connection;

export const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();

    await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE, {
      durable: true,
    });

    logger.info(`Game-service connected to RabbitMQ`)

    connection.on("error", (err) => {
      logger.error(`RabbitMQ connection error: ${err}`)
    });

    connection.on("close", () => {
      logger.error(`RabbitMQ connection closed`)
    });

  } catch (error) {
    logger.error("RabbitMQ connection failed:", error)
    process.exit(1);
  }
};
connectRabbitMQ()

export const publishEvent = async (routingKey, data) => {
  try {
    if (!channel) {
      throw new Error("RabbitMQ channel not initialized");
    }

    channel.publish(
      EXCHANGE_NAME,
      routingKey,
      Buffer.from(JSON.stringify(data)),
      { persistent: true }
    );

    logger.info(`Event published → ${routingKey}\ndata: ${JSON.stringify(data)}`)
  } catch (error) {
    logger.error(`Error publishing event: ${error}`)
  }
};