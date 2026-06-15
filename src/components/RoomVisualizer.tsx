"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Zap, 
  MapPin,
  ChevronRight,
  Palette,
  Check
} from "lucide-react";
import { translations } from "@/utils/translations";

const rooms = [
  { id: "living", name: "Modern Living Node", image: "/images/visualizer_base.png" },
  { id: "bedroom", name: "Heritage Suite", image: "/images/bedroom_suite.png" }
];

const schemes = [
  { id: "ivory", name: "Pearle", hex: "#FDFCF8", overlay: "bg-white/10" },
  { id: "emerald", name: "Imperial", hex: "#004B49", overlay: "bg-emerald/30" },
  { id: "crimson", name: "Addis Crimson", hex: "#8B0000", overlay: "bg-red-900/10" },
  { id: "midnight", name: "Midnight", hex: "#002147", overlay: "bg-blue-900/20" },
  { id: "sand", name: "Aegean", hex: "#C2B280", overlay: "bg-yellow-900/10" },
  { id: "charcoal", name: "Carbon", hex: "#36454F", overlay: "bg-slate-900/20" },
  { id: "forest", name: "Forest", hex: "#228B22", overlay: "bg-green-900/15" },
  { id: "terra", name: "Clay", hex: "#E2725B", overlay: "bg-orange-900/10" },
  { id: "gold", name: "Gilded", hex: "#D4AF37", overlay: "bg-yellow-400/5" },
  { id: "slate", name: "Obsidian", hex: "#1A1A1A", overlay: "bg-black/20" },
];

export default function RoomVisualizer() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [room, setRoom] = useState(rooms[0]);
  const [scheme, setScheme] = useState(schemes[0]);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const handleRoomSelect = useCallback((r: any) => {
    setRoom(r);
  }, []);

  const handleSchemeSelect = useCallback((s: any) => {
    setScheme(s);
  }, []);

  return (
    <section id="visualizer" className="bg-ivory pt-8 pb-20 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="flex flex-col xl:flex-row gap-10">
           
           {/* THE VISUALIZER PORT - REDESIGNED FOR NO OVERLAP */}
           <div className="xl:flex-1 relative z-10 group">
              <div className="relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-emerald/5 shadow-2xl bg-sand">
                 <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
                 <div 
                   className={`absolute inset-0 transition-colors duration-1000 mix-blend-multiply ${scheme.overlay}`} 
                   style={{ backgroundColor: scheme.hex, opacity: 0.12 }} 
                 />
                 
                 {/* FLOATING STATUS LABEL - FIXED OVERLAP */}
                 <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-[30]">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-2xl border border-white/50 rounded-2xl flex items-center gap-3 shadow-2xl">
                       <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald leading-none">{room.name}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* CONTROLS CARD - ELEGANT & COMPACT */}
           <div className="xl:w-[400px] flex flex-col gap-8 bg-white/50 backdrop-blur-xl p-8 rounded-[3rem] border border-emerald/5 shadow-xl relative z-30">
              
              <div>
                 <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-black text-emerald/30 uppercase tracking-[0.4em] flex items-center gap-2">
                       <MapPin size={16} /> Spatial Node
                    </label>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    {rooms.map((r) => (
                      <div 
                        key={r.id} 
                        onPointerDown={() => handleRoomSelect(r)}
                        className={`py-4 px-2 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 cursor-pointer touch-manipulation select-none ${room.id === r.id ? 'bg-emerald text-white border-gold shadow-xl' : 'bg-sand/30 border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <MapPin size={18} className={room.id === r.id ? "text-gold" : "opacity-20"} />
                         <span className="text-[9px] font-black uppercase tracking-widest leading-none">{r.id}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/30 uppercase tracking-[0.4em] flex items-center gap-2">
                       <Palette size={16} /> Aesthetics
                    </label>
                    <span className="text-[9px] font-black text-gold uppercase tracking-widest">{scheme.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-3">
                    {schemes.map((s) => (
                      <div 
                        key={s.id} 
                        onPointerDown={() => handleSchemeSelect(s)}
                        className={`aspect-square rounded-xl border-2 transition-all relative cursor-pointer touch-manipulation select-none ${scheme.id === s.id ? 'border-gold scale-110 shadow-xl z-20' : 'border-transparent bg-sand/50'}`}
                      >
                         <div className="w-full h-full rounded-lg" style={{ backgroundColor: s.hex }} />
                         {scheme.id === s.id && <Check size={12} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="pt-6 border-t border-emerald/5">
                 <div 
                   onPointerDown={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-5 bg-gold text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer hover:bg-emerald transition-all shadow-xl active:bg-emerald touch-manipulation"
                 >
                    Inquire Node <ChevronRight size={18} />
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
