"use client";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2021",
    title: "Primeiros projetos na área",
    description: "Os primeiros desenvolvimentos de websites de baixa complexidade, com performance ainda distante do ideal."
  },
  {
    year: "2022",
    title: "Nascimento da KANGO",
    description: "A união de um dev com uma designer apaixonados por código. A KANGO nasce para transformar sua área."
  },
  {
    year: "2023",
    title: "Primeiro case de grande impacto",
    description: "Desenvolvimento do e-commerce Harduston, nosso primeiro grande case de sucesso."
  },
  {
    year: "2024",
    title: "Portfólio lançado",
    description: "Consolidação da marca com um portfólio robusto e clientes satisfeitos em diferentes segmentos."
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-[#1C1822]">
      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            NOSSA HISTÓRIA
          </span>
          <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-4">
            Nossa jornada até aqui
          </h2>
          <p className="text-[#888888] font-satoshi max-w-2xl mx-auto">
            Uma linha do tempo que marca nossa evolução e conquistas mais importantes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#2A2633]"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-end" : ""
                  }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                  }`}>
                  <div className="bg-[#2A2633] rounded-xl p-6">
                    <span className="inline-block font-poppins py-1 px-3 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 font-poppins">{event.title}</h3>
                    <p className="text-[#888888] font-satoshi">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F56A84] rounded-full border-4 border-[#1C1822]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}