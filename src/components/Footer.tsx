"use client";

import { Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-emerald pt-32 pb-12 border-t border-emerald/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
           
           {/* Brand */}
           <div className="space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-ivory font-serif font-black text-xl">A</div>
                 <div className="flex flex-col">
                    <span className="font-serif font-bold text-xl tracking-tight leading-none">ADDIS</span>
                    <span className="text-[10px] font-bold text-emerald/40 uppercase tracking-[0.3em] leading-none mt-1">Furniture</span>
                 </div>
              </div>
              <p className="text-emerald/50 text-sm leading-relaxed font-light">
                 Defining the pinnacle of Ethiopian craftsmanship. We craft high-end, bespoke furniture for the most discerning clients.
              </p>
              <div className="flex gap-4">
                 {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full border border-emerald/10 flex items-center justify-center hover:bg-emerald hover:text-white transition-all duration-500">
                      <Icon size={18} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Navigation */}
           <div>
              <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                 {["Our Legacy", "The Collection", "Custom Design", "Portfolio"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald/60 text-sm hover:text-emerald font-medium transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Expertise */}
           <div>
              <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Expertise</h4>
              <ul className="space-y-4">
                 {["Bespoke Living", "Office Planning", "Hotel Projects", "Interior Guide"].map((link) => (
                   <li key={link}>
                      <a href="#" className="text-emerald/60 text-sm hover:text-emerald font-medium transition-colors">{link}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact */}
           <div>
              <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
              <ul className="space-y-6">
                 <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sand/50 flex flex-shrink-0 items-center justify-center text-emerald">
                       <Send size={18} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.2em] mb-1">Telegram Chat</div>
                       <a href="https://t.me/taologos" className="text-sm font-bold hover:text-gold transition-colors">@taologos</a>
                    </div>
                 </li>
              </ul>
           </div>

        </div>

        <div className="pt-12 border-t border-emerald/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em]">
              © {currentYear} Addis Furniture. Handcrafted in Addis Ababa.
           </p>
           <div className="flex gap-10 text-[10px] font-bold text-emerald/30 uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-emerald transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald transition-colors">Terms</a>
           </div>
        </div>

      </div>
    </footer>
  );
}
