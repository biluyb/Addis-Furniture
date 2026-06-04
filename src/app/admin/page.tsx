import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Users, 
  TrendingUp, 
  MessageSquare, 
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
    <div className="min-h-screen bg-[#FAF7F2] flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] text-white hidden lg:flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
           <div className="w-8 h-8 bg-[#C9A227] rounded-lg flex items-center justify-center font-bold">A</div>
           <span className="font-bold text-lg tracking-tight">Addis<span className="text-[#C9A227]">Admin</span></span>
        </div>

        <nav className="flex-1 space-y-2">
           <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl bg-[#C9A227] text-white font-bold text-sm">
              <LayoutDashboard size={18} /> Dashboard
           </Link>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <Package size={18} /> Inventory
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <MessageSquare size={18} /> Inquiries
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <Calendar size={18} /> Appointments
           </a>
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <TrendingUp size={18} /> Analytics
           </a>
        </nav>

        <div className="pt-6 border-t border-white/5 space-y-2">
           <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
              <Settings size={18} /> Settings
           </a>
           <Link href="/" className="flex items-center gap-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all text-sm font-bold">
              <LogOut size={18} /> Exit Admin
           </Link>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
           <div>
              <h1 className="text-2xl font-bold text-[#1A1A1A]">Welcome back, Team Addis</h1>
              <p className="text-sm text-[#6B6560]">Here&apos;s what&apos;s happening with your showroom today.</p>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-3 bg-white border border-[#f0ebe3] rounded-xl text-[#1A1A1A] relative shadow-sm">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-[#C9A227] rounded-full border-2 border-white" />
              </button>
              <div className="w-10 h-10 rounded-xl bg-[#8B5A2B] flex items-center justify-center text-white font-bold">AD</div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
           
           <div className="bg-white p-6 rounded-3xl border border-[#f0ebe3] shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-[#C9A227]/10 rounded-xl flex items-center justify-center text-[#C9A227]">
                    <Users size={20} />
                 </div>
                 <div className="flex items-center gap-1 text-[#25D366] text-[10px] font-bold bg-[#25D366]/10 px-2 py-1 rounded-full">
                    <TrendingUp size={12} /> +12%
                 </div>
              </div>
              <div className="text-[#6B6560] text-xs font-bold uppercase tracking-widest mb-1">Total Visitors</div>
              <div className="text-3xl font-bold text-[#1A1A1A]">{visitorCount.toLocaleString()}</div>
           </div>

           <div className="bg-white p-6 rounded-3xl border border-[#f0ebe3] shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center text-[#8B5A2B]">
                    <MessageSquare size={20} />
                 </div>
                 <div className="text-[#25D366] text-[10px] font-bold bg-[#25D366]/10 px-2 py-1 rounded-full">
                    Active
                 </div>
              </div>
              <div className="text-[#6B6560] text-xs font-bold uppercase tracking-widest mb-1">WhatsApp Leads</div>
              <div className="text-3xl font-bold text-[#1A1A1A]">{inquiries}</div>
           </div>

           <div className="bg-white p-6 rounded-3xl border border-[#f0ebe3] shadow-sm">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-[#1A1A1A]/5 rounded-xl flex items-center justify-center text-[#1A1A1A]">
                    <Calendar size={20} />
                 </div>
              </div>
              <div className="text-[#6B6560] text-xs font-bold uppercase tracking-widest mb-1">Showroom Visits</div>
              <div className="text-3xl font-bold text-[#1A1A1A]">{appointments}</div>
           </div>

           <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-6 rounded-3xl text-white shadow-xl">
              <div className="flex justify-between items-start mb-4">
                 <div className="w-10 h-10 bg-[#C9A227] rounded-xl flex items-center justify-center text-white">
                    <Zap size={20} />
                 </div>
                 <ArrowUpRight size={20} className="text-[#C9A227]" />
              </div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Conv. Rate</div>
              <div className="text-3xl font-bold text-white">4.8%</div>
           </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Recent Inquiries */}
           <div className="lg:col-span-2 bg-white rounded-3xl border border-[#f0ebe3] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#FAF7F2] flex justify-between items-center">
                 <h3 className="font-bold text-[#1A1A1A]">Recent WhatsApp Inquiries</h3>
                 <button className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="divide-y divide-[#FAF7F2]">
                 {[
                   { name: "Abebe Bikila", product: "Oslo Sofa Set", time: "2 mins ago", status: "New" },
                   { name: "Sara Tadesse", product: "Custom Office Desk", time: "15 mins ago", status: "In Progress" },
                   { name: "Dawit Bekele", product: "Addis King Bed", time: "45 mins ago", status: "Closed" },
                   { name: "Meron Alemu", product: "Dining Table Set", time: "2 hours ago", status: "New" },
                 ].map((item, i) => (
                   <div key={i} className="p-4 flex items-center justify-between hover:bg-[#FAF7F2]/30 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] text-white flex items-center justify-center text-[10px] font-bold">
                           {item.name[0]}
                         </div>
                         <div>
                            <div className="text-sm font-bold text-[#1A1A1A]">{item.name}</div>
                            <div className="text-[10px] text-[#6B6560]">{item.product}</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-bold text-[#A0998E]">{item.time}</div>
                         <div className={`text-[9px] font-bold uppercase tracking-widest ${item.status === 'New' ? 'text-[#C9A227]' : item.status === 'Closed' ? 'text-[#25D366]' : 'text-[#8B5A2B]'}`}>
                            {item.status}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Performance Breakdown */}
           <div className="bg-white rounded-3xl border border-[#f0ebe3] shadow-sm p-6">
              <h3 className="font-bold text-[#1A1A1A] mb-8">Most Viewed Categories</h3>
              <div className="space-y-6">
                 {[
                   { label: "Living Room", value: 75, color: "bg-[#1A1A1A]" },
                   { label: "Bedroom", value: 62, color: "bg-[#C9A227]" },
                   { label: "Office", value: 48, color: "bg-[#8B5A2B]" },
                   { label: "Custom Projects", value: 35, color: "bg-[#C9A227]/50" },
                 ].map((cat, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-[#1A1A1A]">
                         <span>{cat.label}</span>
                         <span className="text-[#6B6560]">{cat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#FAF7F2] rounded-full overflow-hidden">
                         <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.value}%` }} />
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-10 p-4 bg-[#FAF7F2] rounded-2xl">
                 <div className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest mb-1">Admin Note</div>
                 <p className="text-[10px] text-[#6B6560] leading-relaxed italic">
                   &ldquo;Addis-wide demand is peaking for Sectional Sofas. Consider updating the Hero image banner next week.&rdquo;
                 </p>
              </div>
           </div>

        </div>

      </main>

    </div>
  );
}
