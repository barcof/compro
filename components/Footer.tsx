import React from 'react';
import Link from 'next/link';
import { Globe, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-6">
            <span className="text-2xl font-bold text-white">BigSpring</span>
            <p className="text-primary-foreground/70 leading-relaxed">
              Leading the way in innovation and excellence. We provide professional solutions 
              for modern businesses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-accent transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-accent transition-colors">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-accent transition-colors">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#visi-misi" className="hover:text-accent transition-colors">Vision & Mission</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link href="#products" className="hover:text-accent transition-colors">Cloud Analytics</Link></li>
              <li><Link href="#products" className="hover:text-accent transition-colors">Infrastructure</Link></li>
              <li><Link href="#products" className="hover:text-accent transition-colors">Security</Link></li>
              <li><Link href="#products" className="hover:text-accent transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="mb-6 text-primary-foreground/70">Subscribe to get the latest updates and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-l-md bg-white/10 px-4 py-2 text-white placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="rounded-r-md bg-accent px-4 py-2 font-bold text-white hover:bg-accent/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} BigSpring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
