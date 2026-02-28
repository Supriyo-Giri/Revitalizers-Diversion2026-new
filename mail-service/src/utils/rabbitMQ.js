import amqp from "amqplib";
import logger from "./logger.js";
import { env } from "./env.js";
import { sendWelcomeEmail } from "../emails/alert.email.js"

let channel;
let connection;

const RABBITMQ_URL = env.RABBITMQ_URL;

const EXCHANGE_NAME = "user_events";
const EXCHANGE_TYPE = "topic";
const QUEUE_NAME = env.REGISTER_QUEUE_NAME;

export const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();

    await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE, {
      durable: true,
    });

    await channel.assertQueue(QUEUE_NAME, {
      durable: true,
    });

    await channel.bindQueue(QUEUE_NAME, EXCHANGE_NAME, "auth.user.registered");

    logger.info(
      `Mail Service connected. Listening on queue: ${QUEUE_NAME}`
    );

  } catch (error) {
    logger.error(`RabbitMQ connection failed: ${error}`);
    process.exit(1);
  }
};

export const consumeUserEvents = async () => {
  if (!channel) {
    throw new Error("RabbitMQ channel not initialized");
  }

  channel.consume(
    QUEUE_NAME,
    async (msg) => {
      if (!msg) return;

      const routingKey = msg.fields.routingKey;
      const data = JSON.parse(msg.content.toString());

      try {

        if (routingKey === "auth.user.registered") {
          logger.info(
            `Sending welcome email to ${data.email}`
          );
          sendWelcomeEmail(data.username,data.email);
        }

        channel.ack(msg);

      } catch (error) {
        logger.error(`Message processing failed: ${error}`);
        channel.nack(msg, false, false);
      }
    },
    { noAck: false }
  );
};