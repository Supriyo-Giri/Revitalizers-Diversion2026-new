// utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview"
});

/**
 * generateText(prompt)
 * Sends prompt to Gemini and returns plain text
 */
export async function generateText(prompt) {
  try {
    // Use a plain string for input
    const response = await model.generateContent({
      input: prompt,
      // optional: model parameters
      temperature: 0.2,
      top_p: 0.95,
    });

    const outputText = response?.candidates?.[0]?.output;

    if (!outputText) {
      throw new Error("Gemini returned no output text");
    }

    console.log("Gemini Output:", outputText);
    return outputText;
  } catch (err) {
    console.error("Gemini API Error:", err);
    throw new Error("Gemini API error: " + err.message);
  }
}