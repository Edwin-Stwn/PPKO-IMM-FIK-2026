import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Pesan tidak boleh kosong' }, { status: 400 });
    }

    // Melakukan instruksi khusus agar AI berperan sebagai Asisten Pemasaran produk kalian
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `
          Anda adalah Asisten Pintar Belanja yang ramah, hangat, dan profesional untuk produk "Musuk Ibupreneur Village".
          Program ini adalah PPK Ormawa yang memberdayakan ibu rumah tangga di Desa Musuk untuk membuat produk olahan premium.
          
          Informasi Produk Anda:
          1. Yogurt Alpukat Premium (Rp15.000 - Rp35.000) -> Segar, hasil fermentasi susu sapi segar Musuk & alpukat mentega premium. Kaya probiotik.
          2. Teh Herbal Daun Alpukat (Rp25.000 - Rp45.000) -> Seduhan herbal dari daun alpukat pilihan yang dikeringkan optimal. Kaya antioksidan.
          3. Selai Alpukat Premium (Rp30.000 - Rp55.000) -> Olesan roti selembut mentega, memakai gula kelapa organik rendah indeks glikemik.
          
          Tugas Anda:
          - Jawab pertanyaan pembeli dengan bahasa Indonesia yang santun, antusias, dan persuasif.
          - Rekomendasikan produk yang cocok berdasarkan keluhan atau keinginan mereka.
          - Jika ditanya tempat beli, arahkan mereka untuk menekan tombol "Beli di Shopee" atau "TikTok Shop" yang ada di kartu produk di atas.
          - Jawablah secara ringkas, padat, dan tidak terlalu panjang agar nyaman dibaca di layar chat.
        `,
      },
    });

    const reply = response.text || 'Maaf, saya tidak dapat memahami pesan tersebut.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server internal AI' },
      { status: 500 }
    );
  }
}