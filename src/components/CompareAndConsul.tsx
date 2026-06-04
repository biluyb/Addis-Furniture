"use client";



import { Scale, Users, Send, Check, ArrowRight } from "lucide-react";

export default function CompareAndConsul() {


  return (
    <section id="compare-consul" className="section-padding bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Comparison Concept */}
          <div className="relative">
             <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[#f0ebe3] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 bg-[#C9A227]/10 rounded-xl flex items-center justify-center text-[#C9A227]">
                      <Scale size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-[#1A1A1A]">Smart Comparison</h3>
                </div>
                
                <div className="space-y-4">
                   <div className="grid grid-cols-3 text-[10px] font-bold text-[#6B6560] uppercase tracking-widest pb-4 border-b border-[#FAF7F2]">
                      <span>Feature</span>
                      <span className="text-center">Oslo Sofa</span>
                      <span className="text-center">Harar Set</span>
                   </div>
                   {[
                     { label: "Material", a: "Velvet", b: "Leather" },
                     { label: "Warranty", a: "2 Years", b: "5 Years" },
                     { label: "Customizable", a: true, b: true },
                     { label: "Lead Time", a: "3 Days", b: "14 Days" },
                   ].map((row, i) => (
                     <div key={i} className="grid grid-cols-3 text-xs md:text-sm py-3 border-b border-[#FAF7F2]/50 last:border-0">
                        <span className="font-medium text-[#6B6560]">{row.label}</span>
                        <div className="flex justify-center">
                           {typeof row.a === 'boolean' ? <Check size={16} className="text-[#25D366]" /> : <span className="font-bold text-[#1A1A1A]">{row.a}</span>}
                        </div>
                        <div className="flex justify-center">
                           {typeof row.b === 'boolean' ? <Check size={16} className="text-[#25D366]" /> : <span className="font-bold text-[#1A1A1A]">{row.b}</span>}
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-10 p-4 bg-[#1A1A1A] rounded-2xl flex items-center justify-between">
                   <span className="text-white text-xs font-bold">Compare up to 4 items</span>
                   <button className="text-[#C9A227] text-xs font-bold uppercase tracking-widest hover:underline">Explore Tool</button>
                </div>
             </div>
             
             {/* Decorative Label */}
             <div className="absolute -bottom-6 -right-6 bg-[#8B5A2B] text-white px-6 py-4 rounded-2xl shadow-xl z-10 hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Total Accuracy</p>
                <p className="text-sm font-bold">98% customer satisfaction</p>
             </div>
          </div>

          {/* Consultation CTA */}
          <div>
             <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                Expert Advice
             </span>
             <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                Talk to a <br />
                <span className="text-gradient-gold">Furniture Expert.</span>
             </h2>
             <p className="text-[#6B6560] text-lg mb-10 leading-relaxed">
                Not sure which size fits your small apartment? Or which fabric lasts longest with pets? Our interior experts are online to help you choose the perfect piece.
             </p>

             <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#f0ebe3] flex flex-col gap-4">
                   <div className="w-10 h-10 bg-[#0088cc]/10 text-[#0088cc] rounded-xl flex items-center justify-center">
                      <Send size={22} />
                   </div>
                   <h4 className="font-bold text-[#1A1A1A]">Live Telegram Support</h4>
                   <p className="text-xs text-[#6B6560]">Instant answers during business hours.</p>
                   <a href="https://t.me/taologos" className="text-xs font-bold text-[#C9A227] flex items-center gap-2 hover:underline">
                      Start Chat <ArrowRight size={14} />
                   </a>
                </div>
                <div className="p-6 bg-[#1A1A1A] rounded-2xl shadow-xl flex flex-col gap-4">
                   <div className="w-10 h-10 bg-white/10 text-[#C9A227] rounded-xl flex items-center justify-center">
                      <Users size={22} />
                   </div>
                   <h4 className="font-bold text-white">Design Consult</h4>
                   <p className="text-xs text-white/50">Full space planning & visualization.</p>
                   <button className="text-xs font-bold text-[#C9A227] flex items-center gap-2 hover:underline">
                      Book Session <ArrowRight size={14} />
                   </button>
                </div>
             </div>

             <div className="flex items-center gap-4 text-xs font-bold text-[#1A1A1A] uppercase tracking-widest border-t border-[#1A1A1A]/5 pt-8">
                <span className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                   3 Designers Online Now
                </span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
