"use client";
import { motion } from "framer-motion";

const essenceItems = [
  {
    icon: "🎯",
    title: "Missão",
    description: "Transformar ideias em experiências digitais únicas, unindo performance, estética e estratégia para gerar resultados reais."
  },
  {
    icon: "👁️",
    title: "Visão",
    description: "Ser referência em desenvolvimento web criativo, entregando sites que não só impressionam, mas também performam."
  },
  {
    icon: "💎",
    title: "Valores",
    description: "Excelência técnica, transparência, compromisso com resultados e inovação constante em cada projeto."
  },
  {
    icon: "🚀",
    title: "Propósito",
    description: "Impulsionar o sucesso digital dos nossos clientes através de código limpo e design estratégico."
  }
];

export default function AboutEssence() {
  return (
    <section id="essencia" className="py-24 bg-[#1E1A25]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            NOSSA ESSÊNCIA
          </span>
          <h2 className="text-3xl font-satoshi md:text-4xl font-bold mb-4">
            O que nos <span className="text-[#F56A84]">move</span>
          </h2>
          <p className="text-[#888888] font-satoshi max-w-2xl mx-auto">
            Nossos princípios fundamentais que guiam cada decisão e cada linha de código que escrevemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 font-poppins lg:grid-cols-4 gap-8">
          {essenceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#2A2633] rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#F56A84]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#888888]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}