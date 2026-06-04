import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import ExperienceHub from "@/components/ExperienceHub";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      <HeroSection />
      
      {/* Editorial Content Flow */}
      <div className="space-y-0">
        <BestSellers />
        <ExperienceHub />
        <AboutSection />
        <ContactSection />
      </div>
      
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
