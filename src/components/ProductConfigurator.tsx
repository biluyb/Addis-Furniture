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
    <section id="studio" className="bg-ivory pt-24 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-12 text-center md:text-left">
           <span className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/30">Bespoke Production</span>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight tracking-tighter uppercase italic">
              Config <span className="text-gradient">Studio.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
           
           {/* THE VIRTUAL STUDIO: MOBILE TOUCH OPTIMIZED */}
           <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-3xl border border-emerald/5 flex flex-col group touch-pan-x">
              
              <div className="h-[75%] w-full bg-[#f8f6f2] relative flex items-center justify-center pointer-events-none">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent" />
                 
                 <div className="relative w-[80%] h-[85%] transition-transform duration-1000 group-hover:scale-105">
                    <Image 
                      src="/images/sofa_canvas.png" 
                      alt="Bespoke Sectional" 
                      fill 
                      className="object-contain z-10"
                      priority
                    />
                    <div 
                      className="absolute inset-0 z-20 transition-all duration-700"
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
                    <div 
                      className="absolute inset-0 z-30 opacity-30 mix-blend-overlay"
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

              <div className="h-[25%] w-full bg-[#ebe8e2] border-t border-black/5 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-full bg-black/10 rounded-[100%] blur-[40px] -translate-y-1/2" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.04]" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[9px] font-black text-emerald/10 uppercase tracking-[0.5em] animate-pulse">Industrial Grade Rendering</span>
                 </div>
              </div>

              <div className="absolute top-8 left-8 flex items-center gap-4 bg-emerald text-white px-5 py-3 rounded-2xl shadow-3xl scale-90 md:scale-100 origin-top-left border border-white/20">
                 <Layout size={18} className="text-gold" />
                 <span className="text-[10px] font-black uppercase tracking-widest leading-none">Studio v6.0</span>
              </div>
           </div>

           {/* CONTROLS */}
           <div className="lg:col-span-4 space-y-12">
              
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] flex items-center gap-2">
                       <Palette size={16} /> Color Node
                    </label>
                    <span className="text-[10px] font-black text-gold uppercase">{activeColor.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-3">
                    {colors.map((c) => (
                      <button 
                        key={c.id} 
                        onClick={() => setActiveColor(c)}
                        className={`aspect-square rounded-full border-4 transition-all relative active:scale-125 ${activeColor.id === c.id ? 'border-gold scale-110 z-10 shadow-3xl' : 'border-transparent bg-sand'}`}
                      >
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: c.hex }} />
                         {activeColor.id === c.id && <Check size={14} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] mb-6 block border-l-2 border-gold pl-4">Structural Component</label>
                 <div className="space-y-4">
                    {legOptions.map((leg) => (
                      <button 
                        key={leg.id} 
                        onClick={() => setActiveLeg(leg)}
                        className={`w-full p-6 rounded-[2rem] border-2 transition-all flex justify-between items-center active:scale-95 ${activeLeg.id === leg.id ? 'bg-emerald text-white border-gold shadow-2xl' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <Box size={22} className={activeLeg.id === leg.id ? "text-gold" : "opacity-20"} />
                            <span className="text-[11px] font-black uppercase tracking-widest leading-none">{leg.name}</span>
                         </div>
                         <div className="text-[10px] font-black opacity-60">ETB {leg.price.toLocaleString()}</div>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="pt-8 border-t border-emerald/5 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-center md:text-left">
                    <span className="text-[9px] font-black text-emerald/20 uppercase tracking-widest block mb-1">Configuration Total</span>
                    <span className="text-5xl font-display font-black text-emerald leading-tight">ETB {total.toLocaleString()}</span>
                 </div>
                 <button 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full md:w-auto px-12 py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95"
                 >
                    Relay Design <ChevronRight size={20} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
