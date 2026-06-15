"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  ChevronRight,
  Zap,
  Box,
  Monitor,
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
  { id: "craft", name: "Hand-Carved Oak", price: 18000 },
  { id: "industrial", name: "Matte Titanium", price: 25000 },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [legScale, setLegScale] = useState(legs[0]);
  const [total, setTotal] = useState(145000);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    setTotal(145000 + fabric.price + legScale.price);
    
    return () => window.removeEventListener("langChange", h);
  }, [fabric, legScale]);

  const t = translations[lang];

  return (
    <section id="configurator" className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8 text-center md:text-left">
           <div className="max-w-2xl">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Bespoke Master Node</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
                 Custom <span className="text-gradient">Logic.</span>
              </h2>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16">
           
           {/* Rendering Port - FIXED COLOR CHANGING */}
           <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-[3rem] md:rounded-[5rem] border border-emerald/5 p-8 md:p-20 relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[600px] shadow-2xl">
              
              <div className="relative w-full h-full flex items-center justify-center">
                 {/* The "Canvas" White Sofa */}
                 <div className="relative w-full aspect-video z-10 transition-transform duration-700 hover:scale-105">
                    <Image 
                       src="/images/canvas_white.png" 
                       alt="White Canvas" 
                       fill 
                       className="object-contain" 
                    />
                 </div>

                 {/* The Digital Dye Overlay - THIS CHANGES THE SOFA COLOR REALISTICALLY */}
                 <div 
                   className="absolute inset-0 z-20 pointer-events-none transition-all duration-700"
                   style={{ 
                     backgroundColor: fabric.hex,
                     mixBlendMode: 'multiply' as any,
                     opacity: 0.85
                   }}
                 />

                 {/* High-Resolution Lighting/Gloss Overlay */}
                 <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-black/5 via-white/20 to-white/40 mix-blend-overlay" />
              </div>

              {/* Status HUD */}
              <div className="absolute top-10 left-10 flex flex-col gap-3">
                 <div className="bg-emerald text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/20 scale-90 md:scale-100">
                    <Monitor size={16} className="text-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{fabric.name}</span>
                 </div>
              </div>
           </div>

           {/* Config Controls */}
           <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              
              {/* Textile Node - 10 COLORS */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                    <Palette size={14} /> Textile Selection (10 Nodes)
                 </label>
                 <div className="grid grid-cols-5 sm:grid-cols-10 xl:grid-cols-5 gap-3 md:gap-4">
                    {fabrics.map((f) => (
                      <button 
                        key={f.id} 
                        onClick={() => setFabric(f)}
                        className={`aspect-square rounded-full border-4 transition-all relative group shadow-sm ${fabric.id === f.id ? 'border-gold scale-125 z-10' : 'border-transparent'}`}
                      >
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: f.hex }} />
                         {fabric.id === f.id && (
                           <div className="absolute -top-1 -right-1 bg-gold text-white rounded-full p-0.5">
                              <Check size={10} strokeWidth={4} />
                           </div>
                         )}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                            <span className="text-[8px] font-black bg-emerald text-white px-2 py-1 rounded-md uppercase tracking-widest shadow-xl">{f.name}</span>
                         </div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Structural Node - LEGS */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                    <Layers size={14} /> Structural Profile
                 </label>
                 <div className="space-y-4">
                    {legs.map((leg) => (
                      <button 
                        key={leg.id} 
                        onClick={() => setLegScale(leg)}
                        className={`w-full p-6 rounded-[2.5rem] border-2 flex justify-between items-center transition-all ${legScale.id === leg.id ? 'bg-emerald text-white border-gold shadow-2xl scale-[1.02]' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-5">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${legScale.id === leg.id ? 'bg-gold text-white' : 'bg-emerald/5'}`}>
                               <Box size={24} />
                            </div>
                            <div className="text-left">
                               <div className="text-xs font-black uppercase tracking-widest">{leg.name}</div>
                               <div className="text-[9px] opacity-40 uppercase tracking-widest mt-1">Industrial Grade Node</div>
                            </div>
                         </div>
                         <div className="text-[10px] font-black">{leg.price > 0 ? `+ETB ${leg.price.toLocaleString()}` : 'Base'}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Order Node */}
              <div className="pt-10 border-t border-emerald/5 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="w-full text-center md:text-left">
                    <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">Configuration Value</div>
                    <div className="text-5xl font-display font-black text-emerald leading-none">ETB {total.toLocaleString()}</div>
                 </div>
                 <button 
                    onClick={() => window.open('https://t.me/taologos', '_blank')}
                    className="w-full md:w-auto px-12 py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95"
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
