import ContactForm from "../components/contato/ContactForm";
import ContactHero from "../components/contato/ContactHero";
import ContactInfo from "../components/contato/ContactInfo";

export default function Contato() {
  return (
    <>
      <ContactHero />
      <div className="w-full px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
}