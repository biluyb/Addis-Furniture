"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Selamawit Tadesse",
    location: "Bole, Addis Ababa",
    rating: 5,
    text: "The quality exceeded our expectations. The sofa is stunning and the delivery team was professional and respectful. I've already recommended Addis Furniture to 5 of my friends!",
    initials: "ST",
  },
  {
    id: "t2",
    name: "Dawit Bekele",
    location: "CMC Road, Addis Ababa",
    rating: 5,
    text: "We furnished our entire apartment from Addis Furniture. The bedroom set is absolutely beautiful. The craftsmanship is on par with imported furniture but at a fraction of the cost.",
    initials: "DB",
  },
  {
    id: "t3",
    name: "Meron Alemu",
    location: "Sarbet, Addis Ababa",
    rating: 5,
    text: "Ordered a custom dining set and they delivered exactly what we imagined. The team was responsive on WhatsApp and the installation was flawless. Highly recommended!",
    initials: "MA",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, _i) => (
        <Star key={_i} size={14} fill="#C9A227" color="#C9A227" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".testi-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 140);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Customer Stories
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            Loved by Thousands
          </h2>
        </div>

        {/* Cards */}
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="testi-card card-hover bg-[#FAF7F2] rounded-2xl p-8 border border-[#f0ebe3] relative"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-6xl text-[#C9A227]/15 font-serif leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <StarRow count={t.rating} />
              <p className="text-[#4A4540] text-sm leading-relaxed mt-4 mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[#1A1A1A] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#8B5A2B] text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex">
            {["DB", "ST", "MA"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] border-2 border-white flex items-center justify-center -ml-2 first:ml-0"
              >
                <span className="text-white text-xs font-bold">{initials[0]}</span>
              </div>
            ))}
          </div>
          <p className="text-[#6B6560] text-sm">
            <strong className="text-[#1A1A1A]">5,000+ customers</strong> trust Addis Furniture
          </p>
        </div>
      </div>
    </section>
  );
}
