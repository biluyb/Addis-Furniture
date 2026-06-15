"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  ChevronRight,
  Maximize2,
  Box,
  Check
} from "lucide-react";
import { translations } from "@/utils/translations";

const fabrics = [
  { id: "emerald", name: "Imperial Emerald", hex: "#004B49", price: 12000 },
  { id: "crimson", name: "Addis Crimson", hex: "#8B0000", price: 15000 },
  { id: "nile", name: "Midnight Nile", hex: "#002147", price: 10000 },
  { id: "sand", name: "Desert Sand", hex: "#C2B280", price: 0 },
  { id: "ivory", name: "Pearl Ivory", hex: "#FDFCF8", price: 5000 },
  { id: "charcoal", name: "Carbon Ash", hex: "#36454F", price: 8000 },
  { id: "gold", name: "Royal Brass", hex: "#D4AF37", price: 20000 },
  { id: "terra", name: "Rift Clay", hex: "#E2725B", price: 9000 },
];

const legs = [
  { id: "minimal", name: "Aero Steel", price: 0 },
  { id: "craft", name: "Oasis Oak", price: 18000 },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [legNode, setLegNode] = useState(legs[0]);
  const [total, setTotal] = useState(145000);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    setTotal(145000 + fabric.price + legNode.price);
    return () => window.removeEventListener("langChange", h);
  }, [fabric, legNode]);

  return (
    <section id="configurator" className="bg-ivory pt-4 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-8 md:mb-12 text-center md:text-left">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Bespoke Logic</span>
           <h2 className="text-3xl md:text-6xl font-display font-black text-emerald uppercase tracking-tighter">Bespoke <span className="text-gradient">Engine.</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-start">
           
           {/* Rendering Port - PERFORMANCE OPTIMIZED & FIXED COLOR DYING */}
           <div className="lg:col-span-7 bg-white rounded-[2rem] md:rounded-[4rem] p-4 md:p-8 relative overflow-hidden min-h-[300px] md:min-h-[450px] flex items-center justify-center shadow-xl">
              
              <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center isolate">
                 
                 {/* 1. TEXTURE LAYER (The Grey/White Base) */}
                 <div className="absolute inset-0 z-10 transition-transform duration-700">
                    <Image 
                      src="/images/sofa_canvas.png" 
                      alt="Canvas" 
                      fill 
                      priority
                      className="object-contain"
                    />
                 </div>

                 {/* 2. DYE LAYER (Multiply only on the sofa area) */}
                 <div 
                   className="absolute inset-0 z-20 pointer-events-none transition-all duration-500 w-full h-full"
                   style={{ 
                     backgroundColor: fabric.hex,
                     mixBlendMode: 'multiply',
                     // Using a simpler mask technique for wider browser support
                     maskImage: 'url(/images/sofa_canvas.png)',
                     maskSize: 'contain',
                     maskRepeat: 'no-repeat',
                     maskPosition: 'center',
                     WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                     WebkitMaskSize: 'contain',
                     WebkitMaskPosition: 'center',
                     WebkitMaskRepeat: 'no-repeat',
                   }}
                 />

                 {/* 3. LIGHTING/REFLECTIONS (Adds Depth back to the color) */}
                 <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30 shadow-inner"
                      style={{ 
                        maskImage: 'url(/images/sofa_canvas.png)',
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)'
                      }} 
                 />
              </div>

              {/* Status HUD - Mobile Friendly */}
              <div className="absolute top-4 left-4 p-3 bg-emerald text-white rounded-xl shadow-2xl border border-white/10 scale-75 md:scale-90 flex items-center gap-3">
                 <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{fabric.name}</span>
              </div>
           </div>

           {/* Controls - MOBILE FIRST */}
           <div className="lg:col-span-5 space-y-8 md:space-y-10">
              
              {/* Color Node */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Palette size={14} /> Color Architecture
                 </label>
                 <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                    {fabrics.map((f) => (
                      <button key={f.id} onClick={() => setFabric(f)}
                        className={`aspect-square rounded-full border-4 transition-all relative ${fabric.id === f.id ? 'border-gold scale-110 shadow-lg' : 'border-transparent bg-sand'}`}>
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: f.hex }} />
                         {fabric.id === f.id && <Check size={10} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Leg Node */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <Layers size={14} /> Component Logic
                 </label>
                 <div className="flex flex-col gap-2">
                    {legs.map((leg) => (
                      <button key={leg.id} onClick={() => setLegNode(leg)}
                        className={`p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${legNode.id === leg.id ? 'bg-emerald text-white border-gold shadow-lg' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}>
                         <div className="flex items-center gap-4">
                            <Box size={16} className={legNode.id === leg.id ? 'text-gold' : 'opacity-20'} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{leg.name}</span>
                         </div>
                         <div className="text-[10px] font-black opacity-40">ETB {leg.price.toLocaleString()}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Final Val */}
              <div className="pt-8 border-t border-emerald/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                 <div className="text-center md:text-left w-full">
                    <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">Total Valuation</div>
                    <div className="text-4xl font-display font-black text-emerald leading-none">ETB {total.toLocaleString()}</div>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                    className="w-full md:w-auto px-10 py-5 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl active:scale-95">
                    Order Hub <ChevronRight size={16} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
