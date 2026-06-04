import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SmartTools from "@/components/SmartTools";
import WhyChooseUs from "@/components/WhyChooseUs";
import RoomVisualizer from "@/components/RoomVisualizer";
import Collections from "@/components/Collections";
import BestSellers from "@/components/BestSellers";
import ProductConfigurator from "@/components/ProductConfigurator";
import InspirationSection from "@/components/InspirationSection";
import TransformationSlider from "@/components/TransformationSlider";
import ProcessShowcase from "@/components/ProcessShowcase";
import CompareAndConsul from "@/components/CompareAndConsul";
import ServiceAndGuides from "@/components/ServiceAndGuides";
import Testimonials from "@/components/Testimonials";
import AppointmentBooking from "@/components/AppointmentBooking";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SmartTools />
      <WhyChooseUs />
      <RoomVisualizer />
      <Collections />
      <BestSellers />
      <ProductConfigurator />
      <InspirationSection />
      <TransformationSlider />
      <ProcessShowcase />
      <CompareAndConsul />
      <ServiceAndGuides />
      <Testimonials />
      <AppointmentBooking />
      <AboutSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

