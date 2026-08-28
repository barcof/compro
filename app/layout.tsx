import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop';

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const vendSans = localFont({
  src: './vend-sans-v1-latin-regular.woff2',
  display: 'swap',
  variable: "--font-vend-sans",
})


export const metadata: Metadata = {
  title: "Gapura Kencana - Quick Action and Best Quality",
  description: `Kami bergerak dalam bidang spesialis Rekondisi Mechanical Seal dengan berbagai merk dan memproduksi produk suku cadang lainnya. Kami juga menerima pekerjaan : Hard Lining Rubber, Metal Spray, Ceramic Coating, Hard Chrome, Stellite, Buffing, dll.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vendSans.variable} h-full antialiased`}>
      <body className={`${vendSans.className} min-h-full flex flex-col`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
