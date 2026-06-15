"use client";

import { useState, useEffect } from "react";
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
  { id: "crimson", name: "Crimson", hex: "#8B0000", overlay: "bg-red-900/10" },
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

  const t = translations[lang];

  return (
    <section id="visualizer" className="bg-ivory pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-12">
           
           {/* Visualizer Port - HIGH PERFORMANCE */}
           <div className="lg:w-3/4 order-1">
              <div className="relative aspect-video rounded-[3rem] md:rounded-[5rem] overflow-hidden border-2 border-emerald/5 shadow-2xl bg-sand group touch-pan-y">
                 <Image 
                   src={room.image} 
                   alt={room.name} 
                   fill 
                   className="object-cover transition-transform duration-[3000ms] group-hover:scale-105" 
                   priority
                 />
                 
                 {/* Color Dynamic Overlay */}
                 <div className={`absolute inset-0 transition-colors duration-700 mix-blend-multiply ${scheme.overlay}`} style={{ backgroundColor: scheme.hex, opacity: 0.15 }} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                 <div className="absolute top-6 left-6 md:top-10 md:left-10 flex gap-3">
                    <div className="px-5 py-3 md:px-8 md:py-4 bg-white/90 backdrop-blur-2xl border border-white rounded-[1.5rem] md:rounded-[2rem] flex items-center gap-4 shadow-3xl">
                       <Zap size={18} className="text-gold" />
                       <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-emerald leading-none">{room.name}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Controls Node - MOBILE FIRST */}
           <div className="lg:w-1/4 space-y-12 order-2">
              
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] mb-6 block border-l-2 border-gold pl-4">Spatial Selection</label>
                 <div className="grid grid-cols-2 gap-4">
                    {rooms.map((r) => (
                      <button 
                        key={r.id} 
                        onClick={() => setRoom(r)}
                        className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 active:scale-95 ${room.id === r.id ? 'bg-emerald text-white border-gold shadow-xl rotate-3' : 'bg-sand border-transparent text-emerald/40 hover:bg-white'}`}
                      >
                         <MapPin size={22} className={room.id === r.id ? "text-gold" : "opacity-20"} />
                         <span className="text-[10px] font-black uppercase tracking-widest leading-none">{r.id}</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div>
                 <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] flex items-center gap-2">
                       <Palette size={16} /> Aesthetics
                    </label>
                    <span className="text-[9px] font-black text-gold uppercase">{scheme.name}</span>
                 </div>
                 <div className="grid grid-cols-5 gap-3">
                    {schemes.map((s) => (
                      <button 
                        key={s.id} 
                        onClick={() => setScheme(s)}
                        className={`aspect-square rounded-2xl border-2 transition-all relative active:scale-125 ${scheme.id === s.id ? 'border-gold scale-110 shadow-2xl z-10' : 'border-transparent bg-sand'}`}
                      >
                         <div className="w-full h-full rounded-xl" style={{ backgroundColor: s.hex }} />
                         {scheme.id === s.id && <Check size={12} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="pt-8 border-t border-emerald/5">
                 <button 
                   onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-6 bg-gold text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-emerald transition-all shadow-3xl active:scale-95"
                 >
                    Inquire Node <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
