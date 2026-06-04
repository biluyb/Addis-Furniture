"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Box, Dna, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-slow-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} className="text-accent" />
              The Future of Furniture Experience
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none mb-8">
               Design Your <br />
               <span className="text-gradient">Dream Home.</span>
            </h1>

            <p className="text-white/40 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
               More than a showroom—an immersive digital studio where your vision meets Ethiopian craftsmanship. Explore, customize, and visualize in high-fidelity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button className="btn-modern flex items-center justify-center gap-3 group">
                Enter Studio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-ghost">
                View Gallery
              </button>
            </div>

            {/* Feature Shortcuts (Mobile First Grid) */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
               {[
                 { icon: Box, label: "Visualizer", id: "#visualizer" },
                 { icon: Dna, label: "Configure", id: "#configurator" },
                 { icon: Compass, label: "360 View", id: "#360" },
                 { icon: Sparkles, label: "AI Tools", id: "#ai" },
               ].map((item, i) => (
                 <a 
                   key={i} 
                   href={item.id}
                   className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center gap-3 hover:bg-white/[0.08] hover:border-accent/40 transition-all group"
                 >
                    <item.icon size={20} className="text-white/30 group-hover:text-accent transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">{item.label}</span>
                 </a>
               ))}
            </div>
          </div>

          {/* Abstract Visual (Hidden on small mobile for focus) */}
          <div className="hidden xl:flex lg:col-span-12 xl:col-span-5 relative h-[700px] w-full items-center justify-center">
             <div className="relative w-full aspect-square rounded-full border-2 border-white/5 animate-spin-slow flex items-center justify-center">
                <div className="absolute top-1/4 left-0 w-4 h-4 bg-accent rounded-full glow-accent" />
                <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-secondary rounded-full" />
                
                <div className="w-[85%] aspect-square rounded-[3rem] overflow-hidden rotate-[15deg] shadow-2xl">
                   <Image 
                     src="/images/hero.png" 
                     alt="Modern Living" 
                     fill 
                     className="object-cover"
                   />
                </div>
             </div>
             
             {/* Floating UI Elements */}
             <div className="absolute -right-4 top-1/4 glass-panel p-6 rounded-3xl animate-bounce-slow">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                      <Sparkles size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-white/40 uppercase">AI Suggestion</div>
                      <div className="text-xs font-bold font-display">Deep Velvet Indigo</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-20px); }
        }
        .animate-spin-slow {
           animation: spin-slow 60s linear infinite;
        }
        .animate-bounce-slow {
           animation: bounce-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
