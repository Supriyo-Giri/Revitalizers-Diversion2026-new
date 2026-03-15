import mongoose from "mongoose";
import logger from "../utils/logger.js"

export const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        logger.info(`Connected to mongoDb: ${conn.connection.host}`)
    } catch (error) {
        logger.error(`Unable to connect to MongoDb: ${error}`);
        process.exit(1);
    }
}