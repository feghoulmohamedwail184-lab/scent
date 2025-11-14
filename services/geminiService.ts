import { GoogleGenAI, Type } from "@google/genai";
import type { UserInput, FragranceRecommendation } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const fragranceSchema = {
  type: Type.OBJECT,
  properties: {
    fragranceName: {
      type: Type.STRING,
      description: "A creative and fitting name for the fragrance.",
    },
    description: {
      type: Type.STRING,
      description: "A rich, evocative paragraph describing the fragrance, its mood, and who it's for.",
    },
    topNotes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of top notes.",
    },
    middleNotes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of middle (heart) notes.",
    },
    baseNotes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of base notes.",
    },
    affordableAlternative: {
        type: Type.OBJECT,
        description: "An affordable alternative or 'dupe' for the main fragrance.",
        properties: {
          fragranceName: {
            type: Type.STRING,
            description: "The name of the affordable fragrance."
          },
          description: {
            type: Type.STRING,
            description: "A short description of why this is a good alternative."
          }
        },
        required: ['fragranceName', 'description']
      }
  },
  required: ['fragranceName', 'description', 'topNotes', 'middleNotes', 'baseNotes', 'affordableAlternative'],
};

export const getFragranceRecommendation = async (userInput: UserInput): Promise<FragranceRecommendation> => {
  const { personality, color, gender, fruit, vegetable, age, budget } = userInput;

  const prompt = `
    Analyze the following user profile to recommend a unique, niche fragrance. The recommendation should be detailed and sophisticated.
    Also, provide a more affordable and accessible alternative fragrance that captures a similar essence.
    
    User Profile:
    - Personality: ${personality}
    - Favorite Color Hex: ${color} (Interpret the mood of this color)
    - Gender Preference: ${gender}
    - Age Range: ${age}
    - Typical Budget: ${budget}
    - Favorite Fruit: ${fruit}
    - Favorite Vegetable: ${vegetable}

    Based on this complete profile, generate a primary fragrance recommendation. The scent should be complex and interesting, tailored to their age and personality.
    Then, generate an 'affordableAlternative'. This should be a well-known, cheaper fragrance that shares key notes or the overall vibe of the primary recommendation. Explain briefly why it's a good alternative.
    Connect all inputs creatively. For example, the vegetable could be a subtle, earthy base note, and the fruit a bright top note. The personality, color, age, and budget should define the overall mood, character, and price-point context of the scents.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: fragranceSchema,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error fetching fragrance recommendation:", error);
    throw new Error("Failed to get fragrance recommendation from Gemini API.");
  }
};


export const generateFragranceImage = async (description: string, color: string): Promise<string> => {
    const prompt = `
    Create an ultra-realistic, atmospheric, and artistic photograph that visually represents a luxury fragrance.
    
    The fragrance is described as: "${description}".
    
    The primary color mood should be inspired by the hex code: ${color}.
    
    The image should be abstract and evocative, not a literal product shot. Think of it as a magazine editorial photo. It should feature elements that hint at the fragrance notes (like light, shadows, textures, maybe a hint of natural elements like a glistening fruit peel or a rare flower petal), but in a subtle, artistic way. The lighting should be dramatic and cinematic. High resolution, photorealistic, and deeply moody.
    `;
    
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        } else {
            throw new Error("No image was generated.");
        }
    } catch (error) {
        console.error("Error generating fragrance image:", error);
        throw new Error("Failed to generate fragrance image from Gemini API.");
    }
};