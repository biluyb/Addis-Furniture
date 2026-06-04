import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveHub from "@/components/InteractiveHub";
import ProductMatrix from "@/components/ProductMatrix";
import BentoShowcase from "@/components/BentoShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-emerald">
      <Navbar />
      
      {/* Editorial Content Flow (Light Mode Default) */}
      <div className="space-y-0">
        <HeroSection />
        <InteractiveHub />
        <ProductMatrix />
        <BentoShowcase />
        <ContactSection />
      </div>
      
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
