"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with subtle pattern or gradient */}
      <div className="absolute inset-0 bg-[#1A1A1A] -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5A2B]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
        >
          Ready to Bring <br />
          <span className="text-gradient-gold">Luxury Home?</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Visit our showroom in Addis Ababa today or start a conversation with our designer to begin your custom furniture journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://wa.me/251911000000" 
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C9A227] hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl shadow-[#c9a22720] group"
          >
            <MessageCircle className="group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
          
          <a 
            href="tel:+251911000000" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500"
          >
            <Phone size={20} />
            Call Showroom
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Free Consultation</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Addis-Wide Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">2-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
