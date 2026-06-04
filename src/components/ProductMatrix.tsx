"use client";

import Image from "next/image";
import { Send, Star, Zap } from "lucide-react";

const products = [
  {
    id: "oslo",
    name: "Cyber-Oslo Sectional",
    price: "ETB 145,000",
    tag: "Best Seller",
    image: "/images/sofa.png",
  },
  {
    id: "addis",
    name: "Heritage Smart Bed",
    price: "ETB 98,000",
    tag: "New Entry",
    image: "/images/bedroom.png",
  },
  {
    id: "exec",
    name: "Architect Desk Pro",
    price: "ETB 55,000",
    tag: "Handcrafted",
    image: "/images/office.png",
  },
  {
    id: "zen",
    name: "Zen Dining Suite",
    price: "ETB 82,000",
    tag: "Bespoke",
    image: "/images/dining.png",
  },
];

export default function ProductMatrix() {
  return (
    <section id="portfolio" className="section-padding bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Design Portfolio</span>
              <h2 className="text-4xl md:text-7xl font-display font-black">
                 The Curated <span className="text-gradient">Edit.</span>
              </h2>
           </div>
           <button className="btn-ghost">Compare All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((p) => (
             <div key={p.id} className="group relative">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-surface mb-8 border border-white/[0.03] transition-all duration-700 group-hover:border-accent/50 group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]">
                   <Image 
                     src={p.image} 
                     alt={p.name} 
                     fill 
                     className="object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
                   
                   {/* Tech Branding Tag */}
                   <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl flex items-center gap-2">
                      <Zap size={12} className="text-accent" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">{p.tag}</span>
                   </div>

                   {/* Quick Action Overlay */}
                   <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a href="https://t.me/taologos" className="w-full py-4 bg-white text-dark rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl">
                         <Send size={14} /> Telegram Inquiry
                      </a>
                   </div>
                </div>

                <div className="flex justify-between items-start px-2">
                   <div>
                      <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">{p.name}</h3>
                      <div className="flex items-center gap-2">
                         <div className="flex gap-0.5">
                            {[1,2,3,4,5].map((s) => <Star key={s} size={10} fill="#6366F1" color="#6366F1" className="opacity-40" />)}
                         </div>
                         <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Verified Unit</span>
                      </div>
                   </div>
                   <div className="text-white font-bold text-sm">{p.price}</div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
