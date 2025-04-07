"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    // <footer className="bg-background border-t border-border text-light relative">
    <footer className="bg-gradient-to-tr from-primary via-[#1C1822] to-[#1C1822] border-t border-border text-light relative">

      {/* Gradiente no topo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-1 w-full bg-gradient-to-r from-primary/50 via-transparent to-primary/50"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Logo e descrição */}
        <div>
          <Link href="/" className="text-2xl tracking-widest">
            <span className="text-light font-satoshi">KAN</span>
            <span className="font-bold font-poppins text-primary">GO</span>
          </Link>
          <p className="text-sm text-text-gray mt-4 font-satoshi font-medium leading-relaxed max-w-sm">
            Sites com código puro, design estratégico e foco em conversão. Do layout ao funil, tudo pensado para entregar resultado.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-2 text-sm font-poppins">
          <span className="text-light font-semibold mb-2 uppercase tracking-wide">
            Navegação
          </span>
          {["/", "/sobre", "/servicos", "/portfolio", "/contato"].map((link, i) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={link} className="hover:text-primary transition capitalize font-satoshi font-medium">
                {link === "/" ? "Home" : link.replace("/", "")}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Redes sociais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <span className="text-light font-semibold mb-2 font-poppins uppercase tracking-wide">
            Fale com a gente
          </span>
          <div className="flex gap-4 text-xl">
            <a
              href="https://wa.me/5551999381964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/kangostudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/mateus23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Créditos finais */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-border py-6 text-center font-satoshi font-medium text-sm text-text-gray"
      >
        © {new Date().getFullYear()} KANGO Studio. Feito com ♥ em React, por devs de verdade.
      </motion.div>
    </footer>
  );
}
