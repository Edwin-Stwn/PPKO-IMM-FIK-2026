export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  shopeeUrl: string;
  tiktokUrl: string;
}

export const avocadoProducts: Product[] = [
  {
    id: "yogurt",
    name: "Yogurt Alpukat Premium",
    tagline: "Produk Terlaris",
    price: "Rp15.000 - Rp35.000",
    description: "Nikmati kesegaran murni perpaduan kelembutan daging alpukat mentega premium khas Musuk dan fermentasi susu sapi segar. Sumber probiotik lezat yang baik untuk pencernaan keluarga.",
    imageAlt: "Yogurt Alpukat Premium Musuk",
    imageSrc: "/yogurt.png",
    shopeeUrl: "https://shopee.co.id/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    id: "teh",
    name: "Teh Herbal Daun Alpukat",
    tagline: "Segar & Menyehatkan",
    price: "Rp25.000 - Rp45.000",
    description: "Seduhan kesehatan eksklusif yang diproses alami dari daun alpukat pilihan melalui metode pengeringan optimal. Kaya akan antioksidan untuk menjaga kebugaran dan imunitas tubuh harian Anda.",
    imageAlt: "Teh Herbal Daun Alpukat Musuk",
    imageSrc: "/teh.png",
    shopeeUrl: "https://shopee.co.id/",
    tiktokUrl: "https://www.tiktok.com/"
  },
  {
    id: "selai",
    name: "Selai Alpukat Premium",
    tagline: "Kreasi Tradisional",
    price: "Rp30.000 - Rp55.000",
    description: "Olesan roti premium bertekstur selembut mentega dengan sentuhan rasa manis alami kelapa organik yang rendah indeks glikemik. Teman sarapan terbaik yang sehat, praktis, dan padat nutrisi.",
    imageAlt: "Selai Alpukat Premium Musuk",
    imageSrc: "/selai.png",
    shopeeUrl: "https://shopee.co.id/",
    tiktokUrl: "https://www.tiktok.com/"
  }
];