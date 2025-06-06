"use client";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#1E1A25] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F56A84]/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#F56A84]/5 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#2A2633] rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
                VAMOS COLABORAR
              </span>
              <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-6">
                Pronto para transformar sua <span className="text-[#F56A84]">presença digital</span>?
              </h2>
              <p className="text-[#888888] font-satoshi max-w-2xl mx-auto mb-8">
                Entre em contato conosco e vamos discutir como podemos ajudar seu negócio
                a alcançar seus objetivos online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5551999381964&"
                target="_blank"
                className="py-4 px-8 bg-[#F56A84] font-poppins hover:bg-[#F56A84]/90 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
              >
                Solicitar orçamento
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>

              <a
                href="/projetos"
                className="py-4 font-satoshi px-8 bg-transparent border border-[#F56A84] text-[#F56A84] hover:bg-[#F56A84]/10 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
              >
                Ver projetos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 rounded-xl bg-[#1C1822]/50">
              <div className="w-12 h-12 bg-[#F56A84]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#F56A84]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2">Inovação</h3>
              <p className="text-[#888888] font-satoshi text-sm">
                Sites que utilizam as mais recentes tecnologias do mercado.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#1C1822]/50">
              <div className="w-12 h-12 bg-[#F56A84]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#F56A84]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Entrega rápida</h3>
              <p className="text-[#888888] text-sm">
                Projetos entregues com agilidade e qualidade.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#1C1822]/50">
              <div className="w-12 h-12 bg-[#F56A84]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#F56A84]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Código seguro</h3>
              <p className="text-[#888888] text-sm">
                Desenvolvimento com as melhores práticas de segurança.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}