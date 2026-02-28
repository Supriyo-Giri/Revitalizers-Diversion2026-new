import dotenv from "dotenv"
dotenv.config();

export const env = {
    PORT: process.env.PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    RABBITMQ_URL: process.env.RABBITMQ_URL,
    REGISTER_QUEUE_NAME: process.env.REGISTER_QUEUE_NAME
}