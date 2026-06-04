"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Rotate3d, Maximize2, MoveHorizontal } from "lucide-react";

export default function ThreeSixtyViewer({ image }: { image: string }) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = e.pageX - startX.current;
      setRotation(prev => (prev + diff * 0.5) % 360);
      startX.current = e.pageX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = e.touches[0].pageX - startX.current;
      setRotation(prev => (prev + diff * 0.5) % 360);
      startX.current = e.touches[0].pageX;
    };

    const handleStop = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleStop);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleStop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStop);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStop);
    };
  }, [isDragging]);

  return (
    <div className="relative w-full h-full group cursor-grab active:cursor-grabbing overflow-hidden">
      {/* 360 Canvas Simulation */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out"
        style={{ transform: `rotateY(${rotation}deg)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
         <div className="relative w-[80%] aspect-square">
            <Image 
              src={image} 
              alt="360 View" 
              fill 
              className="object-contain drop-shadow-2xl"
              priority
            />
         </div>
      </div>

      {/* UI Overlays */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none">
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-4 text-white animate-bounce">
            <MoveHorizontal size={18} className="opacity-50" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to Rotate</span>
            <Rotate3d size={18} className="text-accent" />
         </div>
      </div>

      <div className="absolute top-8 right-8 pointer-events-none">
         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40">
            <Maximize2 size={20} />
         </div>
      </div>

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-16 inset-x-0 flex justify-center opacity-10 pointer-events-none">
         <div className="w-64 h-8 bg-white rounded-full blur-2xl" />
      </div>
    </div>
  );
}
