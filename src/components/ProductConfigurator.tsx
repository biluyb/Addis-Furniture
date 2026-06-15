"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  ChevronRight,
  Maximize2,
  Box,
  Check,
  Compass,
  Zap,
  Info
} from "lucide-react";
import { translations } from "@/utils/translations";

const fabricNodes = [
  { id: "emerald", name: "Imperial Emerald", type: "Velvet", hex: "#004B49", price: 12000 },
  { id: "crimson", name: "Addis Crimson", type: "Silk", hex: "#8B0000", price: 15000 },
  { id: "nile", name: "Midnight Nile", type: "Leather", hex: "#002147", price: 25000 },
  { id: "ivory", name: "Pearl Ivory", type: "Linen", hex: "#FDFCF8", price: 5000 },
  { id: "charcoal", name: "Carbon Ash", type: "Canvas", hex: "#36454F", price: 0 },
];

const structuralNodes = [
  { id: "oak", name: "Sun-Drenched Oak", material: "Wood", hex: "#BFA482", price: 0 },
  { id: "walnut", name: "Smoked Walnut", material: "Wood", hex: "#2D1B14", price: 15000 },
  { id: "steel", name: "Matte Titanium", material: "Steel", hex: "#111111", price: 25000 },
];

const intentNodes = [
  { id: "firm", name: "Executive Firm", icon: Box },
  { id: "plush", name: "Adaptive Soft", icon: Compass },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [fabric, setFabric] = useState(fabricNodes[0]);
  const [structure, setStructure] = useState(structuralNodes[0]);
  const [intent, setIntent] = useState(intentNodes[0]);
  const [total, setTotal] = useState(145000);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    setTotal(145000 + fabric.price + structure.price);
    return () => window.removeEventListener("langChange", h);
  }, [fabric, structure]);

  return (
    <section id="configurator" className="bg-ivory pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <header className="mb-12 md:mb-16">
           <div className="flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              <Zap size={14} /> Design Module 4.0
           </div>
           <h2 className="text-4xl md:text-7xl font-display font-black text-emerald uppercase tracking-tighter">
              Bespoke <span className="text-gradient leading-tight">Architecture.</span>
           </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-14">
           
           {/* High-Fidelity Rendering Port */}
           <div className="lg:col-span-12 xl:col-span-7 space-y-6">
              <div className="bg-white rounded-[3rem] p-6 md:p-12 relative overflow-hidden min-h-[350px] shadow-2xl flex items-center justify-center border border-emerald/5">
                 
                 {/* Color Swatch Logic */}
                 <div className="relative w-full aspect-video z-10 flex items-center justify-center isolate">
                    <Image src="/images/sofa_canvas.png" alt="Canvas" fill className="object-contain" priority />
                    <div 
                      className="absolute inset-0 z-20 pointer-events-none transition-all duration-700"
                      style={{ 
                        backgroundColor: fabric.hex, 
                        mixBlendMode: 'multiply',
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: 'url(/images/sofa_canvas.png)',
                      }}
                    />
                    <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-30 shadow-inner"
                      style={{ 
                        WebkitMaskImage: 'url(/images/sofa_canvas.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)'
                      }} 
                    />
                 </div>

                 {/* Rendering Overlay */}
                 <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <div className="bg-emerald text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10">
                       <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-widest leading-none">Studio Render: {fabric.name}</span>
                    </div>
                 </div>
              </div>

              {/* Specification Matrix - NEW FEATURE */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-sand/30 rounded-[2rem] border border-emerald/5">
                 {[
                   { label: "Material", val: fabric.type },
                   { label: "Base Node", val: structure.material },
                   { label: "Leg Node", val: structure.name.split(" ")[1] },
                   { label: "Interior", val: intent.name.split(" ")[1] },
                 ].map((spec, i) => (
                   <div key={i} className="text-center md:text-left">
                      <div className="text-[8px] font-black text-emerald/20 uppercase tracking-[0.2em] mb-1">{spec.label}</div>
                      <div className="text-[10px] font-black text-emerald uppercase tracking-widest">{spec.val}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Precision Controls */}
           <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              
              {/* Textile Node */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Palette size={14} /> Textile Selection
                    </label>
                    <span className="text-[10px] font-black text-gold uppercase underline underline-offset-4 decoration-gold/20">{fabric.name}</span>
                 </div>
                 <div className="flex flex-wrap gap-4">
                    {fabricNodes.map((f) => (
                      <button key={f.id} onClick={() => setFabric(f)}
                        className={`w-14 h-14 rounded-full border-4 transition-all relative group ${fabric.id === f.id ? 'border-gold scale-110 shadow-2xl' : 'border-transparent bg-sand shadow-sm'}`}>
                         <div className="w-full h-full rounded-full border border-emerald/5" style={{ backgroundColor: f.hex }} />
                         {fabric.id === f.id && <Check size={14} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Base Component Node */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Layers size={14} /> Structural Components (Base)
                 </label>
                 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                    {structuralNodes.map((s) => (
                      <button key={s.id} onClick={() => setStructure(s)}
                        className={`p-5 rounded-[2rem] border-2 transition-all flex justify-between items-center ${structure.id === s.id ? 'bg-emerald text-white border-gold shadow-2xl scale-[1.02]' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}>
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg shadow-inner" style={{ backgroundColor: s.hex }} />
                            <div className="text-left leading-none">
                               <div className="text-[10px] font-black uppercase tracking-widest">{s.name}</div>
                               <div className="text-[8px] opacity-40 uppercase tracking-widest mt-1">Industrial Grade</div>
                            </div>
                         </div>
                         {structure.id === s.id && <Check size={14} className="text-gold" />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Design Preference (Seating) */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block">Seating Architecture</label>
                 <div className="flex gap-4">
                    {intentNodes.map((node) => (
                      <button key={node.id} onClick={() => setIntent(node)}
                        className={`flex-1 p-5 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${intent.id === node.id ? 'bg-white border-gold shadow-xl text-emerald' : 'bg-sand border-transparent text-emerald/30 active:scale-95'}`}>
                         <node.icon size={20} className={intent.id === node.id ? 'text-gold' : 'opacity-20'} />
                         <span className="text-[10px] font-black uppercase tracking-widest leading-none">{node.name}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Pricing & CRM Hub */}
              <div className="pt-12 border-t border-emerald/5 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="w-full text-center md:text-left">
                    <div className="text-[10px] font-black text-emerald/20 uppercase tracking-widest mb-1">Configuration Total Value</div>
                    <div className="text-5xl font-display font-black text-emerald leading-none">ETB {total.toLocaleString()}</div>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                    className="w-full md:w-auto px-12 py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95">
                    Finalize Design <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
