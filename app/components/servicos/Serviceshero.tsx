"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1822]/50 to-[#1C1822] z-10"></div>
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"
        style={{ filter: "blur(2px)" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
              NOSSOS SERVIÇOS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transformamos sua <span className="text-[#F56A84]">presença digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#888888] mb-10"
          >
            Sites que unem design estratégico, performance e conversão.
            Do layout ao código, tudo pensado para entregar resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5551999381964&"
              className="py-4 px-8 bg-[#F56A84] hover:bg-[#F56A84]/90 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              Solicitar orçamento
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>

            <a
              href="#servicos"
              className="py-4 px-8 bg-transparent border border-[#F56A84] text-[#F56A84] hover:bg-[#F56A84]/10 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              Ver serviços
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1C1822] to-transparent z-10"></div>
    </section>
  );
}
