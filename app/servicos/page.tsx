import ServicesCTA from "../components/servicos/ServicesCta";
import ServicesGrid from "../components/servicos/ServicesGrid";
import ServicesHero from "../components/servicos/Serviceshero";

export default function Servicos() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}
