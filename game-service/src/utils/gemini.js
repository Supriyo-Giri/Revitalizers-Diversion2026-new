import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateText(prompt) {
  try {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
    const outputText = response.text;

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




// const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }
