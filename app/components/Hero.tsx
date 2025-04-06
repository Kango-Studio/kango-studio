"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-background text-light px-6">
      {/* Título e Subtítulo */}
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-satoshi font-bold leading-tight"
        >
          Sites Premium que <span className="text-primary">Hipnotizam</span> e Convertem
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl font-satoshi"
        >
          Desenvolvemos experiências digitais sob medida que encantam visitantes e transformam cliques em clientes.
        </motion.p>
        {/* Chamada para Ação */}
        <motion.a
          href="/contato"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-poppins font-medium hover:brightness-110 transition"
        >
          Solicite um Orçamento
        </motion.a>
      </div>

      {/* Animação do Canguru */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute bottom-0 right-0 hidden md:block"
      >
        <Image src="/kango-icon.png" alt="Kanguru da KANGO" width={300} height={300} />
      </motion.div>
    </section>
  );
}
