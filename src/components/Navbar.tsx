"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Globe, LayoutDashboard, ArrowRight, Share2, Phone } from "lucide-react";
import { translations } from "@/utils/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "am">("en");
  const [brand, setBrand] = useState("ADDIS FURNITURE");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "en" | "am";
    if (storedLang) setLang(storedLang);

    const storedBrand = localStorage.getItem("brandName");
    if (storedBrand) setBrand(storedBrand);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleBrand = (e: any) => setBrand(e.detail);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("brandChange", handleBrand);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("brandChange", handleBrand);
    };
  }, []);

  // Use useCallback for event handlers to maintain stable references
  const handleToggleLang = useCallback(() => {
    const newLang = lang === "en" ? "am" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
  }, [lang]);

  const handleToggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const t = translations[lang];
  const [mainBrand, subBrand] = brand.split(" ");

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.portfolio, href: "#collections" },
    { name: t.studio, href: "#studio" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 pointer-events-auto ${isScrolled ? "bg-white/95 backdrop-blur-3xl border-b border-emerald/5 py-3 shadow-md" : "bg-transparent py-7"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center pointer-events-auto">
          
          {/* Brand */}
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-3 relative z-[120] cursor-pointer"
          >
            <div className="w-10 h-10 bg-emerald rounded-2xl flex items-center justify-center font-black text-white text-base shadow-xl">
              {brand.charAt(0)}
            </div>
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-emerald uppercase flex items-baseline select-none">
              {mainBrand}<span className="text-gold ml-1">{subBrand || ""}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12 relative z-[120]">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald/40 hover:text-emerald transition-all relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={handleToggleLang} 
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald/[0.04] border border-emerald/10 text-[11px] font-black text-emerald uppercase tracking-widest hover:bg-emerald/10 transition-all cursor-pointer relative z-[130]"
              >
                <Globe size={14} className="text-gold" />
                {lang === "en" ? "English" : "አማርኛ"}
              </button>
              <Link href="/admin" className="p-3 rounded-2xl bg-emerald text-white shadow-xl hover:bg-gold transition-all">
                 <LayoutDashboard size={20} />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle & Actions */}
          <div className="lg:hidden flex items-center gap-3 relative z-[120]">
             <button 
               type="button"
               onClick={handleToggleLang} 
               className="w-12 h-12 rounded-[18px] bg-emerald/[0.04] border-2 border-emerald/5 flex items-center justify-center text-emerald cursor-pointer active:bg-emerald/10 transition-all touch-manipulation relative z-[130]"
             >
                <span className="text-[10px] font-black pointer-events-none">{lang === "en" ? "EN" : "አማ"}</span>
            </button>
            <button 
              type="button"
              onClick={handleToggleMenu} 
              className="w-12 h-12 rounded-[18px] bg-emerald text-white flex items-center justify-center shadow-2xl cursor-pointer active:scale-90 transition-all touch-manipulation relative z-[130]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[150] lg:hidden flex flex-col p-8 pt-32 overflow-y-auto animate-in fade-in slide-in-from-top duration-500">
           <div className="mb-14">
              <span className="text-gold text-[11px] font-black uppercase tracking-[0.5em] mb-4 block underline decoration-gold/20">Studio Directory</span>
              <div className="flex flex-col gap-6">
                 {navLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     onClick={() => setIsOpen(false)} 
                     className="text-5xl font-display font-black text-emerald tracking-tighter uppercase"
                   >
                     {link.name}
                   </Link>
                 ))}
              </div>
           </div>
           
           <div className="mt-auto grid grid-cols-2 gap-4">
              <a href="tel:+251911000000" className="p-6 bg-sand rounded-3xl flex items-center gap-4">
                 <Phone size={20} className="text-gold" />
                 <span className="text-[11px] font-black uppercase tracking-widest text-emerald">Call</span>
              </a>
              <a href="#" className="p-6 bg-sand rounded-3xl flex items-center gap-4">
                 <Share2 size={20} className="text-emerald/20" />
                 <span className="text-[11px] font-black uppercase tracking-widest text-emerald">Social</span>
              </a>
           </div>
        </div>
      )}
    </>
  );
}
