/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true, // Vercel için gerekli
  },
  // Vercel için output: 'export' kaldırıldı
  typescript: {
    // !! UYARI !!
    // TypeScript hatalarını görmezden gel
    ignoreBuildErrors: true,
  },
  trailingSlash: true, // SEO için gerekli
  eslint: {
    ignoreDuringBuilds: true, // ESLint hatalarını build sırasında görmezden gel
  },
  // Statik site generation için
  experimental: {
    appDocumentPreloading: false,
  },
};

module.exports = nextConfig;