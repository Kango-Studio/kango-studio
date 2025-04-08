// components/TransformSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaChartLine } from "react-icons/fa";
import Button from "./ui/Button";

const items = [
  {
    icon: <FaLightbulb />,
    title: "Soluções criativas",
    desc: "Designs únicos, pensados para destacar sua marca no mercado digital.",
  },
  {
    icon: <FaCode />,
    title: "Código de verdade",
    desc: "React, Next.js, Tailwind e TypeScript. Sem templates ou plataformas limitadas.",
  },
  {
    icon: <FaRocket />,
    title: "Alta performance",
    desc: "Sites rápidos, responsivos e prontos para rankear no Google desde o dia 1.",
  },
  {
    icon: <FaChartLine />,
    title: "Foco em resultado",
    desc: "Arquitetura pensada para conversão, SEO técnico e estratégias integradas.",
  },
];

export default function ExpertiseKango() {
  return (
    <section
      className="relative py-24 px-6 text-light bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/A_digital_illustration_displays_an_abstract_cosmic.png')" }}
    >
      {/* Spotlight */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary blur-[180px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-satoshi font-semibold mb-10"
        >
          Transforme sua presença online com a <span className="text-primary">expertise KANGO</span>
        </motion.h2>

        {/* Cards grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1F1B26]/80 backdrop-blur-sm border border-border p-6 rounded-xl shadow-md hover:border-primary transition hover:scale-[1.02]"
            >
              <div className="text-primary text-2xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-poppins font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-light/60 text-sm font-satoshi">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button href="/contato" variant="primary">
            Solicitar orçamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
