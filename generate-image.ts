import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

async function generate() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set.');
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    console.log('Generating image...');
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'A single, highly detailed, premium dark grey alloy car wheel rim, facing slightly angled. The spokes have a carbon fiber texture. The edges of the rim and spokes have a thin, glowing red accent line. The center cap has red letters. Pure black background. Dramatic studio lighting highlighting the metallic finish, carbon fiber, and red accents. Photorealistic, 8k resolution, sleek, modern, high-end automotive part.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        },
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        fs.mkdirSync('public', { recursive: true });
        fs.writeFileSync('public/hero-rim.png', buffer);
        console.log('Image generated successfully at public/hero-rim.png');
        return;
      }
    }
    console.log('No image found in response.');
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generate();
