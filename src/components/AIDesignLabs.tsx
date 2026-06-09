"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Check, 
  Monitor, 
  Coffee, 
  Home, 
  Zap,
} from "lucide-react";
import { translations } from "@/utils/translations";

const questions = [
  {
    id: "style",
    question: "Select your Aesthetic DNA.",
    questionAm: "የመረጡት የዲዛይን ዘይቤ የትኛው ነው?",
    options: [
      { id: "modern", name: "Modern Minimal", icon: Monitor, am: "ዘመናዊ" },
      { id: "heritage", name: "Ethiopian Heritage", icon: Home, am: "ባህላዊ" },
      { id: "executive", name: "Corporate Bold", icon: Zap, am: "ቢሮ" },
    ]
  },
  {
    id: "vibe",
    question: "Primary Spatial Atmosphere?",
    questionAm: "የክፍሉ ድባብ ምን ይሁን?",
    options: [
      { id: "social", name: "Social Hub", icon: Coffee, am: "ሳሎን" },
      { id: "focus", name: "Silent Focus", icon: Monitor, am: "መስሪያ" },
      { id: "rest", name: "Restorative", icon: Home, am: "መኝታ" },
    ]
  }
];

const results: Record<string, any> = {
  "modern-social": {
    name: "The Oslo Collective",
    nameAm: "ኦስሎ ስብስብ",
    desc: "A sanctuary of clean lines and neutral velvets. Perfect for modern Addis living rooms.",
    descAm: "ለዘመናዊ አዲስ አበባ ቤቶች ተስማሚ የሆነ ጥራት ያለው እና ዘመናዊ የሳሎን ስብስብ።",
    image: "/images/hero.png",
    items: ["Oslo Sectional", "Glass Pivot Table", "Ambient Arc Lamp"]
  },
  "heritage-rest": {
    name: "The Axum Bed-Suite",
    nameAm: "የአክሱም አልጋ ስብስብ",
    desc: "Merging ancestral carvings with modern orthopedic comfort for an elite rest experience.",
    descAm: "ባህላዊ ቅርጻቅርጽን ከዘመናዊ ምቾት ጋር ያገናኘ ልዩ አልጋ።",
    image: "/images/bedroom.png",
    items: ["King Heritage Bed", "Carved Nightstands", "Silk Linen Set"]
  }
};

export default function AIDesignLabs() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "am";
    if (stored) setLang(stored);
    const h = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", h);
    return () => window.removeEventListener("langChange", h);
  }, []);

  const handleSelect = (id: string, val: string) => {
    const newAnswers = { ...answers, [id]: val };
    setAnswers(newAnswers);
    if (step < questions.length - 1) setStep(step + 1);
    else generateResult(newAnswers);
  };

  const generateResult = (finalAnswers: any) => {
    setLoading(true);
    const key = `${finalAnswers.style}-${finalAnswers.vibe}`;
    setTimeout(() => {
      setResult(results[key] || results["modern-social"]);
      setLoading(false);
    }, 1500);
  };

  const t = translations[lang];

  return (
    <section id="ai" className="bg-sand pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-5 md:px-12">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl shadow-emerald/10">
              <Sparkles size={14} className="animate-pulse" /> {t.aiTools}
           </div>
           <h2 className="text-3xl md:text-6xl font-display font-black text-emerald leading-tight">
              AI Powered <span className="text-gradient leading-tight">Curation.</span>
           </h2>
        </div>

        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] border border-emerald/5 shadow-2xl p-8 md:p-14 min-h-[500px] flex items-center justify-center relative">
           
           {!result && !loading && (
             <div className="w-full">
                <div className="text-center mb-12">
                   <h3 className="text-2xl font-display font-black text-emerald mb-2">{lang === "en" ? questions[step].question : questions[step].questionAm}</h3>
                   <p className="text-emerald/20 text-[9px] font-black uppercase tracking-widest">Node Node Step {step + 1} // 4.0.2</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                   {questions[step].options.map((opt) => (
                     <button key={opt.id} onClick={() => handleSelect(questions[step].id, opt.id)}
                       className="group p-8 rounded-[2rem] bg-sand border-2 border-transparent hover:border-gold hover:bg-white transition-all flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center text-emerald/30 group-hover:text-gold group-hover:bg-gold/10 transition-all">
                           <opt.icon size={28} />
                        </div>
                        <div className="text-center">
                           <div className="text-sm font-black text-emerald">{lang === "en" ? opt.name : opt.am}</div>
                        </div>
                     </button>
                   ))}
                </div>
             </div>
           )}

           {loading && (
             <div className="flex flex-col items-center gap-8">
                <div className="w-16 h-16 border-4 border-emerald/5 border-t-gold rounded-full animate-spin" />
                <p className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.4em] animate-pulse">Analyzing Pattern DNA...</p>
             </div>
           )}

           {result && (
             <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src={result.image} alt="Res" fill className="object-cover" /></div>
                <div>
                   <div className="flex items-center gap-3 text-gold mb-6"><Sparkles size={16} /><span className="text-[9px] font-black uppercase tracking-widest">Match Result</span></div>
                   <h3 className="text-3xl md:text-5xl font-display font-black text-emerald mb-6">{lang === "en" ? result.name : result.nameAm}</h3>
                   <p className="text-emerald-soft text-base font-medium leading-relaxed mb-10">{lang === "en" ? result.desc : result.descAm}</p>
                   <div className="flex gap-4">
                      <button onClick={() => window.open('https://t.me/taologos', '_blank')} className="flex-1 px-8 py-5 bg-emerald text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold transition-all">{t.connectStudio} <Send size={14} /></button>
                      <button onClick={() => { setStep(0); setResult(null); }} className="p-5 rounded-2xl border-2 border-emerald/5 text-emerald hover:bg-emerald hover:text-white transition-all"><RefreshCw size={18} /></button>
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
