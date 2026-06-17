import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kohsmiskubkxvvojxqso.supabase.co",
      },
    ],
  },
};

export default nextConfig;
