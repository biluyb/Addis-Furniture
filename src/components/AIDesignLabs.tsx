"use client";

import { useState } from "react";
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
  ChevronRight
} from "lucide-react";

const questions = [
  {
    id: "style",
    question: "Select your Aesthetic DNA.",
    questionAm: "የመረጡት የዲዛይን ዘይቤ",
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
    desc: "A sanctuary of clean lines and neutral velvets. Perfect for modern Addis living rooms.",
    image: "/images/hero.png",
    items: ["Oslo Sectional", "Glass Pivot Table", "Ambient Arc Lamp"]
  },
  "heritage-rest": {
    name: "The Axum Bed-Suite",
    desc: "Merging ancestral carvings with modern orthopedic comfort for an elite rest experience.",
    image: "/images/bedroom.png",
    items: ["King Heritage Bed", "Carved Nightstands", "Silk Linen Set"]
  },
  "executive-focus": {
    name: "The Architect Node",
    desc: "Engineered for high-output leaders. Minimalist steel meeting walnut precision.",
    image: "/images/office.png",
    items: ["Architect Pro Desk", "Zero-G Ergonomic Chair", "Media Console"]
  }
};

export default function AIDesignLabs() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSelect = (id: string, val: string) => {
    const newAnswers = { ...answers, [id]: val };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateResult(newAnswers);
    }
  };

  const generateResult = (finalAnswers: any) => {
    setLoading(true);
    const key = `${finalAnswers.style}-${finalAnswers.vibe}`;
    
    setTimeout(() => {
      setResult(results[key] || results["modern-social"]);
      setLoading(false);
    }, 2000);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section id="ai" className="section-padding bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} className="animate-pulse" /> Addis AI Design Lab
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-black text-emerald">
              AI Powered <span className="text-gradient">Curation.</span>
           </h2>
        </div>

        <div className="bg-white rounded-[4rem] border border-emerald/5 shadow-2xl p-8 md:p-20 relative overflow-hidden min-h-[500px] flex items-center justify-center">
           
           {!result && !loading && (
             <div className="w-full">
                <div className="text-center mb-12">
                   <h3 className="text-3xl font-display font-black text-emerald mb-4">{questions[step].question}</h3>
                   <p className="text-emerald/30 text-[10px] font-bold uppercase tracking-widest leading-loose">Step {step + 1} of {questions.length} // Node Processing</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                   {questions[step].options.map((opt) => (
                     <button
                       key={opt.id}
                       onClick={() => handleSelect(questions[step].id, opt.id)}
                       className="group p-10 rounded-[3rem] bg-sand border border-transparent hover:border-gold hover:bg-white hover:shadow-2xl transition-all flex flex-col items-center gap-6"
                     >
                        <div className="w-20 h-20 rounded-full bg-ivory flex items-center justify-center text-emerald/30 group-hover:text-gold group-hover:bg-gold/10 transition-all">
                           <opt.icon size={32} />
                        </div>
                        <div className="text-center">
                           <div className="text-sm font-bold text-emerald mb-1">{opt.name}</div>
                           <div className="text-[10px] font-medium text-emerald/20">{opt.am}</div>
                        </div>
                     </button>
                   ))}
                </div>
             </div>
           )}

           {loading && (
             <div className="flex flex-col items-center gap-8">
                <div className="relative">
                   <div className="w-20 h-20 rounded-full border-4 border-emerald/5 border-t-gold animate-spin" />
                   <Sparkles size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold" />
                </div>
                <div className="text-center">
                   <p className="text-[10px] font-bold text-emerald/20 uppercase tracking-[0.4em] animate-pulse">Analyzing Space DNA & Heritage Patterns...</p>
                </div>
             </div>
           )}

           {result && (
             <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                   <Image src={result.image} alt="Result" fill className="object-cover" />
                </div>
                <div>
                   <div className="flex items-center gap-4 text-gold mb-6">
                      <Sparkles size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Matched Concept Found</span>
                   </div>
                   <h3 className="text-4xl font-display font-black text-emerald mb-6">{result.name}</h3>
                   <p className="text-emerald/60 text-lg leading-relaxed mb-10">{result.desc}</p>
                   
                   <div className="space-y-4 mb-12">
                      {result.items.map((item: string) => (
                        <div key={item} className="flex items-center gap-4 text-sm font-bold text-emerald">
                           <div className="w-6 h-6 rounded-lg bg-emerald/5 flex items-center justify-center text-emerald">
                              <Check size={14} />
                           </div>
                           {item}
                        </div>
                      ))}
                   </div>

                   <div className="flex gap-4">
                      <button 
                        onClick={() => window.open(`https://t.me/taologos?text=AI Recommendation Brief: I matched with ${result.name}. Please share pricing.`, '_blank')}
                        className="flex-1 px-8 py-5 bg-emerald text-white rounded-[2rem] font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-gold transition-all"
                      >
                         Send brief to Telegram <Send size={16} />
                      </button>
                      <button onClick={reset} className="p-5 rounded-[2rem] border border-emerald/10 text-emerald hover:bg-emerald hover:text-white transition-all">
                         <RefreshCw size={18} />
                      </button>
                   </div>
                </div>
             </div>
           )}

        </div>

      </div>
    </section>
  );
}
