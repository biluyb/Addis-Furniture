"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, CheckCircle2, Factory, Palette, Truck, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Design & Consultation",
    desc: "We collaborate with you to create custom sketches and 3D visualizations that match your space and style.",
    tag: "Step 01"
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    desc: "Using seasoned Ethiopian wood and reinforced metal frames, our craftsmen build with millimetric precision.",
    tag: "Step 02"
  },
  {
    icon: ShieldCheck,
    title: "Premium Finishing",
    desc: "Five layers of high-grade coating and hand-stitched upholstery ensure a finish that feels and looks luxury.",
    tag: "Step 03"
  },
  {
    icon: Truck,
    title: "Secure Delivery",
    desc: "Professional white-glove delivery team ensures your furniture is installed perfectly in your home.",
    tag: "Step 04"
  }
];

export default function ProcessShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Manufacturing Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
           <div>
              <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                The Making Of Luxury
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Transparency in <br />
                <span className="text-gradient-gold">Every Stitch.</span>
              </h2>
              <p className="text-[#6B6560] text-lg mb-12 leading-relaxed">
                Most furniture shops hide their process. We showcase it. From the first sketch in Bole to the final polish, see how Addis Furniture leads in quality.
              </p>

              <div className="space-y-6">
                 {steps.map((step, i) => (
                   <div 
                      key={i}
                      onMouseEnter={() => setActiveStep(i)}
                      className={`flex gap-6 p-6 rounded-3xl transition-all duration-300 cursor-pointer border ${activeStep === i ? 'bg-[#FAF7F2] border-[#C9A227]/30 shadow-lg translate-x-2' : 'bg-white border-transparent hover:bg-[#FAF7F2]/50'}`}
                   >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeStep === i ? 'bg-[#C9A227] text-white' : 'bg-[#FAF7F2] text-[#8B5A2B]'}`}>
                         <step.icon size={24} />
                      </div>
                      <div>
                         <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">{step.tag}</span>
                            <h4 className="text-base font-bold text-[#1A1A1A]">{step.title}</h4>
                         </div>
                         <p className="text-xs text-[#6B6560] leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative group">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image 
                    src="/images/office.png" 
                    alt="Manufacturing Process" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                       <Play fill="#C9A227" className="ml-1 text-[#C9A227]" size={32} />
                    </button>
                 </div>
              </div>
              
              {/* Dynamic Overlay Label */}
              <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-white p-6 rounded-2xl shadow-xl max-w-[200px] animate-pulse">
                 <div className="text-xs font-bold uppercase tracking-widest mb-1">Live Update</div>
                 <div className="text-lg font-bold leading-tight">Currently working on 42 custom projects</div>
              </div>
           </div>
        </div>

        {/* Real Customer Homes Slider Hint */}
        <div className="bg-[#FAF7F2] rounded-[3rem] p-10 md:p-16 border border-[#f0ebe3] relative overflow-hidden">
           <div className="relative z-10 text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Addis Furniture <span className="text-[#C9A227]">In Real Homes</span>
              </h3>
              <p className="text-[#6B6560] max-w-xl mx-auto">
                No studio lighting, no tricks. See how our furniture transforms actual living rooms, offices, and bedrooms across Addis Ababa.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: "/images/hero.png", loc: "Bole Apartment" },
                { img: "/images/bedroom.png", loc: "Old Airport Villa" },
                { img: "/images/dining.png", loc: "CMC Townhouse" },
                { img: "/images/office.png", loc: "Kazanchis Office" },
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                   <Image src={item.img} alt={item.loc} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                      <div className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">Verified Customer</div>
                      <div className="text-white font-bold text-xs">{item.loc}</div>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5A2B] hover:text-[#C9A227] transition-colors">
                View Video Testimonials Gallery <ChevronRight size={18} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}

function ChevronRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
