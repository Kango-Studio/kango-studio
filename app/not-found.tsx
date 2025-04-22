"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[120px] leading-none font-bold text-primary drop-shadow-lg"
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-light mt-4 font-poppins">
          Opa! Página não encontrada.
        </h2>

        <p className="text-light/70 text-base mt-2 font-satoshi leading-relaxed">
          A página que você está procurando não existe ou foi movida. Mas calma, você pode voltar para casa com um clique.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-md bg-primary text-white hover:brightness-110 transition font-medium text-sm font-poppins">
          <FaArrowLeft /> Voltar para o início
        </Link>

        {/* Decoração sutil ao fundo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary blur-[180px] opacity-10 z-0 pointer-events-none" />
      </motion.div>
    </section>
  );
}
