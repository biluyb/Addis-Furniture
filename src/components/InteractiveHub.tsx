"use client";

import { useState, useEffect } from "react";
import { 
  Box, 
  Dna, 
  Compass, 
  Sparkles, 
  Maximize2 
} from "lucide-react";
import { translations } from "@/utils/translations";

// Perfect Features Components
import ThreeSixtyViewer from "./ThreeSixtyViewer";
import RoomVisualizer from "./RoomVisualizer";
import ProductConfigurator from "./ProductConfigurator";
import AIDesignLabs from "./AIDesignLabs";

export default function InteractiveHub() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [activeTab, setActiveTab] = useState("360"); // Defaulting to the most visual one

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const t = translations[lang];

  const tools = [
    { id: "360", name: t.threeSixty, icon: Compass, desc: "Studio" },
    { id: "visualizer", name: t.visualizer, icon: Box, desc: "Architect" },
    { id: "configurator", name: t.configure, icon: Dna, desc: "Bespoke" },
    { id: "designer", name: t.aiTools, icon: Sparkles, desc: "Labs" }
  ];

  return (
    <section id="studio" className="bg-ivory relative overflow-hidden">
      
      {/* Universal Hub Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
           <div className="text-center md:text-left">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Central Terminal</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-emerald">
                 Digital <span className="text-gradient">Design Node.</span>
              </h2>
           </div>

           {/* Mobile-friendly swipe-selector */}
           <div className="flex gap-4 p-2 bg-sand rounded-[2rem] border border-emerald/5 overflow-x-auto max-w-full scroll-hide">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-[1.5rem] transition-all whitespace-nowrap ${activeTab === tool.id ? 'bg-white text-emerald shadow-xl' : 'text-emerald/30 hover:text-emerald'}`}
                >
                   <tool.icon size={18} className={activeTab === tool.id ? 'text-gold' : 'opacity-40'} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{tool.name}</span>
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* Feature Rendering Engine */}
      <div className="relative border-t border-emerald/5 transition-all duration-700">
         {activeTab === "360" && <ThreeSixtyViewer />}
         {activeTab === "visualizer" && <RoomVisualizer />}
         {activeTab === "configurator" && <ProductConfigurator />}
         {activeTab === "designer" && <AIDesignLabs />}
      </div>

    </section>
  );
}
