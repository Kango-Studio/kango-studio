'use client'

import bgImage from "@/app/images/bg-hero.webp";
import { useEffect, useState } from "react";  
import { motion } from "framer-motion";
import Image from "next/image";

const words = ["Hipnotizam", "Conectam", "Convertem", "Impressionam"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-light px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Background Glow */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary to-pink-500 blur-[130px] rounded-full z-0"
      /> */}

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="z-10 mb-2 text-sm md:text-base text-primary font-poppins text-light/70 tracking-wider uppercase"
      >
        We Can Go. We Code. We Convert.
      </motion.p>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-satoshi font-bold leading-tight text-center z-10"
      >
        Sites Premium que{" "}
        {/* <span className="text-primary transition-all duration-500">
          {words[index]}
        </span>{" "} */}
        Convertem
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl font-satoshi z-10 text-center"
      >
        Desenvolvemos experiências digitais sob medida que encantam visitantes
        e transformam cliques em clientes.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="/contato"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-poppins font-medium hover:brightness-110 transition z-10"
      >
        Solicite um Orçamento
      </motion.a>

      {/* Canguru animado
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-6 right-6 hidden md:block z-10"
      >
        <Image
          src="/kango-icon.png"
          alt="Kanguru da KANGO"
          width={180}
          height={180}
        />
      </motion.div> */}
    </section>
  );
}
