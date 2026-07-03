import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ reply: 'Pesan tidak boleh kosong.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: 'Galat: GEMINI_API_KEY belum terbaca di server Vercel.' });
    }

    // Menggunakan fetch langsung ke endpoint resmi Google Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey.trim()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          systemInstruction: {
            parts: [{ 
              text: `
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
              ` 
            }]
          }
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        reply: `Galat API Google (${response.status}): ${data?.error?.message || 'Kunci ditolak.'}`
      });
    }

    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Saya belum bisa memahami pesan itu.';
    return NextResponse.json({ reply: replyText });

  } catch (error: any) {
    return NextResponse.json({ reply: `Galat Jalur Backend: ${error?.message || 'Gangguan server.'}` });
  }
}