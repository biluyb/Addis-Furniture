"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Send, LayoutPanelLeft } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrolled ? "py-4 bg-dark/80 backdrop-blur-2xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-12">A</div>
          <div className="flex flex-col">
             <span className="font-display font-black text-xl tracking-tight text-white">ADDIS</span>
             <span className="text-[9px] font-bold text-accent uppercase tracking-[0.4em] leading-none mt-1">Horizon</span>
          </div>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-12">
          {["Studio", "Portfolio", "System", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all relative group"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
           <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all relative group border border-white/5">
              <ShoppingBag size={18} className="text-white/40 group-hover:text-white" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent rounded-full glow-accent" />
           </button>
           <a href="/admin" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-white/40 hover:text-white">
              <LayoutPanelLeft size={18} />
           </a>
           <a href="https://t.me/taologos" className="flex items-center gap-3 px-6 py-3 bg-white text-dark rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all">
              <Send size={14} /> Start Design
           </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-4 bg-white/5 rounded-2xl text-white border border-white/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Curtain */}
      <div className={`fixed inset-0 bg-dark z-40 lg:hidden transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
         <div className="flex flex-col items-center justify-center h-full gap-12">
            {["Studio", "Portfolio", "System", "Heritage", "Contact"].map((link, i) => (
              <a 
                key={link} 
                href={link === "Contact" ? "https://t.me/taologos" : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-display font-black text-white hover:text-accent transition-all active:scale-95"
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
