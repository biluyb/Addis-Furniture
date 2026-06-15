"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  Maximize2, 
  ChevronRight,
  Zap,
  Box,
  Fingerprint
} from "lucide-react";
import { translations } from "@/utils/translations";

const fabrics = [
  { id: "velvet", name: "Royal Velvet", nameAm: "ሮያል ቬልቬት", hex: "#122620", price: 0 },
  { id: "linen", name: "Natural Linen", nameAm: "ተፈጥሯዊ ሊነን", hex: "#EBE3D5", price: -5000 },
  { id: "leather", name: "Arezzo Leather", nameAm: "አሬዞ ሌዘር", hex: "#4A2C2A", price: 25000 },
  { id: "emerald", name: "Imperial Silk", nameAm: "ኢምፔሪያል ሲልክ", hex: "#004B49", price: 12000 },
];

const finishes = [
  { id: "walnut", name: "Smoked Walnut", nameAm: "ዋልነት", hex: "#2D1B14" },
  { id: "ebony", name: "Carbon Ebony", nameAm: "ኢቦኒ", hex: "#111111" },
  { id: "brass", name: "Golden Brass", nameAm: "ወርቃማ", hex: "#C5A039" },
];

const legs = [
  { id: "modern", name: "L-Profile Steel", nameAm: "ዘመናዊ ብረት", price: 0, icon: Box },
  { id: "heritage", name: "Carved Walnut", nameAm: "ባህላዊ እንጨት", price: 15000, icon: Box },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [finish, setFinish] = useState(finishes[0]);
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

  const t = translations[lang];

  return (
    <section id="configurator" className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                 <Fingerprint size={14} /> Bespoke Identity Node
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
                 Custom <span className="text-gradient leading-tight">Architecture.</span>
              </h2>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16">
           
           {/* Precision Rendering Port */}
           <div className="lg:col-span-12 xl:col-span-7 bg-sand rounded-[3rem] md:rounded-[5rem] border border-emerald/5 p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[450px] shadow-inner-xl mb-10 xl:mb-0">
              <div 
                className="absolute inset-0 transition-colors duration-700 mix-blend-multiply opacity-25"
                style={{ backgroundColor: fabric.hex }}
              />
              <div className="relative w-full aspect-video transition-all duration-700 hover:scale-105 active:scale-110">
                 <Image 
                    src="/home/bililign/.gemini/antigravity/brain/cdd2826e-151c-48eb-95f8-1a8e508c83ac/luxury_sofa_product_transparent_1781506709272.png" 
                    alt="Bespoke Sofa" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]" 
                 />
              </div>

              {/* Component Info Node */}
              <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                 <div className="bg-white/90 backdrop-blur-xl border border-emerald/5 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                    <Maximize2 size={16} className="text-gold" />
                    <span className="text-[10px] font-black text-emerald uppercase tracking-widest">Master Structure: 280cm</span>
                 </div>
              </div>
           </div>

           {/* Precision Controls */}
           <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              
              {/* Textile Node */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Palette size={14} /> Textile node
                    </label>
                    <span className="text-[9px] font-black text-gold uppercase">{fabric.name}</span>
                 </div>
                 <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-4 gap-4">
                    {fabrics.map((f) => (
                      <button key={f.id} onClick={() => setFabric(f)}
                        className={`aspect-square rounded-2xl border-2 transition-all p-1 ${fabric.id === f.id ? 'border-gold scale-110 shadow-2xl z-10' : 'border-transparent bg-sand hover:bg-emerald/5'}`}>
                         <div className="w-full h-full rounded-xl" style={{ backgroundColor: f.hex }} />
                      </button>
                    ))}
                 </div>
              </div>

              {/* Legs / Structure Node */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Zap size={14} /> Structural Profile (Legs)
                 </label>
                 <div className="grid grid-cols-2 gap-4">
                    {legs.map((leg) => (
                      <button key={leg.id} onClick={() => setLegNode(leg)}
                        className={`p-5 rounded-[2rem] border-2 transition-all flex justify-between items-center ${legNode.id === leg.id ? 'bg-emerald text-white border-gold shadow-2xl' : 'bg-sand border-transparent text-emerald/40'}`}>
                         <span className="text-[10px] font-black uppercase tracking-widest">{lang === "en" ? leg.name : leg.nameAm}</span>
                         {legNode.id === leg.id && <Box size={14} className="text-gold" />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Order Node */}
              <div className="pt-10 border-t border-emerald/5 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="text-center md:text-left w-full">
                    <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">Configuration Value</div>
                    <div className="text-5xl font-display font-black text-emerald leading-none">ETB {total.toLocaleString()}</div>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full md:w-auto whitespace-nowrap px-12 py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl">
                    Relay Order <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
