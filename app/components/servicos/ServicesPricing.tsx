"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Landing Page",
    price: "4.997",
    description: "Ideal para campanhas e conversões",
    features: [
      "Design personalizado",
      "Responsivo para todos dispositivos",
      "Otimização para SEO",
      "Formulários e integrações",
      "Hospedagem inclusa",
      "Suporte por 30 dias"
    ]
  },
  {
    name: "Site Institucional",
    price: "8.997",
    description: "Perfeito para empresas e profissionais",
    features: [
      "Até 8 páginas personalizadas",
      "Design exclusivo",
      "Blog integrado",
      "Painel administrativo",
      "Otimização avançada SEO",
      "Suporte por 60 dias"
    ],
    highlight: true
  },
  {
    name: "E-commerce",
    price: "14.997",
    description: "Solução completa para vendas online",
    features: [
      "Catálogo ilimitado",
      "Gestão de estoque",
      "Múltiplos meios de pagamento",
      "Cálculo de frete automático",
      "Relatórios e dashboards",
      "Suporte por 90 dias"
    ]
  }
];

export default function ServicesPricing() {
  return (
    <section className="py-24 bg-[#1E1A25]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            INVESTIMENTO
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Planos e <span className="text-[#F56A84]">valores</span>
          </h2>
          <p className="text-[#888888] font-satoshi max-w-2xl mx-auto">
            Escolha o plano ideal para seu projeto. Todos incluem design exclusivo e código otimizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.highlight ? "-mt-8 mb-8" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F56A84] font-poppins text-white text-sm font-medium px-4 py-1 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              <div className={`bg-[#2A2633] rounded-xl p-8 h-full flex flex-col ${plan.highlight
                  ? "border-2 border-[#F56A84] shadow-xl shadow-[#F56A84]/10"
                  : ""
                }`}>
                <div className="mb-8 font-poppins">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[#888888] mb-4">{plan.description}</p>
                  <div className="flex items-baseline font-satoshi">
                    <span className="text-sm text-[#888888]">R$</span>
                    <span className="text-4xl font-bold mx-1">{plan.price}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center font-poppins">
                        <svg className="w-5 h-5 text-[#F56A84] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-[#888888]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contato"
                  className={`w-full py-4 font-satoshi px-6 rounded-lg font-medium text-center transition-colors duration-300 ${plan.highlight
                      ? "bg-[#F56A84] text-white hover:bg-[#F56A84]/90"
                      : "bg-[#F56A84]/10 text-[#F56A84] hover:bg-[#F56A84]/20"
                    }`}
                >
                  Escolher plano
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}