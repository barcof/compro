"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import type { Lang } from "./site-data";

export default function Navbar({ lang = "id", path = "/" }: { lang?: Lang; path?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEn = lang === "en";
  const base = isEn ? "/en" : "";
  const other = isEn ? (path === "/" ? "/" : path.replace(/^\/en/, "") || "/") : (path === "/" ? "/en/" : `/en${path}`);
  const labels = isEn ? {home:"Home",about:"About Us",services:"Services",facilities:"Facilities",customers:"Customers",contact:"Contact"} : {home:"Beranda",about:"Tentang Kami",services:"Layanan",facilities:"Fasilitas",customers:"Pelanggan",contact:"Kontak"};
  const links = [
    [labels.about, `${base}/about/`], [labels.services, `${base}/services/`], [labels.facilities, `${base}/facilities/`], [labels.customers, `${base}/customers/`], [labels.contact, `${base}/contact/`]
  ];
  return <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 lg:px-20">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 text-muted-foreground">
      <Link href={base || "/"} className="flex items-center gap-2">
        <div className="relative h-14 w-14"><Image src="/logo.png" alt="PT Gapura Kencana logo" fill priority style={{objectFit:"contain"}} /></div>
        <span className="text-gray-700 text-xl font-bold">PT GAPURA KENCANA</span>
      </Link>
      <div className="hidden md:flex items-center gap-7">
        {links.map(([label, href]) => <Link key={href} href={href} className="text-base font-medium hover:text-accent transition-colors">{label}</Link>)}
        <div className="flex items-center rounded-full border border-border bg-background/80 p-1" aria-label="Language selector">
          <Link href={other} className={`rounded-full px-3 py-1 text-xs font-bold ${!isEn ? "bg-accent text-white" : "text-muted-foreground"}`}>ID</Link>
          <Link href={isEn ? "/" : other} className={`rounded-full px-3 py-1 text-xs font-bold ${isEn ? "bg-accent text-white" : "text-muted-foreground"}`}>EN</Link>
        </div>
      </div>
      <div className="md:hidden"><Button variant="ghost" size="icon" onClick={() => setIsOpen(v=>!v)} aria-label="Toggle menu">{isOpen ? <X/> : <Menu/>}</Button></div>
    </div>
    {isOpen && <div className="md:hidden border-t bg-background/95 backdrop-blur"><div className="container mx-auto flex flex-col gap-4 px-4 py-4">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={()=>setIsOpen(false)} className="font-medium">{label}</Link>)}
      <div className="flex gap-2 pt-2"><Link href={isEn ? other : path} className={!isEn ? "font-bold text-accent" : ""}>ID</Link><span>/</span><Link href={isEn ? path : other} className={isEn ? "font-bold text-accent" : ""}>EN</Link></div>
    </div></div>}
  </nav>;
}
