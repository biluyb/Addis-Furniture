import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Collections from "@/components/Collections";
import BestSellers from "@/components/BestSellers";
import InspirationSection from "@/components/InspirationSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <Collections />
      <BestSellers />
      <InspirationSection />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
