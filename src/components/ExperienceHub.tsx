"use client";

import { useState } from "react";
import { 
  Dna, 
  Sparkles, 
  Compass, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

const features = [
  {
    id: "visualizer",
    title: "Room Visualizer",
    subtitle: "Architect your space",
    desc: "Drag and place signature pieces into curated living environments.",
    icon: Compass,
    image: "/images/hero.png",
    color: "bg-emerald",
    size: "lg:col-span-2 lg:row-span-2"
  },
  {
    id: "configurator",
    title: "Configurator",
    subtitle: "Bespoke Details",
    desc: "Choose from 50+ Italian fabrics and local wood finishes.",
    icon: Dna,
    image: "/images/sofa.png",
    color: "bg-gold",
    size: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: "ai",
    title: "AI Designer",
    subtitle: "Style Intelligence",
    desc: "Get curated collections based on your room's dimensions.",
    icon: Sparkles,
    image: "/images/office.png",
    color: "bg-sand",
    size: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: "ar",
    title: "AR Portal",
    subtitle: "Virtual Reality",
    desc: "See it in your room before it's even built.",
    icon: Layers,
    image: "/images/bedroom.png",
    color: "bg-emerald",
    size: "lg:col-span-2 lg:row-span-1"
  }
];

export default function ExperienceHub() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Interactive Design</span>
              <h2 className="text-4xl md:text-7xl font-serif text-emerald leading-tight">
                 Experience Your <br />
                 <span className="italic">Future Interior.</span>
              </h2>
           </div>
           <p className="text-emerald/50 max-w-sm mb-4 leading-relaxed">
              We've digitized the craftsmanship of Addis. Play with layouts, materials, and styles in a workspace designed for your creativity.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
           {features.map((feat) => (
              <div 
                key={feat.id}
                onMouseEnter={() => setHovered(feat.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-[3rem] overflow-hidden group cursor-pointer border border-emerald/5 transition-all duration-700 ${feat.size} ${hovered === feat.id ? 'shadow-2xl shadow-emerald/10' : ''}`}
              >
                 <div className="absolute inset-0 bg-emerald/20 transition-opacity duration-700 opacity-0 group-hover:opacity-100 mix-blend-overlay z-10" />
                 
                 <div className="h-full w-full relative">
                    <img 
                      src={feat.image} 
                      alt={feat.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald/90 via-emerald/20 to-transparent p-10 flex flex-col justify-end">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                             <feat.icon size={22} />
                          </div>
                          <div>
                             <div className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-0.5">{feat.subtitle}</div>
                             <h4 className="text-2xl font-serif text-white">{feat.title}</h4>
                          </div>
                       </div>
                       
                       <p className="text-white/60 text-sm leading-relaxed max-w-xs overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                          {feat.desc}
                       </p>

                       <button className="mt-8 flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                          Launch Tool <ArrowUpRight size={14} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
