import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Use this folder as the root to avoid multi-lockfile warnings.
    root: __dirname,
  },
};

export default nextConfig;
