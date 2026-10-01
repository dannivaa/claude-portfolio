import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (~20% smaller than WebP), WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
