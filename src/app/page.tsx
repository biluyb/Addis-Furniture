import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExperienceHub from "@/components/ExperienceHub";
import Collections from "@/components/Collections";
import BestSellers from "@/components/BestSellers";
import TransformationSlider from "@/components/TransformationSlider";
import ProcessShowcase from "@/components/ProcessShowcase";
import Testimonials from "@/components/Testimonials";
import AppointmentBooking from "@/components/AppointmentBooking";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Social Proof & Trust */}
      <StatsSection />
      
      {/* The Core Interactive Experience (Compressed Hub) */}
      <ExperienceHub />
      
      {/* Product Discovery */}
      <Collections />
      <BestSellers />
      
      {/* Authentic Content */}
      <TransformationSlider />
      <ProcessShowcase />
      
      {/* Community & Booking */}
      <Testimonials />
      <AppointmentBooking />
      
      {/* Story & Conversion */}
      <AboutSection />
      <ContactSection />
      <FinalCTA />
      
      <Footer />
      <FloatingTelegram />

    </main>
  );
}


