"use client";

import { useState } from "react";
import Image from "next/image";
import { Layout, Palette, Box, ChevronRight, Zap } from "lucide-react";

const rooms = [
  { id: "living", name: "Living Room", image: "/images/hero.png" },
  { id: "bedroom", name: "Bedroom", image: "/images/bedroom.png" },
  { id: "office", name: "Executive Office", image: "/images/office.png" },
];

const styles = [
  { id: "modern", name: "Modern Addis", hex: "#1A1A1A" },
  { id: "classic", name: "Heritage Gold", hex: "#C9A227" },
  { id: "minimal", name: "Urban Minimal", hex: "#8B5A2B" },
];

export default function RoomVisualizer() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoomChange = (room: typeof rooms[0]) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedRoom(room);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section id="visualizer" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
             Interactive Design
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
             Digital <span className="text-gradient-gold">Room Visualizer</span>
          </h2>
          <p className="text-[#6B6560] max-w-xl mx-auto">
             Stop guessing. See how different furniture styles and color palettes transform your space instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          
          {/* Controls Side */}
          <div className="lg:col-span-1 space-y-8">
             <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-2">
                   <Layout size={14} className="text-[#C9A227]" /> Select Space
                </label>
                <div className="flex flex-col gap-2">
                   {rooms.map((room) => (
                     <button
                       key={room.id}
                       onClick={() => handleRoomChange(room)}
                       className={`flex items-center justify-between p-4 rounded-xl text-xs font-bold transition-all border ${selectedRoom.id === room.id ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-lg' : 'bg-[#FAF7F2] text-[#6B6560] border-transparent hover:border-[#C9A227]/30'}`}
                     >
                       {room.name}
                       <ChevronRight size={14} className={selectedRoom.id === room.id ? 'opacity-100' : 'opacity-0'} />
                     </button>
                   ))}
                </div>
             </div>

             <div className="space-y-4">
                <label className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-2">
                   <Palette size={14} className="text-[#C9A227]" /> Color Palette
                </label>
                <div className="grid grid-cols-3 gap-3">
                   {styles.map((style) => (
                     <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style)}
                        className={`group relative h-12 rounded-xl border-2 transition-all ${selectedStyle.id === style.id ? 'border-[#C9A227] scale-110 shadow-md' : 'border-transparent'}`}
                        style={{ backgroundColor: style.hex }}
                     >
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                           {style.name}
                        </span>
                     </button>
                   ))}
                </div>
             </div>

             <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#f0ebe3]">
                <div className="flex items-center gap-2 text-[#C9A227] mb-3">
                   <Box size={18} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">AR Mode</span>
                </div>
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-2 font-sans underline underline-offset-4 decoration-[#C9A227]/50">
                  See it in your room
                </h4>
                <p className="text-[10px] text-[#6B6560] leading-relaxed mb-4">
                   Use your phone camera to virtually place this furniture in your house.
                </p>
                <button className="w-full bg-[#1A1A1A] text-white py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#C9A227] transition-all">
                   <Zap size={12} fill="currentColor" /> Launch AR (Beta)
                </button>
             </div>
          </div>

          {/* Visualizer Frame */}
          <div className="lg:col-span-3 relative">
             <div className="relative aspect-video lg:aspect-[16/8] rounded-[3rem] overflow-hidden bg-[#FAF7F2] border border-[#f0ebe3] shadow-2xl group">
                
                {/* Loader */}
                {isLoading && (
                  <div className="absolute inset-0 z-20 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                     <div className="w-10 h-10 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                <Image 
                   src={selectedRoom.image} 
                   alt={selectedRoom.name} 
                   fill 
                   className={`object-cover transition-all duration-700 ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}
                />
                
                {/* Overlay Tint based on selected style */}
                <div 
                   className="absolute inset-0 mix-blend-overlay transition-all duration-1000 pointer-events-none"
                   style={{ backgroundColor: selectedStyle.hex, opacity: 0.15 }}
                />

                {/* Hotspots */}
                <div className="absolute top-1/2 left-1/3 group/hot">
                   <div className="w-6 h-6 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center animate-ping" />
                   <div className="absolute top-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                      <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                   </div>
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white p-4 rounded-xl shadow-2xl border border-[#f0ebe3] opacity-0 group-hover/hot:opacity-100 transition-all pointer-events-none w-48 scale-90 group-hover/hot:scale-100 translate-y-2 group-hover/hot:translate-y-0">
                      <div className="text-[10px] font-bold text-[#C9A227] uppercase mb-1">Featured Item</div>
                      <h5 className="text-xs font-bold text-[#1A1A1A] mb-2">Modern Sectional Sofa</h5>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-[#1A1A1A]">ETB 45,000</span>
                         <span className="text-[8px] bg-[#25D366]/10 text-[#25D366] px-2 py-0.5 rounded-full font-bold">In Stock</span>
                      </div>
                   </div>
                </div>

                <div className="absolute bottom-8 right-8 flex gap-3">
                   <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full" />
                      <span className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest">Real-time Preview</span>
                   </div>
                </div>
             </div>

             <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Drag & Drop items",
                  "360° Viewing Angle",
                  "Room lighting toggle",
                  "Wall color editor"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-[#6B6560] uppercase tracking-widest bg-[#FAF7F2] p-3 rounded-xl border border-transparent hover:border-[#C9A227]/30 transition-all">
                     <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                     {feature}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
