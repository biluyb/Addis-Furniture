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
    const tm = (e: TouchEvent) => {
      // Prevent page scroll while interacting
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
    <div id="360" className="bg-ivory pt-12 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">

           {/* 3D PORT - TOUCH OPTIMIZED */}
           <div className={`w-full lg:w-2/3 h-[350px] md:h-[550px] bg-white rounded-[3rem] md:rounded-[5rem] border border-emerald/5 relative shadow-2xl overflow-hidden flex items-center justify-center transition-all touch-none select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                onTouchStart={(e) => { 
                  setIsDragging(true); 
                  lastX.current = e.touches[0].clientX;
                }}
           >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(250,247,242,1)_100%)] opacity-40" />
              
              <div className="relative w-[100%] md:w-[85%] aspect-video z-10 transition-transform duration-300 pointer-events-none"
                   style={{ transform: `scale(${zoom})`, perspective: '1200px' }}>
                 <Image 
                    src={frames[frameIndex].src} 
                    alt="3D Frame" 
                    fill 
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]" 
                    priority
                 />
              </div>

              {/* HUD */}
              <div className="absolute top-8 left-8 p-4 bg-emerald text-white rounded-2xl shadow-2xl flex flex-col gap-1 border border-white/20 scale-90 md:scale-100 origin-top-left z-[20]">
                 <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Box size={14} className="text-gold" /> Real 3D Studio
                 </div>
                 <div className="text-[8px] font-black opacity-40 uppercase tracking-widest">Logic Active</div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-xl border border-emerald/5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl animate-pulse">
                 <MoveHorizontal size={14} className="text-gold" /> Swipe to Rotate
              </div>
           </div>

           {/* INFO */}
           <div className="w-full lg:w-1/3 space-y-10 text-center lg:text-left">
              <div>
                 <span className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/20">Kinetic Studio</span>
                 <h3 className="text-4xl md:text-6xl font-display font-black text-emerald leading-tight mb-6 tracking-tighter uppercase italic">The Studio <br />Viewer.</h3>
                 <p className="text-emerald-soft text-base md:text-xl font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                    A high-performance frame-sequencing engine built for the next generation of furniture inspection.
                 </p>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                 <button onClick={() => setZoom(z => Math.min(z + 0.3, 2.5))} className="flex-1 p-6 rounded-[2rem] bg-sand border border-emerald/5 flex flex-col items-center gap-2 group shadow-sm hover:bg-emerald hover:text-white transition-all active:scale-95">
                    <ZoomIn size={22} className="text-gold group-hover:text-white" />
                    <span className="text-[9px] font-black uppercase tracking-widest leading-none">Magnify</span>
                 </button>
                 <button onClick={() => { setZoom(1); setFrameIndex(0); setRotation(0); }} className="flex-1 p-6 rounded-[2rem] bg-sand border border-emerald/5 flex flex-col items-center gap-2 group shadow-sm hover:bg-red-500 hover:text-white transition-all active:scale-95">
                    <RotateCcw size={22} className="text-gold group-hover:text-white" />
                    <span className="text-[9px] font-black uppercase tracking-widest leading-none">Reset</span>
                 </button>
              </div>

              <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                className="w-full py-6 bg-emerald text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl active:scale-95">
                 Contact Sales <Zap size={18} />
              </button>
           </div>

        </div>
      </div>
    </div>
  );
}
