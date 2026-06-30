import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — a parent pnpm-lock.yaml exists above this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
