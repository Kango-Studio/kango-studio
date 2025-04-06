"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import kangarooIcon from "@/public/kango-icon.png";
import Button from "./ui/Button";

export default function ComparisonSection() {
  const itemsWrong = [
    "Site lento e sem otimização",
    "Layout genérico e confuso",
    "Não aparece no Google",
    "Texto sem estratégia",
    "Responsividade ruim",
  ];

  const itemsRight = [
    "Performance máxima com código limpo",
    "Design exclusivo e moderno",
    "SEO técnico desde a base",
    "Copy que conecta e converte",
    "100% responsivo e leve",
  ];

  return (
    <section className="w-full bg-background py-20 border-t border-border px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold font-poppins text-light"
        >
          Veja a diferença de um site{" "}
          <span className="text-primary font-bold">KANGO</span>
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        {/* Card sem assinatura */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 bg-white border border-red-500 rounded-xl p-6 shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-zinc-600 mb-4 font-satoshi text-center">
            Site sem assinatura KANGO
          </h3>
          <ul className="space-y-3 text-left">
            {itemsWrong.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 font-light text-zinc-600 font-poppins">
                <FaTimesCircle className="text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card com assinatura */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 bg-white border border-primary rounded-xl p-6 shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
        >
          {/* Badge “Assinado KANGO” */}
          <div className="absolute bottom-2 right-1 font-poppins bg-primary text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            <img src={kangarooIcon.src} alt="Ícone do canguru Kango" className="w-4 h-4" />
            Assinado KANGO
          </div>

          <h3 className="text-xl font-semibold text-primary mb-4 font-poppins text-center">
            Site com assinatura KANGO
          </h3>
          <ul className="space-y-3 text-left">
            {itemsRight.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 font-poppins font-light text-zinc-700">
                <FaCheckCircle className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="flex justify-center my-12">
        <Button href="https://wa.me/5551999381964">Assinatura KANGO</Button>
      </div>
    </section>
  );
}
