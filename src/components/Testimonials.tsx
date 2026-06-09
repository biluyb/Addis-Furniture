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
    
    return () => {
      window.removeEventListener("langChange", h);
      observer.disconnect();
    };
  }, []);

  const t = translations[lang];

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
             Verified Stories
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-emerald tracking-tight">
             Loved by <br /><span className="text-gradient">Thousands.</span>
          </h2>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="testi-card bg-sand p-8 md:p-10 rounded-[2.5rem] border border-emerald/5 relative shadow-lg"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <Quote className="absolute top-10 right-10 text-gold/10" size={40} />

              <div className="flex gap-0.5 mb-6">
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} fill="#C5A039" color="#C5A039" />)}
              </div>

              <p className="text-emerald-soft text-base font-medium leading-relaxed mb-10 italic">
                &ldquo;{lang === "en" ? testi.text : testi.textAm}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-emerald/5 pt-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald text-white flex items-center justify-center font-black text-sm shadow-xl shadow-emerald/20">
                  {testi.initials}
                </div>
                <div>
                  <div className="text-emerald font-black text-base leading-none mb-1">
                     {lang === "en" ? testi.name : testi.nameAm}
                  </div>
                  <div className="text-gold text-[10px] font-black uppercase tracking-widest leading-none">
                     {testi.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-16 md:mt-20">
          <div className="flex -space-x-3">
            {["DB", "ST", "MA", "JB"].map((initials, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-emerald border-2 border-white flex items-center justify-center text-white text-[10px] font-black">
                {initials[0]}
              </div>
            ))}
          </div>
          <p className="text-emerald-soft text-[10px] font-black uppercase tracking-[0.2em] text-center">
             <span className="text-emerald">5,000+ Customers</span> Trust our Vision
          </p>
        </div>
      </div>
    </section>
  );
}
