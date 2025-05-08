"use client";

import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section className="relative w-full min-h-screen bg-background text-light py-36 px-6 flex flex-col items-center justify-start gap-32">
      {/* Glow decorativo */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-primary blur-[200px] opacity-10 pointer-events-none z-0" />

      {/* Hero do Contato */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-satoshi font-semibold text-light"
        >
          Vamos conversar sobre seu projeto?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-light/60 font-poppins max-w-xl mx-auto"
        >
          Seja por WhatsApp ou e-mail, estamos prontos para ouvir suas ideias e ajudar sua marca a crescer.
        </motion.p>

        <motion.a
          href="https://wa.me/5551999381964"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-full font-poppins text-base hover:brightness-110 transition"
        >
          Falar no WhatsApp
        </motion.a>
      </div>

      {/* Formulário de Contato */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 space-y-6 text-left max-w-2xl w-full"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm text-light font-medium">
            Seu nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-muted/10 border border-border rounded-md text-light placeholder:text-light/30 focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm text-light font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-muted/10 border border-border rounded-md text-light placeholder:text-light/30 focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="exemplo@seuemail.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm text-light font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-muted/10 border border-border rounded-md text-light placeholder:text-light/30 focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Conte um pouco sobre o que você precisa..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-full font-poppins font-medium hover:brightness-110 transition"
        >
          Enviar mensagem
        </button>
      </motion.form>
    </section>
  );
}
