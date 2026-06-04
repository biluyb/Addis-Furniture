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
  Bell
} from "lucide-react";

export default function AdminDashboard() {
  const [visitorCount, setVisitorCount] = useState(7240);
  const inquiries = 124;
  const appointments = 18;

  // Mock incrementing visitor count to simulate real-time traffic
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-ivory flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-emerald text-white hidden lg:flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
           <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-emerald">A</div>
           <span className="font-serif font-bold text-lg tracking-tight">Addis<span className="text-gold">Admin</span></span>
        </div>

        <nav className="flex-1 space-y-2">
           <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl bg-gold text-emerald font-bold text-sm">
              <LayoutDashboard size={18} /> Dashboard
           </Link>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium border border-transparent hover:border-white/10">
              <Package size={18} /> Inventory
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium border border-transparent hover:border-white/10">
              <Send size={18} /> Inquiries
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium border border-transparent hover:border-white/10">
              <Calendar size={18} /> Appointments
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium border border-transparent hover:border-white/10">
              <TrendingUp size={18} /> Analytics
           </a>
        </nav>

        <div className="pt-6 border-t border-white/5 space-y-2">
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <Settings size={18} /> Settings
           </a>
           <Link href="/" className="flex items-center gap-3 p-3 rounded-xl text-gold/60 hover:text-white transition-all text-sm font-bold">
              <LogOut size={18} /> Exit Admin
           </Link>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
           <div>
              <h1 className="text-2xl md:text-3xl font-serif text-emerald font-bold">Welcome back, Design Team</h1>
              <p className="text-sm text-emerald/50">Your showroom experience hub in Addis Ababa.</p>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-3 bg-white border border-emerald/5 rounded-xl text-emerald relative shadow-sm">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full border-2 border-white" />
              </button>
              <div className="w-10 h-10 rounded-xl bg-emerald flex items-center justify-center text-white font-bold">AD</div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
           
           <div className="bg-white p-6 rounded-[2rem] border border-emerald/5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-emerald/5 rounded-xl flex items-center justify-center text-emerald">
                    <Users size={20} />
                 </div>
                 <div className="flex items-center gap-1 text-emerald text-[10px] font-bold bg-emerald/5 px-2 py-1 rounded-full">
                    <TrendingUp size={12} /> +12%
                 </div>
              </div>
              <div className="text-emerald/40 text-[10px] font-bold uppercase tracking-widest mb-1">Total Visitors</div>
              <div className="text-3xl font-serif font-bold text-emerald">{visitorCount.toLocaleString()}</div>
           </div>

           <div className="bg-white p-6 rounded-[2rem] border border-emerald/5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                    <Send size={20} />
                 </div>
                 <div className="text-emerald text-[10px] font-bold bg-emerald/5 px-2 py-1 rounded-full">
                    Active
                 </div>
              </div>
              <div className="text-emerald/40 text-[10px] font-bold uppercase tracking-widest mb-1">Telegram Leads</div>
              <div className="text-3xl font-serif font-bold text-emerald">{inquiries}</div>
           </div>

           <div className="bg-white p-6 rounded-[2rem] border border-emerald/5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-emerald/5 rounded-xl flex items-center justify-center text-emerald">
                    <Calendar size={20} />
                 </div>
              </div>
              <div className="text-emerald/40 text-[10px] font-bold uppercase tracking-widest mb-1">Project Consults</div>
              <div className="text-3xl font-serif font-bold text-emerald">{appointments}</div>
           </div>

           <div className="bg-emerald p-6 rounded-[2rem] text-white shadow-xl">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-emerald">
                    <Zap size={20} />
                 </div>
                 <ArrowUpRight size={20} className="text-gold" />
              </div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Conversion</div>
              <div className="text-3xl font-serif font-bold text-white">4.8%</div>
           </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Recent Inquiries */}
           <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-emerald/5 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-ivory flex justify-between items-center">
                 <h3 className="font-serif font-bold text-emerald text-xl">Recent Telegram Leads</h3>
                 <button className="text-[10px] font-bold text-gold uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="divide-y divide-ivory">
                 {[
                   { name: "Abebe Bikila", product: "Oslo Sofa Set", time: "2 mins ago", status: "New" },
                   { name: "Sara Tadesse", product: "Custom Office Desk", time: "15 mins ago", status: "In Progress" },
                   { name: "Dawit Bekele", product: "Addis King Bed", time: "45 mins ago", status: "Closed" },
                   { name: "Meron Alemu", product: "Dining Table Set", time: "2 hours ago", status: "New" },
                 ].map((item, i) => (
                   <div key={i} className="p-4 flex items-center justify-between hover:bg-ivory/30 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-8 h-8 rounded-full emerald-gradient text-white flex items-center justify-center text-[10px] font-bold">
                           {item.name[0]}
                         </div>
                         <div>
                            <div className="text-sm font-bold text-emerald">{item.name}</div>
                            <div className="text-[10px] text-emerald/40">{item.product}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-bold text-emerald/20">{item.time}</div>
                         <div className={`text-[9px] font-bold uppercase tracking-widest ${item.status === 'New' ? 'text-gold' : item.status === 'Closed' ? 'text-emerald/40' : 'text-gold/60'}`}>
                            {item.status}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Performance Breakdown */}
           <div className="bg-white rounded-[2.5rem] border border-emerald/5 shadow-sm p-8">
              <h3 className="font-serif font-bold text-emerald text-xl mb-8">Category Interest</h3>
              <div className="space-y-6">
                 {[
                   { label: "Living Room", value: 75, color: "bg-emerald" },
                   { label: "Bedroom", value: 62, color: "bg-gold" },
                   { label: "Office", value: 48, color: "bg-emerald/60" },
                   { label: "Bespoke", value: 35, color: "bg-gold/40" },
                 ].map((cat, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-emerald/60 uppercase tracking-widest">
                         <span>{cat.label}</span>
                         <span>{cat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-ivory rounded-full overflow-hidden">
                         <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.value}%` }} />
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-12 p-6 bg-ivory rounded-3xl border border-emerald/5">
                 <div className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">Concierge Note</div>
                 <p className="text-[11px] text-emerald/50 leading-relaxed italic">
                    Demand is scaling for bespoke Ivory finishes in Bole apartments. Prioritize these leads.
                 </p>
              </div>
           </div>

        </div>

      </main>

    </div>
  );
}
