"use client";

import { useState, useEffect } from "react";
import { Send, Phone, MapPin, Clock, ArrowRight, User, Target, MessageSquare, Zap } from "lucide-react";
import { translations } from "@/utils/translations";

export default function ContactSection() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [requestType, setRequestType] = useState("Bespoke");
  const [isHovered, setIsHovered] = useState(false);

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
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/40 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8">
           
           {/* The Studio Node (Info Panel) */}
           <div className="lg:w-2/5 flex flex-col">
              <div className="bg-emerald p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl shadow-emerald/20 flex-1 flex flex-col justify-between relative overflow-hidden group">
                 
                 {/* Decorative Pulse */}
                 <div className="absolute top-0 right-0 p-8">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                       <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                       <span className="text-[8px] font-black uppercase tracking-widest opacity-60">System Online</span>
                    </div>
                 </div>

                 <div>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Direct Access</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-[1.1]">
                       Engage the <br />
                       <span className="text-white/40 italic">Studio Node.</span>
                    </h2>
                    <p className="text-white/40 text-lg mb-12 max-w-sm font-light leading-relaxed">
                       Immediate consultation with our architectural design team in Addis Ababa. 
                    </p>

                    <div className="space-y-10">
                       {[
                         { icon: Phone, label: "Studio Line", val: "+251 911 000 000", color: "text-gold" },
                         { icon: MapPin, label: "HQ Node", val: "Bole Road, Addis Ababa", color: "text-white" },
                         { icon: Clock, label: "Availability", val: "Mon - Sat: 9:00 - 19:00", color: "text-white" },
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 items-start group/item">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white group-hover/item:bg-gold group-hover/item:text-emerald transition-all duration-500">
                               <item.icon size={22} strokeWidth={1.5} />
                            </div>
                            <div className="pt-1">
                               <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">{item.label}</div>
                               <div className={`text-lg font-bold ${item.color} leading-none tracking-tight`}>{item.val}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Bottom Visualizer Link */}
                 <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald bg-sand" />
                       ))}
                       <div className="w-10 h-10 rounded-full border-2 border-emerald bg-gold flex items-center justify-center text-[10px] font-black text-emerald">+</div>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Studio Team Active</span>
                 </div>
              </div>
           </div>

           {/* The Intake Terminal (Form) */}
           <div className="lg:w-3/5">
              <div className="bg-white p-10 md:p-14 lg:p-20 rounded-[4rem] border border-emerald/5 shadow-xl shadow-emerald/5 h-full flex flex-col justify-center relative">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                       <label className="flex items-center gap-2 text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em]">
                          <User size={14} className="text-gold" /> {t.nameLabel}
                       </label>
                       <input 
                         type="text" 
                         placeholder="e.g. Dawit Tadesse"
                         className="w-full text-2xl font-display font-black text-emerald bg-transparent border-b-2 border-emerald/5 py-4 focus:border-gold outline-none transition-all placeholder:text-emerald/5"
                       />
                    </div>
                    <div className="space-y-6">
                       <label className="flex items-center gap-2 text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em]">
                          <Zap size={14} className="text-gold" /> {t.engagementType}
                       </label>
                       <div className="flex flex-wrap gap-2">
                          {["Bespoke", "Project", "Retail"].map((type) => (
                            <button 
                              key={type}
                              type="button"
                              onClick={() => setRequestType(type)}
                              className={`px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${requestType === type ? 'bg-emerald text-white shadow-xl' : 'bg-emerald/5 text-emerald/40 hover:bg-emerald/10'}`}
                            >
                               {type}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-6 mb-16">
                    <label className="flex items-center gap-2 text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em]">
                       <Target size={14} className="text-gold" /> {t.projectVision}
                    </label>
                    <textarea 
                      placeholder="Describe your spatial goals..."
                      rows={4}
                      className="w-full text-2xl font-display font-black text-emerald bg-transparent border-b-2 border-emerald/5 py-4 focus:border-gold outline-none transition-all placeholder:text-emerald/5 resize-none"
                    />
                 </div>

                 <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-4 text-emerald/20">
                       <div className="w-12 h-12 rounded-2xl bg-sand flex items-center justify-center">
                          <MessageSquare size={20} />
                       </div>
                       <p className="text-[10px] font-bold uppercase tracking-widest leading-loose max-w-[140px]">
                          Powered by our <span className="text-emerald">Telegram Node</span> for instant relay.
                       </p>
                    </div>

                    <button 
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={(e) => { e.preventDefault(); window.open(`https://t.me/taologos`, '_blank'); }}
                      className="w-full sm:w-auto px-12 py-7 bg-emerald text-white rounded-[2.5rem] font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-5 transition-all hover:bg-gold hover:-translate-y-2 active:scale-95 shadow-2xl shadow-emerald/20 overflow-hidden relative"
                    >
                       <div className={`absolute inset-0 bg-white/10 transition-transform duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />
                       Connect to Studio <ArrowRight size={20} className={`${isHovered ? 'translate-x-2' : ''} transition-transform`} />
                    </button>
                 </div>

                 {/* Corner Decorative */}
                 <div className="absolute bottom-10 left-10 lg:left-20 pointer-events-none">
                    <span className="text-[8px] font-black text-gold uppercase tracking-[0.5em] opacity-20 rotate-90 origin-left block">Intake Node</span>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
