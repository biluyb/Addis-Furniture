"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Sofa, Bed, Briefcase, Utensils, Droplets, Shield, Sun, CheckCircle } from "lucide-react";

const packages = [
  {
    id: "apt-package",
    title: "The Apartment Essential",
    desc: "Complete 1-bedroom setup for modern urban living in Addis.",
    includes: ["L-Sofa", "TV Stand", "Bed Frame", "2 Side Tables"],
    price: "ETB 145,000",
    save: "Save 15% vs separate items",
    icon: Sofa,
    bg: "bg-[#FAF7F2]"
  },
  {
    id: "office-package",
    title: "Executive HQ Bundle",
    desc: "Professional setup for CEOs and business owners.",
    includes: ["Executive Desk", "Leather Chair", "Bookshelf", "Meeting Table"],
    price: "ETB 98,000",
    save: "Save 12% vs separate items",
    icon: Briefcase,
    bg: "bg-[#FAF7F2]"
  }
];

const guides = [
  {
    title: "Sofa Care",
    icon: Droplets,
    tips: ["Vacuum weekly", "Blot spills instantly", "Avoid direct Addis sun"]
  },
  {
    title: "Wood Protection",
    icon: Shield,
    tips: ["Use coasters", "Polish with wax", "Maintain humidity"]
  }
];

export default function ServiceAndGuides() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <section id="services-guides" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-4 mb-16 justify-center">
           <button 
             onClick={() => setActiveTab("packages")}
             className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === "packages" ? 'bg-[#1A1A1A] text-white shadow-xl' : 'bg-[#FAF7F2] text-[#6B6560] hover:bg-[#C9A227]/10'}`}
           >
              Furniture Packages
           </button>
           <button 
             onClick={() => setActiveTab("guides")}
             className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === "guides" ? 'bg-[#1A1A1A] text-white shadow-xl' : 'bg-[#FAF7F2] text-[#6B6560] hover:bg-[#C9A227]/10'}`}
           >
              Care & Inspiration Center
           </button>
        </div>

        {activeTab === "packages" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                 Curated <span className="text-[#C9A227]">Bundles.</span>
               </h2>
               <p className="text-[#6B6560] mt-4 max-w-lg mx-auto">
                 Save time and money with our professionally designed furniture packages.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {packages.map((pkg) => (
                 <div key={pkg.id} className={`${pkg.bg} rounded-[2.5rem] p-8 md:p-12 border border-[#f0ebe3] group hover:border-[#C9A227] transition-all duration-500`}>
                    <div className="flex justify-between items-start mb-8">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg text-[#C9A227]">
                          <pkg.icon size={28} />
                       </div>
                       <span className="bg-[#25D366]/10 text-[#25D366] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {pkg.save}
                       </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{pkg.title}</h3>
                    <p className="text-sm text-[#6B6560] mb-8">{pkg.desc}</p>
                    
                    <div className="space-y-3 mb-10">
                       {pkg.includes.map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-xs font-medium text-[#1A1A1A]">
                            <CheckCircle size={16} className="text-[#C9A227]" />
                            {item}
                         </div>
                       ))}
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-[#1A1A1A]/5">
                       <div>
                          <div className="text-[10px] font-bold text-[#6B6560] uppercase tracking-widest mb-1">Package Price</div>
                          <div className="text-2xl font-bold text-[#1A1A1A]">{pkg.price}</div>
                       </div>
                       <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#C9A227] transition-colors">
                          Customize Bundle
                       </button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === "guides" && (
          <div className="animate-fadeIn">
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-6">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Expert Care <br/> For Your Home.</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                    Furniture from Addis Furniture is an investment. We provide full guides on how to keep your pieces looking new in the Ethiopian climate.
                  </p>
                  
                  {guides.map((guide, i) => (
                    <div key={i} className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#f0ebe3]">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C9A227] shadow-sm">
                             <guide.icon size={20} />
                          </div>
                          <h4 className="font-bold text-[#1A1A1A]">{guide.title}</h4>
                       </div>
                       <ul className="space-y-2">
                          {guide.tips.map((tip, j) => (
                            <li key={j} className="text-xs text-[#6B6560] flex items-center gap-2">
                               <div className="w-1 h-1 bg-[#C9A227] rounded-full" />
                               {tip}
                            </li>
                          ))}
                       </ul>
                    </div>
                  ))}
               </div>

               <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                     <Image src="/images/hero.png" alt="Inspiration" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                        <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mb-2">Trend Report</span>
                        <h4 className="text-white text-xl font-bold mb-4">Modern Living in 2024: The Addis Guide</h4>
                        <button className="text-white text-xs font-bold underline hover:text-[#C9A227] transition-colors">Read Article</button>
                     </div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                     <Image src="/images/office.png" alt="Inspiration" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                        <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mb-2">Pro Tips</span>
                        <h4 className="text-white text-xl font-bold mb-4">5 Ways to Style Your Home Office</h4>
                        <button className="text-white text-xs font-bold underline hover:text-[#C9A227] transition-colors">Read Article</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
