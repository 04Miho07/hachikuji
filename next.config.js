/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel用の最適化設定
  trailingSlash: false,
  images: {
    unoptimized: false,
    domains: [],
  },
  // 実験的機能の明示的な設定
  experimental: {},
  // 出力設定
  output: 'standalone',
}

module.exports = nextConfig 