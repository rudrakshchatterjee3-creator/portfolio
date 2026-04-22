import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen noise-overlay">
      <div className="radial-bg" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
