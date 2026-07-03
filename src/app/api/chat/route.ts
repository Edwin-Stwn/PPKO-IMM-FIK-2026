import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ reply: 'Pesan tidak boleh kosong.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: 'Kunci API (GEMINI_API_KEY) belum terbaca di server Vercel.' });
    }

    // Menginisialisasi dengan format paling dasar dan bersih
    const ai = new GoogleGenAI({ apiKey: apiKey.trim() });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: 'Anda adalah Asisten Pintar Belanja yang ramah untuk produk olahan alpukat Musuk Ibupreneur Village. Jawablah menggunakan bahasa Indonesia yang singkat dan padat.',
      },
    });

    return NextResponse.json({ reply: response.text || 'Saya belum bisa memahami pesan itu.' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ reply: `Pesan Sistem: ${error?.message || 'Koneksi API diblokir atau limit habis.'}` });
  }
}