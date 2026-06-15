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
  { id: "forest", name: "Highland Forest", hex: "#228B22", price: 12000 },
  { id: "ocean", name: "Red Sea Blue", hex: "#005F6B", price: 11000 },
  { id: "terra", name: "Rift Clay", hex: "#E2725B", price: 9000 },
];

const legs = [
  { id: "minimal", name: "Aero Steel", price: 0 },
  { id: "craft", name: "Oasis Oak", price: 18000 },
  { id: "titan", name: "Matte Titanium", price: 25000 },
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
    <section id="configurator" className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="mb-12 text-center md:text-left">
           <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Bespoke Logic Node</span>
           <h2 className="text-3xl md:text-6xl font-display font-black text-emerald">The <span className="text-gradient">Configurator.</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
           
           {/* Rendering Port - SIZE REDUCED & COLOR BUG FIXED */}
           <div className="lg:col-span-7 bg-white rounded-[3rem] border border-emerald/5 p-6 md:p-10 relative overflow-hidden min-h-[350px] md:min-h-[450px] flex items-center justify-center shadow-2xl">
              
              <div className="relative w-full h-full flex items-center justify-center">
                 {/* 1. LAYER: COLOR (Only where sofa is) */}
                 <div 
                   className="absolute inset-0 z-20 pointer-events-none transition-all duration-700 w-full h-full"
                   style={{ 
                     backgroundColor: fabric.hex,
                     // WE USE THE SOFA AS A MASK TO KEEP BACKGROUND PURE WHITE
                     WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                     WebkitMaskSize: 'contain',
                     WebkitMaskRepeat: 'no-repeat',
                     WebkitMaskPosition: 'center',
                     maskImage: 'url(/images/sofa_canvas.png)',
                     maskSize: 'contain',
                     maskRepeat: 'no-repeat',
                     maskPosition: 'center',
                   }}
                 />

                 {/* 2. LAYER: TEXTURE/BASE SOFA */}
                 <div className="relative w-full aspect-video z-10">
                    <Image src="/images/sofa_canvas.png" alt="Sofa Base" fill className="object-contain" />
                 </div>

                 {/* 3. LAYER: HIGHLIGHTS/SHADOWS (Multiply/Overlay) */}
                 <div className="absolute inset-0 z-30 pointer-events-none opacity-40 mix-blend-multiply" 
                      style={{ 
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)', 
                        WebkitMaskSize: 'contain', 
                        WebkitMaskPosition: 'center', 
                        WebkitMaskRepeat: 'no-repeat',
                        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1) 0%, rgba(0,0,0,0.4) 100%)' 
                      }} 
                 />
              </div>

              {/* Status HUD */}
              <div className="absolute top-6 left-6 p-4 bg-emerald/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl scale-90 origin-top-left">
                 <div className="text-[10px] font-black text-white uppercase tracking-widest">{fabric.name} Node</div>
                 <div className="text-[8px] font-black text-gold uppercase mt-1">Status: Applied</div>
              </div>
           </div>

           {/* Controls - REFINED SIZE */}
           <div className="lg:col-span-5 space-y-10">
              
              {/* Fabric Picker - 10 COLORS */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Palette size={14} /> Color Architecture (10)
                 </label>
                 <div className="grid grid-cols-5 gap-3">
                    {fabrics.map((f) => (
                      <button key={f.id} onClick={() => setFabric(f)}
                        className={`aspect-square rounded-full border-4 transition-all relative ${fabric.id === f.id ? 'border-gold scale-110' : 'border-transparent bg-sand'}`}>
                         <div className="w-full h-full rounded-full" style={{ backgroundColor: f.hex }} />
                         {fabric.id === f.id && <Check size={10} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Leg Selection */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Layers size={14} /> Structural Profile
                 </label>
                 <div className="flex flex-col gap-3">
                    {legs.map((leg) => (
                      <button key={leg.id} onClick={() => setLegNode(leg)}
                        className={`p-5 rounded-[2rem] border-2 transition-all flex justify-between items-center ${legNode.id === leg.id ? 'bg-emerald text-white border-gold' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}>
                         <div className="flex items-center gap-4">
                            <Box size={18} className={legNode.id === leg.id ? 'text-gold' : 'text-emerald/20'} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{leg.name}</span>
                         </div>
                         <div className="text-[9px] font-black opacity-40 leading-none">ETB {leg.price.toLocaleString()}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Price & Relay */}
              <div className="pt-10 border-t border-emerald/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div>
                    <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">Configuration Value</div>
                    <div className="text-4xl font-display font-black text-emerald leading-none">ETB {total.toLocaleString()}</div>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                    className="w-full sm:w-auto px-10 py-5 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-3xl">
                    Finalize Order <ChevronRight size={16} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
