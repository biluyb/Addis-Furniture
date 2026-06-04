"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Send, LayoutPanelLeft, Globe } from "lucide-react";
import { translations } from "@/utils/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "am">("en");

  const t = translations[lang];

  useEffect(() => {
    // Sync language selection with local storage if needed
    const savedLang = localStorage.getItem("lang") as "en" | "am";
    if (savedLang) setLang(savedLang);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "am" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      scrolled ? "py-4 bg-ivory/80 backdrop-blur-2xl border-b border-emerald/5 shadow-sm" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald rounded-2xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-12">{lang === "en" ? "A" : "አ"}</div>
          <div className="flex flex-col">
             <span className="font-display font-black text-xl tracking-tight text-emerald">{t.brand}</span>
             <span className="text-[9px] font-bold text-gold uppercase tracking-[0.4em] leading-none mt-1">{t.brandSub}</span>
          </div>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-12">
          {["Studio", "Portfolio", "System", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald/40 hover:text-emerald transition-all relative group"
            >
              {link === "Studio" && lang === "am" ? "ስቱዲዮ" : 
               link === "Portfolio" && lang === "am" ? "ስራዎቻችን" :
               link === "System" && lang === "am" ? "አሰራር" :
               link === "Contact" && lang === "am" ? "አድራሻ" : link}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
           {/* Language Toggle */}
           <button 
             onClick={toggleLang}
             className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald/5 hover:bg-emerald/10 border border-emerald/5 text-emerald transition-all"
           >
              <Globe size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{lang === "en" ? "AM" : "EN"}</span>
           </button>

           <button className="p-3 bg-emerald/5 hover:bg-emerald/10 rounded-xl transition-all relative group border border-emerald/5">
              <ShoppingBag size={18} className="text-emerald/40 group-hover:text-emerald" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rounded-full" />
           </button>
           <a href="/admin" className="p-3 bg-emerald/5 hover:bg-emerald/10 rounded-xl transition-all border border-emerald/5 text-emerald/40 hover:text-emerald">
              <LayoutPanelLeft size={18} />
           </a>
           <a href="https://t.me/taologos" className="flex items-center gap-3 px-6 py-3 bg-emerald text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-gold transition-all shadow-xl shadow-emerald/5">
              <Send size={14} /> {t.enterStudio}
           </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
           <button 
             onClick={toggleLang}
             className="p-3 bg-emerald/5 rounded-2xl text-emerald border border-emerald/5"
           >
              <span className="text-[10px] font-bold">{lang === "en" ? "አማ" : "EN"}</span>
           </button>
           <button 
             className="p-4 bg-emerald/5 rounded-2xl text-emerald border border-emerald/5"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

      </div>

      {/* Mobile Curtain */}
      <div className={`fixed inset-0 bg-ivory z-40 lg:hidden transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
         <div className="flex flex-col items-center justify-center h-full gap-10">
            {["Studio", "Portfolio", "System", "Contact"].map((link, i) => (
              <a 
                key={link} 
                href={link === "Contact" ? "https://t.me/taologos" : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-black text-emerald hover:text-gold transition-all active:scale-95"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link === "Studio" && lang === "am" ? "ስቱዲዮ" : 
                 link === "Portfolio" && lang === "am" ? "ስራዎቻችን" :
                 link === "System" && lang === "am" ? "አሰራር" :
                 link === "Contact" && lang === "am" ? "አድራሻ" : link}
              </a>
            ))}
         </div>
      </div>
    </nav>
  );
}
