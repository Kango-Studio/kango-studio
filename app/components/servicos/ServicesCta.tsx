"use client";

import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-background leading-snug"
        >
          Pronto para elevar sua presença digital?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-background/70 max-w-xl mx-auto font-satoshi"
        >
          Acesse nosso portfólio e veja como já transformamos ideias em experiências marcantes.
        </motion.p>

        <motion.a
          href="/projetos"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-full font-poppins text-sm hover:brightness-110 transition"
        >
          Ver portfólio completo
        </motion.a>
      </div>
    </section>
  );
}
