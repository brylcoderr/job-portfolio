import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  serverExternalPackages: [],
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
