import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */env: {
    NEXT_PUBLIC_BACKEND_URL: "https://edu-agent-backend-lfzq.vercel.app/api/auth",
  },
};

export default nextConfig;
