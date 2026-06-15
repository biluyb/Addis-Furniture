"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Box, 
  Dna, 
  Compass, 
  Sparkles, 
} from "lucide-react";
import { translations } from "@/utils/translations";

// Perfect Features Components
import ThreeSixtyViewer from "./ThreeSixtyViewer";
import RoomVisualizer from "./RoomVisualizer";
import ProductConfigurator from "./ProductConfigurator";
import AIDesignLabs from "./AIDesignLabs";

export default function InteractiveHub() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [activeTab, setActiveTab] = useState("360");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const handleTabSwitch = useCallback((id: string, e?: any) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveTab(id);
  }, []);

  const t = translations[lang];

  const tools = [
    { id: "360", name: t.threeSixty, icon: Compass, desc: "Studio" },
    { id: "visualizer", name: t.visualizer, icon: Box, desc: "Architect" },
    { id: "configurator", name: t.configure, icon: Dna, desc: "Bespoke" },
    { id: "designer", name: t.aiTools, icon: Sparkles, desc: "Labs" }
  ];

  return (
    <section id="studio" className="bg-ivory relative z-10 py-12 md:py-24">
      
      {/* Universal Hub Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
           <div className="text-center lg:text-left">
              <span className="text-gold text-[11px] font-black uppercase tracking-[0.5em] mb-4 block underline underline-offset-8 decoration-gold/20">Design Control Unit</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight tracking-tighter uppercase italic">
                 The Studio <span className="text-gradient">Engine.</span>
              </h2>
           </div>

           {/* Mobile-friendly Hub Switcher - USING TAB BRIDGE FOR STABILITY */}
           <div className="grid grid-cols-2 md:flex md:flex-row gap-4 p-3 bg-sand rounded-[2.5rem] border-2 border-emerald/5 w-full md:w-auto relative z-30">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={(e) => handleTabSwitch(tool.id, e)}
                  className={`flex items-center justify-center gap-3 px-6 py-5 rounded-[1.8rem] transition-all whitespace-nowrap border-2 cursor-pointer touch-manipulation select-none shadow-sm active:scale-95 ${activeTab === tool.id ? 'bg-emerald text-white border-gold shadow-2xl' : 'bg-white/50 text-emerald/60 border-transparent hover:bg-white'}`}
                >
                   <tool.icon size={20} className={activeTab === tool.id ? 'text-gold' : 'opacity-30'} />
                   <span className="text-[11px] font-black uppercase tracking-widest">{tool.name}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Feature Rendering Engine */}
      <div className="relative border-t border-emerald/5 min-h-[400px] z-10">
         <div className="transition-all duration-700">
            {activeTab === "360" && <ThreeSixtyViewer />}
            {activeTab === "visualizer" && <RoomVisualizer />}
            {activeTab === "configurator" && <ProductConfigurator />}
            {activeTab === "designer" && <AIDesignLabs />}
         </div>
      </div>

    </section>
  );
}
