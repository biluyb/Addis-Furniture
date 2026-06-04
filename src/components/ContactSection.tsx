"use client";

import { useState } from "react";
import { Send, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    requestType: "General",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://t.me/taologos`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-emerald rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-8 border-white p-8 md:p-0">
           
           {/* Left: Design Concierge */}
           <div className="flex-1 p-12 md:p-20 text-white">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Design Concierge</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                 Start Your <br />
                 <span className="italic text-gold">Custom Journey.</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-sm">
                 Book a private viewing or request a custom digital design consultation.
              </p>

              <div className="space-y-8">
                 {[
                   { icon: Phone, label: "Direct Line", val: "+251 911 000 000" },
                   { icon: MapPin, label: "Showroom", val: "Bole Road, Addis Ababa" },
                   { icon: Clock, label: "Hours", val: "Mon - Sat: 9:00 AM - 7:00 PM" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-center">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center text-gold">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-gold/60">{item.label}</div>
                         <div className="text-base font-medium">{item.val}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Right: Modern Form */}
           <div className="flex-1 bg-white p-12 md:p-20">
              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="space-y-2 border-b border-emerald/5 pb-4">
                    <label className="text-[10px] font-bold text-emerald/40 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dawit Tadesse"
                      className="w-full text-lg font-serif text-emerald bg-transparent outline-none placeholder:text-emerald/10"
                      required
                    />
                 </div>

                 <div className="space-y-4">
                    <label className="text-[10px] font-bold text-emerald/40 uppercase tracking-widest">Inquiry Type</label>
                    <div className="flex flex-wrap gap-3">
                       {["Bespoke Furniture", "Contract/Office", "Design Consultation"].map((type) => (
                         <button 
                           key={type}
                           type="button"
                           onClick={() => setFormState({...formState, requestType: type})}
                           className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${formState.requestType === type ? 'bg-emerald text-white shadow-lg' : 'bg-ivory text-emerald hover:bg-emerald/5'}`}
                         >
                            {type}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-2 border-b border-emerald/5 pb-4">
                    <label className="text-[10px] font-bold text-emerald/40 uppercase tracking-widest">Vision Details</label>
                    <textarea 
                      placeholder="How can we help define your space?"
                      rows={3}
                      className="w-full text-lg font-serif text-emerald bg-transparent outline-none placeholder:text-emerald/10 resize-none overflow-hidden"
                    />
                 </div>

                 <button type="submit" className="w-full btn-primary flex items-center justify-center gap-4 group">
                    Send to Concierge <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 
                 <p className="text-center text-[10px] text-emerald/30 font-bold uppercase tracking-[0.2em] mt-8">
                    Instant Response via Telegram
                 </p>
              </form>
           </div>

        </div>

      </div>
    </section>
  );
}
