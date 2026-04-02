import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import ScrollRotatingElements from "@/components/home/ScrollRotatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollRotatingElements />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CertificationsSection />
      <WhyChooseSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
