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
    
    // We increment rotation based on drag distance
    setRotation(prev => {
       const newRot = prev + (diff / 2);
       
       // Calculate Frame Index (3 frames spread across 180 degrees)
       // We use a cycle logic to swap actual 3D images
       const normalized = Math.abs(newRot % 180);
       let idx = 0;
       if (normalized > 0 && normalized < 60) idx = 0; // Front
       else if (normalized >= 60 && normalized < 120) idx = 1; // Side ISO
       else idx = 2; // Further Angle
       
       setFrameIndex(idx);
       return newRot;
    });
    
    lastX.current = clientX;
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
        <div className="flex flex-col xl:flex-row gap-12 items-center">

           {/* 3D FRAME ENGINE PORT */}
           <div className={`w-full xl:w-2/3 h-[400px] md:h-[550px] bg-white rounded-[4rem] border border-emerald/5 relative shadow-3xl overflow-hidden flex items-center justify-center transition-all ${isDragging ? "cursor-grabbing" : "cursor-grab shadow-inner"}`}
                onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                onTouchStart={(e) => { setIsDragging(true); lastX.current = e.touches[0].clientX; }}
           >
              {/* Studio Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(250,247,242,1)_100%)] opacity-50" />
              
              {/* 3D IMAGE NODE - SWAPS SRC BASED ON ANGLE */}
              <div className="relative w-[85%] aspect-video z-10 transition-transform duration-300"
                   style={{ transform: `scale(${zoom})`, perspective: '1000px' }}>
                 <Image 
                    src={frames[frameIndex].src} 
                    alt="Real 3D Frame" 
                    fill 
                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]" 
                    priority
                 />
              </div>

              {/* Angle HUD */}
              <div className="absolute top-10 left-10 p-4 bg-emerald text-white rounded-2xl flex flex-col gap-1 shadow-2xl border border-white/20">
                 <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Box size={14} className="text-gold" /> Real 3D Logic
                 </div>
                 <div className="text-[8px] font-black opacity-50 uppercase tracking-widest">Angle: {frameIndex === 0 ? 'Front' : frameIndex === 1 ? 'Isometric' : 'Profile'}</div>
              </div>

              {/* Interaction Guide */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/80 backdrop-blur-xl border border-emerald/5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl">
                 <MoveHorizontal size={14} className="text-gold animate-bounce-slow" /> Drag to Rotate 3D
              </div>
           </div>

           {/* Info Node */}
           <div className="w-full xl:w-1/3 space-y-10">
              <div>
                 <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Engine Node 1.0</span>
                 <h3 className="text-4xl md:text-6xl font-display font-black text-emerald leading-tight mb-6">High-End <br />3D Study.</h3>
                 <p className="text-emerald-soft text-lg font-medium leading-relaxed">
                    This is a Frame-Swapping 3D architecture. Instead of 2D stretching, the system swaps actual high-resolution 3D perspectives as you rotate, providing the client with an honest view of the product from every side.
                 </p>
              </div>

              <div className="flex gap-4">
                 <button onClick={() => setZoom(z => Math.min(z + 0.2, 2.5))} className="flex-1 p-5 rounded-2xl bg-sand border border-emerald/5 flex flex-col items-center gap-2 hover:bg-emerald hover:text-white transition-all group">
                    <ZoomIn size={20} className="text-gold group-hover:text-white" />
                    <span className="text-[8px] font-black uppercase tracking-widest leading-none">Detail View</span>
                 </button>
                 <button onClick={() => setZoom(1)} className="flex-1 p-5 rounded-2xl bg-sand border border-emerald/5 flex flex-col items-center gap-2 hover:bg-emerald hover:text-white transition-all group">
                    <RotateCcw size={20} className="text-gold group-hover:text-white" />
                    <span className="text-[8px] font-black uppercase tracking-widest leading-none">Reset Hub</span>
                 </button>
              </div>

              <button className="w-full py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl">
                 Relay To Studio <Zap size={16} />
              </button>
           </div>

        </div>
      </div>
    </div>
  );
}
