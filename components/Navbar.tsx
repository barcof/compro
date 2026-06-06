import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">BigSpring</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">About Us</Link>
          <Link href="#products" className="text-sm font-medium hover:text-accent transition-colors">Products</Link>
          <Link href="#facilities" className="text-sm font-medium hover:text-accent transition-colors">Facilities</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
