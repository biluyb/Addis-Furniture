"use client";

import { useState, useEffect } from "react";
import { 
  Shield, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  ChevronRight,
  Settings,
  Edit3,
  Globe,
  Save
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  const [brandName, setBrandName] = useState("ADDIS FURNITURE");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("brandName");
    if (stored) setBrandName(stored);
  }, []);

  const saveBranding = () => {
    setIsSaving(true);
    localStorage.setItem("brandName", brandName);
    window.dispatchEvent(new CustomEvent("brandChange", { detail: brandName }));
    setTimeout(() => setIsSaving(false), 1000);
  };

  const stats = [
    { label: "Studio Inquiries", val: "124", grow: "+12%", color: "text-emerald" },
    { label: "Conversion Rate", val: "8.4%", grow: "+2.1%", color: "text-gold" },
    { label: "AI Briefs", val: "450", grow: "+24%", color: "text-blue-500" },
  ];

  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-5 md:px-12">
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
           <div>
              <div className="flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                 <Shield size={14} /> Global Control Node
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-emerald">
                 Project <span className="text-gradient">Telemetry.</span>
              </h1>
           </div>
           
           {/* BRANDING NODE - The Whitelabel Feature */}
           <div className="w-full md:w-auto p-6 bg-white rounded-[2rem] border-2 border-gold/20 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col">
                 <span className="text-[8px] font-black uppercase text-gold tracking-widest mb-1">Proposal Whitelabel Mode</span>
                 <input 
                   type="text" 
                   value={brandName}
                   onChange={(e) => setBrandName(e.target.value.toUpperCase())}
                   className="bg-transparent text-emerald font-black text-xs uppercase tracking-widest outline-none border-b border-emerald/10 focus:border-gold pb-1"
                 />
              </div>
              <button 
                onClick={saveBranding}
                className={`w-full sm:w-12 h-12 flex items-center justify-center rounded-xl transition-all ${isSaving ? 'bg-gold text-white' : 'bg-emerald text-white'}`}
              >
                 {isSaving ? <Save size={18} className="animate-pulse" /> : <Edit3 size={18} />}
              </button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
           {stats.map((s, i) => (
             <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-emerald/5 shadow-xl">
                <div className="text-[10px] font-black text-emerald/20 uppercase tracking-[0.3em] mb-6">{s.label}</div>
                <div className="flex items-end justify-between">
                   <div className={`text-5xl font-display font-black ${s.color}`}>{s.val}</div>
                   <div className="text-[10px] font-black text-emerald tracking-widest bg-emerald/5 px-2 py-1 rounded-lg">{s.grow}</div>
                </div>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           {/* Lead Node */}
           <div className="bg-emerald p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                 <h2 className="text-3xl font-display font-black mb-10">Latest Feed</h2>
                 <div className="space-y-6">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-6 pb-6 border-b border-white/5 last:border-0 hover:translate-x-2 transition-transform cursor-pointer group">
                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                            <MessageSquare size={18} />
                         </div>
                         <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gold mb-1">Telegram Inquiry</div>
                            <p className="text-sm font-medium opacity-60">Customer requested pricing for Oslo Sectional...</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* System Logs */}
           <div className="bg-sand p-10 md:p-14 rounded-[3.5rem] border border-emerald/5">
              <h2 className="text-3xl font-display font-black text-emerald mb-10">System Logs</h2>
              <div className="space-y-4">
                 {[
                   { t: "10:45:12", m: "Amharic Node Sync Successful", c: "text-emerald" },
                   { t: "09:30:44", m: "Visualizer Cache Cleared", c: "text-emerald" },
                   { t: "08:12:05", m: `Active Brand: ${brandName}`, c: "text-gold" },
                   { t: "23:59:59", m: "Daily Security Sweep Done", c: "text-emerald" },
                 ].map((log, i) => (
                   <div key={i} className="flex gap-4 font-mono text-[10px] border-b border-emerald/5 pb-3">
                      <span className="opacity-30">{log.t}</span>
                      <span className={`${log.c} font-bold`}>{log.m}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
