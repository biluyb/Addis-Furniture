"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, Zap, Box, Compass } from "lucide-react";

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

  const cycleFrame = useCallback((e: any) => {
    e.stopPropagation();
    setFrameIndex(prev => (prev + 1) % frames.length);
  }, []);

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
    <div id="360" className="bg-ivory pt-4 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6 md:gap-12">
           
           {/* THE STUDIO PORT - MAXIMIZED FOR MOBILE */}
           <div className="relative w-full">
              <div className={`relative aspect-[1/1] md:aspect-video w-full bg-white rounded-[2.5rem] md:rounded-[5.5rem] border-2 border-emerald/5 shadow-2xl overflow-hidden flex items-center justify-center transition-all touch-none select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                  onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                  onTouchStart={(e) => { 
                    setIsDragging(true); 
                    lastX.current = e.touches[0].clientX;
                  }}
              >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(242,238,230,1)_100%)] opacity-50" />
                  
                  {/* THE SOFA - AGGRESSIVE SCALE FOR CLARITY */}
                  <div className="relative w-[130%] h-[130%] md:w-[90%] md:h-[90%] z-10 transition-all duration-300 pointer-events-none flex items-center justify-center"
                      style={{ transform: `scale(${zoom})`, perspective: '1500px' }}>
                    <Image 
                        src={frames[frameIndex].src} 
                        alt="3D Frame" 
                        fill 
                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]" 
                        priority
                    />
                  </div>

                  {/* MINI HUD */}
                  <div className="absolute top-6 left-6 z-[30] pointer-events-none">
                    <div className="bg-emerald/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 border border-white/20">
                       <Box size={14} className="text-gold" />
                       <span className="text-[10px] font-black uppercase tracking-widest">3D Study</span>
                    </div>
                  </div>

                  {/* INTEGRATED PRECISION CONTROLS - FLOATING OVER THE IMAGE */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-[40]">
                      <div 
                        onClick={cycleFrame}
                        onTouchEnd={cycleFrame}
                        className="px-6 py-3 bg-white/95 backdrop-blur-xl border border-emerald/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-2xl text-emerald cursor-pointer hover:bg-emerald hover:text-white transition-all group active:scale-95"
                      >
                        <MoveHorizontal size={14} className="text-gold group-hover:text-white animate-bounce" /> 
                        Click to Cycle View
                      </div>

                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.4, 2.5)); }}
                          className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-xl border border-emerald/5 flex justify-center items-center shadow-xl active:scale-90 hover:bg-emerald hover:text-white transition-all pointer-events-auto"
                        >
                          <ZoomIn size={18} className="text-gold" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setZoom(1); setFrameIndex(0); setRotation(0); }}
                          className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-xl border border-emerald/5 flex justify-center items-center shadow-xl active:scale-90 hover:bg-gold hover:text-white transition-all pointer-events-auto"
                        >
                          <RotateCcw size={18} className="text-emerald" />
                        </button>
                      </div>
                  </div>
              </div>
           </div>

           {/* NARRATIVE SECTION - COMPACT */}
           <div className="text-center md:text-left space-y-6 px-2">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                 <div>
                    <div className="flex items-center gap-2 justify-center md:justify-start text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">
                       <Compass size={14} /> Kinetic Node
                    </div>
                    <h3 className="text-3xl md:text-6xl font-display font-black text-emerald leading-tight tracking-tighter uppercase italic">
                       The Studio <span className="text-gradient">Viewer.</span>
                    </h3>
                 </div>
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full md:w-auto px-10 py-5 bg-emerald text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-xl active:scale-95">
                    Connect Studio <Zap size={18} />
                 </button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
