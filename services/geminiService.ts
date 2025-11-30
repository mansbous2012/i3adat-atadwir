import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
أنت "إيكو-صناع" (Eco-Suna')، مساعد ذكي خبير في إعادة التدوير والاستدامة.
مهمتك هي مساعدة المستخدمين على تحويل نفاياتهم إلى موارد قيمة أو مشاريع فنية.
عندما يسألك المستخدم عن مادة معينة (مثل "علبة حليب" أو "إطار سيارة قديم"):
1. اقترح 3 أفكار إبداعية لإعادة استخدامها (DIY).
2. حدد مستوى الصعوبة لكل فكرة.
3. اذكر الأدوات المطلوبة باختصار.
4. قدم نصيحة بيئية سريعة.
كن ودودًا، مشجعًا، واستخدم لغة عربية واضحة وجذابة.
إذا قام المستخدم برفع صورة، قم بتحليل الصورة واقترح مشاريع بناءً على ما تراه.
`;

export const generateRecyclingIdeas = async (
  prompt: string, 
  imageBase64?: string
): Promise<string> => {
  try {
    const parts: any[] = [];
    
    // Add image if present
    if (imageBase64) {
      // Remove data URL prefix if present (e.g., "data:image/jpeg;base64,")
      const base64Data = imageBase64.split(',')[1] || imageBase64;
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg', // Assuming JPEG for simplicity, or detect from header
          data: base64Data
        }
      });
    }

    // Add text prompt
    parts.push({
      text: prompt || "ماذا يمكنني أن أصنع بهذه المادة؟"
    });

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: parts
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly creative
      }
    });

    return response.text || "عذراً، لم أتمكن من توليد أفكار في الوقت الحالي. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بالمساعد الذكي. يرجى التأكد من مفتاح API والمحاولة لاحقاً.";
  }
};