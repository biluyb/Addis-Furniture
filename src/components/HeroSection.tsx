"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [headingRef, subRef, ctaRef];
    refs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
            ref.current.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
          }
        }, i * 200 + 300);
      }
    });
  }, []);

  return (
    <section id="hero" className="relative w-full h-[95vh] min-h-[700px] bg-charcoal overflow-hidden">
      {/* Background with zoom animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Luxury living room featuring premium Addis Furniture sofas and modern interior design"
          fill
          priority={true}
          className="object-cover object-center scale-105 animate-[zoom-slow_20s_infinite_alternate]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl space-y-10">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full px-5 py-2">
             <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
             <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Excellence Since 2012</span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[1] tracking-tight" 
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            Furniture That <br />
            <span className="text-gradient-gold">Speaks Luxury.</span>
          </h1>
          
          <p 
            ref={subRef}
            className="text-white/70 text-lg md:text-2xl max-w-2xl leading-relaxed font-light"
          >
            Experience luxury simplified. Premium sofas, bedroom sets, and executive office furniture designed for the elevated Ethiopian home.
          </p>

          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-5 items-start"
          >
            <a 
              href="#collections" 
              className="bg-gold hover:bg-white text-charcoal px-10 py-5 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-gold/20 flex items-center gap-3 group"
            >
              Explore Collections <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://t.me/taologos" 
              className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all duration-500"
            >
              Contact on Telegram
            </a>

          </div>

          <div className="pt-12 flex flex-wrap gap-12 border-t border-white/10">
             {[
               { label: "Handcrafted", val: "Quality" },
               { label: "48H Delivery", val: "Addis Wide" },
               { label: "Customizable", val: "Every Piece" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">{stat.label}</span>
                  <span className="text-lg font-medium text-white">{stat.val}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom-slow {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
