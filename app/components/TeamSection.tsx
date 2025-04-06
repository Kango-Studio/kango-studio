"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import tataimg from "@/app/images/tata-img.webp"

type Member = {
  name: string;
  role: string;
  image: string;
  description: string;
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
};

const team: Member[] = [
  {
    name: "Mateus Paulart",
    role: "Desenvolvedor Full Stack",
    image: "https://github.com/mateusp23.png",
    description:
      "Especialista em desenvolvimento web com foco em performance, segurança e tecnologias modernas. Responsável pela arquitetura e codificação de todos os projetos da KANGO.",
    socials: {
      github: "https://github.com/mateusp23",
      linkedin: "https://linkedin.com/in/mateus23",
      instagram: "https://instagram.com/mateuspaulart",
      whatsapp: "https://wa.me/5551999381964",
    },
  },
  {
    name: "Talia Camargo",
    role: "Copywriter & Funil Expert",
    image: tataimg.src,
    description:
      "Copywriter com foco em estratégia, SEO e vendas. Cria páginas que conectam, encantam e convertem — sempre alinhado à linguagem e aos objetivos do cliente.",
    socials: {
      linkedin: "https://www.linkedin.com/in/talia-camargo/",
      instagram: "https://instagram.com/taliacamarrgo",
      whatsapp: "https://wa.me/555198455356",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-background border-t border-border py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold font-poppins text-light mb-12"
        >
          Por trás da <span className="font-satoshi leading-tight">KAN</span><span className="text-primary font-poppins leading-tight">GO</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted/10 border border-border-geral hover:border-primary rounded-xl shadow-lg p-6 w-[400px] flex flex-col items-center text-center group hover:shadow-2xs transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-primary shadow-md mb-4"
              />
              <h3 className="text-light text-lg font-semibold font-poppins">
                {member.name}
              </h3>
              <p className="text-text-gray text-sm mb-2 font-poppins">{member.role}</p>
              <p className="text-light/60 text-sm mb-4 leading-relaxed font-satoshi">
                {member.description}
              </p>

              <div className="flex justify-center gap-4 mt-auto">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.socials.whatsapp && (
                  <a
                    href={member.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-primary transition"
                  >
                    <FaWhatsapp />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
