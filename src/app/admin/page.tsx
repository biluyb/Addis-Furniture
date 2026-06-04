"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Users, 
  TrendingUp, 
  Send, 
  Calendar, 
  ArrowUpRight, 
  Package, 
  Zap,
  LayoutDashboard,
  LogOut,
  Settings,
  Bell,
  Sparkles
} from "lucide-react";

export default function AdminDashboard() {
  const [visitorCount, setVisitorCount] = useState(7240);

  // Mock incrementing visitor count
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-dark flex text-white">
      
      {/* Tech Sidebar */}
      <aside className="w-64 bg-surface border-r border-white/5 hidden lg:flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
           <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-black text-white">A</div>
           <span className="font-display font-black text-lg tracking-tight">ADDIS<span className="text-accent underline decoration-2 underline-offset-4 ml-1">OS</span></span>
        </div>

        <nav className="flex-1 space-y-1">
           <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl bg-accent text-white font-bold text-sm glow-accent">
              <LayoutDashboard size={18} /> Dashboard
           </Link>
           {["Inventory", "Studio Labs", "Concierge", "Node Analytics"].map((item, i) => (
             <a key={i} href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/30 hover:bg-white/5 hover:text-white transition-all text-sm font-bold border border-transparent hover:border-white/5">
                {[Package, Sparkles, Send, TrendingUp][i] && <div className="text-white/20 hover:text-white"><Zap size={14} /></div>} {item}
             </a>
           ))}
        </nav>

        <div className="pt-6 border-t border-white/5 space-y-1">
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/30 hover:text-white transition-all text-sm font-bold">
              <Settings size={18} /> OS Config
           </a>
           <Link href="/" className="flex items-center gap-3 p-3 rounded-xl text-red-500/60 hover:text-red-500 transition-all text-sm font-bold">
              <LogOut size={18} /> Shutdown
           </Link>
        </div>
      </aside>

      {/* Main Terminal */}
      <main className="flex-1 lg:ml-64 p-8 md:p-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
           <div>
              <h1 className="text-3xl md:text-4xl font-display font-black mb-2">Systems <span className="text-gradient">Operational.</span></h1>
              <p className="text-sm text-white/20 font-bold uppercase tracking-[0.3em]">Horizon Studio v4.0.2 // Addis Node</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                 Active Traffic
              </div>
              <button className="p-3 bg-white/5 border border-white/5 rounded-xl text-white relative">
                 <Bell size={20} />
              </button>
           </div>
        </header>

        {/* Real-time Telemetry */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {[
             { icon: Users, label: "Live Nodes", val: visitorCount.toLocaleString(), color: "text-accent" },
             { icon: Send, label: "Active Comms", val: "124", color: "text-secondary" },
             { icon: Calendar, label: "Sync Tasks", val: "18", color: "text-white" },
             { icon: Zap, label: "System Load", val: "15%", color: "text-emerald" },
           ].map((stat, i) => (
             <div key={i} className="glass-panel p-8 rounded-[2.5rem] border-white/5">
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                      <stat.icon size={22} />
                   </div>
                   <div className="text-emerald text-[10px] font-bold">+4%</div>
                </div>
                <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-display font-black">{stat.val}</div>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Comm Log */}
           <div className="lg:col-span-2 glass-panel rounded-[3rem] border-white/5 overflow-hidden">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                 <h3 className="font-display font-black text-xl">Telegram Comms Log</h3>
                 <button className="text-[10px] font-black text-accent uppercase tracking-[0.2em] hover:underline">Full Trace</button>
              </div>
              <div className="divide-y divide-white/5">
                 {[
                   { name: "Abebe Bikila", flow: "Visualizer → Contact", time: "2m", status: "Active" },
                   { name: "Sara Tadesse", flow: "Configurator → Sync", time: "15m", status: "Pending" },
                   { name: "Dawit Bekele", flow: "Portfolio → Archive", time: "45m", status: "Closed" },
                 ].map((item, i) => (
                   <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-5">
                         <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[10px] font-bold">
                           {item.name[0]}
                         </div>
                         <div>
                            <div className="text-sm font-black">{item.name}</div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{item.flow}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-bold text-accent">{item.time} ago</div>
                         <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mt-1">{item.status}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* System Insights */}
           <div className="glass-panel rounded-[3rem] border-white/5 p-8 flex flex-col justify-between">
              <div>
                 <h3 className="font-display font-black text-xl mb-8">Studio Analytics</h3>
                 <div className="space-y-8">
                    {[
                      { label: "Visualizer Usage", val: 88, color: "bg-accent" },
                      { label: "360 Interactivity", val: 74, color: "bg-secondary" },
                      { label: "AR Engagement", val: 42, color: "bg-white/40" },
                    ].map((bar, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                            <span>{bar.label}</span>
                            <span>{bar.val}%</span>
                         </div>
                         <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.val}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                 <div className="flex items-center gap-3 mb-2">
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-[9px] font-black text-accent uppercase tracking-widest">Horizon AI Insight</span>
                 </div>
                 <p className="text-[11px] text-white/40 leading-relaxed italic">
                    &ldquo;Users are spending 4.2x more time in the Visualizer when Obsidian materials are featured. Optimize primary cache accordingly.&rdquo;
                 </p>
              </div>
           </div>

        </div>

      </main>
    </div>
  );
}
