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
  Monitor
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
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Studio Node v5.0</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
              Bespoke <span className="text-gradient">Config.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
           
           {/* THE STUDIO: FIXED ROOM, CHANGING SOFA ONLY */}
           <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden shadow-3xl border border-emerald/5 bg-sand">
              
              {/* 1. ROOM LAYER (Static Background) */}
              <Image 
                src="/images/office.png" 
                alt="Studio Background" 
                fill 
                className="object-cover transition-opacity duration-1000"
                priority
              />

              {/* 2. SOFA SYSTEM (Positioned in the room) */}
              <div className="absolute inset-x-0 bottom-[15%] flex justify-center items-center h-1/2 group">
                 
                 {/* Shadow Logic */}
                 <div className="absolute bottom-[-5%] w-[60%] h-4 bg-black/20 rounded-[100%] blur-xl" />

                 <div className="relative w-[70%] h-full transition-transform duration-700 group-hover:scale-105">
                    
                    {/* BASE SOFA TEXTURE (The real sofa geometry) */}
                    <Image 
                      src="/images/sofa_canvas.png" 
                      alt="Furniture Base" 
                      fill 
                      className="object-contain z-10"
                    />

                    {/* DYNAMIC COLOR DYE LAYER (Only applies to sofa) */}
                    <div 
                      className="absolute inset-0 z-20 pointer-events-none transition-all duration-700 w-full h-full"
                      style={{ 
                        backgroundColor: activeColor.hex,
                        mixBlendMode: 'multiply',
                        // High-performance mask logic
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

                    {/* AMBIENT HIGHLIGHTS (Brings back professional lighting) */}
                    <div 
                      className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30"
                      style={{ 
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)'
                      }} 
                    />
                 </div>
              </div>

              {/* Status HUD */}
              <div className="absolute bottom-8 right-8 flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white">
                 <div className="w-3 h-3 bg-emerald rounded-full animate-pulse" />
                 <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald/40 leading-none mb-1">Active Spec</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald leading-none">{activeColor.name}</span>
                 </div>
              </div>
           </div>

           {/* CONTROLS */}
           <div className="lg:col-span-4 space-y-12">
              
              {/* Color Matrix */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block flex items-center gap-2">
                    <Palette size={14} /> Textile Palette (10 Nodes)
                 </label>
                 <div className="grid grid-cols-5 gap-3">
                    {colors.map((c) => (
                      <button 
                        key={c.id} 
                        onClick={() => setActiveColor(c)}
                        className={`aspect-square rounded-full border-4 transition-all relative ${activeColor.id === c.id ? 'border-gold scale-125 z-10 shadow-xl' : 'border-transparent bg-sand'}`}
                      >
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: c.hex }} />
                         {activeColor.id === c.id && <Check size={12} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Legs */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block">Structural Hub</label>
                 <div className="space-y-3">
                    {legOptions.map((leg) => (
                      <button 
                        key={leg.id} 
                        onClick={() => setActiveLeg(leg)}
                        className={`w-full p-5 rounded-[2rem] border-2 transition-all flex justify-between items-center ${activeLeg.id === leg.id ? 'bg-emerald text-white border-gold shadow-lg' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <Box size={18} className={activeLeg.id === leg.id ? 'text-gold' : 'opacity-20'} />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">{leg.name}</span>
                         </div>
                         <div className="text-[9px] font-black">ETB {leg.price.toLocaleString()}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Price Relay */}
              <div className="pt-8 border-t border-emerald/5">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-emerald/20 uppercase tracking-widest">Pricing Relay</span>
                       <span className="text-4xl font-display font-black text-emerald">ETB {total.toLocaleString()}</span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Zap size={24} />
                    </div>
                 </div>
                 <button 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95"
                 >
                    Relay to Studio <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
