import ContactForm from "../components/contato/ContactForm";
import ContactHero from "../components/contato/ContactHero";
import ContactInfo from "../components/contato/ContactInfo";

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#1C1822] text-[#F7F8FA]">
      <ContactHero />
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}