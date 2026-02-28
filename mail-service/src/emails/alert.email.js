import nodemailer from "nodemailer";
import { env } from "../utils/env.js";
import logger from "../utils/logger.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASSWORD,
  },
});

export const sendWelcomeEmail = async (name, email) => {
  try {
    const mailOptions = {
      from: `"AlgoQuest" <${env.MAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to Our Platform",
      text: `Hello ${name},

Thank you for registering with us.

We are excited to have you onboard!

Regards,
AlgoQuest Team`,
      html: `
        <h2>Welcome ${name} 👋</h2>
        <p>Thank you for registering with us.</p>
        <p>We're excited to have you onboard! <br/>Your coding adventure starts now! ⚡ Here, learning isn’t boring—it’s a game. Solve challenges, earn points, unlock levels, and level up your coding powers. 🕹️💻

Every bug you fix, every challenge you conquer, brings you closer to becoming a coding hero. Ready to play, learn, and beat your high score? 🚀
Tip: Keep going daily—you might just top the leaderboard! 🌟
Let’s code, play, and grow together!</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info(`Welcome email sent to ${email}`);
  } catch (error) {
    logger.error(`Failed to send welcome email: ${error.message}`);
  }
};
