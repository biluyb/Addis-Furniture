"use client";

import { useState, useEffect } from "react";
import { Send, Share2, Globe, MessageSquare, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

export default function Footer() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [brand, setBrand] = useState("ADDIS FURNITURE");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "en" | "am";
    if (storedLang) setLang(storedLang);

    const storedBrand = localStorage.getItem("brandName");
    if (storedBrand) setBrand(storedBrand);

    const hLang = (e: any) => setLang(e.detail);
    const hBrand = (e: any) => setBrand(e.detail);
    
    window.addEventListener("langChange", hLang);
    window.addEventListener("brandChange", hBrand);
    
    return () => {
      window.removeEventListener("langChange", hLang);
      window.removeEventListener("brandChange", hBrand);
    };
  }, []);

  const t = translations[lang];

  return (
    <footer className="bg-sand text-emerald pt-24 md:pt-32 pb-12 border-t border-emerald/5">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
           
           {/* Brand Intelligence */}
           <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald rounded-xl flex items-center justify-center font-black text-xl text-white">
                    {brand.charAt(0)}
                 </div>
                 <div className="flex flex-col">
                    <span className="font-display font-black text-xl tracking-tight text-emerald uppercase">{brand}</span>
                    <span className="text-[9px] font-black text-gold uppercase tracking-[0.4em] leading-none mt-1">Luxury Studio Node</span>
                 </div>
              </div>
              <p className="text-emerald-soft text-sm leading-relaxed font-medium max-w-xs">
                 {lang === "en" ? `Redefining Ethiopian luxury with ${brand} master craftsmanship.` : `${brand} ለኢትዮጵያ የቅንጦት ጥበብ አዲስ ገጽታ።`}
              </p>
           </div>

           {/* Studio */}
           <div>
              <h4 className="text-emerald/20 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Studio Node</h4>
              <ul className="space-y-4">
                 {[t.visualizer, t.configure, t.threeSixty, t.aiTools].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald text-[10px] uppercase font-black tracking-widest hover:text-gold transition-colors flex items-center gap-3">
                         <Zap size={10} className="text-gold" /> {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Support */}
           <div>
              <h4 className="text-emerald/20 text-[9px] font-black uppercase tracking-[0.5em] mb-8">Legal Node</h4>
              <ul className="space-y-4">
                 {[t.concierge, t.warranty, t.logistics, "Privacy"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald text-[10px] uppercase font-black tracking-widest hover:text-gold transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Node */}
           <div className="p-8 rounded-[2rem] bg-white border border-emerald/5 shadow-xl">
              <h4 className="text-emerald/20 text-[9px] font-black uppercase tracking-[0.3em] mb-6">Contact Node</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald/5 flex flex-shrink-0 items-center justify-center text-emerald">
                       <Send size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">Telegram</div>
                       <a href="https://t.me/taologos" className="text-sm font-black text-emerald hover:text-gold transition-colors">@taologos</a>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        <div className="pt-12 border-t border-emerald/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] text-center md:text-left">
              © {currentYear} {brand} {t.allRights}.
           </p>
           <div className="flex gap-10 text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" /> 
                 {t.systemsOnline}
              </span>
           </div>
        </div>

      </div>
    </footer>
  );
}
