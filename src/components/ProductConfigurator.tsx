"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Palette, 
  Layers, 
  Maximize2, 
  Send, 
  Check, 
  ChevronRight,
  Info
} from "lucide-react";

const fabrics = [
  { id: "velvet", name: "Royal Velvet", hex: "#122620", price: 0 },
  { id: "linen", name: "Natural Linen", hex: "#EBE3D5", price: -5000 },
  { id: "leather", name: "Arezzo Leather", hex: "#4A2C2A", price: 15000 },
  { id: "boucle", name: "Soft Bouclé", hex: "#FDFCF8", price: 8000 },
];

const woodFinishes = [
  { id: "walnut", name: "Smoked Walnut", hex: "#2D1B14" },
  { id: "oak", name: "White Oak", hex: "#BFA482" },
  { id: "ebony", name: "Midnight Ebony", hex: "#111111" },
];

const sizes = [
  { id: "2-seater", name: "2 Seater", dim: "180cm", priceMultiplier: 0.8 },
  { id: "3-seater", name: "3 Seater", dim: "240cm", priceMultiplier: 1 },
  { id: "l-shape", name: "Sectional L", dim: "320cm", priceMultiplier: 1.4 },
];

export default function ProductConfigurator() {
  const [fabric, setFabric] = useState(fabrics[0]);
  const [finish, setFinish] = useState(woodFinishes[0]);
  const [size, setSize] = useState(sizes[1]);
  const [basePrice] = useState(145000);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    const calculated = (basePrice + fabric.price) * size.priceMultiplier;
    setTotalPrice(calculated);
  }, [fabric, size, basePrice]);

  return (
    <section id="configure" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Bespoke Engine</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald">
                 The <span className="text-gradient">Configurator.</span>
              </h2>
           </div>
           <div className="hidden md:flex items-center gap-10 text-[10px] font-bold text-emerald/30 uppercase tracking-widest">
              <span>Precision: 0.05mm</span>
              <span>Load: 450kg</span>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* High Fidelity Preview */}
           <div className="lg:col-span-7 bg-sand rounded-[3rem] border border-emerald/5 p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[500px]">
              
              {/* Product Layers */}
              <div 
                className="absolute inset-0 transition-all duration-700 mix-blend-multiply opacity-20 pointer-events-none"
                style={{ backgroundColor: fabric.hex }}
              />

              <div className="relative w-full aspect-square md:aspect-video transition-all duration-500 scale-110">
                 <Image 
                   src="/images/sofa.png" 
                   alt="Config Preview" 
                   fill 
                   className="object-contain drop-shadow-2xl"
                 />
              </div>

              {/* Material Detail Tag */}
              <div className="absolute top-10 left-10 flex gap-4">
                 <div className="bg-white/70 backdrop-blur-xl border border-white px-4 py-2 rounded-2xl flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border border-emerald/10 shadow-inner" style={{ backgroundColor: fabric.hex }} />
                    <span className="text-[10px] font-bold text-emerald uppercase tracking-widest">{fabric.name}</span>
                 </div>
              </div>

              {/* Dimension Tag */}
              <div className="absolute bottom-10 right-10 flex gap-4">
                 <div className="bg-white/70 backdrop-blur-xl border border-white px-4 py-2 rounded-2xl flex items-center gap-3">
                    <Maximize2 size={14} className="text-gold" />
                    <span className="text-[10px] font-bold text-emerald uppercase tracking-widest">{size.dim} Width</span>
                 </div>
              </div>
           </div>

           {/* Configuration Panel */}
           <div className="lg:col-span-5 space-y-10">
              
              {/* Fabric Picker */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Palette size={14} /> Textile Selection
                    </label>
                    <span className="text-[10px] font-bold text-gold">{fabric.price > 0 ? `+ETB ${fabric.price.toLocaleString()}` : 'Standard'}</span>
                 </div>
                 <div className="grid grid-cols-4 gap-4">
                    {fabrics.map((f) => (
                      <button 
                        key={f.id}
                        onClick={() => setFabric(f)}
                        className={`aspect-square rounded-2xl border-2 transition-all p-1 ${fabric.id === f.id ? 'border-gold shadow-xl scale-105' : 'border-transparent hover:border-emerald/10'}`}
                      >
                         <div className="w-full h-full rounded-xl overflow-hidden" style={{ backgroundColor: f.hex }}>
                            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')] opacity-30" />
                         </div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Wood Finish Selector */}
              <div>
                 <label className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                    <Layers size={14} /> Structural Finish
                 </label>
                 <div className="flex gap-4">
                    {woodFinishes.map((w) => (
                      <button 
                        key={w.id}
                        onClick={() => setFinish(w)}
                        className={`flex-1 p-4 rounded-2xl border transition-all text-left group ${finish.id === w.id ? 'bg-emerald text-white border-emerald shadow-xl' : 'bg-sand border-emerald/5 hover:bg-white text-emerald/40'}`}
                      >
                         <div className="w-6 h-6 rounded-lg mb-3 shadow-inner border border-white/10" style={{ backgroundColor: w.hex }} />
                         <div className="text-[9px] font-bold uppercase tracking-widest leading-none mb-1">{w.name}</div>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Dimensions Selector */}
              <div>
                 <label className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em] mb-6 block">Spatial Configuration</label>
                 <div className="space-y-3">
                    {sizes.map((s) => (
                      <button 
                        key={s.id}
                        onClick={() => setSize(s)}
                        className={`w-full p-6 rounded-[2rem] border flex justify-between items-center transition-all ${size.id === s.id ? 'bg-white border-gold shadow-xl scale-[1.02]' : 'bg-sand border-transparent text-emerald/30 hover:bg-white'}`}
                      >
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${size.id === s.id ? 'bg-gold text-white' : 'bg-emerald/5'}`}>
                               <Maximize2 size={16} />
                            </div>
                            <div className="text-left">
                               <div className="text-xs font-bold text-emerald">{s.name}</div>
                               <div className="text-[9px] uppercase tracking-widest opacity-50">{s.dim} Configuration</div>
                            </div>
                         </div>
                         {size.id === s.id && <Check size={18} className="text-gold" />}
                      </button>
                    ))}
                 </div>
              </div>

              {/* Order Finalization */}
              <div className="pt-10 border-t border-emerald/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                 <div>
                    <div className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest mb-1">Estimated Value</div>
                    <div className="text-4xl font-display font-black text-emerald">ETB {totalPrice.toLocaleString()}</div>
                 </div>
                 <button 
                   onClick={() => window.open(`https://t.me/taologos?text=Bespoke Configuration: ${fabric.name} ${size.name} with ${finish.name} finish.`, '_blank')}
                   className="w-full sm:w-auto px-10 py-5 bg-emerald text-white rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-2xl shadow-emerald/20"
                 >
                    Finalize Order <ChevronRight size={16} />
                 </button>
              </div>

           </div>

        </div>

      </div>
    </section>
  );
}
