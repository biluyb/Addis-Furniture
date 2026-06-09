import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveHub from "@/components/InteractiveHub";
import RoomVisualizer from "@/components/RoomVisualizer";
import ProductMatrix from "@/components/ProductMatrix";
import BentoShowcase from "@/components/BentoShowcase";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-emerald">
      <Navbar />
      
      <HeroSection />
      <InteractiveHub />
      <RoomVisualizer />
      <ProductMatrix />
      <Collections />
      <BentoShowcase />
      <Testimonials />
      <ContactSection />
      
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
