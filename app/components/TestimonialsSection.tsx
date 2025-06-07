// components/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marina Souza",
    role: "Fundadora da Ateliê Bella",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    message:
      "A KANGO me surpreendeu desde o primeiro contato. Eles não criaram só um site — criaram uma presença digital incrível. Recebi elogios e mais pedidos do que nunca!",
  },
  {
    name: "Carlos Mendes",
    role: "CEO da AgroPlan",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "Eu estava cansado de sites que não funcionam. A KANGO entregou um site rápido, bonito e que converte. O atendimento foi impecável do início ao fim.",
  },
  {
    name: "Juliana Rocha",
    role: "Coordenadora de Marketing na VittaCare",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "O site que criaram para nós é de outro nível. Copy estratégica, SEO aplicado e um visual que traduz nossa marca. Recomendo de olhos fechados!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-background py-16 md:py-24 px-6 md:px-4 overflow-hidden">
      <div className="relative max-w-6xl w-full mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-light mb-8 md:mb-12 px-4 md:px-0"
        >
          Além dos <span className="text-primary">resultados</span>, parceiros que confiam
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-[#201c29] to-[#1c1822] border border-border rounded-xl p-6 text-left shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
            >
              <FaQuoteLeft className="text-primary text-2xl mb-4" />
              <p className="text-sm text-light font-satoshi leading-relaxed mb-6">
                <span className="font-medium text-light/90">{t.message}</span>
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary"
                />
                <div>
                  <p className="text-light font-semibold font-poppins">{t.name}</p>
                  <p className="text-text-gray text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 translate-y-1/2 bg-primary blur-[880px] opacity-10 pointer-events-none z-0" />
    </section>
  );
}
