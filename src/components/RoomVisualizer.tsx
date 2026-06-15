"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Zap, 
  Maximize2, 
  Palette, 
  Lightbulb, 
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { translations } from "@/utils/translations";

const rooms = [
  {
    id: "living",
    name: "Grand Living Node",
    image: "/home/bililign/.gemini/antigravity/brain/cdd2826e-151c-48eb-95f8-1a8e508c83ac/luxury_living_visualizer_base_1781506691956.png",
    hotspots: [
      { id: "h1", x: "40%", y: "65%", label: "Oslo Sectional", price: "145k" },
      { id: "h2", x: "70%", y: "55%", label: "Prime Cabinet", price: "45k" }
    ]
  },
  {
    id: "bedroom",
    name: "Heritage Suite",
    image: "/home/bililign/.gemini/antigravity/brain/cdd2826e-151c-48eb-95f8-1a8e508c83ac/bedroom_setup_1780585759734.png",
    hotspots: [
      { id: "h3", x: "50%", y: "50%", label: "King Heritage Bed", price: "98k" }
    ]
  }
];

const colorSchemes = [
  { id: "ivory", name: "Modern Ivory", hex: "#FDFCF8", overlay: "bg-ivory/20" },
  { id: "emerald", name: "Deep Emerald", hex: "#122620", overlay: "bg-emerald/30" },
  { id: "sand", name: "Aegean Sand", hex: "#EBE3D5", overlay: "bg-sand/40" },
  { id: "terracotta", name: "Addis Red", hex: "#8B4513", overlay: "bg-amber-900/10" }
];

export default function RoomVisualizer() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const [scheme, setScheme] = useState(colorSchemes[0]);
  const [lighting, setLighting] = useState("ambient");

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
        
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* Visualizer Stage */}
           <div className="lg:w-3/4">
              <div className="relative aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-emerald/10 shadow-2xl group">
                 {/* Base Image */}
                 <Image 
                   src={activeRoom.image} 
                   alt={activeRoom.name} 
                   fill 
                   className="object-cover transition-transform duration-1000 group-hover:scale-105"
                 />

                 {/* Color/Atmosphere Overlay Node */}
                 <div className={`absolute inset-0 transition-all duration-700 mix-blend-overlay ${scheme.overlay}`} />
                 
                 {/* Lighting Simulation */}
                 <div className={`absolute inset-0 transition-opacity duration-1000 ${lighting === 'dusk' ? 'bg-black/30' : 'opacity-0'}`} />
                 <div className={`absolute inset-0 transition-opacity duration-1000 ${lighting === 'morning' ? 'bg-gold/10' : 'opacity-0'}`} />

                 {/* Dynamic Hotspots */}
                 {activeRoom.hotspots.map((h) => (
                   <div 
                     key={h.id}
                     className="absolute"
                     style={{ left: h.x, top: h.y }}
                   >
                      <button className="relative w-8 h-8 md:w-10 md:h-10 bg-white/40 backdrop-blur-md rounded-full border border-white flex items-center justify-center group/spot animate-pulse hover:animate-none transition-all">
                         <div className="w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full" />
                         
                         {/* Card Popover - ERP Ready Data */}
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 opacity-0 group-hover/spot:opacity-100 transition-all scale-95 group-hover/spot:scale-100 pointer-events-none">
                            <div className="bg-emerald p-4 rounded-2xl shadow-2xl border border-white/20">
                               <div className="text-[8px] font-black uppercase text-gold tracking-widest mb-1">In Stock</div>
                               <div className="text-[10px] font-black text-white uppercase">{h.label}</div>
                               <div className="text-sm font-black text-white mt-1">ETB {h.price}</div>
                            </div>
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-emerald mx-auto" />
                         </div>
                      </button>
                   </div>
                 ))}

                 {/* Controls Overlay */}
                 <div className="absolute top-8 left-8 flex gap-3">
                    <div className="px-5 py-3 bg-white/90 backdrop-blur-xl border border-emerald/10 rounded-2xl flex items-center gap-3">
                       <Sparkles size={16} className="text-gold" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald">{activeRoom.name}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Precision Controls */}
           <div className="lg:w-1/4 space-y-8">
              
              {/* Scene Selector */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-4 block">Spatial Node</label>
                 <div className="grid grid-cols-2 gap-3">
                    {rooms.map((r) => (
                      <button 
                        key={r.id}
                        onClick={() => setActiveRoom(r)}
                        className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${activeRoom.id === r.id ? 'bg-emerald text-white border-gold' : 'bg-sand border-transparent text-emerald/40'}`}
                      >
                         <MapPin size={16} />
                         <span className="text-[8px] font-black uppercase tracking-widest leading-none">{r.id}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Palette Engine */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-4 block">Material Palettes</label>
                 <div className="grid grid-cols-2 gap-3">
                    {colorSchemes.map((c) => (
                      <button 
                        key={c.id}
                        onClick={() => setScheme(c)}
                        className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 group ${scheme.id === c.id ? 'bg-white border-gold shadow-xl' : 'bg-sand border-transparent'}`}
                      >
                         <div className="w-5 h-5 rounded-full border border-emerald/5" style={{ backgroundColor: c.hex }} />
                         <span className={`text-[8px] font-black uppercase tracking-widest transition-colors ${scheme.id === c.id ? 'text-emerald' : 'text-emerald/40'}`}>{c.id}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Atmospheric Lighting */}
              <div>
                 <label className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-4 block">Atmosphere</label>
                 <div className="flex gap-3">
                    {['ambient', 'morning', 'dusk'].map((l) => (
                      <button 
                        key={l}
                        onClick={() => setLighting(l)}
                        className={`flex-1 p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${lighting === l ? 'bg-emerald text-white border-gold' : 'bg-sand border-transparent text-emerald/40'}`}
                      >
                         <Lightbulb size={14} />
                         <span className="text-[8px] font-black uppercase tracking-widest">{l}</span>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Inquiry Relay */}
              <div className="pt-6">
                 <button 
                    onClick={() => window.open('https://t.me/taologos', '_blank')}
                    className="w-full py-5 bg-gold text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-2xl"
                 >
                    Consult Studio <ChevronRight size={16} />
                 </button>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}
