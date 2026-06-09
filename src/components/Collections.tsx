"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "living-room",
    title: "Living Room",
    subtitle: "Sofas · TV Units",
    image: "/images/hero.png",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Beds · Wardrobes",
    image: "/images/bedroom.png",
  },
  {
    id: "office",
    title: "Office",
    subtitle: "Desks · Chairs",
    image: "/images/office.png",
  },
  {
    id: "dining",
    title: "Dining",
    subtitle: "Dining Sets",
    image: "/images/dining.png",
  },
];

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".coll-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Curated Series
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
              Spaces for<br /><span className="text-gradient">Inspired Living.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-emerald font-black text-[10px] uppercase tracking-widest hover:text-gold transition-colors py-4 px-8 border border-emerald/10 rounded-xl"
          >
            Explore Master Library
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid - Standardized Mobile Aspect Ratios */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className="coll-card relative rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer group shadow-xl bg-sand"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Higher contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald via-emerald/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content - High Contrast Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-display font-black mb-1">
                  {col.title}
                </h3>
                <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-6">{col.subtitle}</p>
                
                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Browse Node <ArrowRight size={10} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
