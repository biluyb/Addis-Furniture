"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Send } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-emerald/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-emerald">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-ivory font-serif font-black text-xl transition-transform group-hover:scale-110">
            A
          </div>
          <div className="flex flex-col">
             <span className="font-serif font-bold text-xl tracking-tight leading-none group-hover:text-gold transition-colors">ADDIS</span>
             <span className="text-[10px] font-bold text-emerald/40 uppercase tracking-[0.3em] leading-none mt-1">Furniture</span>
          </div>
        </Link>
        

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {["Collection", "Visualizer", "Portfolio", "Heritage"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
           <button className="p-3 hover:bg-emerald/5 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full" />
           </button>
           <a href="https://t.me/taologos" className="px-6 py-2.5 bg-emerald text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-gold transition-all flex items-center gap-2">
              <Send size={14} /> Contact
           </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-3 bg-emerald/5 rounded-full text-emerald"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-ivory z-40 transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
         <div className="flex flex-col items-center justify-center h-full gap-12">
            {["Collection", "Visualizer", "Portfolio", "Heritage", "Contact"].map((link, i) => (
              <a 
                key={link} 
                href={link === "Contact" ? "https://t.me/taologos" : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-emerald hover:text-gold transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link}
              </a>
            ))}
         </div>
      </div>
    </nav>
  );
}
