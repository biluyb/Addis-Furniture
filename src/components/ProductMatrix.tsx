"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Send, Star, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

const products = [
  { id: "oslo", name: "Oslo Sectional", price: "ETB 145,000", tag: "E1", image: "/images/sofa.png" },
  { id: "addis", name: "Heritage Bed", price: "ETB 98,000", tag: "E2", image: "/images/bedroom.png" },
  { id: "exec", name: "Architect Desk", price: "ETB 55,000", tag: "E3", image: "/images/office.png" },
  { id: "zen", name: "Dining Suite", price: "ETB 82,000", tag: "E4", image: "/images/dining.png" },
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
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Design Portfolio</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald">
                 {t.portfolioTitle} <span className="text-gradient">{t.portfolioEdit}</span>
              </h2>
           </div>
           <button className="btn-ghost">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((p) => (
             <div key={p.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-sand mb-8 border border-emerald/5 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-emerald/5">
                   <Image 
                     src={p.image} 
                     alt={p.name} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                   
                   <div className="absolute top-6 left-6 px-4 py-2 bg-white/70 backdrop-blur-xl border border-emerald/5 rounded-xl flex items-center gap-2">
                      <Zap size={12} className="text-gold" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-emerald/60">{p.tag}</span>
                   </div>

                   <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a href="https://t.me/taologos" className="w-full py-4 bg-emerald text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl">
                         <Send size={14} /> {t.telegramInquiry}
                      </a>
                   </div>
                </div>

                <div className="flex justify-between items-start px-2">
                   <div>
                      <h3 className="text-lg font-display font-bold text-emerald mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
                      <div className="flex items-center gap-2">
                         <div className="flex gap-0.5">
                            {[1,2,3,4,5].map((s) => <Star key={s} size={10} fill="#C5A039" color="#C5A039" className="opacity-40" />)}
                         </div>
                         <span className="text-[9px] font-bold text-emerald/20 uppercase tracking-widest">Masterpiece</span>
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
