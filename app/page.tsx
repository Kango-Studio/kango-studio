import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OurDifferentials from "./components/OurDifferentials";
import ServicesSection from "./components/ServicesSection";
import TechCarousel from "./components/TechCarousel";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServicesSection />
      <TechCarousel />
      <OurDifferentials />
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-light font-satoshi">Kan<span className="font-bold font-poppins">go</span> Studio</h1>
        <Hero />
      </div> */}
    </>
  );
}
