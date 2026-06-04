"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Box, 
  Dna, 
  Compass, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Maximize2 
} from "lucide-react";
import { translations } from "@/utils/translations";
import ThreeSixtyViewer from "./ThreeSixtyViewer";

export default function InteractiveHub() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [activeTab, setActiveTab] = useState("visualizer");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const t = translations[lang];

  const tools = [
    { id: "visualizer", name: t.visualizer, icon: Box, desc: "Architect" },
    { id: "configurator", name: t.configure, icon: Dna, desc: "Bespoke" },
    { id: "360", name: t.threeSixty, icon: Compass, desc: "Studio" },
    { id: "designer", name: t.aiTools, icon: Sparkles, desc: "Labs" }
  ];

  return (
    <section id="studio" className="section-padding bg-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Future Showroom</span>
           <h2 className="text-4xl md:text-6xl font-display font-black text-emerald">
              {t.digitalStudio} <span className="text-gradient">{t.studioExperience}</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
           
           {/* Tool Selector */}
           <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scroll-hide">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex-shrink-0 lg:w-full p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500 text-left ${activeTab === tool.id ? 'bg-white border-gold shadow-xl shadow-emerald/5 scale-[1.02]' : 'bg-white/40 border-transparent hover:bg-white/70'}`}
                >
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${activeTab === tool.id ? 'bg-emerald text-white' : 'bg-emerald/5 text-emerald/30'}`}>
                      <tool.icon size={22} />
                   </div>
                   <h4 className="font-display font-bold text-lg text-emerald mb-1">{tool.name}</h4>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-emerald/30">{tool.desc}</p>
                </button>
              ))}
           </div>

           {/* Interactive Display */}
           <div className="lg:col-span-8 min-h-[600px] md:h-[700px] bento-card border-none glass-panel shadow-2xl relative">
              
              {activeTab === "360" ? (
                <ThreeSixtyViewer image="/images/sofa.png" />
              ) : (
                <div className="relative w-full h-full">
                   <Image 
                     src={activeTab === "visualizer" ? "/images/hero.png" : activeTab === "configurator" ? "/images/sofa.png" : "/images/bedroom.png"} 
                     alt="Preview" 
                     fill 
                     className="object-cover opacity-80"
                   />
                </div>
              )}

              {/* Overlay Controls */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                 <div className="flex justify-between items-start pointer-events-auto">
                    <div className="px-5 py-2 bg-white/70 backdrop-blur-xl rounded-2xl text-[10px] font-bold uppercase tracking-widest text-emerald border border-white">
                       Live Node: {activeTab.toUpperCase()}
                    </div>
                    <button className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-xl flex items-center justify-center text-emerald border border-white hover:bg-emerald hover:text-white transition-all">
                       <Maximize2 size={20} />
                    </button>
                 </div>

                 <div className="space-y-6 pointer-events-auto">
                    <div className="max-w-md">
                       <h3 className="text-3xl font-display font-black text-emerald mb-4">Precision Control</h3>
                       <div className="flex flex-wrap gap-3">
                          {["Fabric", "Aura", "Layout"].map((opt, i) => (
                            <button 
                              key={i} 
                              className="px-6 py-3 bg-ivory rounded-2xl border border-emerald/5 text-[10px] font-bold uppercase tracking-widest text-emerald/60 flex items-center gap-2 hover:border-gold transition-all"
                            >
                               <div className="w-4 h-4 rounded-full bg-emerald/5 flex items-center justify-center"><Check size={10} /></div>
                               {opt}
                            </button>
                          ))}
                          <button className="px-6 py-3 bg-emerald text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-lg">
                             {t.enterStudio} <ChevronRight size={14} />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

           </div>

        </div>

      </div>
    </nav>
  );
}
