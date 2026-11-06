// Sayt ma'lumotlari: kontaktlar, ranglar, mahsulotlar, portfolio.
// Narx, nom yoki kontaktni o'zgartirish uchun shu faylni tahrirlang.

window.CONTACT = {
  phone: "+998 90 130 10 10",
  tel: "+998901301010",
  phone2: "+998 95 054 10 10",
  tel2: "+998950541010",
  telegram: "kokcha_eshiklari_fabrikasi",
  email: "",
  instagram: "https://www.instagram.com/kokcha.eshiklari.uz/",
  facebook: "https://www.facebook.com/kokchaeshiklarifabrikasi/",
  youtube: "https://www.youtube.com/@KokchaEshiklariUz"
};

// Arizalar bazasi (Supabase). anonKey — ochiq kalit: jadvalga faqat yozish mumkin, o'qish mumkin emas.
window.SUPABASE = {
  url: "https://gypjxcraglomcexhfkat.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cGp4Y3JhZ2xvbWNleGhma2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNzIzMDgsImV4cCI6MjEwODk0ODMwOH0.KfR08M1hHLFzoY3vdHZldbGckfAtSm3YEQmFt0WsKKE",
  table: "kokcha_arizalar"
};

// Rang: [yorug' tomoni, to'q tomoni]
window.COLORS = {
  white: ["#f8f6f1", "#e7e2d8"],
  ivory: ["#f2e8d6", "#ddcbae"],
  oak: ["#dab98d", "#be9461"],
  walnut: ["#7d5434", "#52341e"],
  graphite: ["#51565f", "#30343b"],
  black: ["#2f2f33", "#161618"],
  navy: ["#2f557f", "#1a3454"]
};

