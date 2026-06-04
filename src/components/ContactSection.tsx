"use client";

import { useState } from "react";
import { Send, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    requestType: "Bespoke",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://t.me/taologos`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="glass-panel rounded-[4rem] overflow-hidden flex flex-col md:flex-row border-white/5">
           
           {/* Left: High-Touch Concierge */}
           <div className="flex-1 p-12 md:p-20 bg-accent/5 backdrop-blur-xl">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Direct Access</span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
                 Engage the <br />
                 <span className="text-gradient">Studio Node.</span>
              </h2>
              <p className="text-white/40 text-lg mb-12 max-w-sm">
                 Immediate consultation with our architectural design team in Addis Ababa.
              </p>

              <div className="space-y-8">
                 {[
                   { icon: Phone, label: "Studio Line", val: "+251 911 000 000" },
                   { icon: MapPin, label: "HQ Node", val: "Bole Road, Addis Ababa" },
                   { icon: Clock, label: "Availability", val: "Mon - Sat: 9:00 - 19:00" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex flex-shrink-0 items-center justify-center text-accent border border-white/5">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.label}</div>
                         <div className="text-base font-bold text-white/80">{item.val}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Right: Modern Intake */}
           <div className="flex-1 bg-surface p-12 md:p-20 border-l border-white/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="space-y-2 border-b border-white/5 pb-4">
                    <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Client Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dawit Tadesse"
                      className="w-full text-lg font-display text-white bg-transparent outline-none placeholder:text-white/5"
                      required
                    />
                 </div>

                 <div className="space-y-4">
                    <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Engagement Type</label>
                    <div className="flex flex-wrap gap-3">
                       {["Bespoke", "Full Portfolio", "Institutional"].map((type) => (
                         <button 
                           key={type}
                           type="button"
                           onClick={() => setFormState({...formState, requestType: type})}
                           className={`px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${formState.requestType === type ? 'bg-accent text-white shadow-xl shadow-accent/20' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
                         >
                            {type}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-2 border-b border-white/5 pb-4">
                    <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Project Vision</label>
                    <textarea 
                      placeholder="Describe your architectural dream..."
                      rows={3}
                      className="w-full text-lg font-display text-white bg-transparent outline-none placeholder:text-white/5 resize-none overflow-hidden"
                    />
                 </div>

                 <button type="submit" className="w-full btn-modern flex items-center justify-center gap-4 group">
                    Connect to Telegram <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </form>
           </div>

        </div>

      </div>
    </section>
  );
}
