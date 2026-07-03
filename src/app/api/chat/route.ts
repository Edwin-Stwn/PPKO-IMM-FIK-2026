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
            parts: [{ text: 'Anda adalah Asisten Pintar Belanja yang ramah untuk produk olahan alpukat Musuk Ibupreneur Village. Jawablah menggunakan bahasa Indonesia yang singkat dan padat.' }]
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