// door — eshik chizmasi: classic | arch | frame | twopanel | glass | fullglass | grid | hstrips |
//        lines | vlines | vglass | inserts | flat | entrance
// Rasm: assets/img/products/<id>.jpg (rangi bo'yicha: <id>-<rang>.jpg)
// Haqiqiy eshiklar (rasmlari: assets/img/products/k<kod>-1.jpg, -2.jpg, -3.jpg).
// price: null — narx "so'rov bo'yicha" ko'rsatiladi; narx qo'yish uchun raqam yozing.
window.PRODUCTS = [
  // Ko'kcha o'z dizaynlari (chizma, PNG): assets/img/products/kc0X-1.png
  { id: "kc01", name: "Arka Grey", cat: "modern", door: "classic", color: "graphite", colors: [], mat: "mdf", price: null, real: true, imgs: 1, ext: "png", badge: "new" },
  { id: "kc02", name: "Naqsh", cat: "classic", door: "classic", color: "walnut", colors: [], mat: "mdf", price: null, real: true, imgs: 1, ext: "png", badge: "new" },
  { id: "kc03", name: "Arka Line", cat: "modern", door: "classic", color: "ivory", colors: [], mat: "mdf", price: null, real: true, imgs: 1, ext: "png", badge: "new" },
  { id: "k1035", name: "1035", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true, badge: "new" },
  { id: "k1034", name: "1034", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true, badge: "new" },
  { id: "k1033", name: "1033", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true, badge: "new" },
  { id: "k1032", name: "1032", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1031", name: "1031", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1030", name: "1030", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1029", name: "1029", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1028", name: "1028", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1027", name: "1027", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1026", name: "1026", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1025", name: "1025", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1024", name: "1024", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1022", name: "1022", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1021", name: "1021", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1020", name: "1020", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1019", name: "1019", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1018", name: "1018", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1017", name: "1017", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1016", name: "1016", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1015", name: "1015", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1014", name: "1014", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1013", name: "1013", cat: "classic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1012", name: "1012", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1011", name: "1011", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1010", name: "1010", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1009", name: "1009", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1008", name: "1008", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1006", name: "1006", cat: "modern", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1005", name: "1005", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },
  { id: "k1003", name: "1003", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "veneer", price: null, real: true },
  { id: "k1002", name: "1002", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true },

  { id: "kn01", name: "Navy Gold", cat: "modern", door: "classic", color: "navy", colors: [], mat: "mdf", price: null, real: true, imgs: 1, badge: "new" },
  { id: "kn02", name: "Golden Classic", cat: "classic", door: "classic", color: "oak", colors: [], mat: "mdf", price: null, real: true, imgs: 1 },
  { id: "kn03", name: "Bianco Neo", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true, imgs: 1 },
  { id: "kn04", name: "Bordo", cat: "neoclassic", door: "classic", color: "walnut", colors: [], mat: "mdf", price: null, real: true, imgs: 1 },
  { id: "kn05", name: "Bianco", cat: "neoclassic", door: "classic", color: "white", colors: [], mat: "mdf", price: null, real: true, imgs: 1 },
  // Chizilgan (3D) namuna modellar
  { id: "vena", name: "Vena", cat: "classic", door: "classic", color: "white", colors: ["white", "ivory", "graphite"], mat: "emal", price: null, badge: "hit" },
  { id: "aurora", name: "Aurora", cat: "glass", door: "glass", color: "ivory", colors: ["ivory", "white", "navy"], mat: "emal", price: null, badge: "hit" },
  { id: "milano", name: "Milano", cat: "modern", door: "lines", color: "graphite", colors: ["graphite", "white", "oak"], mat: "eco", price: null, badge: "new" },
  { id: "royal", name: "Royal", cat: "classic", door: "classic", color: "walnut", colors: ["walnut", "ivory"], mat: "veneer", price: null, badge: "premium" },
  { id: "loft", name: "Loft", cat: "modern", door: "vglass", color: "black", colors: ["black", "graphite", "walnut"], mat: "eco", price: null },
  { id: "invisible", name: "Invisible", cat: "hidden", door: "flat", color: "white", colors: ["white", "ivory", "graphite"], mat: "emal", price: null, badge: "premium" },
  { id: "crystal", name: "Crystal", cat: "glass", door: "fullglass", color: "walnut", colors: ["walnut", "black", "white"], mat: "veneer", price: null },
  { id: "berlin", name: "Berlin", cat: "modern", door: "vglass", color: "navy", colors: ["navy", "white", "graphite"], mat: "emal", price: null, badge: "new" },
  { id: "nordic", name: "Nordic", cat: "modern", door: "lines", color: "oak", colors: ["oak", "white", "walnut"], mat: "lam", price: null },
  { id: "verona", name: "Verona", cat: "classic", door: "classic", color: "ivory", colors: ["ivory", "white", "oak"], mat: "emal", price: null },
  { id: "shadow", name: "Shadow", cat: "hidden", door: "flat", color: "graphite", colors: ["graphite", "black", "white"], mat: "emal", price: null, badge: "new" },
  { id: "fortress", name: "Fortress", cat: "entrance", door: "entrance", color: "graphite", colors: ["graphite", "walnut", "black"], mat: "steel", price: null, badge: "premium" },
  { id: "palermo", name: "Palermo", cat: "glass", door: "glass", color: "oak", colors: ["oak", "walnut", "white"], mat: "lam", price: null },
  { id: "guardian", name: "Guardian", cat: "entrance", door: "entrance", color: "walnut", colors: ["walnut", "graphite"], mat: "steel", price: null },
  { id: "roma", name: "Roma", cat: "classic", door: "classic", color: "white", colors: ["white", "ivory", "graphite"], mat: "emal", price: null },
  { id: "firenze", name: "Firenze", cat: "classic", door: "arch", color: "ivory", colors: ["ivory", "graphite", "oak"], mat: "emal", price: null },
  { id: "napoli", name: "Napoli", cat: "classic", door: "twopanel", color: "white", colors: ["white", "oak", "walnut"], mat: "emal", price: null },
  { id: "torino", name: "Torino", cat: "classic", door: "frame", color: "graphite", colors: ["graphite", "walnut", "black"], mat: "emal", price: null },
  { id: "bologna", name: "Bologna", cat: "classic", door: "classic", color: "oak", colors: ["oak", "black", "navy"], mat: "veneer", price: null },
  { id: "siena", name: "Siena", cat: "classic", door: "arch", color: "walnut", colors: ["walnut", "white", "ivory"], mat: "veneer", price: null, badge: "premium" },
  { id: "parma", name: "Parma", cat: "classic", door: "twopanel", color: "ivory", colors: ["ivory", "graphite", "oak"], mat: "emal", price: null },
  { id: "como", name: "Como", cat: "classic", door: "frame", color: "white", colors: ["white", "oak", "walnut"], mat: "emal", price: null },
  { id: "capri", name: "Capri", cat: "classic", door: "classic", color: "ivory", colors: ["ivory", "walnut", "black"], mat: "emal", price: null, badge: "new" },
  { id: "amalfi", name: "Amalfi", cat: "classic", door: "arch", color: "white", colors: ["white", "black", "navy"], mat: "emal", price: null },
  { id: "lucca", name: "Lucca", cat: "classic", door: "twopanel", color: "walnut", colors: ["walnut", "white", "ivory"], mat: "veneer", price: null },
  { id: "modena", name: "Modena", cat: "classic", door: "frame", color: "ivory", colors: ["ivory", "graphite", "oak"], mat: "lam", price: null },
  { id: "registon", name: "Registon", cat: "classic", door: "classic", color: "navy", colors: ["navy", "graphite", "oak"], mat: "emal", price: null, badge: "premium" },
  { id: "afrosiyob", name: "Afrosiyob", cat: "classic", door: "arch", color: "navy", colors: ["navy", "oak", "walnut"], mat: "emal", price: null, badge: "new" },
  { id: "oslo", name: "Oslo", cat: "modern", door: "vlines", color: "white", colors: ["white", "black", "navy"], mat: "eco", price: null },
  { id: "stockholm", name: "Stockholm", cat: "modern", door: "inserts", color: "graphite", colors: ["graphite", "white", "ivory"], mat: "emal", price: null, badge: "new" },
  { id: "helsinki", name: "Helsinki", cat: "modern", door: "lines", color: "white", colors: ["white", "graphite", "oak"], mat: "lam", price: null },
  { id: "copenhagen", name: "Copenhagen", cat: "modern", door: "vglass", color: "oak", colors: ["oak", "graphite", "walnut"], mat: "eco", price: null },
  { id: "bergen", name: "Bergen", cat: "modern", door: "vlines", color: "oak", colors: ["oak", "walnut", "black"], mat: "lam", price: null },
  { id: "zurich", name: "Zurich", cat: "modern", door: "inserts", color: "black", colors: ["black", "walnut", "navy"], mat: "emal", price: null, badge: "premium" },
  { id: "geneva", name: "Geneva", cat: "modern", door: "lines", color: "ivory", colors: ["ivory", "white", "graphite"], mat: "emal", price: null },
  { id: "vienna", name: "Vienna", cat: "modern", door: "inserts", color: "white", colors: ["white", "graphite", "oak"], mat: "emal", price: null },
  { id: "prague", name: "Prague", cat: "modern", door: "vglass", color: "graphite", colors: ["graphite", "oak", "walnut"], mat: "eco", price: null },
  { id: "lisbon", name: "Lisbon", cat: "modern", door: "vlines", color: "walnut", colors: ["walnut", "oak", "black"], mat: "eco", price: null },
  { id: "madrid", name: "Madrid", cat: "modern", door: "lines", color: "black", colors: ["black", "walnut", "navy"], mat: "eco", price: null },
  { id: "monaco", name: "Monaco", cat: "modern", door: "inserts", color: "navy", colors: ["navy", "white", "ivory"], mat: "emal", price: null, badge: "premium" },
  { id: "turon", name: "Turon", cat: "modern", door: "vlines", color: "graphite", colors: ["graphite", "ivory", "oak"], mat: "eco", price: null },
  { id: "bahor", name: "Bahor", cat: "modern", door: "lines", color: "oak", colors: ["oak", "graphite", "walnut"], mat: "lam", price: null },
  { id: "venezia", name: "Venezia", cat: "glass", door: "grid", color: "white", colors: ["white", "walnut", "black"], mat: "emal", price: null, badge: "premium" },
  { id: "luce", name: "Luce", cat: "glass", door: "hstrips", color: "white", colors: ["white", "black", "navy"], mat: "emal", price: null },
  { id: "aria", name: "Aria", cat: "glass", door: "grid", color: "black", colors: ["black", "white", "ivory"], mat: "eco", price: null, badge: "new" },
  { id: "sole", name: "Sole", cat: "glass", door: "hstrips", color: "oak", colors: ["oak", "ivory", "graphite"], mat: "lam", price: null },
  { id: "stella", name: "Stella", cat: "glass", door: "fullglass", color: "white", colors: ["white", "oak", "walnut"], mat: "emal", price: null },
  { id: "ravenna", name: "Ravenna", cat: "glass", door: "grid", color: "ivory", colors: ["ivory", "walnut", "black"], mat: "emal", price: null },
  { id: "barcelona", name: "Barcelona", cat: "glass", door: "hstrips", color: "graphite", colors: ["graphite", "black", "navy"], mat: "eco", price: null },
  { id: "amsterdam", name: "Amsterdam", cat: "glass", door: "grid", color: "oak", colors: ["oak", "white", "ivory"], mat: "veneer", price: null },
  { id: "nice", name: "Nice", cat: "glass", door: "fullglass", color: "graphite", colors: ["graphite", "ivory", "oak"], mat: "eco", price: null },
  { id: "xiva", name: "Xiva", cat: "glass", door: "hstrips", color: "walnut", colors: ["walnut", "graphite", "oak"], mat: "veneer", price: null },
  { id: "linea", name: "Linea", cat: "hidden", door: "flat", color: "white", colors: ["white", "walnut", "black"], mat: "emal", price: null },
  { id: "zero", name: "Zero", cat: "hidden", door: "flat", color: "black", colors: ["black", "walnut", "navy"], mat: "emal", price: null, badge: "new" },
  { id: "silent", name: "Silent", cat: "hidden", door: "flat", color: "ivory", colors: ["ivory", "white", "graphite"], mat: "emal", price: null },
  { id: "ghost", name: "Ghost", cat: "hidden", door: "vlines", color: "white", colors: ["white", "graphite", "oak"], mat: "emal", price: null },
  { id: "stealth", name: "Stealth", cat: "hidden", door: "flat", color: "graphite", colors: ["graphite", "oak", "walnut"], mat: "emal", price: null },
  { id: "navroz", name: "Navro'z", cat: "hidden", door: "flat", color: "navy", colors: ["navy", "oak", "walnut"], mat: "emal", price: null },
  { id: "bastion", name: "Bastion", cat: "entrance", door: "entrance", color: "black", colors: ["black", "walnut", "navy"], mat: "steel", price: null },
  { id: "citadel", name: "Citadel", cat: "entrance", door: "entrance", color: "walnut", colors: ["walnut", "white", "ivory"], mat: "steel", price: null, badge: "premium" },
  { id: "atlas", name: "Atlas", cat: "entrance", door: "entrance", color: "oak", colors: ["oak", "ivory", "graphite"], mat: "steel", price: null },
  { id: "titan", name: "Titan", cat: "entrance", door: "entrance", color: "graphite", colors: ["graphite", "oak", "walnut"], mat: "steel", price: null, badge: "new" }
];

// Rasm: assets/img/portfolio/<raqam>.jpg (tartib bo'yicha 1, 2, 3 ...)
// type: interior — eshik interyerda, showroom — shourumdagi surat
window.PORTFOLIO = [
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "interior", door: "classic", color: "white" },
  { type: "showroom", door: "classic", color: "white" },
  { type: "showroom", door: "classic", color: "white" },
  { type: "showroom", door: "classic", color: "white" },
  { type: "showroom", door: "classic", color: "white" }
];
