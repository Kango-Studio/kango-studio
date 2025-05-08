import ComparisonSection from "./components/ComparisonSection";
import ExpertiseKango from "./components/ExpertiseKango";
import Hero from "./components/Hero";
import OurDifferentials from "./components/OurDifferentials";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import TechCarousel from "./components/TechCarousel";
import TestimonialsSection from "./components/TestimonialsSection";
import TestimonialSlider from "./components/TestimonialsSlider";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechCarousel />
      <OurDifferentials />
      <TeamSection />
      <ComparisonSection />
      {/* <TestimonialsSection /> */}
      <TestimonialSlider />
      <ExpertiseKango />
      <ScrollToTop />
    </>
  );
}
