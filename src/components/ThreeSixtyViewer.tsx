"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, Zap, Box } from "lucide-react";

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
    const tm = (e: TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX);
      }
    };
    const stop = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener("mousemove", mm);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", tm, { passive: false });
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
    <div id="360" className="bg-ivory pt-16 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

           {/* 3D PORT - FULL SCREEN MOBILE FEEL */}
           <div className={`w-full lg:w-2/3 h-[450px] md:h-[600px] bg-white rounded-[3.5rem] md:rounded-[5.5rem] border-2 border-emerald/5 relative shadow-3xl overflow-hidden flex items-center justify-center transition-all touch-none select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                onTouchStart={(e) => { 
                  setIsDragging(true); 
                  lastX.current = e.touches[0].clientX;
                }}
           >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(240,235,225,1)_100%)] opacity-50" />
              
              {/* THE SOFA - LARGER ON MOBILE */}
              <div className="relative w-[110%] sm:w-[100%] md:w-[90%] aspect-square z-10 transition-all duration-300 pointer-events-none flex items-center justify-center"
                   style={{ transform: `scale(${zoom})`, perspective: '1500px' }}>
                 <Image 
                    src={frames[frameIndex].src} 
                    alt="3D Frame" 
                    fill 
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]" 
                    priority
                 />
              </div>

              {/* HUD - FORCED TOP LAYER */}
              <div className="absolute top-8 left-8 z-[50] pointer-events-none">
                 <div className="bg-emerald text-white px-6 py-4 rounded-[2rem] shadow-3xl flex flex-col gap-1 border-2 border-white/20 origin-top-left">
                    <div className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                       <Box size={16} className="text-gold" /> Real 3D Studio
                    </div>
                    <div className="text-[8px] font-black opacity-40 uppercase tracking-[0.4em]">Node.04 Active</div>
                 </div>
              </div>

              {/* INTERACTION PROMPT */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[50] pointer-events-none">
                 <div className="px-8 py-4 bg-white/95 backdrop-blur-2xl border border-emerald/5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 shadow-3xl text-emerald">
                    <MoveHorizontal size={16} className="text-gold animate-bounce" /> Swipe to Explore
                 </div>
              </div>
           </div>

           {/* INFO - COMPACT MOBILE */}
           <div className="w-full lg:w-1/3 space-y-10 text-center lg:text-left h-full">
              <div>
                 <span className="text-gold text-[12px] font-black uppercase tracking-[0.5em] mb-4 block underline underline-offset-8 decoration-gold/20">Spatial Dynamics</span>
                 <h3 className="text-5xl md:text-7xl font-display font-black text-emerald leading-none mb-6 tracking-tighter uppercase italic">Study <br />Viewer.</h3>
                 <p className="text-emerald-soft text-base md:text-2xl font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                    Precision engineering meets artistic vision. Inspect every curve with zero-latency 3D rotation.
                 </p>
              </div>

              <div className="flex gap-4">
                 <button onClick={() => setZoom(z => Math.min(z + 0.4, 3))} className="flex-1 p-8 rounded-[2.5rem] bg-sand border-2 border-emerald/5 flex flex-col items-center gap-3 transition-all hover:bg-emerald hover:text-white group shadow-xl active:scale-95">
                    <ZoomIn size={28} className="text-gold group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-[-4px]">Magnify</span>
                 </button>
                 <button onClick={() => { setZoom(1); setFrameIndex(0); setRotation(0); }} className="flex-1 p-8 rounded-[2.5rem] bg-sand border-2 border-emerald/5 flex flex-col items-center gap-3 transition-all hover:bg-gold hover:text-white group shadow-xl active:scale-95">
                    <RotateCcw size={28} className="text-gold group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-[-4px]">Reset</span>
                 </button>
              </div>

              <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                className="w-full py-7 bg-emerald text-white rounded-[3rem] font-black text-[12px] uppercase tracking-[0.4em] flex items-center justify-center gap-5 hover:bg-gold transition-all shadow-3xl active:scale-95">
                 Connect to Studio <Zap size={22} />
              </button>
           </div>

        </div>
      </div>
    </div>
  );
}
