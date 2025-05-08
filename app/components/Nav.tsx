"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Sobre", "Servicos", "Projetos", "Contato"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur text-light">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl tracking-widest">
          <span className="text-light font-satoshi">KAN</span>
          <span className="font-bold font-poppins text-primary">GO</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-poppins uppercase -tracking-tighter">
          {navItems.map((item) => (
            <li key={item}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                className="transition-all hover:text-primary"
              >
                {item}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Botão Desktop */}
        <Link
          href="https://wa.me/555199381964"
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-xl text-sm font-poppins font-medium hover:brightness-110 transition"
        >
          Fale conosco
        </Link>

        {/* Botão Hambúrguer */}
        <button
          className="md:hidden text-light text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-background text-light z-50 p-6 md:hidden shadow-lg"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Menu</span>
              <button
                className="text-3xl"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            {/* Menu links */}
            <ul className="flex flex-col gap-6 text-lg font-poppins mb-16">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://wa.me/555199381964"
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary text-white text-center px-4 py-2 rounded-xl font-medium"
                >
                  Fale conosco
                </Link>
              </li>
            </ul>

            {/* Rodapé com ícones sociais */}
            <div className="absolute bottom-6 left-6 flex gap-6">
              <Link
                href="https://wa.me/555199381964"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-light hover:text-primary transition" />
              </Link>
              <Link
                href="https://instagram.com/kangostudiio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 text-light hover:text-primary transition" />
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
