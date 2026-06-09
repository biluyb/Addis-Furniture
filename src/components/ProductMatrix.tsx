"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Send, Star, Zap, ArrowUpRight } from "lucide-react";
import { translations } from "@/utils/translations";

const products = [
  { id: "oslo", name: "Oslo Sectional", price: "ETB 145,000", tag: "MODERN", image: "/images/sofa.png" },
  { id: "addis", name: "Heritage Bed", price: "ETB 98,000", tag: "ETHIO", image: "/images/bedroom.png" },
  { id: "exec", name: "Architect Desk", price: "ETB 55,000", tag: "OFFICE", image: "/images/office.png" },
  { id: "zen", name: "Dining Suite", price: "ETB 82,000", tag: "LUXURY", image: "/images/dining.png" },
];

export default function ProductMatrix() {
  const [lang, setLang] = useState<"en" | "am">("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const t = translations[lang];

  return (
    <section id="portfolio" className="section-padding bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Design Portfolio</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
                 {t.portfolioTitle} <span className="text-gradient leading-tight">{t.portfolioEdit}</span>
              </h2>
           </div>
           <button className="px-8 py-4 border border-emerald/20 text-emerald font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald/5 transition-all flex items-center gap-2">
              Browse All <ArrowUpRight size={14} />
           </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
           {products.map((p) => (
             <div key={p.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white mb-6 md:mb-8 border border-emerald/5 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-3xl group-hover:shadow-emerald/10 shadow-lg">
                   <Image 
                     src={p.image} 
                     alt={p.name} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   
                   <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-xl border border-emerald/5 rounded-xl flex items-center gap-2 shadow-sm">
                      <Zap size={12} className="text-gold" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald">{p.tag}</span>
                   </div>

                   <div className="absolute inset-x-6 bottom-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a href="https://t.me/taologos" className="w-full py-5 bg-emerald text-white rounded-2xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-emerald/40 border border-white/10">
                         <Send size={14} /> Telegram Inquire
                      </a>
                   </div>
                </div>

                <div className="flex justify-between items-start px-4">
                   <div>
                      <h3 className="text-lg font-display font-black text-emerald mb-1 transition-colors leading-none">{p.name}</h3>
                      <div className="flex items-center gap-2">
                         <div className="flex gap-0.5">
                            {[1,2,3,4,5].map((s) => <Star key={s} size={10} fill="#C5A039" color="#C5A039" className="opacity-100" />)}
                         </div>
                         <span className="text-[9px] font-black text-emerald-soft uppercase tracking-widest">Masterpiece</span>
                      </div>
                   </div>
                   <div className="text-emerald font-black text-sm">{p.price}</div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
