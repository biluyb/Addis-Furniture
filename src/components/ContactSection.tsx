"use client";

import { useState, useEffect } from "react";
import { Send, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
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
    <section id="contact" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-sand rounded-[4rem] overflow-hidden flex flex-col md:flex-row border border-emerald/5 shadow-2xl shadow-emerald/5">
           
           {/* Left Info */}
           <div className="flex-1 p-12 md:p-20 bg-emerald text-white">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Direct Access</span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
                 {t.contactStudio} <br />
                 <span className="text-white/20 italic">{t.contactNode}</span>
              </h2>
              <p className="text-white/40 text-lg mb-12 max-w-sm font-light">
                 Immediate consultation with our architectural design team in Addis Ababa.
              </p>

              <div className="space-y-8">
                 {[
                   { icon: Phone, label: "Studio Line", val: "+251 911 000 000" },
                   { icon: MapPin, label: "HQ Node", val: "Bole Road, Addis Ababa" },
                   { icon: Clock, label: "Availability", val: "Mon - Sat: 9:00 - 19:00" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex flex-shrink-0 items-center justify-center text-gold border border-white/5">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.label}</div>
                         <div className="text-base font-bold text-white">{item.val}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Right Form */}
           <div className="flex-1 p-12 md:p-20">
              <form className="space-y-8">
                 <div className="space-y-2 border-b border-emerald/5 pb-4">
                    <label className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest">{t.nameLabel}</label>
                    <input 
                      type="text" 
                      placeholder="..."
                      className="w-full text-lg font-display text-emerald bg-transparent outline-none placeholder:text-emerald/5"
                      required
                    />
                 </div>

                 <div className="space-y-4">
                    <label className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest">{t.engagementType}</label>
                    <div className="flex flex-wrap gap-3">
                       {["Bespoke", "Full Portfolio", "Institutional"].map((type) => (
                         <button 
                           key={type}
                           type="button"
                           onClick={() => setRequestType(type)}
                           className={`px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${requestType === type ? 'bg-emerald text-white shadow-xl shadow-emerald/20' : 'bg-emerald/5 text-emerald/40 hover:bg-emerald/10'}`}
                         >
                            {type}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-2 border-b border-emerald/5 pb-4">
                    <label className="text-[10px] font-bold text-emerald/20 uppercase tracking-widest">{t.projectVision}</label>
                    <textarea 
                      placeholder="..."
                      rows={3}
                      className="w-full text-lg font-display text-emerald bg-transparent outline-none placeholder:text-emerald/5 resize-none overflow-hidden"
                    />
                 </div>

                 <button 
                   onClick={(e) => { e.preventDefault(); window.open(`https://t.me/taologos`, '_blank'); }}
                   className="w-full btn-modern flex items-center justify-center gap-4 group"
                 >
                    {t.connectTelegram} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </form>
           </div>

        </div>

      </div>
    </section>
  );
}
