import ServicesCTA from "../components/servicos/ServicesCTA";
import ServicesFeatures from "../components/servicos/ServicesFeatures";
import ServicesHero from "../components/servicos/ServicesHero";
import ServicesPricing from "../components/servicos/ServicesPricing";
import ServiceProcess from "../components/servicos/ServicesProcess";
import TestimonialSlider from "../components/TestimonialsSlider";

export default function Servicos() {
  return (
    <>
      <ServicesHero />
      <ServicesFeatures />
      <ServiceProcess />
      <ServicesPricing />
      <TestimonialSlider />
      <ServicesCTA />
    </>
  );
}
