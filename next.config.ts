import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Mengaktifkan mode Static Site Generation (SSG)
  images: {
    unoptimized: true, // Diwajibkan untuk export statis jika menggunakan komponen <Image> Next.js
  },
  basePath: process.env.NODE_ENV === 'production' ? '/compro' : '',
};

export default nextConfig;
