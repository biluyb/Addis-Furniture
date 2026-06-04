"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Box, 
  Dna, 
  Compass, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Check, 
  Maximize2 
} from "lucide-react";

const tools = [
  {
    id: "visualizer",
    name: "Room Visualizer",
    icon: Box,
    desc: "Architect your space in real-time.",
    content: {
      type: "room",
      image: "/images/hero.png",
      options: ["Floor: Oak", "Wall: Obsidian", "Layout: Minimal"]
    }
  },
  {
    id: "configurator",
    name: "Configurator",
    icon: Dna,
    desc: "Bespoke material selection.",
    content: {
      type: "config",
      image: "/images/sofa.png",
      options: ["Indigo Velvet", "Walnut Legs", "Gold Stitch"]
    }
  },
  {
    id: "360",
    name: "360° Studio",
    icon: Compass,
    desc: "Every angle, zero friction.",
    content: {
      type: "360",
      image: "/images/bedroom.png",
      options: ["Rotate: 45°", "Zoom: 1.2x", "Angle: Top"]
    }
  },
  {
    id: "designer",
    name: "AI Designer",
    icon: Sparkles,
    desc: "Style intelligence engine.",
    content: {
      type: "ai",
      image: "/images/office.png",
      options: ["Vibe: Neo-Industrial", "Palette: Earthy", "Budget: Premium"]
    }
  }
];

export default function InteractiveHub() {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <section id="interactive-hub" className="section-padding bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 px-4">
           <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Experimental Tools</span>
           <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
              The Digital <span className="text-gradient">Studio Experience.</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
           
           {/* Sidebar Navigation (Mobile-first horizontal scroll, Desktop vertical list) */}
           <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scroll-hide">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool)}
                  className={`flex-shrink-0 lg:w-full p-6 sm:p-8 rounded-[2rem] border transition-all duration-500 flex flex-col gap-4 text-left ${activeTool.id === tool.id ? 'bg-accent/10 border-accent/40 shadow-xl shadow-accent/10 translate-x-1' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                >
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeTool.id === tool.id ? 'bg-accent text-white' : 'bg-white/5 text-white/40'}`}>
                      <tool.icon size={22} />
                   </div>
                   <div>
                      <h4 className={`font-display font-bold text-lg mb-1 ${activeTool.id === tool.id ? 'text-white' : 'text-white/60'}`}>{tool.name}</h4>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">{tool.desc}</p>
                   </div>
                </button>
              ))}
           </div>

           {/* Preview Panel */}
           <div className="lg:col-span-8 h-[600px] md:h-[700px] bento-card border-none glass-panel">
              <div className="absolute inset-0 z-0">
                 <Image 
                   src={activeTool.content.image} 
                   alt={activeTool.name} 
                   fill 
                   className="object-cover transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
              </div>

              {/* Interaction Overlay */}
              <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/10">
                       Active Session: {activeTool.name}
                    </div>
                    <button className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors">
                       <Maximize2 size={20} />
                    </button>
                 </div>

                 <div className="space-y-6">
                    <div className="max-w-md">
                       <h3 className="text-3xl font-display font-black mb-4">{activeTool.name} Panel</h3>
                       <p className="text-white/60 text-sm leading-relaxed mb-8">
                          Precisely adjust every parameter from materials to lighting to match your vision.
                       </p>
                    </div>

                    {/* Interactive Options */}
                    <div className="flex flex-wrap gap-3">
                       {activeTool.content.options.map((opt, i) => (
                         <button 
                           key={i} 
                           className="px-6 py-3 bg-white/5 backdrop-blur-md hover:bg-accent border border-white/10 rounded-2xl text-[11px] font-bold uppercase tracking-widest flex items-center gap-3 transition-all"
                         >
                            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                               <Check size={10} />
                            </div>
                            {opt}
                         </button>
                       ))}
                       <button className="px-6 py-3 bg-white text-dark rounded-2xl text-[11px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-accent hover:text-white transition-all shadow-xl shadow-white/5">
                          Launch Experience <ChevronRight size={14} />
                       </button>
                    </div>
                 </div>
              </div>

              {/* Progress UI Decoration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-accent animate-[loading_4s_ease-in-out_infinite]" />
              </div>
           </div>

        </div>

      </div>

      <style jsx>{`
        .scroll-hide::-webkit-scrollbar { display: none; }
        @keyframes loading {
           0% { width: 0%; left: 0%; }
           50% { width: 40%; left: 30%; }
           100% { width: 0%; left: 100%; }
        }
      `}</style>
    </section>
  );
}
