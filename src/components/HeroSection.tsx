"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Trophy, ShieldCheck, Heart } from "lucide-react";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = "1";
      headingRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ivory">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-sand/30 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/5 rounded-full text-emerald font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Bespoke Mastery Since 2014
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl md:text-8xl font-serif text-emerald leading-[1.1] mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            Elevate Your <br />
            <span className="text-gold italic">Living Legacy.</span>
          </h1>

          <p className="text-emerald/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
            Crafting more than furniture—we design the backdrop of your life's most precious moments. Hand-finished in Addis Ababa, delivered to your dreams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-primary flex items-center justify-center gap-3 group">
              Start Designing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              View Collection
            </button>
          </div>

          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { icon: Trophy, text: "Award Winning Design" },
              { icon: ShieldCheck, text: "10 Year Warranty" },
              { icon: Heart, text: "98% Happy Homes" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold">
                  <stat.icon size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald/40 truncate">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[600px] md:h-[800px] w-full rounded-[4rem] overflow-hidden shadow-2xl group">
          <Image
            src="/images/hero.png"
            alt="Premium Interior"
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 via-transparent to-transparent" />
          
          {/* Floating Luxury Elements */}
          <div className="absolute top-12 -left-12 glass-card p-6 rounded-3xl floating-anim max-w-[200px]">
             <div className="text-gold font-serif text-2xl mb-1 italic">"Perfect fit"</div>
             <p className="text-[10px] text-emerald/60 font-medium">Verified Client, Bole</p>
          </div>

          <div className="absolute bottom-12 right-12 glass-card p-6 rounded-3xl animate-pulse">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gold p-1 overflow-hidden">
                   <div className="w-full h-full bg-emerald rounded-full" />
                </div>
                <div>
                   <div className="text-xs font-bold text-emerald">Consult Now</div>
                   <div className="text-[10px] text-emerald/60">Live Designer Online</div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
