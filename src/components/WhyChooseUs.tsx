"use client";

import { Shield, Sparkles, Truck, BadgeCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Built with durable, responsibly sourced materials. Every piece is crafted to last generations.",
    color: "#C9A227",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    desc: "Contemporary furniture that blends Ethiopian warmth with international design sensibility.",
    color: "#8B5A2B",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Luxury",
    desc: "Luxury appearance without the luxury price tag. Premium style for every Ethiopian home.",
    color: "#C9A227",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Swift, professional delivery across Addis Ababa. White-glove installation available.",
    color: "#8B5A2B",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".why-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 130);
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
    <section id="why-us" className="section-padding bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Why Addis Furniture
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A1A1A] gold-underline"
            style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
          >
            The Difference You Feel
          </h2>
        </div>

        {/* Cards */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="why-card card-hover bg-white rounded-2xl p-8 shadow-sm border border-[#f0ebe3]"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${reason.color}15` }}
                >
                  <Icon size={26} color={reason.color} strokeWidth={1.75} />
                </div>
                <h3
                  className="text-lg font-bold text-[#1A1A1A] mb-3"
                  style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
