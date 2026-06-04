"use client";

import { Send, Share2, Globe, MessageSquare, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
           
           {/* Brand Intelligence */}
           <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-xl">A</div>
                 <div className="flex flex-col">
                    <span className="font-display font-black text-xl tracking-tight">ADDIS</span>
                    <span className="text-[9px] font-bold text-accent uppercase tracking-[0.4em] leading-none mt-1">Horizon</span>
                 </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed font-light max-w-xs">
                 Redefining Ethiopian luxury through the lens of digital precision and master craftsmanship.
              </p>
              <div className="flex gap-4">
                 {[Share2, Globe, MessageSquare].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500">
                      <Icon size={18} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Studio */}
           <div>
              <h4 className="text-white/10 text-[9px] font-bold uppercase tracking-[0.5em] mb-10">Studio Ecosystem</h4>
              <ul className="space-y-4">
                 {["Visualizer 2.0", "Configurator", "360 Studio", "AI Lab"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-white/40 text-[10px] uppercase font-bold tracking-widest hover:text-accent transition-colors flex items-center gap-3">
                         <Zap size={10} className="text-accent/40" /> {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Support */}
           <div>
              <h4 className="text-white/10 text-[9px] font-bold uppercase tracking-[0.5em] mb-10">Support</h4>
              <ul className="space-y-4">
                 {["Concierge", "Warranty", "Logistics", "Privacy"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-white/40 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Node */}
           <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <h4 className="text-white/10 text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Contact Node</h4>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex flex-shrink-0 items-center justify-center text-accent">
                       <Send size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Telegram</div>
                       <a href="https://t.me/taologos" className="text-sm font-bold text-white hover:text-accent transition-colors">@taologos</a>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">
              © {currentYear} Addis Furniture. Powered by Digital Craftsmanship.
           </p>
           <div className="flex gap-10 text-[10px] font-bold text-white/10 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald rounded-full" /> System Operational</span>
           </div>
        </div>

      </div>
    </footer>
  );
}
