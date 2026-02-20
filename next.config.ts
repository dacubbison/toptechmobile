// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',   // allows big photos & PDFs
    },
  },
};

export default nextConfig;