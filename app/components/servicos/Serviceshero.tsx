// app/servicos/components/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-background py-20 md:py-28 px-6 text-center overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-primary blur-[180px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-satoshi font-semibold text-light leading-tight md:leading-snug"
        >
          Serviços que elevam sua<br/>{" "}
          <span className="text-primary">presença digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-light/60 font-poppins max-w-2xl"
        >
          Performance. Design. Conversão. Tudo que sua marca precisa.
        </motion.p>

        <motion.a
          href="/contato"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm px-5 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
        >
          Solicite um orçamento
        </motion.a>
      </div>
    </section>
  );
}
