/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true, // S3 için gerekli
  },
  output: 'export', // Statik HTML export için
  typescript: {
    // !! UYARI !!
    // TypeScript hatalarını görmezden gel
    ignoreBuildErrors: true,
  },
  trailingSlash: true, // URL sonlarında slash olmasını sağlar (S3 için gerekli)
  eslint: {
    ignoreDuringBuilds: true, // ESLint hatalarını build sırasında görmezden gel
  },
  // Geliştirme modunda hataları görmezden gel
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  // Statik export için gerekli
  experimental: {
    // Bu ayar, metadataBase ile ilgili uyarıyı bastırır
    appDocumentPreloading: false,
  },
};

module.exports = nextConfig;