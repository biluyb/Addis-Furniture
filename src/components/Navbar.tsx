"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, LayoutDashboard } from "lucide-react";
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

  const toggleLang = () => {
    const newLang = lang === "en" ? "am" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
  };

  const t = translations[lang];
  const [mainBrand, subBrand] = brand.split(" ");

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.portfolio, href: "#portfolio" },
    { name: t.studio, href: "#studio" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-emerald/5 py-3" : "bg-transparent py-5 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
        
        {/* Brand - Now Dynamic */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald rounded-lg flex items-center justify-center font-black text-white text-sm md:text-base shadow-lg shadow-emerald/20">
            {brand.charAt(0)}
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tight text-emerald uppercase">
            {mainBrand}<span className="text-gold ml-1">{subBrand || ""}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald/60 hover:text-emerald transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald/[0.04] border border-emerald/10 text-[10px] font-black text-emerald uppercase tracking-widest hover:bg-emerald/5 transition-all">
              <Globe size={14} className="text-gold" />
              {lang === "en" ? "EN" : "አማ"}
            </button>
            <Link href="/admin" className="p-2.5 rounded-xl bg-emerald text-white shadow-lg shadow-emerald/20 hover:scale-105 transition-transform">
               <LayoutDashboard size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
           <button onClick={toggleLang} className="w-10 h-10 rounded-xl bg-emerald/[0.04] border border-emerald/10 flex items-center justify-center text-emerald">
            <span className="text-[10px] font-black">{lang === "en" ? "EN" : "አማ"}</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-xl bg-emerald text-white flex items-center justify-center shadow-lg shadow-emerald/20">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-700 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
         <div className="h-full flex flex-col p-8 pt-24">
            <div className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-12">{brand} Node</div>
            <div className="flex flex-col gap-8">
               {navLinks.map((link) => (
                 <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-display font-black text-emerald tracking-tight hover:text-gold transition-colors">
                   {link.name}
                 </Link>
               ))}
            </div>
         </div>
      </div>
    </nav>
  );
}
