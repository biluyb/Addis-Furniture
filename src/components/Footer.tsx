import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C9A227] rounded-lg flex items-center justify-center font-bold text-white">A</div>
              <span className="text-xl font-bold tracking-tight">Addis<span className="text-[#C9A227]">Furniture</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium furniture crafted for the modern Ethiopian home. Blending tradition with contemporary luxury since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#inspiration" className="hover:text-white transition-colors">Inspiration</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-8">Furniture</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Living Room Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury Bedroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Office</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Portfolio</a></li>
              <li className="pt-4 border-t border-white/5">
                <a href="/admin" className="text-[10px] font-bold text-[#C9A227] uppercase tracking-[0.2em] hover:text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                  Partner Portal
                </a>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-8">Reach Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A227] flex-shrink-0" />
                <span>Bole Road, Near Friendship Mall, Addis Ababa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A227] flex-shrink-0" />
                <span>+251 911 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9A227] flex-shrink-0" />
                <span>info@addisfurniture.et</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Addis Furniture PLC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
