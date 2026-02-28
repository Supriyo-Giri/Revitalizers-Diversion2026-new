// utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

/**
 * generateText(prompt)
 * Sends prompt to Gemini and returns plain text
 */
export async function generateText(prompt) {
  try {
    const response = await model.generateContent({
      contents: [{ text: prompt }],
      maxOutputTokens: 500
    });

    const outputText = response?.response?.[0]?.content?.[0]?.text;

    if (!outputText) {
      throw new Error("Gemini returned no output text");
    }

    console.log("Gemini Output:", outputText); // optional debug
    return outputText;
  } catch (err) {
    console.error("Gemini API Error:", err);
    throw new Error("Gemini API error: " + err.message);
  }
}