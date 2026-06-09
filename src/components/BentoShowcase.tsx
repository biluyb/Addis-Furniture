"use client";

import { useState, useEffect } from "react";
import { Zap, ShieldCheck, Box, Send, ChevronRight } from "lucide-react";
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
    <section className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="mb-12 md:mb-16">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{t.internalSystems}</span>
           <h2 className="text-3xl md:text-6xl font-display font-black text-emerald tracking-tight">The <span className="text-gradient leading-tight">Architecture.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
           
           {/* Precision Node */}
           <div className="md:col-span-8 bg-sand p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald/5 relative overflow-hidden group">
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-emerald text-white rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-emerald/20">
                    <Zap size={24} fill="currentColor" />
                 </div>
                 <h3 className="text-2xl md:text-4xl font-display font-black text-emerald mb-4">{t.precision}</h3>
                 <p className="text-emerald-soft text-base md:text-lg max-w-md font-medium leading-relaxed">{t.precisionDesc}</p>
                 
                 <div className="mt-12 flex gap-4">
                    {[1,2,3,4].map(i => <div key={i} className="h-1 w-12 bg-gold/20 rounded-full" />)}
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                 <Zap size={300} />
              </div>
           </div>

           {/* Concierge Node */}
           <div className="md:col-span-4 bg-emerald p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                 <div className="inline-flex px-3 py-1 bg-white/10 rounded-full border border-white/10 text-[8px] font-black uppercase tracking-widest mb-10">24/7 Access</div>
                 <h3 className="text-2xl md:text-3xl font-display font-black mb-4 leading-tight">{t.concierge}</h3>
                 <p className="text-white/60 text-sm leading-relaxed">{t.conciergeDesc}</p>
              </div>
              <button className="mt-12 w-full py-4 bg-white text-emerald rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-all shadow-xl">
                 Inquire <ChevronRight size={14} />
              </button>
           </div>

           {/* Logistics Node - Fixed Layout / No Clipping */}
           <div className="md:col-span-4 bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald/10 flex flex-col justify-between relative min-h-[320px]">
              <div>
                 <Box size={32} className="text-gold mb-8" />
                 <h3 className="text-2xl font-display font-black text-emerald mb-3">{t.logistics}</h3>
                 <p className="text-emerald/60 text-xs font-bold leading-relaxed">{t.logisticsDesc}</p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-emerald/30">Network Active</span>
              </div>
           </div>

           {/* Warranty / Integrity Node */}
           <div className="md:col-span-8 bg-sand p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald/5 flex flex-col md:flex-row gap-10 md:items-center">
              <div className="flex-1">
                 <div className="flex items-center gap-3 text-gold mb-6">
                    <ShieldCheck size={28} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.warranty}</span>
                 </div>
                 <h3 className="text-2xl md:text-4xl font-display font-black text-emerald mb-4">Structural <br />Integrity Hub.</h3>
                 <p className="text-emerald-soft text-sm font-medium leading-relaxed max-w-sm">{t.warrantyDesc}</p>
              </div>
              <div className="p-8 bg-emerald rounded-3xl text-white flex flex-col items-center justify-center gap-4 border-4 border-white shadow-2xl">
                 <div className="text-4xl font-display font-black leading-none">5Y</div>
                 <div className="text-[8px] font-black uppercase tracking-widest opacity-60">Full Coverage</div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
