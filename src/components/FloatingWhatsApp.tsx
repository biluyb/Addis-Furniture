"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <a 
        href="https://wa.me/251911000000?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20furniture."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" className="relative z-10" />
      </a>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-[10px] whitespace-nowrap px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-white/10 uppercase tracking-widest font-bold">
        Chat with us
      </div>
    </div>
  );
}
