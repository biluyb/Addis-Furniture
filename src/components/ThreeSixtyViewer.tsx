"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, ZoomOut, Send } from "lucide-react";

// Simulate multiple angles for each product using image brightness/transform tricks.
// In a real app, you'd have 8–24 actual image URLs per product.
const products = [
  {
    id: "oslo",
    name: "Oslo Sectional Sofa",
    nameAm: "ኦስሎ ሶፋ",
    price: "ETB 145,000",
    image: "/images/sofa.png",
    angles: 8,
    description: "Premium velvet upholstery with walnut frame. Available in 6 colors.",
    specs: ["W 280cm × D 160cm × H 85cm", "High-density foam cushions", "Walnut solid wood legs"],
  },
  {
    id: "bed",
    name: "Heritage King Bed",
    nameAm: "ኪንግ አልጋ",
    price: "ETB 98,000",
    image: "/images/bedroom.png",
    angles: 8,
    description: "Upholstered headboard with hand-carved Ethio-motif detailing.",
    specs: ["King: 200cm × 200cm", "Solid mahogany base", "Custom headboard fabric"],
  },
  {
    id: "desk",
    name: "Architect Desk Pro",
    nameAm: "ዴስክ",
    price: "ETB 55,000",
    image: "/images/office.png",
    angles: 8,
    description: "Cable-managed executive workspace with integrated drawer system.",
    specs: ["W 180cm × D 80cm × H 75cm", "Tempered glass panel", "Adjustable height option"],
  },
];

export default function ThreeSixtyViewer() {
  const [product, setProduct] = useState(products[0]);
  const [angleIndex, setAngleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const startX = useRef(0);
  const dragAccum = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Each "angle" is simulated by rotating+adjusting perspective on the image
  const angleTransforms = [
    "rotateY(0deg) scale(1)",
    "rotateY(-8deg) scale(1.01)",
    "rotateY(-16deg) scale(1.015)",
    "rotateY(-24deg) scale(1.02)",
    "rotateY(-32deg) scale(1.015)",
    "rotateY(-24deg) scaleX(-1)",
    "rotateY(-8deg) scaleX(-1)",
    "rotateY(0deg) scaleX(-1)",
  ];

  const angleLightOverlay = [0, 0.04, 0.07, 0.10, 0.07, 0.10, 0.07, 0.04];

  const advanceAngle = useCallback((delta: number) => {
    setAngleIndex(prev => (prev + delta + product.angles) % product.angles);
  }, [product.angles]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    dragAccum.current += diff;
    startX.current = clientX;
    if (Math.abs(dragAccum.current) > 28) {
      advanceAngle(dragAccum.current > 0 ? -1 : 1);
      dragAccum.current = 0;
    }
  }, [isDragging, advanceAngle]);

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

  const startDrag = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    dragAccum.current = 0;
  };

  return (
    <section id="360" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Interactive 360°</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-emerald">
            Studio <span className="text-gradient">Viewer</span>
          </h2>
          <p className="text-emerald/40 mt-4 max-w-lg">Drag left or right to rotate the product around its full axis. Zoom in to inspect finishing details.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Product Selector */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-4">Select Product</p>
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => { setProduct(p); setAngleIndex(0); setZoom(1); }}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${product.id === p.id ? "border-gold bg-white shadow-lg shadow-emerald/5" : "border-emerald/5 bg-sand hover:bg-white"}`}
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-ivory">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-sm text-emerald">{p.name}</div>
                  <div className="text-gold text-[10px] font-bold">{p.price}</div>
                </div>
              </button>
            ))}

            {/* Angle indicators */}
            <div className="mt-6 p-5 bg-sand rounded-2xl border border-emerald/5">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-4">Current Angle</p>
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: product.angles }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAngleIndex(i)}
                    className={`w-7 h-7 rounded-lg text-[8px] font-black transition-all border ${angleIndex === i ? "bg-emerald text-white border-emerald" : "bg-white text-emerald/30 border-emerald/5"}`}
                  >
                    {i * (360 / product.angles)}°
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Viewer */}
          <div className="lg:col-span-9">
            <div
              ref={containerRef}
              className={`relative aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-sand via-ivory to-sand border border-emerald/5 shadow-2xl select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onMouseDown={(e) => startDrag(e.clientX)}
              onTouchStart={(e) => startDrag(e.touches[0].clientX)}
              style={{ perspective: "1200px" }}
            >
              {/* Shadow base */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-black/10 blur-2xl rounded-full pointer-events-none" />

              {/* Product image with 3D transform */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-150 ease-out"
                style={{
                  transform: angleTransforms[angleIndex],
                  scale: zoom,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-4/5 h-4/5">
                  <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" />
                  {/* Shade overlay to simulate lighting per angle */}
                  <div
                    className="absolute inset-0 bg-black transition-all duration-150"
                    style={{ opacity: angleLightOverlay[angleIndex] }}
                  />
                </div>
              </div>

              {/* Drag guide hint */}
              <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isDragging ? "opacity-0" : "opacity-100"}`}>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-emerald/5 shadow-lg">
                  <MoveHorizontal size={14} className="text-gold" />
                  <span className="text-[9px] font-black text-emerald uppercase tracking-widest">Drag to Rotate</span>
                </div>
              </div>

              {/* Top Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
                  className="w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all border border-emerald/5 shadow-sm">
                  <ZoomIn size={18} />
                </button>
                <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.6))}
                  className="w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all border border-emerald/5 shadow-sm">
                  <ZoomOut size={18} />
                </button>
                <button onClick={() => { setAngleIndex(0); setZoom(1); }}
                  className="w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-red-500 hover:text-white transition-all border border-emerald/5 shadow-sm">
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Angle arrows */}
              <button
                onClick={() => advanceAngle(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all border border-emerald/5 shadow-sm"
              >←</button>
              <button
                onClick={() => advanceAngle(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all border border-emerald/5 shadow-sm"
              >→</button>

              {/* Angle progress bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1">
                {Array.from({ length: product.angles }).map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all ${i === angleIndex ? "w-6 bg-gold" : "w-3 bg-emerald/20"}`} />
                ))}
              </div>
            </div>

            {/* Product Info Strip */}
            <div className="mt-6 p-6 bg-sand rounded-[2rem] border border-emerald/5 grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gold mb-2">Details</div>
                <h3 className="font-display font-black text-xl text-emerald mb-1">{product.name}</h3>
                <p className="text-emerald/40 text-xs leading-relaxed">{product.description}</p>
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-2">Specifications</div>
                <ul className="space-y-1">
                  {product.specs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-[10px] text-emerald/60 font-bold">
                      <span className="text-gold mt-0.5">·</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-2">Viewing Angle</div>
                  <div className="text-4xl font-display font-black text-emerald">{angleIndex * (360 / product.angles)}°</div>
                </div>
                <a
                  href={`https://t.me/taologos?text=I'd like to order: ${encodeURIComponent(product.name)} (${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold transition-all mt-4 shadow-lg shadow-emerald/10"
                >
                  <Send size={14} /> Order on Telegram
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
