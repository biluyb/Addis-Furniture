"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  Maximize2, 
  Check, 
  ChevronRight,
} from "lucide-react";
import { translations } from "@/utils/translations";

const fabrics = [
  { id: "velvet", name: "Royal Velvet", nameAm: "ሮያል ቬልቬት", hex: "#122620", price: 0 },
  { id: "linen", name: "Natural Linen", nameAm: "ተፈጥሯዊ ሊነን", hex: "#EBE3D5", price: -5000 },
  { id: "leather", name: "Arezzo Leather", nameAm: "አሬዞ ሌዘር", hex: "#4A2C2A", price: 15000 },
];

const finishes = [
  { id: "walnut", name: "Walnut", nameAm: "ዋልነት", hex: "#2D1B14" },
  { id: "oak", name: "White Oak", nameAm: "ኦክ", hex: "#BFA482" },
];

const sizes = [
  { id: "2s", name: "2 Seater", nameAm: "ባለ 2 መቀመጫ", dim: "180cm", mult: 0.8 },
  { id: "3s", name: "3 Seater", nameAm: "ባለ 3 መቀመጫ", dim: "240cm", mult: 1 },
];

export default function ProductConfigurator() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [finish, setFinish] = useState(finishes[0]);
  const [size, setSize] = useState(sizes[1]);
  const [total, setTotal] = useState(145000);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    setTotal((145000 + fabric.price) * size.mult);
    
    return () => window.removeEventListener("langChange", h);
  }, [fabric, size]);

  const t = translations[lang];

  return (
    <section id="configurator" className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 text-center md:text-left">
           <div className="w-full md:max-w-2xl">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Bespoke Node</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
                 The <span className="text-gradient leading-tight">{t.configure}.</span>
              </h2>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
           
           {/* Preview */}
           <div className="lg:col-span-7 bg-sand rounded-[2.5rem] md:rounded-[4rem] border border-emerald/5 p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <div 
                className="absolute inset-0 transition-all duration-700 mix-blend-multiply opacity-20"
                style={{ backgroundColor: fabric.hex }}
              />
              <div className="relative w-full aspect-video transition-all duration-500 scale-110">
                 <Image src="/images/sofa.png" alt="Sofa" fill className="object-contain drop-shadow-2xl" />
              </div>
              <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/80 backdrop-blur-xl border border-white px-4 py-2 rounded-2xl flex items-center gap-3 shadow-lg">
                 <div className="w-4 h-4 rounded-full border border-emerald/10 shadow-inner" style={{ backgroundColor: fabric.hex }} />
                 <span className="text-[10px] font-black text-emerald uppercase tracking-widest">{lang === "en" ? fabric.name : fabric.nameAm}</span>
              </div>
           </div>

           {/* Controls */}
           <div className="lg:col-span-5 space-y-10">
              
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Palette size={14} /> {lang === "en" ? "Textile" : "ጨርቅ"}
                 </label>
                 <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {fabrics.map((f) => (
                      <button key={f.id} onClick={() => setFabric(f)}
                        className={`aspect-square rounded-2xl border-2 transition-all p-1 ${fabric.id === f.id ? 'border-gold scale-105 shadow-xl' : 'border-transparent bg-sand'}`}>
                         <div className="w-full h-full rounded-xl" style={{ backgroundColor: f.hex }} />
                      </button>
                    ))}
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Layers size={14} /> {lang === "en" ? "Finish" : "ቅርጽ"}
                 </label>
                 <div className="flex gap-3">
                    {finishes.map((w) => (
                      <button key={w.id} onClick={() => setFinish(w)}
                        className={`flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${finish.id === w.id ? 'bg-emerald text-white border-emerald' : 'bg-sand border-transparent text-emerald/40'}`}>
                         <div className="w-6 h-6 rounded-lg opacity-80" style={{ backgroundColor: w.hex }} />
                         <span className="text-[9px] font-black uppercase tracking-widest">{lang === "en" ? w.name : w.nameAm}</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="pt-10 border-t border-emerald/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                 <div className="text-center sm:text-left">
                    <div className="text-[9px] font-black text-emerald/20 uppercase tracking-widest mb-1">{lang === "en" ? "Total Est." : "ጠቅላላ ዋጋ"}</div>
                    <div className="text-4xl font-display font-black text-emerald">ETB {total.toLocaleString()}</div>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full sm:w-auto px-10 py-5 bg-emerald text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-gold shadow-2xl">
                    Finalize <ChevronRight size={16} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
