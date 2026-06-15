"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Zap, 
  MapPin,
  ChevronRight,
  Palette,
  Droplets,
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
    <div className="bg-ivory pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="flex flex-col xl:flex-row gap-10">
           
           {/* Visualizer Port */}
           <div className="xl:w-3/4">
              <div className="relative aspect-video rounded-[3rem] md:rounded-[4.5rem] overflow-hidden border border-emerald/5 shadow-3xl bg-sand group">
                 <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                 
                 {/* Color Dynamic Overlay */}
                 <div className={`absolute inset-0 transition-all duration-1000 mix-blend-multiply ${scheme.overlay}`} style={{ backgroundColor: scheme.hex, opacity: 0.15 }} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                 <div className="absolute top-10 left-10 flex gap-3">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-xl border border-white rounded-[1.5rem] flex items-center gap-3 shadow-2xl">
                       <Zap size={16} className="text-gold" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald">{room.name}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Controls Node */}
           <div className="xl:w-1/4 space-y-10">
              
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block">Spatial Node</label>
                 <div className="grid grid-cols-2 gap-3">
                    {rooms.map((r) => (
                      <button key={r.id} onClick={() => setRoom(r)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${room.id === r.id ? 'bg-emerald text-white border-gold' : 'bg-sand border-transparent text-emerald/40'}`}>
                         <MapPin size={18} />
                         <span className="text-[9px] font-black uppercase tracking-widest leading-none">{r.id}</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6 block flex items-center gap-2">
                    <Palette size={14} /> Color Nodes (10)
                 </label>
                 <div className="grid grid-cols-5 gap-3">
                    {schemes.map((s) => (
                      <button key={s.id} onClick={() => setScheme(s)}
                        className={`aspect-square rounded-xl border-2 transition-all relative ${scheme.id === s.id ? 'border-gold scale-110 shadow-xl' : 'border-transparent bg-sand'}`}>
                         <div className="w-full h-full rounded-lg" style={{ backgroundColor: s.hex }} />
                         {scheme.id === s.id && <Check size={10} className="absolute inset-0 m-auto text-white" strokeWidth={4} />}
                      </button>
                    ))}
                 </div>
                 <div className="mt-4 text-[9px] font-black text-gold uppercase tracking-widest text-center">{scheme.name} Aesthetic</div>
              </div>

              <div className="pt-6 border-t border-emerald/5">
                 <button onClick={() => window.open('https://t.me/taologos', '_blank')}
                   className="w-full py-5 bg-gold text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-3xl">
                    Inquire Studio <ChevronRight size={16} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}
