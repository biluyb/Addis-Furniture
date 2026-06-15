"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, ZoomOut, Send, Info, Sparkles } from "lucide-react";

const products = [
  {
    id: "oslo",
    name: "Oslo Sectional Elite",
    price: "ETB 145,000",
    image: "/home/bililign/.gemini/antigravity/brain/cdd2826e-151c-48eb-95f8-1a8e508c83ac/luxury_sofa_product_transparent_1781506709272.png",
    description: "Premium velvet sectional with deep-seated ergonomic architecture.",
    features: ["Zero Gravity Build", "Anti-Stain Silk", "Adaptive Foam"]
  }
];

export default function ThreeSixtyViewer() {
  const [product] = useState(products[0]);
  const [rotation, setRotation] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const startX = useRef(0);

  // Smooth Rotation Calculation
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    
    // We map mouse movement to a -45 to 45 degree rotation range 
    // to simulate a 3D volume view
    const delta = (diff / window.innerWidth) * 180;
    setRotation(prev => Math.min(Math.max(prev + delta, -45), 45));
    startX.current = clientX;
  }, [isDragging]);

  useEffect(() => {
    const mm = (e: MouseEvent) => handleMove(e.clientX);
    const tm = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const stop = () => setIsDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", tm, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", stop);
    };
  }, [handleMove]);

  return (
    <div className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* 3D High-Fidelity Viewer Port */}
          <div className="lg:col-span-8">
            <div
              className={`relative aspect-square md:aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-gradient-to-br from-sand to-ivory border border-emerald/5 shadow-3xl flex items-center justify-center transition-all ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onMouseDown={(e) => { setIsDragging(true); startX.current = e.clientX; }}
              onTouchStart={(e) => { setIsDragging(true); startX.current = e.touches[0].clientX; }}
              style={{ perspective: "1500px" }}
            >
              
              {/* Product Silhouette / Lighting Layer */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]" />

              {/* Dynamic 3D Transform Object */}
              <div className="relative w-[90%] h-[90%] transition-transform duration-300 ease-out preserve-3d"
                style={{ 
                  transform: `rotateY(${rotation}deg) scale(${zoom})`,
                  filter: `drop-shadow(${rotation * -0.5}px 25px 20px rgba(18,38,32,0.15))`
                }}>
                <Image src={product.image} alt={product.name} fill className="object-contain" />
              </div>

              {/* HUD / Telemetry */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                 <div className="px-4 py-2 bg-white/90 backdrop-blur-xl border border-emerald/5 rounded-xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-emerald">Position: {rotation.toFixed(0)}°X</span>
                 </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                 {[
                   { icon: ZoomIn, onClick: () => setZoom(z => Math.min(z + 0.2, 2)) },
                   { icon: ZoomOut, onClick: () => setZoom(z => Math.max(z - 0.2, 0.6)) },
                   { icon: RotateCcw, onClick: () => { setRotation(0); setZoom(1); } }
                 ].map((btn, i) => (
                   <button key={i} onClick={btn.onClick} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all shadow-xl">
                     <btn.icon size={20} />
                   </button>
                 ))}
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-emerald/90 text-white px-6 py-3 rounded-full shadow-2xl text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-xl group">
                <MoveHorizontal size={14} className="text-gold group-hover:scale-125 transition-transform" /> 
                Tactile 3D Study
              </div>
            </div>
          </div>

          {/* ERP Identity Details */}
          <div className="lg:col-span-4 space-y-8">
             <div>
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Master Node 1024</span>
                <h3 className="text-4xl md:text-5xl font-display font-black text-emerald leading-tight mb-4">{product.name}</h3>
                <p className="text-emerald-soft text-lg font-medium leading-relaxed mb-8">{product.description}</p>
             </div>

             <div className="space-y-4">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center text-gold group-hover:bg-emerald group-hover:text-white transition-all">
                        <Sparkles size={16} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald/60">{f}</span>
                  </div>
                ))}
             </div>

             <div className="pt-8 border-t border-emerald/5 flex flex-col gap-6">
                <div className="flex justify-between items-end">
                   <div>
                      <div className="text-[9px] font-black text-gold uppercase tracking-widest mb-1">Standard Price</div>
                      <div className="text-3xl font-display font-black text-emerald leading-none">{product.price}</div>
                   </div>
                   <button className="w-10 h-10 border border-emerald/10 rounded-xl flex items-center justify-center text-emerald hover:bg-emerald hover:text-white transition-all"><Info size={20} /></button>
                </div>
                <button 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl"
                >
                   Secure Master Piece <Send size={18} />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
