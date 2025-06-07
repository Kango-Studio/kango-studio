"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import tataimg from "@/app/images/tata-img.webp";

const team = [
  {
    name: "Mateus Paulart",
    role: "Desenvolvedor Full Stack",
    image: "https://github.com/mateusp23.png",
    description:
      "Desenvolvedor especializado em performance, segurança e tecnologias modernas. Constrói soluções robustas e eficientes para cada projeto.",
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
      "Especialista em copy persuasiva, SEO e funis de conversão. Transforma mensagens em resultados reais para marcas exigentes.",
    socials: {
      linkedin: "https://www.linkedin.com/in/talia-camargo/",
      instagram: "https://instagram.com/taliacamarrgo",
      whatsapp: "https://wa.me/555198455356",
    },
  },
];

export default function TeamManifestoSection() {
  return (
    <section className="relative w-full bg-[#1C1822] py-24 px-6 text-white">
      {/* Spotlight decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-primary blur-[200px] opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/20 text-[#F56A84] rounded-full text-sm font-medium mb-6">
          NOSSA EQUIPE
        </span>
      </div>
      
      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-poppins font-semibold mb-8 text-white"
        >
          Quem está por trás da KAN<span className="text-primary">GO</span>
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-3xl mx-auto text-base md:text-lg font-satoshi leading-relaxed mb-16"
        >
          Somos um estúdio digital que une estratégia, tecnologia e criatividade para criar experiências que impulsionam negócios. Cada projeto é único e tratado com excelência técnica e sensibilidade de marca.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#2A2530] border border-primary/20 hover:border-primary rounded-xl shadow-md p-6 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-primary shadow-md mb-4"
              />
              <h3 className="text-white text-lg font-semibold font-poppins">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-2 font-poppins">
                {member.role}
              </p>
              <p className="text-white/70 text-sm mb-4 leading-relaxed font-satoshi">
                {member.description}
              </p>

              <div className="flex justify-center gap-4">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:brightness-125 transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:brightness-125 transition"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:brightness-125 transition"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.socials.whatsapp && (
                  <a
                    href={member.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:brightness-125 transition"
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
