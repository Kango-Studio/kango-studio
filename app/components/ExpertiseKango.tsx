"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
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
    <section className="relative py-24 px-6 text-light bg-background overflow-hidden">
      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[650px] -translate-x-1/2 -translate-y-1/2 bg-primary blur-[880px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-satoshi font-semibold mb-10"
        >
          Transforme sua presença online com a{" "}
          <span className="text-primary">expertise KANGO</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.03}
                transitionSpeed={800}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="rounded-xl"
              >
                <div className="bg-white text-background border border-border rounded-xl p-6 shadow-lg hover:border-primary transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="text-primary text-2xl mb-3"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-lg font-poppins font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-background/70 font-satoshi">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
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
