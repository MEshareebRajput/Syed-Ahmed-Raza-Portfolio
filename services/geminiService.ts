
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    if (!API_KEY) {
      console.warn("Gemini API Key is missing. AI chat will be unavailable.");
    }
    this.ai = new GoogleGenAI({ apiKey: API_KEY || "" });
  }

  async askPortfolioQuestion(question: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `You are an AI assistant for Syed Ahmed Raza's portfolio. 
          Syed Ahmed Raza is a Data Scientist and AI/ML Expert.
          Key facts:
          - Role: AI & Tech Creativity Mentor at Saylani Z.A.I.T Park.
          - Expertise: Prompt Engineering, Deep Learning, ML, Data Analytics, Python.
          - Mentorship: Leads AI & Data Science Program Lead (Mentorship Track).
          - Passion: Agentic AI and GenAI.
          Answer briefly and professionally. If you don't know something, say "Ahmed would love to discuss that with you directly!"`,
          maxOutputTokens: 200,
          temperature: 0.7,
        },
      });
      return response.text || "I'm sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The AI assistant is currently taking a nap. Please try again later!";
    }
  }
}

export const gemini = new GeminiService();
