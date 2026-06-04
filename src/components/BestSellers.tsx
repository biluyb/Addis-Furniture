"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight, Send } from "lucide-react";

const products = [
  {
    id: "oslo-sofa",
    name: "The Oslo Sectional",
    category: "Living",
    price: "ETB 45,000",
    image: "/images/sofa.png",
    accent: "bg-emerald/5"
  },
  {
    id: "addis-bed",
    name: "Heritage King Bed",
    category: "Bedroom",
    price: "ETB 38,000",
    image: "/images/bedroom.png",
    accent: "bg-sand/30"
  },
  {
    id: "exec-desk",
    name: "Executive Desk Pro",
    category: "Office",
    price: "ETB 22,000",
    image: "/images/office.png",
    accent: "bg-emerald/5"
  },
  {
    id: "acacia-table",
    name: "Acacia Dining Set",
    category: "Dining",
    price: "ETB 55,000",
    image: "/images/dining.png",
    accent: "bg-sand/30"
  },
];

export default function BestSellers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="best-sellers" className="section-padding bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Seasonal Edit</span>
              <h2 className="text-4xl md:text-7xl font-serif text-emerald">
                 The Curated <br />
                 <span className="italic text-gold">Masterpieces.</span>
              </h2>
           </div>
           <button className="btn-outline">
              Shop All Portfolio
           </button>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
           {products.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
              >
                 <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 transition-transform duration-700 group-hover:-translate-y-4 ${product.accent}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <a 
                      href="https://t.me/taologos"
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4/5 py-4 bg-white/90 backdrop-blur-xl text-emerald font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                    >
                       <Send size={14} /> Inquire
                    </a>
                 </div>

                 <div className="flex justify-between items-start">
                    <div>
                       <div className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em] mb-1">{product.category}</div>
                       <h3 className="text-xl font-serif text-emerald group-hover:text-gold transition-colors">{product.name}</h3>
                    </div>
                    <div className="text-emerald font-bold text-sm">{product.price}</div>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
