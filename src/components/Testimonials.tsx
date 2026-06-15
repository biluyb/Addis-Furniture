"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { translations } from "@/utils/translations";

const testimonials = [
  {
    id: "t1",
    name: "Selamawit T.",
    nameAm: "ሰላማዊት ተ.",
    location: "Bole, Addis Ababa",
    text: "The quality exceeded our expectations. The sofa is stunning and the delivery team was professional.",
    textAm: "ጥራቱ ከጠበቅነው በላይ ነው። ሶፋው በጣም የሚያምር ነው፤ ማጓጓዣ ቡድኑም በጣም ሙያዊ ነበር።",
    initials: "ST",
  },
  {
    id: "t2",
    name: "Dawit B.",
    nameAm: "ዳዊት በ.",
    location: "CMC, Addis Ababa",
    text: "We furnished our entire apartment. The bedroom set is beautiful. Craftsmanship is on par with imports.",
    textAm: "ቤታችንን በሙሉ እዚህ ነው ያስገጠምነው። የመኝታ ክፍሉ እቃ በጣም ያምራል፤ ስራው ከውጭ ከሚገባ እቃ አይለይም።",
    initials: "DB",
  },
  {
    id: "t3",
    name: "Meron A.",
    nameAm: "ሜሮን አ.",
    location: "Sarbet, Addis Ababa",
    text: "Ordered a custom dining set. Flawless installation. Highly recommended!",
    textAm: "ልዩ የራት ጠረጴዛ አዝዤ ነበር። አገጣጠሙ እና ስራው ፍጹም ነው። በጣም እመክራለሁ!",
    initials: "MA",
  },
];

export default function Testimonials() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".testi-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).classList.add("appear");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener("langChange", h);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 md:mb-24">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-gold/20">
             Institutional Trust
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-black text-emerald tracking-tighter">
             Loved by <br /><span className="text-gradient leading-tight">Thousands.</span>
          </h2>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="testi-card bg-sand p-10 md:p-14 rounded-[3rem] border border-emerald/5 relative shadow-xl opacity-0 translate-y-12 transition-all duration-1000 ease-out"
            >
              <Quote className="absolute top-12 right-12 text-gold/10" size={50} />

              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map((s) => <Star key={s} size={16} fill="#C5A039" color="#C5A039" />)}
              </div>

              <p className="text-emerald text-lg md:text-xl font-medium leading-relaxed mb-12 italic border-l-4 border-gold/30 pl-6">
                &ldquo;{lang === "en" ? testi.text : testi.textAm}&rdquo;
              </p>

              <div className="flex items-center gap-5 border-t border-emerald/5 pt-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald text-white flex items-center justify-center font-black text-base shadow-2xl">
                  {testi.initials}
                </div>
                <div>
                  <div className="text-emerald font-black text-lg leading-none mb-1.5">
                     {lang === "en" ? testi.name : testi.nameAm}
                  </div>
                  <div className="text-gold text-[10px] font-black uppercase tracking-[0.3em] leading-none">
                     {testi.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-24">
          <div className="flex -space-x-4">
            {["DB", "ST", "MA", "JB", "RK"].map((initials, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-emerald border-4 border-white flex items-center justify-center text-white text-[11px] font-black shadow-lg">
                {initials[0]}
              </div>
            ))}
          </div>
          <p className="text-emerald-soft text-[11px] font-black uppercase tracking-[0.3em] text-center bg-sand px-8 py-4 rounded-full border border-emerald/5">
             <span className="text-emerald">5,000+ Studios</span> Architecture verified
          </p>
        </div>
      </div>

      <style jsx>{`
        .testi-card.appear {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
