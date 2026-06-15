"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "living-room",
    title: "Living Room",
    subtitle: "Sofas · TV Units",
    image: "/images/hero_node.png",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Beds · Wardrobes",
    image: "/images/bedroom_suite.png",
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
    image: "/images/visualizer_base.png",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="section-padding bg-ivory pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
               Global Architecture
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-emerald leading-tight">
               Spaces for<br /><span className="text-gradient">Inspired Living.</span>
            </h2>
          </div>
          <a
            href="https://t.me/taologos"
            target="_blank"
            className="inline-flex items-center gap-4 text-emerald font-black text-[10px] uppercase tracking-widest hover:bg-emerald hover:text-white transition-all py-5 px-10 border-2 border-emerald/10 rounded-2xl w-fit"
          >
            Digital Library
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Grid - STATIC VISIBILITY TO ENSURE DISPLAY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className="coll-card relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden cursor-pointer group shadow-2xl bg-sand transition-all duration-700 ease-out"
              style={{
                aspectRatio: "4/5",
              }}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/90 via-emerald/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="text-white text-2xl md:text-3xl font-display font-black mb-1 group-hover:-translate-y-2 transition-transform duration-500">
                  {col.title}
                </h3>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-8">{col.subtitle}</p>
                
                <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   Discover <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
