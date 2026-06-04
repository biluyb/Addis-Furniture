"use client";

import Image from "next/image";
import { ArrowRight, Hammer, TreeDeciduous, Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="heritage" className="section-padding bg-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           
           {/* Visual Side */}
           <div className="relative">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                 <Image 
                   src="/images/bedroom.png" 
                   alt="Craftsmanship" 
                   fill 
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-emerald/10" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[3rem] max-w-[300px] hidden md:block">
                 <div className="text-gold font-serif text-5xl mb-2 italic">10+</div>
                 <h4 className="text-emerald font-bold text-xs uppercase tracking-[0.2em] mb-4">Years of Craft</h4>
                 <p className="text-[11px] text-emerald/60 leading-relaxed">
                    From a small workshop in Bole to the leading bespoke furniture manufacturer in Ethiopia.
                 </p>
              </div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10" />
           </div>

           {/* Content Side */}
           <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-7xl font-serif text-emerald leading-tight mb-8">
                 Bespoke <br />
                 <span className="italic">Addis Mastery.</span>
              </h2>
              <p className="text-emerald/60 text-lg mb-12 leading-relaxed">
                 We believe that luxury isn't just about the price tag—it's about the soul of the material and the hands that shape it. Every piece from Addis Furniture is born from a collaboration between master craftsmen and architectural visionaries.
              </p>

              <div className="grid sm:grid-cols-2 gap-10 mb-12">
                 {[
                   { icon: Hammer, title: "Artisan Build", desc: "Reinforced joining techniques used for generations." },
                   { icon: TreeDeciduous, title: "Locally Sourced", desc: "High-grade Ethiopian wood & imported Italian fabrics." },
                   { icon: Star, title: "Custom Fit", desc: "Millimetric precision for your specific architecture." },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex flex-shrink-0 items-center justify-center text-gold">
                         <item.icon size={20} />
                      </div>
                      <div>
                         <h5 className="font-serif text-emerald text-lg mb-1">{item.title}</h5>
                         <p className="text-[11px] text-emerald/60 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <button className="flex items-center gap-3 text-emerald font-bold text-xs uppercase tracking-[0.3em] group hover:text-gold transition-colors">
                 Discover Our Story <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>

        </div>

      </div>
    </section>
  );
}
