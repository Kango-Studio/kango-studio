// app/servicos/components/ServicesGrid.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaPenFancy,
  FaRecycle,
} from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites rápidos, responsivos e personalizados com tecnologias modernas.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Refatoração de Sites",
    description:
      "Transformamos seu site atual em uma plataforma mais moderna, rápida e com foco em resultados.",
    icon: <FaRecycle />,
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas com foco na experiência do usuário.",
    icon: <FaPaintBrush />,
  },
  {
    title: "SEO Técnico",
    description:
      "Estruturação para melhor indexação e ranqueamento orgânico.",
    icon: <FaChartLine />,
  },
  {
    title: "Copywriting Estratégico",
    description:
      "Textos persuasivos que conectam e vendem com naturalidade.",
    icon: <FaPenFancy />,
  },
  {
    title: "Performance & Escalabilidade",
    description:
      "Código limpo e otimizado para crescer junto com seu negócio.",
    icon: <FaRocket />,
  },
  {
    title: "Segurança Digital",
    description:
      "Boas práticas, deploy seguro e proteção de dados integrada.",
    icon: <FaShieldAlt />,
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white text-background py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-start gap-6 border-t border-border pt-8"
          >
            <div className="text-primary text-3xl shrink-0">{service.icon}</div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-1">
                {service.title}
              </h3>
              <p className="text-base text-background/70 font-satoshi leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
