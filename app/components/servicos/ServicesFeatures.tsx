"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, Code2, Zap } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Palette className="w-8 h-8 text-[#F56A84]" />,
    title: "Design UI/UX",
    description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.",
    features: [
      "Pesquisa de usuário",
      "Wireframes e protótipos",
      "Design responsivo",
      "Testes de usabilidade"
    ]
  },
  {
    id: 2,
    icon: <Code2 className="w-8 h-8 text-[#F56A84]" />,
    title: "Desenvolvimento Web",
    description: "Desenvolvimento de sites e aplicações web com as tecnologias mais modernas do mercado.",
    features: [
      "Sites institucionais",
      "E-commerces",
      "Sistemas web",
      "Landing pages"
    ]
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8 text-[#F56A84]" />,
    title: "Performance",
    description: "Otimização completa para garantir velocidade e eficiência em todas as interações.",
    features: [
      "Otimização de código",
      "Compressão de assets",
      "Cache inteligente",
      "SEO técnico"
    ]
  }
];

export default function ServicesFeatures() {
  const [activeService, setActiveService] = useState(1);

  return (
    <section id="servicos" className="py-24 bg-[#1E1A25]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            SOLUÇÕES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços <span className="text-[#F56A84]">especializados</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web,
            desde o design até a implementação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              className={`bg-[#2A2633] rounded-xl p-8 cursor-pointer transition-all duration-300 ${activeService === service.id
                  ? "border-2 border-[#F56A84]"
                  : "border-2 border-transparent hover:border-[#F56A84]/30"
                }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="w-16 h-16 bg-[#F56A84]/10 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-[#888888] mb-6">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 mr-3 rounded-full bg-[#F56A84]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#F56A84]"></div>
                    </div>
                    <span className="text-sm text-[#888888]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}