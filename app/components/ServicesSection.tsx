// components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaBolt,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaPuzzlePiece,
  FaBullseye,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBolt />,
    title: "Carregamento ultrarrápido",
    desc: "Seu site carrega em segundos, melhorando a experiência e o ranqueamento no Google.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Design moderno e responsivo",
    desc: "Visual refinado e adaptável a todas as telas, do celular ao desktop.",
  },
  {
    icon: <FaCode />,
    title: "Código limpo e eficiente",
    desc: "Nada de WordPress. Criamos tudo com React, Next.js e tecnologias de ponta.",
  },
  {
    icon: <FaSearch />,
    title: "SEO que funciona",
    desc: "Seu site nasce otimizado para o Google, com estrutura e conteúdo pensados pra rankear.",
  },
  {
    icon: <FaBullseye />,
    title: "Foco em conversão",
    desc: "Combinamos design e copywriting estratégico para gerar resultados reais.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "100% personalizado",
    desc: "Seu site, do seu jeito. Sem templates prontos ou limitações visuais.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-background py-16 px-4 overflow-hidden">
      {/* Gradient suave no topo para transição da hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C0A11] via-[#15121A] to-transparent z-0 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto text-center pt-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-satoshi font-medium mb-4"
        >
          Sites que impressionam por dentro e por fora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-md text-text-gray max-w-2xl font-light mx-auto font-poppins"
        >
          Nada de soluções prontas. Nós criamos experiências digitais rápidas, responsivas e otimizadas — combinando design inteligente com tecnologia de ponta.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1F1B26] border border-border rounded-xl p-6 text-left transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-2xl hover:shadow-primary/30"
            >
              <div className="text-primary text-3xl mb-4">{service.icon}</div>
              <h3 className="text-light font-semibold text-lg mb-2 font-poppins">
                {service.title}
              </h3>
              <p className="text-text-gray text-sm font-poppins leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <button className="bg-background border border-border-geral text-primary px-4 py-2 mt-12 rounded-md font-poppins cursor-pointer hover:bg-primary hover:text-white transition hover:brightness-110 hover:border-primary">
          saiba mais
        </button>
      </div>
      {/* Spotlight na parte inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-primary blur-[480px] opacity-10 pointer-events-none z-0" />
    </section>
  );
}
