"use client";

import { useState, useEffect, useCallback } from "react";
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
    <section id="studio" className="bg-ivory pt-12 pb-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="mb-12 text-center md:text-left">
           <span className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Bespoke Production</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight tracking-tighter uppercase italic">
              Config <span className="text-gradient">Studio.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
           
           {/* THE VIRTUAL STUDIO */}
           <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-3xl border border-emerald/5 flex flex-col group touch-none">
              
              <div className="h-[75%] w-full bg-[#f8f6f2] relative flex items-center justify-center pointer-events-none">
                 <div className="relative w-[80%] h-[85%]">
                    <Image src="/images/sofa_canvas.png" alt="Bespoke Sectional" fill className="object-contain z-10" priority />
                    <div 
                      className="absolute inset-0 z-20"
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
                 </div>
              </div>

              <div className="h-[25%] w-full bg-[#ebe8e2] border-t border-black/5 relative pointer-events-none">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[9px] font-black text-emerald/10 uppercase tracking-[0.5em]">Realtime Fabric Simulation</span>
                 </div>
              </div>

              {/* HUD */}
              <div className="absolute top-8 left-8 flex items-center gap-4 bg-emerald text-white px-5 py-3 rounded-2xl shadow-3xl border border-white/20 pointer-events-none">
                 <Layout size={18} className="text-gold" />
                 <span className="text-[10px] font-black uppercase tracking-widest leading-none">Studio v6.0</span>
              </div>
           </div>

           {/* CONTROLS - RADICAL: USE DIVS FOR RELIABLE MOBILE TAP */}
           <div className="lg:col-span-4 space-y-12">
              
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] flex items-center gap-2">
                       <Palette size={16} /> Color Node
                    </label>
                    <span className="text-[10px] font-black text-gold uppercase">{activeColor.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-4 pointer-events-auto">
                    {colors.map((c) => (
                      <div 
                        key={c.id} 
                        onClick={() => setActiveColor(c)}
                        className={`aspect-square rounded-full border-4 transition-all relative cursor-pointer touch-manipulation select-none active:scale-125 ${activeColor.id === c.id ? 'border-gold scale-110 z-30 shadow-3xl' : 'border-transparent bg-sand hover:bg-white'}`}
                      >
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: c.hex }} />
                         {activeColor.id === c.id && <Check size={14} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="pointer-events-auto">
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] mb-6 block border-l-2 border-gold pl-4">Structural Component</label>
                 <div className="space-y-4">
                    {legOptions.map((leg) => (
                      <div 
                        key={leg.id} 
                        onClick={() => setActiveLeg(leg)}
                        className={`w-full p-6 rounded-[2rem] border-2 transition-all flex justify-between items-center cursor-pointer touch-manipulation select-none active:scale-[0.98] ${activeLeg.id === leg.id ? 'bg-emerald text-white border-gold shadow-2xl z-30' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <Box size={22} className={activeLeg.id === leg.id ? "text-gold" : "opacity-20"} />
                            <span className="text-[11px] font-black uppercase tracking-widest leading-none">{leg.name}</span>
                         </div>
                         <div className="text-[10px] font-black opacity-60">ETB {leg.price.toLocaleString()}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="pt-8 border-t border-emerald/5 flex flex-col items-center justify-between gap-8 pointer-events-auto">
                 <div className="text-center w-full">
                    <span className="text-[9px] font-black text-emerald/20 uppercase tracking-widest block mb-1">Configuration Total</span>
                    <span className="text-5xl font-display font-black text-emerald leading-tight">ETB {total.toLocaleString()}</span>
                 </div>
                 <div 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 cursor-pointer hover:bg-gold transition-all shadow-3xl active:bg-gold touch-manipulation overflow-hidden"
                 >
                    Relay Design <ChevronRight size={22} />
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
