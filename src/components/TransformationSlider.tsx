"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRightLeft, CheckCircle2 } from "lucide-react";

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="transformation" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              The Power of Design
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              Before & <br />
              <span className="text-gradient-gold">After Interior Magic.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              We don&apos;t just sell items; we transform environments. See how a standard Addis Ababa apartment becomes a masterpiece with our curated furniture packages.
            </p>

            <div className="space-y-4 mb-10">
               {[
                 "Custom 3D Room Planning included",
                 "Full delivery and styling service",
                 "Guaranteed space optimization",
                 "Color harmony masterclass"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-[#C9A227]" />
                    {item}
                 </div>
               ))}
            </div>

            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
               <div className="text-center border-r border-white/10 pr-6">
                  <div className="text-2xl font-bold text-white">7,200+</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Delivered</div>
               </div>
               <div className="text-center">
                  <div className="text-lg font-bold text-[#C9A227] flex items-center gap-2">
                     <Sparkles size={16} /> 4.9/5 Rating
                  </div>
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">From 3,800+ Clients</div>
               </div>
            </div>
          </div>

          {/* Slider Side */}
          <div className="relative group">
            <div 
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
               {/* After Image (Top Layer) */}
               <div 
                 className="absolute inset-0 z-10"
                 style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
               >
                 <Image 
                    src="/images/hero.png" 
                    alt="After Addis Furniture" 
                    fill 
                    className="object-cover"
                 />
                 <div className="absolute top-6 left-6 bg-[#C9A227] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    After
                 </div>
               </div>

               {/* Before Image (Bottom Layer - Mocked with grayscale/dimmed version) */}
               <div className="absolute inset-0">
                 <Image 
                    src="/images/hero.png" 
                    alt="Before Addis Furniture" 
                    fill 
                    className="object-cover grayscale brightness-50"
                 />
                 <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                    Before
                 </div>
               </div>

               {/* Slider Handle */}
               <div 
                 className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-xl cursor-ew-resize transition-opacity"
                 style={{ left: `${sliderPosition}%` }}
               >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#C9A227]">
                    <ArrowRightLeft size={20} className="text-[#C9A227]" />
                 </div>
               </div>
            </div>

            <p className="text-white/30 text-[10px] text-center mt-6 uppercase tracking-widest font-bold">
              Swipe or move mouse to compare life before & after Addis Furniture
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
