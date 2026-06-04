"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";


const products = [
  {
    id: "oslo-sofa",
    name: "Oslo Sectional Sofa",
    category: "Living Room",
    desc: "Plush charcoal velvet with gold accent leg finish.",
    specs: "300cm x 180cm · Solid Wood Frame",
    warranty: "2 Year Warranty",
    price: "From ETB 45,000",
    image: "/images/sofa.png",
    badge: "Best Seller",
  },
  {
    id: "addis-bed",
    name: "Addis King Bed",
    category: "Bedroom",
    desc: "Solid walnut frame with upholstered headboard.",
    specs: "200cm x 220cm · Walnut Wood",
    warranty: "5 Year Warranty",
    price: "From ETB 38,000",
    image: "/images/bedroom.png",
    badge: "New",
  },
  {
    id: "exec-desk",
    name: "Executive Desk Pro",
    category: "Office",
    desc: "Dark mahogany with integrated cable management.",
    specs: "180cm x 80cm · Mahogany Veneer",
    warranty: "1 Year Warranty",
    price: "From ETB 22,000",
    image: "/images/office.png",
    badge: null,
  },
  {
    id: "acacia-table",
    name: "Acacia Dining Table",
    category: "Dining",
    desc: "8-seater solid acacia with natural live edge.",
    specs: "240cm x 100cm · Solid Acacia",
    warranty: "3 Year Warranty",
    price: "From ETB 55,000",
    image: "/images/dining.png",
    badge: "Premium",
  },
];

export default function BestSellers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card");
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
    <section id="best-sellers" className="section-padding bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Most Loved
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A1A1A] gold-underline mx-auto inline-block"
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            Best Sellers
          </h2>
          <p className="text-[#6B6560] mt-6 max-w-lg mx-auto text-sm md:text-base">
            Our most popular pieces — loved by thousands of Ethiopian homes.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={sectionRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="product-card card-hover bg-white rounded-2xl overflow-hidden border border-[#f0ebe3] group"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Image */}
              <div className="img-zoom relative h-56 bg-[#F5F0EB]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-[#C9A227] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[#8B5A2B] text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-[#25D366] text-[10px] font-bold uppercase tracking-wider">
                    {product.warranty}
                  </span>
                </div>
                <h3
                  className="text-[#1A1A1A] text-base font-bold mb-1"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                >
                  {product.name}
                </h3>
                <p className="text-[#6B6560] text-xs mb-3 line-clamp-2">{product.desc}</p>
                
                <div className="bg-[#FAF7F2] p-2 rounded-lg mb-4">
                  <p className="text-[#A0998E] text-[10px] font-medium uppercase tracking-widest mb-0.5">Dimensions & Material</p>
                  <p className="text-[#1A1A1A] text-[10px] font-bold">{product.specs}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#C9A227] font-bold text-sm tracking-tight">{product.price}</span>
                  <a
                    href={`https://t.me/taologos`}
                    className="flex-1 bg-[#1A1A1A] text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center hover:bg-[#C9A227] transition-colors"
                  >
                    Inquire on Telegram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            id="view-all-products-btn"
            className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm"
          >
            Request Full Catalogue
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
