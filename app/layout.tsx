import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const vendSans = localFont({ src: "./vend-sans-v1-latin-regular.woff2", display: "swap", variable: "--font-vend-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.gapurakencana.com"),
  title: { default: "Mechanical Seal Service & Reconditioning Indonesia | Gapura Kencana", template: "%s | Gapura Kencana" },
  description: "PT Gapura Kencana provides Mechanical Seal service and reconditioning, metal repair, pump repair and spare parts for industrial applications in Indonesia.",
  alternates: { languages: { id: "/", en: "/en/" } },
  openGraph: { type: "website", siteName: "PT Gapura Kencana", title: "Mechanical Seal Service & Reconditioning Indonesia | Gapura Kencana", description: "Mechanical Seal service, reconditioning, repair and supporting industrial services by PT Gapura Kencana." },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id" className={`${vendSans.variable} h-full antialiased`}><body className={`${vendSans.className} min-h-full flex flex-col`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"PT Gapura Kencana","description":"Mechanical Seal service and reconditioning, metal repair, pump repair and spare parts for industrial applications.","email":"gapura.kencana@yahoo.com","telephone":"+62-821-4641-4757","address":[{"@type":"PostalAddress","streetAddress":"Jababeka Innovation Center Blok A10, Kawasan Industri Jababeka","addressLocality":"Cikarang","addressRegion":"West Java","addressCountry":"ID"},{"@type":"PostalAddress","streetAddress":"Ruko Bumi Rakata Asri, Blok EE2 No. 18, Ciwedus","addressLocality":"Cilegon","addressRegion":"Banten","postalCode":"42418","addressCountry":"ID"}]})}}/><ScrollToTop/></body></html>; }
