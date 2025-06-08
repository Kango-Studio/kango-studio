// components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    <section className="relative py-16 md:py-24 px-6 md:px-4 overflow-hidden">
      {/* Escurecimento suave no topo */}
      <div className="absolute -top-10 left-0 w-full h-50 bg-gradient-to-b from-[#0a0010] to-transparent z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-light mb-8 md:mb-12 px-4 md:px-0"
        >
          Nossos <span className="text-primary">serviços</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-light/70 mb-10 text-base md:text-lg leading-relaxed font-satoshi max-w-3xl mx-auto px-4 md:px-0"
        >
          Desenvolvemos soluções digitais completas que impulsionam seu negócio,
          desde a criação de sites até a implementação de estratégias de marketing digital.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
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

        <Link href="/servicos">
          <button className="bg-background border border-border-geral text-primary px-4 py-2 mt-8 md:mt-12 rounded-md font-poppins cursor-pointer hover:bg-primary hover:text-white transition hover:brightness-110 hover:border-primary">
            saiba mais
          </button>
        </Link>
      </div>
      {/* Spotlight na parte inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-primary blur-[480px] opacity-10 pointer-events-none z-0" />
    </section>
  );
}
