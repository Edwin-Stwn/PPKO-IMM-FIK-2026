'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Halo! Selamat datang di Musuk Ibupreneur Village. Saya asisten AI pintar yang siap membantu Anda memilih produk olahan alpukat dan susu terbaik kami. Ada yang bisa saya bantu hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      // Memanggil API internal Next.js yang terhubung ke Gemini
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'model', text: 'Maaf, sistem kami sedang sibuk. Silakan coba sesaat lagi ya!' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'model', text: 'Koneksi terputus. Pastikan internet Anda stabil.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-lg max-w-2xl mx-auto overflow-hidden flex flex-col h-[500px]">
      
      {/* Header Chat */}
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <span className="text-xl">🤖</span>
        <div>
          <h3 className="font-bold text-sm">Asisten Pintar Ibupreneur</h3>
          <p className="text-[11px] text-primary-fixed-dim">Online • Siap Membantu</p>
        </div>
      </div>

      {/* Area Pesan Obrolan */}
      <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-surface-container-low/30">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-tr-none'
                  : 'bg-white border border-outline-variant/50 text-on-surface rounded-tl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-outline-variant/50 rounded-2xl rounded-tl-none p-3 text-sm text-slate-400 shadow-sm flex items-center gap-1">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce [animation-delay:0.2s]">●</span>
              <span className="animate-bounce [animation-delay:0.4s]">●</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Form Input Pesan */}
      <form onSubmit={handleSendMessage} className="p-3 border-t border-outline-variant/50 bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanyakan sesuatu tentang produk kami..."
          className="flex-grow bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary text-on-surface"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-primary text-white px-5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50"
          disabled={loading}
        >
          Kirim
        </button>
      </form>

    </div>
  );
}