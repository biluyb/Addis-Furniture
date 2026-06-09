import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveHub from "@/components/InteractiveHub";
import ProductMatrix from "@/components/ProductMatrix";
import Collections from "@/components/Collections";
import BentoShowcase from "@/components/BentoShowcase";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-emerald">
      <Navbar />
      
      {/* Narrative Flow */}
      <div className="space-y-0">
        <HeroSection />
        
        {/* The Centralized Feature Studio */}
        <InteractiveHub />
        
        <ProductMatrix />
        <Collections />
        <BentoShowcase />
        <Testimonials />
        <ContactSection />
      </div>
      
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
