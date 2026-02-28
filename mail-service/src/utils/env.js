import dotnev from "dotenv"

dotnev.config();

export const env = {
    PORT: process.env.PORT,
    RABBITMQ_URL: process.env.RABBITMQ_URL,
    REGISTER_QUEUE_NAME: process.env.REGISTER_QUEUE_NAME,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
}