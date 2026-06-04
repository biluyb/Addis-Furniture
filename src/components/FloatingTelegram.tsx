"use client";

import { Send } from "lucide-react";

export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/taologos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] bg-[#0088cc] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-3"
      title="Contact us on Telegram"
    >
      <div className="absolute -inset-1 bg-[#0088cc] rounded-full blur opacity-30 group-hover:opacity-50 animate-pulse" />
      <Send size={28} className="relative z-10 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-widest relative z-10">
        Chat on Telegram
      </span>
    </a>
  );
}
