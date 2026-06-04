"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const rooms = [
  {
    id: "inspo-living",
    label: "Modern Living Room",
    image: "/images/hero.png",
    tag: "Serenity Collection",
  },
  {
    id: "inspo-bedroom",
    label: "Luxury Bedroom Suite",
    image: "/images/bedroom.png",
    tag: "Harar Collection",
  },
  {
    id: "inspo-office",
    label: "Executive Home Office",
    image: "/images/office.png",
    tag: "Bole Collection",
  },
  {
    id: "inspo-dining",
    label: "Family Dining Space",
    image: "/images/dining.png",
    tag: "Lalibela Collection",
  },
];

export default function InspirationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".inspo-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "scale(1)";
              }, i * 150);
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
    <section id="inspiration" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Interior Inspiration
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            Dream It.{" "}
            <span className="text-gradient-gold">Live It.</span>
          </h2>
          <p className="text-white/55 mt-4 max-w-md mx-auto text-sm md:text-base">
            People don&apos;t buy furniture — they buy the life they imagine living with it.
          </p>
        </div>

        {/* Gallery */}
        <div
          ref={sectionRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {rooms.map((room, i) => (
            <div
              key={room.id}
              id={room.id}
              className={`inspo-item img-zoom relative rounded-2xl overflow-hidden cursor-pointer group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{
                opacity: 0,
                transform: "scale(0.96)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                aspectRatio: i === 0 ? "1 / 1" : "4 / 3",
              }}
            >
              <Image
                src={room.image}
                alt={room.label}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#C9A227] text-xs font-semibold">{room.tag}</span>
                <h3
                  className="text-white font-bold text-sm md:text-base mt-0.5"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                >
                  {room.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Work Highlight */}
        <div className="mt-20 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-[2rem] p-8 md:p-12 border border-[#C9A227]/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C9A227]/10 transition-colors duration-700" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full px-3 py-1 mb-6">
                <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest">Custom Craftsmanship</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Have a Unique Vision? <br />
                <span className="text-gradient-gold">We Bring It to Life.</span>
              </h3>
              <p className="text-white/60 text-base mb-8 leading-relaxed">
                From specific dimensions to unique materials, our master craftsmen can build anything you imagine. We&apos;ve completed over 200 custom interior projects across Addis Ababa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-[#C9A227] hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-300">
                  Request Custom Design
                </a>
                <a href="https://wa.me/251911000000" className="flex items-center gap-2 text-white/80 hover:text-[#C9A227] font-bold text-sm transition-colors">
                  View Portfolio on WhatsApp
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700">
              <Image 
                src="/images/bedroom.png" 
                alt="Custom project showcase" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                  Recent Custom Project
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm italic">
            &ldquo;A beautiful home starts with the right furniture.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

