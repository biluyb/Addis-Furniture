"use client";

import { useState, useEffect } from "react";
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newLang = lang === "en" ? "am" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
  };

  const t = translations[lang];
  const [mainBrand, subBrand] = brand.split(" ");

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.portfolio, href: "#collections" },
    { name: t.studio, href: "#studio" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? "bg-white/90 backdrop-blur-2xl border-b border-emerald/5 py-3 md:py-4" : "bg-transparent py-6 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 relative z-[110]">
          <div className="w-10 h-10 bg-emerald rounded-2xl flex items-center justify-center font-black text-white text-base shadow-xl shadow-emerald/20 transition-transform active:scale-90">
            {brand.charAt(0)}
          </div>
          <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-emerald uppercase flex items-baseline">
            {mainBrand}<span className="text-gold ml-1">{subBrand || ""}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald/40 hover:text-emerald transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button onClick={toggleLang} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald/[0.04] border border-emerald/10 text-[11px] font-black text-emerald uppercase tracking-widest hover:bg-emerald/10 transition-all active:scale-95">
              <Globe size={14} className="text-gold" />
              {lang === "en" ? "English" : "አማርኛ"}
            </button>
            <Link href="/admin" className="p-3 rounded-2xl bg-emerald text-white shadow-xl shadow-emerald/20 hover:bg-gold hover:text-white transition-all transform hover:-rotate-12">
               <LayoutDashboard size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & Mini Actions */}
        <div className="lg:hidden flex items-center gap-3 relative z-[110]">
           <button 
             onClick={toggleLang} 
             className="w-11 h-11 rounded-[15px] bg-emerald/[0.04] border border-emerald/10 flex items-center justify-center text-emerald active:bg-emerald/10 transition-colors"
           >
            <span className="text-[10px] font-black">{lang === "en" ? "EN" : "አማ"}</span>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-11 h-11 rounded-[15px] bg-emerald text-white flex items-center justify-center shadow-xl shadow-emerald/20 active:scale-90 transition-transform"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* LUXURY MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white z-[105] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none invisible hidden"}`}>
         
         <div className="h-full flex flex-col pt-32 pb-12 px-8 overflow-y-auto">
            
            <div className="mb-12">
               <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block border-l-2 border-gold pl-4">{brand} STUDIO</span>
               <p className="text-emerald/40 text-[11px] font-medium leading-relaxed max-w-[240px]">Architecting the future of Ethiopian luxury furniture.</p>
            </div>

            <div className="flex flex-col gap-6 mb-auto">
               {navLinks.map((link, i) => (
                 <Link 
                   key={link.name} 
                   href={link.href} 
                   onClick={() => setIsOpen(false)} 
                   className="flex items-center justify-between group"
                   style={{ 
                     transitionDelay: `${i * 100}ms`,
                     opacity: isOpen ? 1 : 0,
                     transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                     transition: 'all 0.5s ease'
                   }}
                 >
                    <span className="text-4xl xs:text-5xl font-display font-black text-emerald tracking-tighter hover:translate-x-3 transition-transform duration-500">
                      {link.name}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-emerald/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <ArrowRight size={20} className="text-gold" />
                    </div>
                 </Link>
               ))}
            </div>

            <div className="mt-16 pt-12 border-t border-emerald/5">
               <div className="grid grid-cols-2 gap-4">
                  <a href="tel:+251911000000" className="flex items-center gap-3 p-5 bg-sand rounded-3xl group">
                     <Phone size={18} className="text-gold" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald">{t.contact}</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-5 bg-sand rounded-3xl">
                     <Share2 size={18} className="text-emerald/20" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald">Social</span>
                  </a>
               </div>
            </div>

         </div>
      </div>
    </nav>
  );
}
