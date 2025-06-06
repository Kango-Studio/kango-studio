"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Briefing e Planejamento",
    description: "Entendemos suas necessidades e objetivos para criar um plano estratégico."
  },
  {
    number: "02",
    title: "Design e Prototipagem",
    description: "Criamos layouts modernos e intuitivos alinhados com sua identidade."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Transformamos o design em código com as melhores práticas e tecnologias."
  },
  {
    number: "04",
    title: "Testes e Otimização",
    description: "Garantimos performance e qualidade em todos os aspectos do projeto."
  },
  {
    number: "05",
    title: "Lançamento",
    description: "Seu projeto no ar com todo suporte necessário para o sucesso."
  }
];

export default function ServiceProcess() {
  return (
    <section className="py-24 bg-[#1C1822]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            PROCESSO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-[#F56A84]">trabalhamos</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Um processo estruturado para garantir os melhores resultados em cada projeto.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[50%] top-0 w-px h-full bg-[#F56A84]/10 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? "md:justify-end" : ""
                }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                <div className="bg-[#2A2633] rounded-xl p-8 relative">
                  <span className="absolute -top-6 left-8 text-4xl font-bold text-[#F56A84]/20">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-[#888888]">{step.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#F56A84] rounded-full hidden md:block">
                <div className="absolute inset-0 bg-[#F56A84]/20 rounded-full animate-ping"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}