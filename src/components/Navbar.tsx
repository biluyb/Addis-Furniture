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
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleLang = useCallback((e: any) => {
    // Radical fix for mobile: use both click and touch prevention if needed, 
    // but here we just ensure the logic fires.
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
      {/* Lifted Nav for absolute priority */}
      <nav className={`fixed w-full z-[9999] transition-colors duration-300 ${isScrolled || isOpen ? "bg-white border-b border-emerald/5 py-4 shadow-xl" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
          
          {/* Logo - This works according to user */}
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-3 relative z-[10000] cursor-pointer"
          >
            <div className="w-11 h-11 bg-emerald rounded-2xl flex items-center justify-center font-black text-white shadow-xl">
              {brand.charAt(0)}
            </div>
            <span className="font-display font-black text-xl tracking-tighter text-emerald uppercase flex items-baseline select-none">
              {mainBrand}<span className="text-gold ml-1">{subBrand || ""}</span>
            </span>
          </Link>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-emerald/40 hover:text-emerald transition-all">
                  {link.name}
                </Link>
              ))}
            </div>
            <div 
              onClick={handleToggleLang} 
              className="px-5 py-3 rounded-2xl bg-emerald/[0.04] border border-emerald/10 text-[10px] font-black text-emerald uppercase cursor-pointer hover:bg-emerald/10 flex items-center gap-2"
            >
              <Globe size={14} className="text-gold" />
              {lang === "en" ? "English" : "አማርኛ"}
            </div>
          </div>

          {/* Mobile Actions - RADICAL CHANGE: Use DIV with onClick for maximum mobile stability */}
          <div className="lg:hidden flex items-center gap-4 relative z-[10000]">
             <div 
               onClick={handleToggleLang} 
               className="w-12 h-12 rounded-[18px] bg-emerald/[0.04] border-2 border-emerald/5 flex items-center justify-center text-emerald cursor-pointer active:bg-emerald/10 touch-manipulation shadow-sm"
             >
                <span className="text-[11px] font-black pointer-events-none">{lang === "en" ? "EN" : "አማ"}</span>
            </div>
            <div 
              onClick={handleToggleMenu} 
              className="w-12 h-12 rounded-[18px] bg-emerald text-white flex items-center justify-center shadow-xl cursor-pointer active:bg-gold transition-colors touch-manipulation"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[9998] lg:hidden flex flex-col p-8 pt-32 overflow-y-auto animate-in fade-in duration-300">
           <div className="mb-14">
              <span className="text-gold text-[11px] font-black uppercase tracking-[0.5em] mb-6 block border-l-4 border-gold pl-4 font-display">Directory</span>
              <div className="flex flex-col gap-6">
                 {navLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     onClick={() => setIsOpen(false)} 
                     className="text-5xl font-display font-black text-emerald tracking-tighter uppercase active:text-gold transition-colors"
                   >
                     {link.name}
                   </Link>
                 ))}
              </div>
           </div>
           
           <div className="mt-auto grid grid-cols-2 gap-4">
              <a href="tel:+251911000000" className="p-7 bg-sand rounded-3xl flex items-center justify-center gap-4 active:bg-emerald/10">
                 <Phone size={22} className="text-gold" />
                 <span className="text-[11px] font-black uppercase tracking-widest text-emerald">Call</span>
              </a>
              <a href="#" className="p-7 bg-sand rounded-3xl flex items-center justify-center gap-4 active:bg-emerald/10">
                 <Share2 size={22} className="text-emerald/20" />
                 <span className="text-[11px] font-black uppercase tracking-widest text-emerald">Social</span>
              </a>
           </div>
        </div>
      )}
    </>
  );
}
