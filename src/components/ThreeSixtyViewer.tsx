"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, ZoomOut, Send } from "lucide-react";

const products = [
  {
    id: "oslo",
    name: "Oslo Sectional Sofa",
    price: "ETB 145,000",
    image: "/images/sofa.png",
    angles: 8,
    description: "Premium velvet upholstery with walnut frame. Available in 6 colors.",
    specs: ["W 280cm × D 160cm × H 85cm", "High-density foam", "Walnut wood"],
  },
  {
    id: "bed",
    name: "Heritage King Bed",
    price: "ETB 98,000",
    image: "/images/bedroom.png",
    angles: 8,
    description: "Upholstered headboard with hand-carved Ethio-motif detailing.",
    specs: ["King: 200cm × 200cm", "Mahogany base", "Custom fabric"],
  },
];

export default function ThreeSixtyViewer() {
  const [product, setProduct] = useState(products[0]);
  const [angleIndex, setAngleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const startX = useRef(0);
  const dragAccum = useRef(0);

  const angleTransforms = [
    "rotateY(0deg) scale(1)", "rotateY(-8deg) scale(1.01)", "rotateY(-16deg) scale(1.015)",
    "rotateY(-24deg) scale(1.02)", "rotateY(-32deg) scale(1.015)", "rotateY(-24deg) scaleX(-1)",
    "rotateY(-8deg) scaleX(-1)", "rotateY(0deg) scaleX(-1)"
  ];

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    dragAccum.current += diff;
    startX.current = clientX;
    if (Math.abs(dragAccum.current) > 20) {
      setAngleIndex(prev => (prev + (dragAccum.current > 0 ? -1 : 1) + product.angles) % product.angles);
      dragAccum.current = 0;
    }
  }, [isDragging, product.angles]);

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
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-start">

          {/* Product Selector - Horizontal Mobile Scroll */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scroll-hide no-scrollbar">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => { setProduct(p); setAngleIndex(0); setZoom(1); }}
                className={`flex-shrink-0 w-64 lg:w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${product.id === p.id ? "border-gold bg-white shadow-xl" : "border-emerald/5 bg-sand"}`}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-ivory"><Image src={p.image} alt={p.name} fill className="object-cover" /></div>
                <div className="text-left">
                  <div className="font-bold text-sm text-emerald leading-tight">{p.name}</div>
                  <div className="text-gold text-[10px] font-black">{p.price}</div>
                </div>
              </button>
            ))}
          </div>

          {/* 3D Viewer Container */}
          <div className="lg:col-span-9">
            <div
              className={`relative aspect-square md:aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-gradient-to-b from-sand to-ivory border border-emerald/10 shadow-2xl transition-all ${isDragging ? "cursor-grabbing scale-[0.99]" : "cursor-grab"}`}
              onMouseDown={(e) => { setIsDragging(true); startX.current = e.clientX; }}
              onTouchStart={(e) => { setIsDragging(true); startX.current = e.touches[0].clientX; }}
              style={{ perspective: "1200px" }}
            >
              {/* Product Image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-200"
                style={{ transform: angleTransforms[angleIndex], scale: zoom }}>
                <div className="relative w-[85%] h-[85%]">
                  <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* Angle HUD */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-2">
                 <div className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-emerald/10 rounded-xl text-[9px] font-black uppercase text-emerald">
                    Angle: {angleIndex * 45}°
                 </div>
              </div>

              {/* Controls */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex flex-col gap-2">
                {[
                  { icon: ZoomIn, onClick: () => setZoom(z => Math.min(z + 0.2, 2)) },
                  { icon: ZoomOut, onClick: () => setZoom(z => Math.max(z - 0.2, 0.6)) },
                  { icon: RotateCcw, onClick: () => { setAngleIndex(0); setZoom(1); } }
                ].map((btn, i) => (
                  <button key={i} onClick={btn.onClick} className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all shadow-lg border border-emerald/5">
                    <btn.icon size={18} />
                  </button>
                ))}
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald text-white px-5 py-2.5 rounded-full shadow-2xl text-[9px] font-black uppercase tracking-widest">
                <MoveHorizontal size={14} className="text-gold" /> Drag to Rotate
              </div>
            </div>

            {/* High Contrast Details */}
            <div className="mt-6 md:mt-8 p-6 md:p-8 bg-sand rounded-[2.5rem] border border-emerald/10 grid md:grid-cols-2 gap-8">
               <div>
                  <h3 className="text-2xl font-display font-black text-emerald mb-2">{product.name}</h3>
                  <p className="text-emerald-soft font-medium text-sm leading-relaxed mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-emerald/10 rounded-lg text-[9px] font-bold text-emerald/60">{s}</span>
                    ))}
                  </div>
               </div>
               <div className="flex flex-col justify-between items-start md:items-end gap-6">
                  <div className="text-right">
                     <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-1 block">Value Offering</span>
                     <div className="text-3xl font-display font-black text-emerald">{product.price}</div>
                  </div>
                  <a href="https://t.me/taologos" className="w-full md:w-auto px-10 py-5 bg-emerald text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl">
                     <Send size={16} /> Order Proposal
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
