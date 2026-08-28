"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type Language = "EN" | "ID";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("ID");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const languageSwitcher = (
    <div
      className="flex items-center rounded-full border border-border bg-background/80 p-1"
      aria-label="Pilih bahasa"
    >
      {(["EN", "ID"] as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
            language === option
              ? "bg-accent text-white"
              : "text-muted-foreground hover:text-accent"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 lg:px-20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="GAPURA KENCANA Logo"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-accent text-xl font-bold">PT GAPURA KENCANA</div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/?#about"
            className="text-lg font-medium hover:text-accent transition-colors duration-300 ease-in-out"
          >
            Tentang Kami
          </Link>
          <Link
            href="/?#products"
            className="text-lg font-medium hover:text-accent transition-colors duration-300 ease-in-out"
          >
            Produk
          </Link>
          <Link
            href="/?#facilities"
            className="text-lg font-medium hover:text-accent transition-colors duration-300 ease-in-out"
          >
            Fasilitas
          </Link>
          <Link
            href="/?#contact"
            className="text-lg font-medium hover:text-accent transition-colors duration-300 ease-in-out"
          >
            Kontak
          </Link>
          {languageSwitcher}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Tentang Kami
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Produk
            </Link>
            <Link
              href="#facilities"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Fasilitas
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              Kontak
            </Link>
            <div className="flex text-center max-w-sm pt-2">{languageSwitcher}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
