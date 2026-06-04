"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

export default function AppointmentBooking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <section id="booking" className="section-padding bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5 min-h-[600px] border border-[#f0ebe3]">
          
          {/* Info Side */}
          <div className="lg:col-span-2 bg-[#1A1A1A] p-10 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10">
                <span className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.2em] mb-6 block">VIP Experience</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight" style={{ fontFamily: "var(--font-poppins, Poppins, sans-serif)" }}>
                  Book a <br />
                  <span className="text-gradient-gold">Showroom Tour.</span>
                </h2>
                
                <p className="text-white/60 mb-12 text-lg">
                  Join us for a private walkthrough. Our top designers will guide you through our latest collections and help you plan your perfect space.
                </p>

                <div className="space-y-6">
                   {[
                     "Private interior consultation",
                     "Material & fabric sampling",
                     "Exclusive in-showroom pricing",
                     "Free coffee & refreshments"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-white/80 font-medium">
                        <div className="w-6 h-6 bg-[#C9A227]/20 rounded-full flex items-center justify-center text-[#C9A227]">
                           <CheckCircle2 size={16} />
                        </div>
                        {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Booking Flow Side */}
          <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center">
             
             {/* Progress Stepper */}
             <div className="flex gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= s ? 'bg-[#C9A227]' : 'bg-[#FAF7F2]'}`} />
                ))}
             </div>

             {step === 1 && (
               <div className="animate-slideIn">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Select a Date & Time</h3>
                  <div className="space-y-8">
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-[#6B6560] uppercase tracking-widest flex items-center gap-2">
                           <CalendarIcon size={16} className="text-[#C9A227]" /> Preferred Date
                        </label>
                        <input 
                           type="date" 
                           className="w-full p-4 bg-[#FAF7F2] border border-[#f0ebe3] rounded-2xl text-[#1A1A1A] font-bold outline-none focus:border-[#C9A227]"
                           onChange={(e) => setSelectedDate(e.target.value)}
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-[#6B6560] uppercase tracking-widest flex items-center gap-2">
                           <Clock size={16} className="text-[#C9A227]" /> Preferred Time slot
                        </label>
                        <div className="flex flex-wrap gap-3">
                           {timeSlots.map((slot) => (
                             <button
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all ${selectedTime === slot ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#6B6560] border-[#f0ebe3] hover:border-[#C9A227]'}`}
                             >
                                {slot}
                             </button>
                           ))}
                        </div>
                     </div>
                     <button 
                        onClick={handleNext}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                     >
                        Continue to Details <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </div>
             )}

             {step === 2 && (
               <div className="animate-slideIn">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Personal Information</h3>
                  <div className="space-y-6">
                     <input type="text" placeholder="Full Name" className="form-input" />
                     <input type="tel" placeholder="Phone Number" className="form-input" />
                     <div className="space-y-3">
                        <label className="text-xs font-bold text-[#6B6560] uppercase tracking-widest flex items-center gap-2">
                           <Users size={16} className="text-[#C9A227]" /> Number of visitors
                        </label>
                        <select className="form-input">
                           <option>1-2 People</option>
                           <option>3-5 People</option>
                           <option>Corporate Team (5+)</option>
                        </select>
                     </div>
                     <button 
                        onClick={handleNext}
                        className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3"
                     >
                        Confirm Appointment
                     </button>
                     <button onClick={() => setStep(1)} className="w-full text-xs font-bold text-[#6B6560] uppercase tracking-widest hover:text-[#1A1A1A]">Back</button>
                  </div>
               </div>
             )}

             {step === 3 && (
               <div className="text-center animate-bounceIn">
                  <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">You&apos;re Booked!</h3>
                  <p className="text-[#6B6560] mb-10 leading-relaxed">
                     Confirmation sent to your phone. Our designer will see you on <span className="text-[#1A1A1A] font-bold">{selectedDate}</span> at <span className="text-[#1A1A1A] font-bold">{selectedTime}</span>.
                  </p>
                  <div className="flex flex-col gap-4">
                     <button className="bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold">Add to Google Calendar</button>
                     <button onClick={() => setStep(1)} className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Book Another Visit</button>
                  </div>
               </div>
             )}

          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-slideIn { animation: slideIn 0.5s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>
    </section>
  );
}
