# 🌞 Sunoa - Premium Güneş Kremi E-Ticaret Sitesi

Sunoa, lüks ama ulaşılabilir güneş kremi ürünlerini tanıtmak ve satmak amacıyla geliştirilmiş modern bir e-ticaret platformudur. Next.js App Router altyapısı ve statik site üretimi (SSG) ile yüksek performanslı, SEO dostu ve CDN uyumlu bir deneyim sunar.

---

## 🚀 Teknoloji Yığını

| Teknoloji    | Sürüm     |
|--------------|-----------|
| Next.js      | 15.2.1    |
| React        | 19.0.0    |
| TypeScript   | 5.x       |
| Tailwind CSS | 3.3.0     |
| PostCSS      | 8.4.31    |

---

## 🧱 Sistem Mimarisi

Proje JAMstack yaklaşımıyla geliştirilmiş olup, bileşen bazlı yapı şu şekilde düzenlenmiştir:

- **Veri Katmanı** → `src/lib/products.ts`
- **Sayfalar** → `src/app/` klasörü içinde yer alır
- **Alışveriş Sepeti** → `src/lib/cartContext.tsx` (React Context ile)
- **Arayüz Bileşenleri** → `src/components/`

---

## 📦 Temel Özellikler

### Ürün Verisi (src/lib/products.ts)

- `getFeaturedProducts()` – Öne çıkan ürünler
- `getNewArrivals()` – Yeni eklenen ürünler
- `getProductsByCategory()` – Kategoriye göre filtreleme
- `getProductById()` – Ürün detayı

### Sepet Yönetimi (src/lib/cartContext.tsx)

- Global state
- Local storage entegrasyonu
- `addToCart()`, `removeFromCart()`, `useCart()`

---

## 🛠 Kurulum ve Geliştirme

### Gereksinimler

- Node.js (v18+)
- npm (v9+)

### Kurulum

```bash
git clone https://github.com/kullaniciadi/sunoa.git
cd sunoa
npm install --legacy-peer-deps
````

### Geliştirme Sunucusu

```bash
npm run dev
```

Tarayıcıda: `http://localhost:3000`

### Build Alma

```bash
npm run build
```

### Statik Dosyaları Test Etme

```bash
npx serve out
```

---

## 📁 Proje Yapısı

```
sunoa/
├── public/               # Statik varlıklar
├── src/
│   ├── app/              # Sayfalar (App Router)
│   ├── components/       # UI bileşenleri
│   ├── lib/              # Veri ve state yönetimi
│   └── types/            # TS tipleri
├── package.json
├── next.config.js
└── README.md
```

## 🧩 Sorun Giderme

| Sorun              | Çözüm                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Bağımlılık hatası  | `npm install --legacy-peer-deps`                                                             |
| Build hatası       | `next.config.js` → `typescript.ignoreBuildErrors = true`, `eslint.ignoreDuringBuilds = true` |
| Görsel yüklenmiyor | `images.unoptimized = true`                                                                  |

---

## ✨ Katkı ve Geliştirme

Bu proje öğrenim amaçlı geliştirilmiştir. PR ve önerilere açıktır. 🧑‍💻

---

## 📜 Lisans

MIT License © 2025 Musa Emir Doğan

