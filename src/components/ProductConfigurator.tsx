"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Share2, Check, Ruler, Info } from "lucide-react";

const colors = [
  { name: "Dark Charcoal", hex: "#1A1A1A" },
  { name: "Ruby Velvet", hex: "#7B1113" },
  { name: "Forest Green", hex: "#1E3B2E" },
  { name: "Royal Blue", hex: "#1A365D" },
];

const fabrics = ["Premium Velvet", "Italian Leather", "Linen Blend"];
const legs = ["Gold Tapered", "Dark Walnut", "Brush Silver"];

export default function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0]);
  const [selectedLeg, setSelectedLeg] = useState(legs[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section id="configurator" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
            Create Your <span className="text-gradient-gold">Dream Sofa</span>
          </h2>
          <p className="text-[#6B6560] mt-4 max-w-xl mx-auto">
            Real-time furniture configurator. Choose your materials, colors, and finishes to suit your unique taste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Preview Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-[#FAF7F2] border border-[#f0ebe3] shadow-inner group">
              {/* Product Image - In a real app, this would be multiple layered images or a 3D model */}
              <div 
                className="absolute inset-0 transition-all duration-700 p-8 flex items-center justify-center"
                style={{ backgroundColor: `${selectedColor.hex}10` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/sofa.png"
                    alt="Configurable Sofa"
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                  />
                  {/* Visual indication of fabric/color changes - simple overlay for demo */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-30 transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                </div>
              </div>

              {/* Angle Controls (Mock 360 view) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex gap-4 text-[10px] font-bold uppercase tracking-wider shadow-lg border border-white/50">
                <button className="text-[#C9A227] border-b border-[#C9A227]">Front</button>
                <button className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors">Side</button>
                <button className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors">Top</button>
                <button className="text-[#6B6560] hover:text-[#1A1A1A] transition-colors flex items-center gap-1">
                  <Share2 size={12} /> 3D View
                </button>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6">
                 <span className="bg-white px-3 py-1.5 rounded-full text-[10px] font-bold text-[#1A1A1A] shadow-sm flex items-center gap-2">
                    <Check size={12} className="text-[#25D366]" /> Handcrafted in Addis
                 </span>
              </div>
            </div>

            {/* Price Detail */}
            <div className="mt-8 flex items-center justify-between px-4">
               <div>
                  <h4 className="text-xl font-bold text-[#1A1A1A]">Oslo Private Edition</h4>
                  <p className="text-sm text-[#8B5A2B] font-medium">Starting from ETB 58,000</p>
               </div>
               <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-4 rounded-full transition-all duration-300 ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-[#FAF7F2] text-[#1A1A1A] hover:bg-red-50'}`}
               >
                  <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
               </button>
            </div>
          </div>

          {/* Configuration Side */}
          <div className="bg-[#FAF7F2] p-8 md:p-12 rounded-[2.5rem] border border-[#f0ebe3]">
            <div className="mb-10">
               <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block">Select Color</label>
               <div className="flex flex-wrap gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all duration-200 relative group ${selectedColor.name === color.name ? 'border-[#C9A227] scale-110 shadow-lg' : 'border-white hover:scale-105'}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                       {selectedColor.name === color.name && (
                         <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[9px] px-2 py-1 rounded whitespace-nowrap opacity-100 transition-opacity">
                           {color.name}
                         </span>
                       )}
                    </button>
                  ))}
               </div>
            </div>

            <div className="mb-10">
               <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block">Fabric Choice</label>
               <div className="grid grid-cols-3 gap-3">
                  {fabrics.map((fabric) => (
                    <button
                      key={fabric}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border ${selectedFabric === fabric ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md' : 'bg-white text-[#6B6560] border-white hover:border-[#C9A227]/30'}`}
                    >
                      {fabric}
                    </button>
                  ))}
               </div>
            </div>

            <div className="mb-12">
               <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block">Leg Finish</label>
               <div className="flex gap-3">
                  {legs.map((leg) => (
                    <button
                      key={leg}
                      onClick={() => setSelectedLeg(leg)}
                      className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border ${selectedLeg === leg ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] shadow-md' : 'bg-white text-[#6B6560] border-white hover:border-[#8B5A2B]/30'}`}
                    >
                      {leg}
                    </button>
                  ))}
               </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-4 text-xs text-[#6B6560] bg-white/50 p-4 rounded-xl border border-white">
                  <Ruler size={18} className="text-[#C9A227]" />
                  <span>Custom sizes available upon request in Addis showroom.</span>
               </div>
               
               <button className="w-full bg-[#C9A227] hover:bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold transition-all duration-500 shadow-xl shadow-[#c9a22720] flex items-center justify-center gap-3 group">
                  Confirm Configuration
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/40 transition-colors">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                     </svg>
                  </div>
               </button>
               
               <div className="flex items-center justify-center gap-6 pt-4">
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6560] hover:text-[#C9A227] flex items-center gap-2 transition-colors">
                     <Info size={14} /> Compare specs
                  </button>
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6560] hover:text-[#C9A227] flex items-center gap-2 transition-colors">
                     <Share2 size={14} /> Share design
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
