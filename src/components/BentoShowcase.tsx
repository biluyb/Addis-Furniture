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
        
        <div className="mb-12 md:mb-20 text-center md:text-left">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Studio Architecture</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
              Internal <span className="text-gradient leading-tight">Systems.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
           
           {/* Precision Node */}
           <div className="md:col-span-8 bg-sand p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] border border-emerald/5 relative overflow-hidden group shadow-xl">
              <div className="relative z-10">
                 <div className="w-16 h-16 bg-emerald text-white rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
                    <Zap size={28} fill="currentColor" />
                 </div>
                 <h3 className="text-3xl md:text-5xl font-display font-black text-emerald mb-6">{t.precision}</h3>
                 <p className="text-emerald-soft text-lg md:text-xl max-w-lg font-medium leading-relaxed">{t.precisionDesc}</p>
                 
                 <div className="mt-16 flex gap-4">
                    {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 w-16 bg-gold/20 rounded-full" />)}
                 </div>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:scale-110 group-hover:opacity-10 transition-all duration-1000 rotate-12">
                 <Zap size={500} />
              </div>
           </div>

           {/* Concierge Node */}
           <div className="md:col-span-4 bg-emerald p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                 <div className="inline-flex px-4 py-2 bg-white/10 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest mb-12">Global Node v4.0</div>
                 <h3 className="text-3xl md:text-4xl font-display font-black mb-6 leading-tight">{t.concierge}</h3>
                 <p className="text-white/60 text-base leading-relaxed md:max-w-xs">{t.conciergeDesc}</p>
              </div>
              <button 
                onClick={() => window.open('https://t.me/taologos', '_blank')}
                className="mt-14 w-full py-5 bg-white text-emerald rounded-[2rem] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-all shadow-xl active:scale-95"
              >
                 {lang === 'en' ? 'Engage Concierge' : 'ያነጋግሩ'} <ChevronRight size={16} />
              </button>
           </div>

           {/* Logistics Node */}
           <div className="md:col-span-4 bg-white p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] border border-emerald/10 flex flex-col justify-between relative min-h-[360px] shadow-lg group">
              <div>
                 <div className="w-14 h-14 rounded-2xl bg-sand flex items-center justify-center text-gold mb-10 group-hover:bg-emerald group-hover:text-white transition-all">
                    <Box size={28} />
                 </div>
                 <h3 className="text-3xl font-display font-black text-emerald mb-4">{t.logistics}</h3>
                 <p className="text-emerald-soft text-sm font-bold leading-relaxed">{t.logisticsDesc}</p>
              </div>
              <div className="mt-10 flex items-center gap-3 py-3 px-5 bg-sand rounded-2xl w-fit">
                 <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-emerald/40 leading-none">System Relay Active</span>
              </div>
           </div>

           {/* Warranty / Integrity Node */}
           <div className="md:col-span-8 bg-sand p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] border border-emerald/5 flex flex-col lg:flex-row gap-12 lg:items-center shadow-xl">
              <div className="flex-1">
                 <div className="flex items-center gap-4 text-gold mb-8">
                    <ShieldCheck size={32} />
                    <span className="text-[12px] font-black uppercase tracking-[0.3em]">{t.warranty}</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl font-display font-black text-emerald mb-6 leading-tight">Structural <br />Integrity Hub.</h3>
                 <p className="text-emerald-soft text-base font-medium leading-relaxed max-w-md">{t.warrantyDesc}</p>
              </div>
              <div className="p-10 md:p-14 bg-emerald rounded-[3.5rem] text-white flex flex-col items-center justify-center gap-6 border-8 border-white/50 shadow-2xl scale-105">
                 <div className="text-6xl font-display font-black leading-none text-gold">5Y</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 text-center">Full Coverage<br />Guarantee</div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
