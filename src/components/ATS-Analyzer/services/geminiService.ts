import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AnalysisResult } from "../types";


const API_KEY: string = import.meta.env.VITE_GEMINI_API_KEY;

if(!API_KEY){
    throw new Error("INVALID API KEY");
}

const GEMINI = new GoogleGenAI({apiKey: API_KEY});
const model = "gemini-2.5-flash-preview-04-17";

/*: Promise<AnalysisResult>*/
export const analyzeResume = async (resumeText: string, jobDescription: string)  : Promise<AnalysisResult> => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) and resume analyzer.
Your task is to analyze the provided resume against the given job description.
Please provide your analysis strictly in JSON format. The JSON object must conform to the following TypeScript interface:

interface AnalysisResult {
  matchScore: number; // A numerical score from 0 to 100 representing the resume's match to the job description. Higher is better.
  strengths: string[]; // An array of strings highlighting key strengths from the resume that align with the job description. Be specific and concise.
  missingKeywords: string[]; // An array of strings listing important skills, experiences, or keywords from the job description that are missing or underemphasized in the resume. Focus on critical gaps.
  suggestions: string[]; // An array of actionable, specific suggestions for the candidate to improve their resume for this specific job. For example, "Quantify achievement in Project X by stating results like 'reduced costs by 15%'." or "Elaborate on your Python experience by mentioning specific libraries used or projects completed."
}

Job Description:
---
${jobDescription}
---

Resume:
---
${resumeText}
---

Provide ONLY the JSON object as your response. Do not include any explanatory text, markdown formatting like \`\`\`json, or any other content before or after the JSON object.
Ensure the 'matchScore' is a number between 0 and 100.
Ensure 'strengths', 'missingKeywords', and 'suggestions' are arrays of strings. If any list is empty, provide an empty array [].
`;


    try {
        const response: GenerateContentResponse = await GEMINI.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                temperature: 0.2   // For deterministic and factual output
            }
        });

        if(!response.text){
            throw new Error("AI response did not contain text");
        }

        let jsonString = response.text.trim();

        //Remove potential markdown fences
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonString.match(fenceRegex);
        if (match && match[2]) {
            jsonString = match[2].trim();
        }

        const parsedData = JSON.parse(jsonString);

        //Validation of parsed data structure
        if (
            typeof parsedData.matchScore !== 'number' ||
            !Array.isArray(parsedData.strengths) ||
            !Array.isArray(parsedData.missingKeywords) ||
            !Array.isArray(parsedData.suggestions)
        ) {
            throw new Error("AI response has invalid structure")
        }

        //Ensure score is within bounds 0-100
        parsedData.matchScore = Math.max(0, Math.min(100, Math.round(parsedData.matchScore)))

        return parsedData as AnalysisResult;

    } catch (error){
        console.log(error)
        if (error instanceof Error && error.message.includes("API_KEY_INVALID")) {
            throw new Error("Invalid API Key, please report this issue");
        }

        throw new Error("Failed to get analysis from AI. The AI may have refused to answer, or an error occurred.");
    }
}

