import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Mengaktifkan mode Static Site Generation (SSG)
  images: {
    unoptimized: true, // Diwajibkan untuk export statis jika menggunakan komponen <Image> Next.js
  },
};

export default nextConfig;
