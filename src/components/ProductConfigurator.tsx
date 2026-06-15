"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  ChevronRight,
  Box,
  Check,
  Zap,
  Layout
} from "lucide-react";
import { translations } from "@/utils/translations";

const colors = [
  { id: "emerald", name: "Imperial Emerald", hex: "#004B49", price: 12000 },
  { id: "crimson", name: "Addis Crimson", hex: "#8B0000", price: 15000 },
  { id: "nile", name: "Midnight Nile", hex: "#002147", price: 25000 },
  { id: "gold", name: "Royal Gold", hex: "#D4AF37", price: 30000 },
  { id: "sand", name: "Desert Sand", hex: "#C2B280", price: 0 },
  { id: "charcoal", name: "Carbon Ash", hex: "#36454F", price: 5000 },
  { id: "forest", name: "Highland Forest", hex: "#228B22", price: 10000 },
  { id: "ocean", name: "Deep Ocean", hex: "#005F6B", price: 11000 },
  { id: "terra", name: "Rift Clay", hex: "#E2725B", price: 8000 },
  { id: "ivory", name: "Pearl Ivory", hex: "#FDFCF8", price: 6000 },
];

const legOptions = [
  { id: "minimal", name: "Aero Steel", price: 0 },
  { id: "timber", name: "Walnut Block", price: 18000 },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeLeg, setActiveLeg] = useState(legOptions[0]);
  const [total, setTotal] = useState(145000);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    setTotal(145000 + activeColor.price + activeLeg.price);
    return () => window.removeEventListener("langChange", h);
  }, [activeColor, activeLeg]);

  return (
    <section id="configurator" className="bg-ivory pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-12 text-center md:text-left">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Studio Node v6.0</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
              Bespoke <span className="text-gradient">Studio.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
           
           {/* THE VIRTUAL STUDIO: CLEAN, MINIMALIST, ONE SOFA ONLY */}
           <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-[3.5rem] overflow-hidden shadow-3xl border border-emerald/5 flex flex-col">
              
              {/* 1. VIRTUAL BACKDROP (Wall) */}
              <div className="h-[75%] w-full bg-[#f8f6f2] relative flex items-center justify-center">
                 {/* Subtle Light Leak */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent" />
                 
                 {/* 2. THE SOFA (The Only Sofa in the Room) */}
                 <div className="relative w-[75%] h-[80%] transition-transform duration-700 hover:scale-105 z-20">
                    
                    {/* Sofa Base Texture */}
                    <Image 
                      src="/images/sofa_canvas.png" 
                      alt="The Bespoke Sectional" 
                      fill 
                      className="object-contain z-10"
                      priority
                    />

                    {/* Color Layer (Masked to Sofa ONLY) */}
                    <div 
                      className="absolute inset-0 z-20 pointer-events-none transition-all duration-700"
                      style={{ 
                        backgroundColor: activeColor.hex,
                        mixBlendMode: 'multiply',
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: 'url(/images/sofa_canvas.png)',
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        opacity: 0.95
                      }}
                    />

                    {/* Lighting/Gloss Overlay */}
                    <div 
                      className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30"
                      style={{ 
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.3) 100%)'
                      }} 
                    />
                 </div>
              </div>

              {/* 3. VIRTUAL FLOOR */}
              <div className="h-[25%] w-full bg-[#ebe8e2] border-t border-black/5 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-full bg-black/10 rounded-[100%] blur-[40px] -translate-y-1/2" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.03]" />
              </div>

              {/* Status HUD */}
              <div className="absolute top-8 left-8 flex items-center gap-4 bg-emerald text-white px-5 py-3 rounded-2xl shadow-2xl scale-90 md:scale-100 origin-top-left">
                 <Layout size={16} className="text-gold" />
                 <span className="text-[10px] font-black uppercase tracking-widest leading-none">Studio View: Active</span>
              </div>
           </div>

           {/* CONTROLS */}
           <div className="lg:col-span-4 space-y-10">
              
              {/* Color Matrix */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Palette size={14} /> Color Architecture
                    </label>
                    <span className="text-[10px] font-black text-gold uppercase underline decoration-gold/20">{activeColor.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-3">
                    {colors.map((c) => (
                      <button 
                        key={c.id} 
                        onClick={() => setActiveColor(c)}
                        className={`aspect-square rounded-full border-4 transition-all relative ${activeColor.id === c.id ? 'border-gold scale-125 z-10' : 'border-transparent bg-sand'}`}
                      >
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: c.hex }} />
                         {activeColor.id === c.id && <Check size={12} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Components */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block">Structural Balance</label>
                 <div className="space-y-3">
                    {legOptions.map((leg) => (
                      <button 
                        key={leg.id} 
                        onClick={() => setActiveLeg(leg)}
                        className={`w-full p-5 rounded-[2rem] border-2 transition-all flex justify-between items-center ${activeLeg.id === leg.id ? 'bg-emerald text-white border-gold shadow-lg' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-xl shadow-inner ${activeLeg.id === leg.id ? 'bg-white/20' : 'bg-emerald/5'}`} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{leg.name}</span>
                         </div>
                         <div className="text-[9px] font-black">ETB {leg.price.toLocaleString()}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Price Relay */}
              <div className="pt-8 border-t border-emerald/5">
                 <div className="mb-8">
                    <span className="text-[9px] font-black text-emerald/20 uppercase tracking-widest block mb-1">Configuration Total Value</span>
                    <span className="text-5xl font-display font-black text-emerald">ETB {total.toLocaleString()}</span>
                 </div>
                 <button 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95"
                 >
                    Finalize Studio Design <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
