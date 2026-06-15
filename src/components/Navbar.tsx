"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Globe, LayoutDashboard, ArrowRight, Share2, Phone } from "lucide-react";
import { translations } from "@/utils/translations";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "am">("en");
  const [brand, setBrand] = useState("ADDIS FURNITURE");

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("lang") as "en" | "am";
    if (storedLang) setLang(storedLang);

    const storedBrand = localStorage.getItem("brandName");
    if (storedBrand) setBrand(storedBrand);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleLang = useCallback((e?: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setLang(prev => {
      const next = prev === "en" ? "am" : "en";
      localStorage.setItem("lang", next);
      window.dispatchEvent(new CustomEvent("langChange", { detail: next }));
      return next;
    });
  }, []);

  const handleToggleMenu = useCallback((e?: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(v => !v);
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

  if (!mounted) return null;

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-colors duration-300 ${isScrolled || isOpen ? "bg-white border-b border-emerald/5 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-10">
          
          {/* Logo Area */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 relative z-[1100]">
            <div className="w-10 h-10 bg-emerald rounded-2xl flex items-center justify-center font-black text-white shadow-lg">
              {brand.charAt(0)}
            </div>
            <span className="font-display font-black text-xl tracking-tighter text-emerald uppercase flex items-baseline">
              {mainBrand}<span className="text-gold ml-1">{subBrand || ""}</span>
            </span>
          </Link>

          {/* Controls - Using Anchor tags for better hardware tap support */}
          <div className="flex items-center gap-4 relative z-[1100]">
             <a 
               href="#" 
               onClick={handleToggleLang}
               onTouchEnd={handleToggleLang}
               className="w-11 h-11 rounded-2xl bg-emerald/[0.04] border border-emerald/10 flex items-center justify-center text-emerald active:bg-emerald/10 touch-manipulation cursor-pointer"
             >
                <span className="text-[10px] font-black pointer-events-none">{lang === "en" ? "EN" : "አማ"}</span>
            </a>
            
            <a 
              href="#"
              onClick={handleToggleMenu}
              onTouchEnd={handleToggleMenu}
              className="lg:hidden w-11 h-11 rounded-2xl bg-emerald text-white flex items-center justify-center shadow-xl active:bg-gold transition-colors touch-manipulation cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </a>

            {/* Desktop Only */}
            <div className="hidden lg:flex items-center gap-8 ml-4">
               {navLinks.map((link) => (
                 <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-emerald/40 hover:text-emerald">
                   {link.name}
                 </Link>
               ))}
               <Link href="/admin" className="p-3 bg-emerald text-white rounded-2xl shadow-xl">
                  <LayoutDashboard size={20} />
               </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[900] lg:hidden flex flex-col p-8 pt-32 overflow-y-auto animate-in fade-in duration-300">
           <div className="mb-14">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block border-l-4 border-gold pl-4">Digital Studio</span>
              <div className="flex flex-col gap-6">
                 {navLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     onClick={() => setIsOpen(false)} 
                     className="text-4xl font-display font-black text-emerald tracking-tighter uppercase"
                   >
                     {link.name}
                   </Link>
                 ))}
              </div>
           </div>
           
           <div className="mt-auto grid grid-cols-2 gap-4">
              <a href="tel:+251911000000" className="p-6 bg-sand rounded-[2rem] flex items-center justify-center gap-4">
                 <Phone size={20} className="text-gold" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
              </a>
              <a href="#" className="p-6 bg-sand rounded-[2rem] flex items-center justify-center gap-4">
                 <Share2 size={20} className="text-emerald/20" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Social</span>
              </a>
           </div>
        </div>
      )}
    </>
  );
}
