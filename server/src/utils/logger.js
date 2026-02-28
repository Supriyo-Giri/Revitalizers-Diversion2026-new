// utils/logger.js
import winston from "winston";
import fs from "fs";
import path from "path";

const logDir = "logs";

// Create logs folder if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

/* -----------------------------
   Console Format (Colorized & Clean)
------------------------------ */
const consoleFormat = combine(
  colorize({ all: true }),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  errors({ stack: true }),
  printf(({ level, message, timestamp, ...meta }) => {
    const service = meta.service || "game-service"; // fallback
    const metaString = Object.keys(meta).length
      ? " | " +
        Object.entries(meta)
          .map(([key, value]) => `${key}=${value}`)
          .join(" ")
      : "";
    return `${level.toUpperCase()} [${timestamp}] [${service}]  ${message}${metaString}`;
  })
);

/* -----------------------------
   File Format (Structured JSON)
------------------------------ */
const fileFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",

  defaultMeta: {
    service: "game-service",
  },

  transports: [
    // 🔹 Colorized Console (always visible)
    new winston.transports.Console({
      format: consoleFormat,
    }),

    // 🔹 All logs file (JSON)
    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
      level: "info",
      format: fileFormat,
    }),

    // 🔹 Error-only file (JSON)
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
      format: fileFormat,
    }),
  ],

  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, "exceptions.log"),
      format: fileFormat,
    }),
  ],

  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, "rejections.log"),
      format: fileFormat,
    }),
  ],

  exitOnError: false,
});

export default logger;