"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/office.png" 
                alt="Our Workshop" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-gold text-charcoal p-10 rounded-[3rem] shadow-2xl text-center min-w-[200px] animate-slide-up">
               <div className="text-5xl font-black mb-1">12+</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Years of Craft</div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block">Our Heritage</span>
              <h2 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Modern Soul. <br />
                <span className="text-gradient-gold">Ethiopian Craft.</span>
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Founded in 2012 in the heart of Addis Ababa, Addis Furniture was born from a simple mission: to bridge the gap between global luxury design and the unique requirements of the Ethiopian home. Every stitch, every joint, and every polish is handled by our master craftsmen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
               {[
                 { icon: ShieldCheck, title: "Premium Built", desc: "Solid local wood frames" },
                 { icon: Award, title: "Master Craft", desc: "Expert hand-finishing" },
                 { icon: Heart, title: "Local Heart", desc: "100% Addis artisans" },
                 { icon: CheckCircle2, title: "Reliable", desc: "Full 2 year warranty" },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/10 text-gold rounded-xl flex items-center justify-center">
                       <item.icon size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-charcoal text-sm">{item.title}</h4>
                       <p className="text-[10px] text-charcoal/40 uppercase tracking-widest">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-8 border-t border-charcoal/5">
               <div className="italic text-charcoal/40 text-sm">
                 &ldquo;A piece of Addis Furniture isn&apos;t just an object; it&apos;s a legacy of quality in your home.&rdquo;
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
