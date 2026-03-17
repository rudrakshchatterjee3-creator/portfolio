import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <InteractiveBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
