"use client";

import { useState, useEffect } from "react";
import { Send, Phone, MapPin, Clock, ArrowRight, User, Target, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

export default function ContactSection() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [requestType, setRequestType] = useState("Bespoke");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const t = translations[lang];

  return (
    <section id="contact" className="section-padding bg-ivory relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/60 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:items-stretch">
           
           {/* Studio Node (Info Panel) - Fixed Mobile Vertical Padding */}
           <div className="lg:w-2/5 flex flex-col order-2 lg:order-1">
              <div className="bg-emerald p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl flex-1 relative overflow-hidden">
                 
                 <div className="absolute top-6 right-6 md:top-10 md:right-10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                       <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                       <span className="text-[8px] font-black uppercase tracking-widest opacity-80">Online</span>
                    </div>
                 </div>

                 <div className="relative z-10">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Direct Access</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-[1.1] tracking-tight">
                       Engage the <br />
                       <span className="text-white opacity-40 italic">Studio.</span>
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-10 max-w-sm font-medium leading-relaxed">
                       Immediate consultation with our architectural design team in Addis Ababa. 
                    </p>

                    <div className="space-y-6 md:space-y-8">
                       {[
                         { icon: Phone, label: "Studio Line", val: "+251 911 000 000", color: "text-gold" },
                         { icon: MapPin, label: "HQ Node", val: "Bole Road, Addis Ababa", color: "text-white" },
                         { icon: Clock, label: "Availability", val: "Mon - Sat: 9:00 - 19:00", color: "text-white" },
                       ].map((item, i) => (
                         <div key={i} className="flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex flex-shrink-0 items-center justify-center text-white border border-white/10">
                               <item.icon size={20} strokeWidth={2} />
                            </div>
                            <div className="pt-0.5">
                               <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{item.label}</div>
                               <div className={`text-base md:text-lg font-black ${item.color} leading-snug`}>{item.val}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="mt-12 pt-8 border-t border-white/10 hidden md:flex items-center justify-between opacity-60">
                    <span className="text-[9px] font-black uppercase tracking-widest leading-none">Studio Team Node 4.02</span>
                    <div className="flex gap-1">
                       {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />)}
                    </div>
                 </div>
              </div>
           </div>

           {/* Intake Terminal (Form) - Improved Contrast */}
           <div className="lg:w-3/5 order-1 lg:order-2">
              <div className="bg-white p-8 md:p-14 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-emerald/10 shadow-xl relative h-full">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12">
                    <div className="space-y-4 md:space-y-6">
                       <label className="flex items-center gap-2 text-[10px] font-black text-emerald uppercase tracking-[0.2em]">
                          <User size={14} className="text-gold" /> {t.nameLabel}
                       </label>
                       <input 
                         type="text" 
                         placeholder="e.g. Dawit Tadesse"
                         className="w-full text-xl md:text-2xl font-display font-black text-emerald bg-transparent border-b-4 border-sand py-3 focus:border-gold outline-none transition-all placeholder:text-emerald/10"
                       />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                       <label className="flex items-center gap-2 text-[10px] font-black text-emerald uppercase tracking-[0.2em]">
                          <Zap size={14} className="text-gold" /> {t.engagementType}
                       </label>
                       <div className="flex flex-wrap gap-2">
                          {["Bespoke", "Project", "Retail"].map((type) => (
                            <button 
                              key={type}
                              type="button"
                              onClick={() => setRequestType(type)}
                              className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${requestType === type ? 'bg-emerald text-white shadow-xl' : 'bg-sand text-emerald/60 hover:bg-emerald/10'}`}
                            >
                               {type}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
                    <label className="flex items-center gap-2 text-[10px] font-black text-emerald uppercase tracking-[0.2em]">
                       <Target size={14} className="text-gold" /> {t.projectVision}
                    </label>
                    <textarea 
                      placeholder="Describe your design goals..."
                      rows={3}
                      className="w-full text-xl md:text-2xl font-display font-black text-emerald bg-transparent border-b-4 border-sand py-3 focus:border-gold outline-none transition-all placeholder:text-emerald/10 resize-none"
                    />
                 </div>

                 <div className="flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-10">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-sand flex-shrink-0 flex items-center justify-center text-emerald">
                          <Send size={20} />
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed text-emerald/40 max-w-[160px]">
                          Powered by our <span className="text-emerald">Telegram Node</span> for instant relay.
                       </p>
                    </div>

                    <button 
                      onClick={(e) => { e.preventDefault(); window.open('https://t.me/taologos', '_blank'); }}
                      className="w-full sm:w-auto px-10 py-6 bg-emerald text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all hover:bg-gold hover:-translate-y-1 active:scale-95 shadow-2xl shadow-emerald/20"
                    >
                       Connect to Studio <ArrowRight size={18} />
                    </button>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
