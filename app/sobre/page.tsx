import AboutEssence from "../components/sobre/AboutEssence";
import AboutHero from "../components/sobre/AboutHero";
import TeamManifestoSection from "../components/sobre/TeamManifestoSection";
import Timeline from "../components/sobre/Timeline";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#1C1822] text-[#F7F8FA]">
      <AboutHero />
      <AboutEssence />
      <Timeline />
      <TeamManifestoSection />
    </main>
  );
}

