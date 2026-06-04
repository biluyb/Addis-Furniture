"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Rotate3d, 
  ShieldCheck, 
  Truck, 
  Settings2, 
  MessageSquare,
  Box
} from "lucide-react";
import { translations } from "@/utils/translations";

export default function BentoShowcase() {
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
    <section id="system" className="section-padding bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
           <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Ecosystem Nodes</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
              {t.heritage} & <span className="text-gradient">Computation.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
           
           {/* Focus Card */}
           <div className="lg:col-span-2 lg:row-span-2 bento-card border-none bg-emerald group">
              <Image src="/images/hero.png" alt="Process" fill className="object-cover opacity-50 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald to-transparent" />
              <div className="relative h-full p-10 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20">
                       <Rotate3d size={28} className="animate-spin-slow" />
                    </div>
                    <span className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white">4K Render Node</span>
                 </div>
                 <div>
                    <h3 className="text-3xl font-display font-black text-white mb-4 leading-tight">{lang === "en" ? "Precision-Guided" : "በትክክለኛ የተመራ"} <br /> {lang === "en" ? "Artistry" : "ጥበብ"}</h3>
                    <p className="text-white/60 text-sm max-w-xs mb-8">{t.masteryDesc}</p>
                    <button className="px-8 py-4 bg-white text-emerald rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all shadow-xl">Start Process</button>
                 </div>
              </div>
           </div>

           {/* Heritage Card */}
           <div className="lg:col-span-2 lg:row-span-1 bento-card group">
              <div className="relative h-full p-10 flex gap-8 items-center">
                 <div className="hidden sm:block relative w-32 aspect-square rounded-[2rem] overflow-hidden">
                    <Image src="/images/bedroom.png" alt="Heritage" fill className="object-cover transition-transform group-hover:scale-110" />
                 </div>
                 <div>
                    <div className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">{t.heritage}</div>
                    <h3 className="text-2xl font-display font-black text-emerald mb-2">{t.bespokeMastery}</h3>
                    <p className="text-emerald/30 text-xs leading-relaxed max-w-sm">{t.masteryDesc}</p>
                 </div>
                 <button className="ml-auto w-12 h-12 rounded-full border border-emerald/5 flex items-center justify-center text-emerald hover:bg-emerald hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
           </div>

           {/* Stat Cards */}
           <div className="lg:col-span-1 lg:row-span-1 bento-card p-10 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <div className="text-3xl font-display font-black text-emerald mb-1">10Y</div>
                 <div className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest">{t.warranty}</div>
              </div>
           </div>

           <div className="lg:col-span-1 lg:row-span-1 bento-card p-10 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center text-sage group-hover:scale-110 transition-transform">
                 <Truck size={24} />
              </div>
              <div>
                 <div className="text-3xl font-display font-black text-emerald mb-1">24H</div>
                 <div className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest">{t.delivery}</div>
              </div>
           </div>

           {/* Logistics Grid */}
           <div className="lg:col-span-2 lg:row-span-1 bento-card overflow-visible">
              <div className="relative h-full p-10 flex flex-col justify-center">
                 <h3 className="text-2xl font-display font-black text-emerald mb-6">Internal Systems.</h3>
                 <div className="flex gap-4">
                    {[
                      { icon: Settings2, label: "Precision" },
                      { icon: MessageSquare, label: "Concierge" },
                      { icon: Box, label: "Logistics" }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 p-4 rounded-2xl bg-white border border-emerald/5 flex flex-col items-center gap-2 shadow-sm hover:shadow-lg transition-all group">
                         <item.icon size={18} className="text-gold" />
                         <span className="text-[9px] font-bold uppercase tracking-widest text-emerald/40 group-hover:text-emerald">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
