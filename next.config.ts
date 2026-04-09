import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "papiphotos.remax-im.com",
      },
      {
        protocol: "https",
        hostname: "static-images.remax.com",
      },
    ],
  },
};

export default nextConfig;
