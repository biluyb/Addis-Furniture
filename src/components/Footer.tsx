"use client";

import { useState, useEffect } from "react";
import { Send, Share2, Globe, MessageSquare, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

export default function Footer() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const t = translations[lang];

  return (
    <footer className="bg-sand text-emerald pt-32 pb-12 border-t border-emerald/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
           
           {/* Brand Intelligence */}
           <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald rounded-xl flex items-center justify-center font-black text-xl text-white">
                    {lang === "en" ? "A" : "አ"}
                 </div>
                 <div className="flex flex-col">
                    <span className="font-display font-black text-xl tracking-tight text-emerald">{t.brand}</span>
                    <span className="text-[9px] font-bold text-gold uppercase tracking-[0.4em] leading-none mt-1">{t.brandSub}</span>
                 </div>
              </div>
              <p className="text-emerald/30 text-sm leading-relaxed font-light max-w-xs">
                 Redefining Ethiopian luxury through the lens of digital precision and master craftsmanship.
              </p>
              <div className="flex gap-4">
                 {[Share2, Globe, MessageSquare].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-emerald/5 border border-emerald/5 flex items-center justify-center hover:bg-emerald hover:text-white transition-all duration-500 text-emerald/30">
                      <Icon size={18} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Studio */}
           <div>
              <h4 className="text-emerald/10 text-[9px] font-bold uppercase tracking-[0.5em] mb-10">Studio Ecosystem</h4>
              <ul className="space-y-4">
                 {[t.visualizer, t.configure, "360 Studio", t.aiTools].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald/40 text-[10px] uppercase font-bold tracking-widest hover:text-gold transition-colors flex items-center gap-3">
                         <Zap size={10} className="text-gold/40" /> {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Support */}
           <div>
              <h4 className="text-emerald/10 text-[9px] font-bold uppercase tracking-[0.5em] mb-10">Legal & Auth</h4>
              <ul className="space-y-4">
                 {["Concierge", "Warranty", "Logistics", "Privacy"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald/40 text-[10px] uppercase font-bold tracking-widest hover:text-emerald transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Node */}
           <div className="p-8 rounded-[2rem] bg-white border border-emerald/5 shadow-xl shadow-emerald/5">
              <h4 className="text-emerald/10 text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Contact Node</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald/5 flex flex-shrink-0 items-center justify-center text-emerald">
                       <Send size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-bold text-emerald/20 uppercase tracking-widest mb-1">Telegram</div>
                       <a href="https://t.me/taologos" className="text-sm font-bold text-emerald hover:text-gold transition-colors">@taologos</a>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        <div className="pt-12 border-t border-emerald/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold text-emerald/10 uppercase tracking-[0.4em]">
              © {currentYear} {t.brand} {t.brandSub}. Built with Passion in Addis.
           </p>
           <div className="flex gap-10 text-[10px] font-bold text-emerald/10 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald rounded-full" /> Systems Operational</span>
           </div>
        </div>

      </div>
    </footer>
  );
}
