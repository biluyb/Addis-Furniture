"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Products", href: "#best-sellers" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-9 h-9 bg-gradient-to-br from-[#C9A227] to-[#8B5A2B] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base leading-none">A</span>
            </div>
            <div>
              <span
                className="text-white font-bold text-lg tracking-wide"
                style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                Addis
              </span>
              <span
                className="text-[#C9A227] font-bold text-lg tracking-wide ml-1"
                style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}
              >
                Furniture
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#C9A227] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+251911000000"
              id="nav-call-btn"
              className="text-white/80 hover:text-[#C9A227] text-sm font-medium transition-colors duration-200 flex items-center gap-1"
            >
              📞 Call
            </a>
            <a
              href="https://wa.me/251911000000?text=Hello%2C%20I%20am%20interested%20in%20your%20furniture"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="bg-[#C9A227] hover:bg-[#D4B340] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a22740]"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#C9A227] py-3 text-base font-medium border-b border-white/10 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href="tel:+251911000000"
                className="flex-1 text-center border border-[#C9A227] text-[#C9A227] py-3 rounded-full font-semibold text-sm"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/251911000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#C9A227] text-white py-3 rounded-full font-semibold text-sm"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
