"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Box, Dna, Compass } from "lucide-react";
import { translations } from "@/utils/translations";

export default function HeroSection() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [brand, setBrand] = useState("ADDIS");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "en" | "am";
    if (storedLang) setLang(storedLang);
    const storedBrand = localStorage.getItem("brandName");
    if (storedBrand) setBrand(storedBrand.split(" ")[0]);
    
    const hL = (e: any) => setLang(e.detail);
    const hB = (e: any) => setBrand(e.detail.split(" ")[0]);

    window.addEventListener("langChange", hL);
    window.addEventListener("brandChange", hB);
    return () => {
      window.removeEventListener("langChange", hL);
      window.removeEventListener("brandChange", hB);
    };
  }, []);

  const t = translations[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-ivory">
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald/[0.04] border border-emerald/10 text-emerald font-black text-[9px] uppercase tracking-[0.3em] mb-8">
              <Sparkles size={14} className="text-gold" />
              {t.heritage} Node v5.0
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black leading-[1.05] mb-8 text-emerald tracking-tighter uppercase">
               {t.heroTitle} <br />
               <span className="text-gradient leading-tight">{brand} {lang === "en" ? "HORIZON." : "ስቱዲዮ።"}</span>
            </h1>

            <p className="text-emerald-soft text-base md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
               {lang === "en" ? `Premium architecture for modern Addis residents. Experience high-end engineering at the speed of thought.` : `ለዘመናዊ አዲስ አበባ ነዋሪዎች የተዘጋጀ የቅንጦት ጥበብ። በቴክኖሎጂ የተደገፈ የቤት እቃዎች ስቱዲዮ።`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 underline-offset-8">
              <button className="px-10 py-5 bg-emerald text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-2xl active:scale-95">
                {t.enterStudio} <ArrowRight size={18} />
              </button>
              <button className="px-10 py-5 border-2 border-emerald/10 text-emerald font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-emerald/5 transition-all">
                {t.viewGallery}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
               {[
                 { icon: Box, label: t.visualizer, id: "#visualizer" },
                 { icon: Dna, label: t.configure, id: "#configurator" },
                 { icon: Compass, label: t.threeSixty, id: "#360" },
                 { icon: Sparkles, label: t.aiTools, id: "#ai" },
               ].map((item, i) => (
                 <a key={i} href={item.id} className="p-5 rounded-3xl bg-white border border-emerald/5 flex flex-col items-center gap-3 hover:border-gold transition-all group shadow-sm">
                    <item.icon size={22} className="text-emerald/20 group-hover:text-gold transition-colors" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald/40 group-hover:text-emerald">{item.label}</span>
                 </a>
               ))}
            </div>
          </div>

          <div className="hidden xl:flex lg:col-span-12 xl:col-span-5 relative h-[600px] w-full items-center justify-center">
             <div className="relative w-full aspect-square rounded-full border border-emerald/5 flex items-center justify-center">
                <div className="w-[85%] aspect-square rounded-[4rem] overflow-hidden rotate-[12deg] shadow-3xl border-8 border-white bg-sand relative transform transition-transform hover:rotate-0 duration-700">
                   <Image src="/images/hero_node.png" alt="Hero" fill className="object-cover" priority />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
