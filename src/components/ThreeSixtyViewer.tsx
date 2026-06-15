"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, RotateCcw, ZoomIn, ZoomOut, Zap, Fingerprint } from "lucide-react";

export default function ThreeSixtyViewer() {
  const [rotation, setRotation] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [velocity, setVelocity] = useState(0);
  const startX = useRef(0);
  const lastX = useRef(0);
  const rafId = useRef<number>(0);

  // Inertia Engine - Makes it feel like a real physical object
  const applyInertia = useCallback(() => {
    if (!isDragging && Math.abs(velocity) > 0.1) {
      setRotation(prev => prev + velocity);
      setVelocity(v => v * 0.95); // Friction
      rafId.current = requestAnimationFrame(applyInertia);
    }
  }, [isDragging, velocity]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - lastX.current;
    const v = (diff / window.innerWidth) * 360;
    setRotation(prev => prev + v);
    setVelocity(v);
    lastX.current = clientX;
  }, [isDragging]);

  useEffect(() => {
    if (!isDragging) {
      rafId.current = requestAnimationFrame(applyInertia);
    } else {
      cancelAnimationFrame(rafId.current);
    }
    return () => cancelAnimationFrame(rafId.current);
  }, [isDragging, applyInertia]);

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
           
           {/* Kinetic 3D Port */}
           <div className="w-full xl:w-2/3 h-[400px] md:h-[600px] bg-white rounded-[4rem] border border-emerald/5 shadow-3xl relative overflow-hidden flex items-center justify-center group cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX; }}
                onTouchStart={(e) => { setIsDragging(true); lastX.current = e.touches[0].clientX; }}
           >
              
              {/* Studio Floor Reflection */}
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-sand/50 to-transparent" />
              
              {/* Kinetic Shadow Node */}
              <div 
                className="absolute bottom-20 w-48 h-12 bg-black/10 rounded-[100%] blur-2xl transition-transform duration-300"
                style={{ 
                   transform: `translateX(${(rotation % 360) * 0.1}px) scaleX(${1 + Math.abs(velocity) * 0.05})` 
                }}
              />

              {/* 3D Master Object */}
              <div 
                className="relative w-3/4 aspect-video transition-transform duration-100 ease-out preserve-3d"
                style={{ 
                   transform: `perspective(2000px) rotateY(${rotation}deg) scale(${zoom})`,
                }}
              >
                 <Image 
                    src="/images/sofa_master.png" 
                    alt="3D Studio" 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                 />
              </div>

              {/* HUD */}
              <div className="absolute top-10 right-10 flex gap-3">
                 <div className="bg-sand px-5 py-3 rounded-2xl flex items-center gap-3 border border-emerald/5">
                    <Fingerprint size={16} className="text-gold" />
                    <span className="text-[9px] font-black uppercase text-emerald tracking-widest leading-none">Kinetic Tracking: {(rotation % 360).toFixed(0)}°</span>
                 </div>
              </div>

              {/* Feedback */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl opacity-40 hover:opacity-100 transition-opacity">
                 <MoveHorizontal size={14} className="animate-pulse" /> Kinetic Touch Active
              </div>

           </div>

           {/* Studio Node Info */}
           <div className="w-full xl:w-1/3 space-y-10">
              <div>
                 <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">3D Studio Node</span>
                 <h3 className="text-4xl md:text-6xl font-display font-black text-emerald leading-tight mb-6">Real <br />Inertia.</h3>
                 <p className="text-emerald-soft text-lg font-medium leading-relaxed">
                    Explore our furniture in a high-fidelity kinetic environment. Our 3D Studio engine uses momentum-based tracking to simulate physical inspecting.
                 </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                 {[
                   { icon: ZoomIn, onClick: () => setZoom(z => Math.min(z + 0.2, 2)), l: 'Zoom +' },
                   { icon: ZoomOut, onClick: () => setZoom(z => Math.max(z - 0.2, 0.6)), l: 'Zoom -' },
                   { icon: RotateCcw, onClick: () => { setRotation(0); setVelocity(0); setZoom(1); }, l: 'Reset' },
                 ].map((btn, i) => (
                   <button key={i} onClick={btn.onClick} className="p-6 rounded-3xl bg-sand border border-emerald/5 flex flex-col items-center gap-2 hover:bg-emerald hover:text-white transition-all group">
                      <btn.icon size={20} className="text-gold group-hover:text-white" />
                      <span className="text-[8px] font-black uppercase tracking-widest">{btn.l}</span>
                   </button>
                 ))}
              </div>

              <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                className="w-full py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gold transition-all shadow-3xl">
                 Relay To Studio <Zap size={16} />
              </button>
           </div>

        </div>

      </div>
    </div>
  );
}
