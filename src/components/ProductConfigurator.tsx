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

  const handleColorSelect = useCallback((c: any) => setActiveColor(c), []);
  const handleLegSelect = useCallback((leg: any) => setActiveLeg(leg), []);

  return (
    <section id="studio" className="bg-ivory pt-8 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="flex flex-col xl:flex-row gap-10 items-stretch">
           
           {/* THE VIRTUAL STUDIO PORT - NO OVERLAP GRID */}
           <div className="xl:flex-1 relative aspect-video xl:aspect-auto w-full bg-[#f8f6f2] rounded-[2.5rem] md:rounded-[4rem] border border-emerald/5 shadow-2xl flex flex-col justify-center items-center overflow-hidden h-[400px] md:h-auto">
              
              <div className="relative w-[100%] h-[100%] flex items-center justify-center pointer-events-none">
                 <div className="relative w-[90%] h-[90%]">
                    <Image src="/images/sofa_canvas.png" alt="Bespoke Sectional" fill className="object-contain z-10 drop-shadow-2xl" priority />
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
                        opacity: 0.9
                      }}
                    />
                 </div>
              </div>

              {/* HUD */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-emerald/10 px-6 py-3 rounded-2xl shadow-xl pointer-events-none z-30">
                 <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald leading-none">Studio Engine v6.1</span>
              </div>
           </div>

           {/* CONTROLS CARD - PERFECT COMPACT LAYOUT */}
           <div className="xl:w-[400px] space-y-8 bg-white/50 backdrop-blur-3xl p-8 md:p-10 rounded-[3rem] border border-emerald/5 shadow-2xl relative z-40">
              
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/30 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Palette size={16} /> Finish
                    </label>
                    <span className="text-[9px] font-black text-gold uppercase tracking-widest">{activeColor.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-3">
                    {colors.map((c) => (
                      <div 
                        key={c.id} 
                        onPointerDown={() => handleColorSelect(c)}
                        className={`aspect-square rounded-full border-2 transition-all relative cursor-pointer touch-manipulation select-none active:scale-110 ${activeColor.id === c.id ? 'border-gold scale-105 z-30 shadow-xl' : 'border-emerald/5 bg-sand/20 hover:bg-white'}`}
                      >
                         <div className="w-full h-full rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                         {activeColor.id === c.id && <Check size={12} className="absolute inset-0 m-auto text-white" strokeWidth={5} />}
                      </div>
                    ))}
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-black text-emerald/30 uppercase tracking-[0.3em] mb-4 block">Construction</label>
                 <div className="grid grid-cols-2 gap-3">
                    {legOptions.map((leg) => (
                      <div 
                        key={leg.id} 
                        onPointerDown={() => handleLegSelect(leg)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 cursor-pointer touch-manipulation select-none ${activeLeg.id === leg.id ? 'bg-emerald text-white border-gold shadow-xl' : 'bg-sand/30 border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <Box size={18} className={activeLeg.id === leg.id ? "text-gold" : "opacity-20"} />
                         <span className="text-[9px] font-black uppercase tracking-widest leading-none text-center">{leg.name}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="pt-6 border-t border-emerald/5 flex flex-col gap-6">
                 <div className="text-center w-full px-4 py-3 bg-sand/30 rounded-2xl border border-emerald/5">
                    <span className="text-[9px] font-black text-emerald/20 uppercase tracking-widest block mb-1">Estimated Total</span>
                    <span className="text-3xl font-display font-black text-emerald">ETB {total.toLocaleString()}</span>
                 </div>
                 <div 
                   onPointerDown={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-5 bg-emerald text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer hover:bg-gold transition-all shadow-xl active:bg-gold"
                 >
                    Relay Design <ChevronRight size={18} />
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
