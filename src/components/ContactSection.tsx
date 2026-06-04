"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    requestType: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name.trim() || !formState.phone.trim()) {
      alert("Please fill in your name and phone number.");
      return;
    }

    if (!/^\+?[\d\s-]{9,15}$/.test(formState.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const waMessage = `Hello Addis Furniture! My name is ${formState.name}. I'm interested in a ${formState.requestType} inquiry. My phone number is ${formState.phone}. Message: ${formState.message}`;
    window.open(`https://wa.me/251911000000?text=${encodeURIComponent(waMessage)}`, '_blank');
  };


  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info Side */}
          <div>
            <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              Ready to <br />
              <span className="text-gradient-gold">Transform Your Space?</span>
            </h2>
            <p className="text-[#6B6560] text-lg leading-relaxed mb-10 max-w-md">
              Whether you want a standard piece or a fully custom-designed interior, our team in Addis Ababa is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF7F2] group-hover:bg-[#C9A227] rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <Phone size={24} className="text-[#C9A227] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">Call Us Directly</h4>
                  <p className="text-[#8B5A2B] font-bold text-lg">+251 911 000 000</p>
                  <p className="text-xs text-[#6B6560] mt-1 flex items-center gap-1">
                    <Clock size={12} /> Available 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF7F2] group-hover:bg-[#C9A227] rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <MessageSquare size={24} className="text-[#C9A227] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">WhatsApp Inquiry</h4>
                  <p className="text-[#8B5A2B] font-bold text-lg">Instant Response</p>
                  <a href="https://wa.me/251911000000" target="_blank" className="text-xs text-[#C9A227] font-bold hover:underline">Chat with a designer now</a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF7F2] group-hover:bg-[#C9A227] rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <MapPin size={24} className="text-[#C9A227] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">Visit Showroom</h4>
                  <p className="text-[#4A4540] font-medium leading-relaxed">
                    Bole Road, Near Friendship Mall <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Mockup (Using a styled div with image placeholder for now, or iframe) */}
            <div className="mt-12 w-full h-[250px] bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#f0ebe3] relative group grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.66848135834!2d38.78453448452391!3d9.006325987640237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85068ea02891%3A0x633c706d8a39a66d!2sBole%20Medhanialem%20Church!5e0!3m2!1sen!2set!4v1714400000000!5m2!1sen!2set" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#FAF7F2] p-8 md:p-12 rounded-[2.5rem] border border-[#f0ebe3] shadow-xl shadow-[#8b5a2b05]">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
              Request a Custom Quote
            </h3>
            <p className="text-[#6B6560] text-sm mb-8 italic">
              Share your vision, and we&apos;ll bring it to life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="e.g. Abebe Bikila"
                    className="form-input"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    placeholder="+251 911..."
                    className="form-input"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="request-type" className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">I&apos;m interested in...</label>
                <select 
                  id="request-type"
                  className="form-input appearance-none bg-white"
                  value={formState.requestType}
                  onChange={(e) => setFormState({...formState, requestType: e.target.value})}
                >
                  <option value="general">General Inquiry</option>
                  <option value="living-room">Living Room Set</option>
                  <option value="bedroom">Bedroom Furniture</option>
                  <option value="office">Executive Office</option>
                  <option value="custom">Custom Design Project</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Tell us about your space</label>
                <textarea 
                  id="message"
                  required
                  placeholder="Dimensions, materials, or styles you love..."
                  className="form-input h-32"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#C9A227] hover:bg-[#1A1A1A] text-white py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-3 shadow-lg shadow-[#c9a22720]"
              >
                Send Request via WhatsApp
                <Send size={18} />
              </button>

              <p className="text-[10px] text-center text-[#A0998E] mt-4">
                By submitting this form, you agree to being contacted regarding your furniture inquiry. 
                Average response time: <span className="text-[#C9A227] font-bold">15-30 minutes</span> during business hours.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
