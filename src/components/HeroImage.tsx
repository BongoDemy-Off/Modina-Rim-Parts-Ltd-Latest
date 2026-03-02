import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2 } from 'lucide-react';

export default function HeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateImage = async () => {
      try {
        // Check local storage first to avoid regenerating on every reload
        const cachedImage = localStorage.getItem('modina_hero_mfg_v2');
        if (cachedImage) {
          setImageUrl(cachedImage);
          setLoading(false);
          return;
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('API key not found');
        }

        const ai = new GoogleGenAI({ apiKey });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A highly cinematic, photorealistic image of a glowing, newly forged automotive alloy rim being inspected by a high-tech robotic laser scanner in a dark, pristine, futuristic manufacturing facility. Blue laser beams, sparks, extreme detail, 8k resolution, representing precision, quality, and innovation in auto parts manufacturing.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
            },
          },
        });
        
        let foundImage = false;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const newImageUrl = `data:image/png;base64,${base64EncodeString}`;
            setImageUrl(newImageUrl);
            
            try {
              // Clean up old unused cache keys to free up space
              localStorage.removeItem('modina_hero_image');
              localStorage.removeItem('modina_hero_mfg_image');
              
              // Try to save the new image
              localStorage.setItem('modina_hero_mfg_v2', newImageUrl);
            } catch (storageErr) {
              console.warn('Could not save image to localStorage (quota exceeded). The image will be regenerated on next reload.', storageErr);
              // We don't throw here because we still have the image URL in state and can display it.
            }
            
            foundImage = true;
            break;
          }
        }

        if (!foundImage) {
          throw new Error('No image generated');
        }
      } catch (err) {
        console.error('Error generating image:', err);
        setError('Failed to generate image');
        // Fallback image representing manufacturing
        setImageUrl('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80');
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-modina-red bg-modina-dark/50 rounded-2xl border border-white/5">
        <Loader2 className="w-12 h-12 animate-spin mb-4" />
        <p className="text-sm font-display tracking-widest uppercase text-white animate-pulse">Initializing Scanner...</p>
      </div>
    );
  }

  return (
    <img
      src={imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80'}
      alt="Advanced Auto Parts Manufacturing"
      className="w-full h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
      referrerPolicy="no-referrer"
    />
  );
}
