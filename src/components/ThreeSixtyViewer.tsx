"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, ZoomOut, Zap, Box } from "lucide-react";

const frames = [
  { id: 0, src: "/images/sofa_front.png" },
  { id: 1, src: "/images/sofa_iso.png" },
  { id: 2, src: "/images/sofa_canvas.png" },
];

export default function ThreeSixtyViewer() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [rotation, setRotation] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const lastX = useRef(0);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - lastX.current;
    
    setRotation(prev => {
       const newRot = prev + (diff / 2);
       const normalized = Math.abs(newRot % 180);
       let idx = 0;
       if (normalized < 60) idx = 0;
       else if (normalized < 120) idx = 1;
       else idx = 2;
       
       setFrameIndex(idx);
       return newRot;
    });
    
    lastX.current = clientX;
  }, [isDragging]);

  useEffect(() => {
    const mm = (e: MouseEvent) => handleMove(e.clientX);
    const tm = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const stop = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener("mousemove", mm);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", tm, { passive: true });
      window.addEventListener("touchend", stop);
    }
    
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="bg-ivory pt-4 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">

           {/* 3D PORT - MOBILE OPTIMIZED */}
           <div className={`w-full lg:w-2/3 h-[300px] md:h-[500px] bg-white rounded-[2.5rem] md:rounded-[4rem] border border-emerald/5 relative shadow-xl overflow-hidden flex items-center justify-center transition-all ${isDragging ? "cursor-grabbing touch-none" : "cursor-grab"}`}
                onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                onTouchStart={(e) => { setIsDragging(true); lastX.current = e.touches[0].clientX; }}
           >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(250,247,242,1)_100%)] opacity-30" />
              
              <div className="relative w-[90%] md:w-[85%] aspect-video z-10 transition-transform duration-300 pointer-events-none"
                   style={{ transform: `scale(${zoom})`, perspective: '1000px' }}>
                 <Image 
                    src={frames[frameIndex].src} 
                    alt="3D Frame" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" 
                    priority
                 />
              </div>

              {/* HUD - COMPACT */}
              <div className="absolute top-6 left-6 p-3 bg-emerald/90 text-white rounded-xl shadow-xl flex flex-col gap-1 border border-white/10 scale-75 md:scale-90 origin-top-left">
                 <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Box size={14} className="text-gold" /> Studio Node
                 </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 bg-white/90 backdrop-blur-xl border border-emerald/5 rounded-full text-[8px] font-black uppercase tracking-[0.4em] flex items-center gap-2 shadow-lg whitespace-nowrap">
                 <MoveHorizontal size={12} className="text-gold" /> Interact to Rotate
              </div>
           </div>

           {/* INFO - MOBILE FIRST */}
           <div className="w-full lg:w-1/3 space-y-8 text-center lg:text-left">
              <div>
                 <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">3D Architecture</span>
                 <h3 className="text-3xl md:text-5xl font-display font-black text-emerald leading-tight mb-4 uppercase">Real 3D <br />Study.</h3>
                 <p className="text-emerald-soft text-sm md:text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                   A high-performance frame-swapping engine optimized for smooth low-latency study on mobile networks.
                 </p>
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                 <button onClick={() => setZoom(z => Math.min(z + 0.2, 2))} className="p-4 rounded-xl bg-sand border border-emerald/5 flex flex-col items-center gap-1 group shadow-sm hover:bg-emerald hover:text-white transition-all">
                    <ZoomIn size={18} className="text-gold group-hover:text-white shadow-sm" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Zoom +</span>
                 </button>
                 <button onClick={() => { setZoom(1); setFrameIndex(0); }} className="p-4 rounded-xl bg-sand border border-emerald/5 flex flex-col items-center gap-1 group shadow-sm hover:bg-red-500 hover:text-white transition-all">
                    <RotateCcw size={18} className="text-gold group-hover:text-white" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Reset</span>
                 </button>
              </div>

              <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                className="w-full py-5 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-xl active:scale-95">
                 Connect Studio <Zap size={16} />
              </button>
           </div>

        </div>
      </div>
    </div>
  );
}
