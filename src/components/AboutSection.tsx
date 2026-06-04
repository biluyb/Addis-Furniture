"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { BadgeCheck, Users, Calendar, Award } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bedroom.png"
                alt="Craftsmanship at Addis Furniture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[240px] md:max-w-[280px] border border-[#f0ebe3] z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#C9A227]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">10+</div>
                  <div className="text-xs text-[#8B5A2B] font-bold uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
              <p className="text-[#6B6560] text-sm leading-relaxed">
                Dedicated to bringing world-class furniture design to the heart of Ethiopia.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C9A227]/5 border-2 border-[#C9A227]/10 rounded-full -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              The Addis Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              We Don&apos;t Just Build Furniture. <br />
              <span className="text-gradient-gold">We Build Legacies.</span>
            </h2>
            
            <p className="text-[#4A4540] text-lg leading-relaxed mb-8">
              Since 2014, Addis Furniture has been at the forefront of the furniture revolution in Ethiopia. What started as a small workshop in Bole has grown into the city&apos;s leading showroom for premium, custom-crafted furniture.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm border border-[#f0ebe3] flex items-center justify-center">
                  <BadgeCheck size={20} className="text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">Custom Made</h4>
                  <p className="text-[#6B6560] text-xs">Tailored to your specific dimensions and style.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm border border-[#f0ebe3] flex items-center justify-center">
                  <Users size={20} className="text-[#C9A227]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">Expert Designers</h4>
                  <p className="text-[#6B6560] text-xs">Guiding you to create the perfect interior vision.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#contact" 
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#8B5A2B] transition-all duration-300 shadow-lg"
              >
                Learn Our Story
              </a>
              <div className="flex items-center gap-2 px-4 py-2 border-l-2 border-[#C9A227]/20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white" />
                </div>
                <span className="text-xs text-[#6B6560] font-medium">Join 5,000+ happy families</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .appear {
          animation: slideUp 1s ease forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
