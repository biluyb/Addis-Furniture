import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-charcoal/90 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">

          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-charcoal font-black text-xl transition-transform group-hover:rotate-12">
            A
          </div>
          <div className="flex flex-col">
             <span className="font-bold text-xl tracking-tighter leading-none">ADDIS</span>
             <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] leading-none mt-1">Furniture</span>
          </div>
        </Link>


        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {["Collections", "Experience", "Process", "About"].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase() === 'experience' ? 'experience-hub' : link.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="h-4 w-px bg-white/20 mx-2" />
          <a href="tel:+251911000000" className="flex items-center gap-2 text-gold hover:text-white transition-colors">
             <Phone size={16} />
             <span className="text-xs font-bold">+251 911 000 000</span>
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
           <a 
             href="#contact" 
             className="bg-white text-charcoal px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all shadow-xl"
           >
              Request Quote
           </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-charcoal z-40 p-10 flex flex-col justify-center animate-fade-in">
           <div className="space-y-8 text-center">
              {["Collections", "Experience", "Process", "About", "Contact"].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase() === 'experience' ? 'experience-hub' : link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-bold text-white hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="pt-10 flex justify-center gap-6">
                 <a href="https://wa.me/251911000000" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold"><Phone size={20} /></a>
                 <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"><ShoppingBag size={20} /></a>
              </div>
           </div>
        </div>
      )}
    </nav>
  );
}
