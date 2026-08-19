'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 lg:px-20 lg:py-5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
              <Image src="/logo.png" alt="GAPURA KENCANA Logo" fill priority style={{ objectFit: 'contain' }} />
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <Link href="#about" className="text-lg font-medium hover:text-accent transition-colors">Tentang Kami</Link>
          <Link href="#products" className="text-lg font-medium hover:text-accent transition-colors">Produk</Link>
          <Link href="#facilities" className="text-lg font-medium hover:text-accent transition-colors">Fasilitas</Link>
          <Link href="#contact" className="text-lg font-medium hover:text-accent transition-colors">Kontak</Link>
          {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button> */}
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
            <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors" onClick={handleLinkClick}>Tentang Kami</Link>
            <Link href="#products" className="text-sm font-medium hover:text-accent transition-colors" onClick={handleLinkClick}>Produk</Link>
            <Link href="#facilities" className="text-sm font-medium hover:text-accent transition-colors" onClick={handleLinkClick}>Fasilitas</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={handleLinkClick}>Kontak</Link>
            {/* <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
