"use client";

import Image from "next/image";
import { 
  ArrowUpRight, 
  Rotate3d, 
  ShieldCheck, 
  Truck, 
  Settings2, 
  MessageSquare,
  Box
} from "lucide-react";


export default function BentoShowcase() {
  return (
    <section id="showcase" className="section-padding bg-[#0D0D0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
           <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Master Collection</span>
           <h2 className="text-4xl md:text-7xl font-display font-black leading-tight">
              Craft & <span className="text-gradient">Computation.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
           
           {/* Interactive 360 Feature Card */}
           <div className="lg:col-span-2 lg:row-span-2 bento-card bg-accent">
              <Image src="/images/hero.png" alt="360 View" fill className="object-cover opacity-60 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent" />
              <div className="relative h-full p-10 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20">
                       <Rotate3d size={28} className="animate-spin-slow" />
                    </div>
                    <span className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white">Full 360° Studio</span>
                 </div>
                 <div>
                    <h3 className="text-3xl font-display font-black text-white mb-4">Interact with <br />Every Curve.</h3>
                    <p className="text-white/70 text-sm max-w-xs mb-8">Swipe to rotate your creation in high-definition glory. See the fabric grain, the wood finish, and the structural mastery.</p>
                    <button className="px-6 py-3 bg-white text-dark rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Launch Viewer</button>
                 </div>
              </div>
           </div>

           {/* Heritage Card */}
           <div className="lg:col-span-2 lg:row-span-1 bento-card">
              <div className="absolute inset-0 bg-white/[0.02]" />
              <div className="relative h-full p-10 flex gap-8 items-center">
                 <div className="hidden sm:block relative w-32 aspect-square rounded-[2rem] overflow-hidden">
                    <Image src="/images/bedroom.png" alt="Heritage" fill className="object-cover" />
                 </div>
                 <div>
                    <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">Heritage</div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">Bespoke Mastery</h3>
                    <p className="text-white/40 text-xs leading-relaxed max-w-sm">Combining ancestral Ethiopian joinery with state-of-the-art precision tools.</p>
                 </div>
                 <button className="ml-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
           </div>

           {/* Stats / Proof Cards */}
           <div className="lg:col-span-1 lg:row-span-1 bento-card p-10 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                 <ShieldCheck size={24} />
              </div>
              <div>
                 <div className="text-3xl font-display font-black text-white mb-1">10Y</div>
                 <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Full Warranty</div>
              </div>
           </div>

           <div className="lg:col-span-1 lg:row-span-1 bento-card p-10 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                 <Truck size={24} />
              </div>
              <div>
                 <div className="text-3xl font-display font-black text-white mb-1">24H</div>
                 <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Addis Delivery</div>
              </div>
           </div>

           {/* Process Highlight */}
           <div className="lg:col-span-2 lg:row-span-1 bento-card border-none overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2.5rem]" />
              <div className="relative h-full p-10 flex flex-col justify-center">
                 <h3 className="text-2xl font-display font-black text-white mb-6">The Smart System.</h3>
                 <div className="flex gap-4">
                    {[
                      { icon: Settings2, label: "Precision" },
                      { icon: MessageSquare, label: "Support" },
                      { icon: Box, label: "Logistics" }
                    ].map((item, i) => (
                      <div key={i} className="flex-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center gap-2">
                         <item.icon size={18} className="text-accent" />
                         <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
           from { transform: rotateY(0deg); }
           to { transform: rotateY(360deg); }
        }
        .animate-spin-slow {
           animation: spin-slow 10s linear infinite;
           transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
