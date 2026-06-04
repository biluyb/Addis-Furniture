"use client";

import { useState } from "react";
import { Truck, Calculator, Ruler, Sparkles, ChevronRight, Check } from "lucide-react";

const locations = [
  { name: "Bole", cost: "Free" },
  { name: "Megenagna", cost: "ETB 1,200" },
  { name: "Sarbet", cost: "ETB 2,500" },
  { name: "CMC / Ayat", cost: "ETB 3,500" },
  { name: "Jemo", cost: "ETB 4,000" },
  { name: "Akaki", cost: "ETB 5,500" },
];

export default function SmartTools() {
  const [activeTab, setActiveTab] = useState<"delivery" | "finance" | "measure" | "recommend">("delivery");
  
  // Delivery Estimator State
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  
  // Financing State
  const [loanAmount, setLoanAmount] = useState(100000);
  const [months, setMonths] = useState(12);
  const monthlyPayment = (loanAmount * 1.05) / months; // Mock 5% fee for installment

  // Measure State
  const [roomLength, setRoomLength] = useState(4);
  const [roomWidth, setRoomWidth] = useState(3);

  return (
    <section id="smart-tools" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Integrated Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
            Smart <span className="text-gradient-gold">Shopping Tools</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We removal all the guesswork. Plan your delivery, calculate your budget, or get AI recommendations in seconds.
          </p>
        </div>

        <div className="bg-[#2A2A2A] rounded-[3rem] p-4 border border-white/5 shadow-2xl overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 p-2 bg-[#1A1A1A] rounded-[2rem] mb-8">
             {[
               { id: "delivery", icon: Truck, label: "Delivery Estimator" },
               { id: "finance", icon: Calculator, label: "Installment Plan" },
               { id: "measure", icon: Ruler, label: "Room Measure" },
               { id: "recommend", icon: Sparkles, label: "AI Recommender" },
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as any)}
                 className={`flex-1 flex items-center justify-center gap-3 py-4 px-4 rounded-[1.5rem] text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-[#C9A227] text-white shadow-xl shadow-[#c9a22720]' : 'text-white/40 hover:text-white/70 hover:bg-white/5'}`}
               >
                 <tab.icon size={18} />
                 {tab.label}
               </button>
             ))}
          </div>

          {/* Dynamic Content */}
          <div className="p-6 md:p-12 min-h-[400px] flex flex-col justify-center">
            
            {/* Delivery Estimator */}
            {activeTab === "delivery" && (
              <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                 <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Where are we <span className="text-[#C9A227]">delivering?</span></h3>
                    <p className="text-white/60 mb-8">Select your vicinity in Addis Ababa to see professional delivery and installation estimates.</p>
                    <div className="grid grid-cols-2 gap-3">
                       {locations.map((loc) => (
                         <button
                           key={loc.name}
                           onClick={() => setSelectedLocation(loc)}
                           className={`p-4 rounded-2xl border text-left transition-all ${selectedLocation.name === loc.name ? 'bg-[#C9A227]/10 border-[#C9A227] text-white' : 'bg-white/5 border-white/10 text-white/50 hover:border-white/20'}`}
                         >
                           <div className="text-[10px] font-bold uppercase mb-1">{loc.name}</div>
                           <div className={`text-sm font-bold ${selectedLocation.name === loc.name ? 'text-[#C9A227]' : 'text-white/80'}`}>{loc.cost}</div>
                         </button>
                       ))}
                    </div>
                 </div>
                 <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] border border-white/10 text-center">
                    <div className="w-20 h-20 bg-[#C9A227]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Truck size={40} className="text-[#C9A227]" />
                    </div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Estimated Arrival</div>
                    <div className="text-2xl font-bold text-white mb-6">24 - 48 Hours</div>
                    <div className="h-px bg-white/10 w-full mb-6" />
                    <div className="text-[#25D366] text-xs font-bold flex items-center justify-center gap-2">
                       <Check size={16} /> Professional White-Glove Installation Included
                    </div>
                 </div>
              </div>
            )}

            {/* Installment Calculator */}
            {activeTab === "finance" && (
              <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                 <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Plan Your <span className="text-[#C9A227]">Investment</span></h3>
                    <div className="space-y-4">
                       <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Total Budget: ETB {loanAmount.toLocaleString()}</label>
                       <input 
                          type="range" 
                          min="20000" 
                          max="1000000" 
                          step="10000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                       />
                       <div className="flex justify-between text-[10px] text-white/30 font-bold">
                          <span>20k ETB</span>
                          <span>1M ETB</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Payment Term: {months} Months</label>
                       <div className="flex gap-2">
                          {[3, 6, 12, 18, 24].map((m) => (
                            <button
                               key={m}
                               onClick={() => setMonths(m)}
                               className={`flex-1 py-3 rounded-xl font-bold text-xs border ${months === m ? 'bg-[#C9A227] border-[#C9A227] text-white' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                               {m}M
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
                 <div className="bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 text-center">
                       <div className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">Monthly Installment</div>
                       <div className="text-4xl md:text-6xl font-bold text-white mb-2 leading-none">ETB {Math.round(monthlyPayment).toLocaleString()}</div>
                       <div className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-10">*Inclusive of 5% processing fee</div>
                       <button className="w-full bg-white text-[#1A1A1A] py-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
                          Apply for Installment <ChevronRight size={18} />
                       </button>
                    </div>
                 </div>
              </div>
            )}

            {/* Room Measure Tool */}
            {activeTab === "measure" && (
              <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                 <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Does it <span className="text-[#C9A227]">fit?</span></h3>
                    <p className="text-white/60 mb-8">Enter your room dimensions (in meters) to get instant furniture size recommendations.</p>
                    <div className="flex gap-4 mb-8">
                       <div className="flex-1 space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Length (m)</label>
                          <input 
                             type="number" 
                             value={roomLength} 
                             onChange={(e) => setRoomLength(parseFloat(e.target.value))}
                             className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold outline-none focus:border-[#C9A227]"
                          />
                       </div>
                       <div className="flex-1 space-y-2">
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Width (m)</label>
                          <input 
                             type="number" 
                             value={roomWidth} 
                             onChange={(e) => setRoomWidth(parseFloat(e.target.value))}
                             className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-bold outline-none focus:border-[#C9A227]"
                          />
                       </div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    {[
                      { item: "Sectional Sofa", max: "Length x 0.6", size: `${(roomLength * 0.6).toFixed(1)}m max` },
                      { item: "Rug / Carpet", max: "Full Room", size: `${(roomLength - 0.5).toFixed(1)}m x ${(roomWidth - 0.5).toFixed(1)}m` },
                      { item: "Dining Table", max: "Width - 1m", size: `${(roomWidth - 1.2).toFixed(1)}m capacity` },
                    ].map((rec, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl">
                         <div>
                            <div className="text-white font-bold text-sm">{rec.item}</div>
                            <div className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest">{rec.max} recommendation</div>
                         </div>
                         <div className="text-white font-bold text-lg">{rec.size}</div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {/* Smart Recommender */}
            {activeTab === "recommend" && (
              <div className="text-center max-w-xl mx-auto animate-fadeIn">
                 <div className="w-16 h-16 bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#c9a22720]">
                    <Sparkles size={32} className="text-white" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">AI <span className="text-gradient-gold">Interior Designer</span></h3>
                 <p className="text-white/60 mb-10 leading-relaxed">
                    Answer 3 quick questions about your style, budget, and space, and our AI will curate a personalized furniture package for your home.
                 </p>
                 <button className="bg-white text-[#1A1A1A] px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#C9A227] hover:text-white transition-all duration-300 shadow-xl">
                    Start AI Design Quiz
                 </button>
                 <p className="text-white/30 text-[10px] mt-6 uppercase tracking-widest font-bold font-sans">1,200+ Designs Generated Today</p>
              </div>
            )}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
