"use client";

import { useState, useEffect } from "react";
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

  const t = translations[lang];

  const tools = [
    { id: "360", name: t.threeSixty, icon: Compass, desc: "Studio" },
    { id: "visualizer", name: t.visualizer, icon: Box, desc: "Architect" },
    { id: "configurator", name: t.configure, icon: Dna, desc: "Bespoke" },
    { id: "designer", name: t.aiTools, icon: Sparkles, desc: "Labs" }
  ];

  return (
    <section id="studio" className="bg-ivory relative overflow-hidden z-10">
      
      {/* Universal Hub Navigation */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 pt-16 md:pt-24 pb-10 md:pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-8 mb-10 md:mb-12">
           <div className="text-center lg:text-left">
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/20">Central Terminal</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-emerald tracking-tighter uppercase italic">
                 Design <span className="text-gradient">Engine.</span>
              </h2>
           </div>

           {/* Mobile-friendly Hub Switcher */}
           <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 p-2 bg-sand rounded-[2rem] border border-emerald/10 w-full sm:w-auto z-20 relative">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`flex items-center justify-center gap-3 px-5 py-4 rounded-[1.5rem] transition-all whitespace-nowrap border-2 active:scale-95 touch-manipulation cursor-pointer ${activeTab === tool.id ? 'bg-emerald text-white border-gold shadow-xl' : 'bg-transparent text-emerald/60 border-transparent hover:bg-white'}`}
                >
                   <tool.icon size={18} className={activeTab === tool.id ? 'text-gold' : 'opacity-40'} />
                   <span className="text-[10px] font-black uppercase tracking-widest">{tool.name}</span>
                </button>
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
