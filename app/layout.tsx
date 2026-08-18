import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

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
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className={`${lato.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
