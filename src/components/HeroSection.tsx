"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Box, Dna, Compass } from "lucide-react";
import { translations } from "@/utils/translations";

export default function HeroSection() {
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
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-ivory">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald/5 border border-emerald/10 text-emerald/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} className="text-gold" />
              {t.heritage} & {t.masteryDesc.split(" ")[0]} 
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none mb-8 text-emerald">
               {t.heroTitle} <br />
               <span className="text-gradient leading-tight">{t.heroTitleAccent}</span>
            </h1>

            <p className="text-emerald/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
               {t.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button className="btn-modern flex items-center justify-center gap-3 group">
                {t.enterStudio} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-ghost">
                {t.viewGallery}
              </button>
            </div>

            {/* Feature Shortcuts */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
               {[
                 { icon: Box, label: t.visualizer, id: "#visualizer" },
                 { icon: Dna, label: t.configure, id: "#configurator" },
                 { icon: Compass, label: t.threeSixty, id: "#360" },
                 { icon: Sparkles, label: t.aiTools, id: "#ai" },
               ].map((item, i) => (
                 <a 
                   key={i} 
                   href={item.id}
                   className="p-4 rounded-2xl bg-white border border-emerald/5 flex flex-col items-center gap-3 hover:border-gold transition-all group shadow-sm hover:shadow-xl hover:shadow-emerald/5"
                 >
                    <item.icon size={20} className="text-emerald/20 group-hover:text-gold transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald/40 group-hover:text-emerald">{item.label}</span>
                 </a>
               ))}
            </div>
          </div>

          {/* Visual Orb */}
          <div className="hidden xl:flex lg:col-span-12 xl:col-span-5 relative h-[700px] w-full items-center justify-center">
             <div className="relative w-full aspect-square rounded-full border border-emerald/5 animate-spin-slow flex items-center justify-center">
                <div className="absolute top-1/4 left-0 w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(197,160,57,0.5)]" />
                
                <div className="w-[85%] aspect-square rounded-[4rem] overflow-hidden rotate-[15deg] shadow-2xl border-4 border-white">
                   <Image 
                     src="/images/hero.png" 
                     alt="Modern Living" 
                     fill 
                     className="object-cover"
                     priority
                   />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
