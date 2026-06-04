"use client";

import { useState } from "react";
import { Sparkles, Palette, Calculator, Box, Hexagon, ChevronRight } from "lucide-react";
import RoomVisualizer from "./RoomVisualizer";
import ProductConfigurator from "./ProductConfigurator";
import SmartTools from "./SmartTools";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "visualizer", label: "Visualizer", icon: Box, desc: "See your room transform" },
  { id: "configurator", label: "Customizer", icon: Palette, desc: "Design your piece" },
  { id: "tools", label: "Smart Tools", icon: Calculator, desc: "Plan your budget & space" },
];

export default function ExperienceHub() {
  const [activeTab, setActiveTab] = useState("visualizer");

  return (
    <section id="experience-hub" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#1A1A1A]/[0.02] -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 animate-slide-up">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-6">
                 <Sparkles size={16} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Interactive Studio</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-charcoal leading-[1.1]" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                 Design Your <br />
                 <span className="text-gradient-gold">Dream Lifestyle.</span>
              </h2>
           </div>
           <p className="text-charcoal/50 text-base md:text-lg lg:max-w-xs leading-relaxed">
              We&apos;ve combined our most powerful digital tools into one seamless experience.
           </p>
        </div>

        {/* High-End Tab Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 p-2 bg-white rounded-[2.5rem] shadow-2xl shadow-charcoal/5 border border-charcoal/5">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`group flex items-start gap-4 p-6 rounded-[2rem] transition-all duration-500 text-left ${activeTab === tab.id ? 'bg-charcoal text-white shadow-xl translate-y-[-4px]' : 'hover:bg-cream'}`}
             >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeTab === tab.id ? 'bg-gold text-charcoal' : 'bg-charcoal/5 text-charcoal group-hover:bg-gold/20'}`}>
                   <tab.icon size={24} />
                </div>
                <div>
                   <div className="text-sm font-bold uppercase tracking-widest mb-1">{tab.label}</div>
                   <div className={`text-[10px] font-medium transition-colors ${activeTab === tab.id ? 'text-white/50' : 'text-charcoal/40'}`}>
                      {tab.desc}
                   </div>
                </div>
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[4rem] shadow-inner-xl border border-charcoal/5 overflow-hidden min-h-[600px]">
           <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                 {activeTab === "visualizer" && <RoomVisualizer />}
                 {activeTab === "configurator" && <ProductConfigurator />}
                 {activeTab === "tools" && <SmartTools />}
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Quick Link to Showroom */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-charcoal rounded-[3rem] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-gold rounded-3xl flex items-center justify-center text-charcoal shadow-2xl">
                 <Hexagon size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-bold">Ready to see these pieces in person?</h4>
                 <p className="text-white/50 text-sm">Join us for an exclusive showroom walkthrough in Bole.</p>
              </div>
           </div>
           <a href="#booking" className="relative z-10 bg-white text-charcoal px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all flex items-center gap-3">
              Book a Visit <ChevronRight size={18} />
           </a>
        </div>
      </div>
    </section>
  );
}
