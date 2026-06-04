"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "5,000+", label: "Happy Customers" },
  { number: "10+", label: "Years Experience" },
  { number: "1,200+", label: "Deliveries Made" },
  { number: "500+", label: "Furniture Designs" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stat-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#1A1A1A] py-14">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-item text-center"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="stat-number mb-1">{stat.number}</div>
            <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
