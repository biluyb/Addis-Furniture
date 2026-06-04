"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const collections = [
  {
    id: "living-room",
    title: "Living Room",
    subtitle: "Sofas · Coffee Tables · TV Units",
    image: "/images/hero.png",
    color: "#1A1A1A",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Beds · Wardrobes · Nightstands",
    image: "/images/bedroom.png",
    color: "#8B5A2B",
  },
  {
    id: "office",
    title: "Office",
    subtitle: "Desks · Chairs · Bookshelves",
    image: "/images/office.png",
    color: "#1A1A1A",
  },
  {
    id: "dining",
    title: "Dining",
    subtitle: "Dining Sets · Sideboards",
    image: "/images/dining.png",
    color: "#8B5A2B",
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              Our Collections
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
            >
              Curated for<br />Every Space
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#8B5A2B] font-semibold text-sm hover:text-[#C9A227] transition-colors"
          >
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((col, i) => (
            <div
              key={col.id}
              id={`collection-${col.id}`}
              className="coll-card img-zoom relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                aspectRatio: i === 0 || i === 3 ? "3/4" : "3/4",
              }}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                >
                  {col.title}
                </h3>
                <p className="text-white/65 text-xs mb-4">{col.subtitle}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 bg-[#C9A227] hover:bg-[#D4B340] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  View Collection
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
