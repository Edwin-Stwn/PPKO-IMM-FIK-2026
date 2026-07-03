'use client';

import { avocadoProducts } from '@/data/products';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-inter min-h-screen selection:bg-primary-container">
      
      {/* Menu Navigasi Atas */}
      <nav className="bg-surface/80 fixed w-full top-0 sticky backdrop-blur-md border-b border-primary/20 z-50">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
          
          {/* Area Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo Musuk Ibupreneur Village" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-playfair text-xl md:text-2xl font-bold text-primary tracking-tight">
              Musuk Ibupreneur Village
            </span>
          </div>

          {/* Link Navigasi */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a className="text-primary border-b-2 border-primary pb-1" href="#katalog">Katalog</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#dampak">Dampak Sosial</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#konsultasi-ai">Tanya Asisten AI</a>
          </div>

          {/* Lencana PPK Ormawa */}
          <div>
            <span className="text-xs bg-tertiary/10 text-tertiary font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              PPK Ormawa
            </span>
          </div>

        </div>
      </nav>

      {/* Bagian Hero Utama */}
      <section className="bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-12">
          <div className="z-10 order-2 lg:order-1 space-y-6">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-on-surface leading-tight">
              Inovasi Alami <br /> <span className="text-tertiary italic font-medium">Nutrisi Mewah Setiap Hari</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Nikmati kemewahan nutrisi alami dari kreasi produk olahan alpukat mentega premium dan susu segar lokal. Setiap produk yang Anda beli adalah langkah nyata dalam mendukung kemandirian ekonomi para ibu rumah tangga di Musuk.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#katalog" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10">
                Jelajahi Produk
              </a>
              <a href="#dampak" className="border-[1.5px] border-tertiary text-tertiary px-8 py-4 rounded-xl font-semibold hover:bg-tertiary/5 transition-all text-center">
                Dampak Kami
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] -z-10 animate-[pulse_6s_ease-in-out_infinite]"></div>
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                alt="Banner Produk Ibupreneur Village" 
                className="w-full h-full object-cover" 
                src="/all.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Katalog Produk */}
      <section id="katalog" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-on-surface">Inovasi Rasa dari Desa</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
            Tekstur lembut berbalut kesegaran murni. Kolaborasi istimewa antara alpukat mentega pilihan dan susu sapi segar organik yang diproduksi secara higienis, melahirkan cita rasa mewah yang memanjakan lidah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avocadoProducts.map((product) => (
            <div key={product.id} className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="aspect-square mb-6 overflow-hidden rounded-xl bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={product.imageAlt} 
                  src={product.imageSrc}
                />
              </div>
              <div className="flex-grow space-y-2">
                <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-md uppercase tracking-wider inline-block">
                  {product.tagline}
                </span>
                <h3 className="font-playfair text-xl font-bold text-primary">{product.name}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{product.description}</p>
              </div>
              
              {/* Menampilkan Kisaran Harga Tanpa Rating */}
              <div className="my-5 pt-2 border-t border-slate-100/60">
                <span className="text-xs text-on-surface-variant block mb-0.5">Kisaran Harga Mitra:</span>
                <span className="text-xl font-black text-primary tracking-tight">{product.price}</span>
              </div>
              
              {/* Tombol Konversi Penjualan */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EE4D2D] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-xs font-bold shadow-sm shadow-orange-500/10 text-center"
                >
                  Beli di Shopee
                </a>
                <a 
                  href={product.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#010101] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all text-xs font-bold shadow-sm shadow-black/10 text-center"
                >
                  TikTok Shop
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Dampak Sosial */}
      <section id="dampak" className="bg-surface-container-low py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-[50%_50%_30%_70%_/_50%_60%_40%_60%] border-8 border-tertiary/10 shadow-xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Pemberdayaan Ibu Rumah Tangga Musuk" 
                src="/ibuk.png"
              />
            </div>
            <div className="absolute -bottom-6 right-4 md:-right-4 bg-white p-5 rounded-2xl shadow-xl border border-primary/10 max-w-[240px]">
              <p className="font-playfair text-primary italic leading-tight text-sm">"Merajut masa depan yang lebih baik bagi anak-anak kami, stoples demi stoples."</p>
              <p className="text-[11px] font-bold text-on-surface-variant mt-2 uppercase tracking-wide">— Kelompok Ibu Tani, Desa Binaan</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">Lebih dari sekadar olahan biasa.</h2>
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
              Musuk Ibupreneur Village merupakan wadah pemberdayaan kolektif bagi kelompok Ibu Rumah Tangga. Kami menggabungkan potensi agroindustri lokal dengan inovasi modern untuk menghasilkan komoditas bernilai jual tinggi demi kemandirian ekonomi keluarga.
            </p>
            <div className="space-y-3 font-medium text-sm text-on-surface">
              <div className="flex items-center gap-3">
                <span className="text-tertiary bg-white p-1 rounded-full shadow-sm">✓</span>
                <p>Fasilitas produksi bebas limbah (zero-waste) di desa mitra.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-tertiary bg-white p-1 rounded-full shadow-sm">✓</span>
                <p>100% menggunakan buah & daun alpukat lokal pilihan.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-tertiary bg-white p-1 rounded-full shadow-sm">✓</span>
                <p>Model ekonomi inklusif yang memaksimalkan laba kelompok tani.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Asisten Belanja AI */}
      <section id="konsultasi-ai" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10 space-y-2">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-on-surface">Hubungi Asisten Pintar Belanja</h2>
          <p className="text-on-surface-variant text-sm">Masih bingung memilih produk? Hubungi asisten AI pintar kami yang ramah</p>
        </div>
        <Chatbot /> {/* <-- MASUKKAN DI SINI */}
      </section>

      {/* Kaki Halaman / Footer */}
      <footer className="bg-surface-container-low border-t border-primary/10 py-16 text-sm text-on-surface-variant">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3">
            <p className="font-playfair text-lg font-bold text-primary">Ibupreneur Village</p>
            <p className="max-w-xs leading-relaxed">Memberdayakan ibu rumah tangga melalui kreativitas lokal dan inovasi agroindustri berkelanjutan.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary uppercase tracking-widest text-xs">Menu Utama</p>
            <div className="flex flex-col gap-1.5">
              <a href="#" className="hover:underline">Beranda</a>
              <a href="#katalog" className="hover:underline">Katalog</a>
              <a href="#dampak" className="hover:underline">Dampak Sosial</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-primary uppercase tracking-widest text-xs font-semibold">Program PPK Ormawa IMM FIK UMS 2026</p>
            <p className="text-xs text-slate-400">© 2026 Musuk Ibupreneur Village. IMM Fakultas Ilmu Kesehatan Universitas Muhammadiyah Surakarta.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}