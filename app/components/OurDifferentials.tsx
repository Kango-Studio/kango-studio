"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaUserTie,
  FaShieldAlt,
  FaSearch,
  FaPenFancy,
} from "react-icons/fa";
import layoutHero from "@/app/images/layout-hero.webp";
import kangarooIcon from "@/public/kango-icon.png"; // 🔁 substitua pela imagem real do canguru

const items = [
  {
    title: "Código Profissional",
    icon: <FaCode className="text-primary text-xl" />,
    description:
      "Nada de plataformas engessadas ou templates prontos. Criamos sites únicos com React, Next.js, Tailwind e TypeScript.",
  },
  {
    title: "Design Premium",
    icon: <FaPenFancy className="text-primary text-xl" />,
    description:
      "Interfaces modernas, pensadas por designers especializados em UI/UX. Navegação fluida com visual impactante.",
  },
  {
    title: "Performance & SEO",
    icon: <FaRocket className="text-primary text-xl" />,
    description:
      "Seu site leve, rápido e pronto para ranquear no Google desde o lançamento. SEO técnico de verdade, direto no código.",
  },
  {
    title: "Equipe Especialista",
    icon: <FaUserTie className="text-primary text-xl" />,
    description:
      "Você fala direto com quem executa: devs, designers e copywriters que vivem tecnologia e desenvolvimento de software todos os dias.",
  },
  {
    title: "Segurança & Arquitetura",
    icon: <FaShieldAlt className="text-primary text-xl" />,
    description:
      "Deploy seguro, código limpo e boas práticas. Proteção para o seu site e para os dados dos seus clientes.",
  },
  {
    title: "Copywriting Estratégico",
    icon: <FaSearch className="text-primary text-xl" />,
    description:
      "Textos claros, persuasivos e objetivos. Direcionamos o visitante para a ação certa, com naturalidade.",
  },
];

export default function OurDifferentials() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-background border-y border-border py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Texto */}
        <div>
          {/* Título com canguru animado */}
          <div className="flex items-center justify-between md:justify-start gap-4 mb-6 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-poppins text-light font-semibold leading-snug"
            >
              Por que escolher a <span className="text-primary">KANGO?</span>
            </motion.h2>

            <motion.img
              src={kangarooIcon.src}
              alt="Ícone do canguru Kango"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: [1, 1.15, 1], opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              viewport={{ once: false }}
              className="w-10 h-10 object-contain"
            />
          </div>


          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-light/70 mb-10 text-base leading-relaxed"
          >
            Nossos sites vão além do visual. Eles são construídos pensados para{" "}
            <strong className="text-light font-medium">converter, escalar e performar</strong>,
            com tecnologias de ponta e uma equipe experiente em cada área.
          </motion.p>

          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                onClick={() => setSelected(index)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${selected === index
                    ? "bg-muted/10 border-l-4 border-primary"
                    : "hover:bg-muted/5"
                  }`}
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-light mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-light/60">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={layoutHero.src}
            alt="Ilustração representativa do nosso diferencial"
            className="rounded-xl shadow-xl w-full max-w-md border border-border"
          />
        </motion.div>
      </div>
    </section>
  );
}
