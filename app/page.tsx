import ComparisonSection from "./Components/ComparisonSection";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import OurDifferentials from "./Components/OurDifferentials";
import ServicesSection from "./Components/ServicesSection";
import TeamSection from "./Components/TeamSection";
import TechCarousel from "./Components/TechCarousel";
import TestimonialsSection from "./Components/TestimonialsSection";
import ScrollToTop from "./Components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServicesSection />
      <TechCarousel />
      <OurDifferentials />
      <TeamSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
