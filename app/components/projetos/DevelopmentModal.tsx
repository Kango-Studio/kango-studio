"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Rocket, X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/');
    }, 300); // Match this with the exit animation duration
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#2A2633] rounded-2xl p-8 max-w-lg w-full relative overflow-hidden"
          >
            {/* Decorative elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 right-0 w-32 h-32 bg-[#F56A84]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-[#F56A84]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
            />
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F56A84]/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-[#F56A84]" />
                </div>
                <h2 className="text-2xl font-bold text-white font-poppins">
                  Em Desenvolvimento
                </h2>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Estamos trabalhando duro para trazer uma experiência incrível para você! 
                Em breve, você poderá explorar todos os nossos projetos e cases de sucesso.
              </p>

              <div className="flex items-center gap-2 text-[#F56A84] mb-8">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Novidades chegando em breve!</span>
              </div>

              <button
                onClick={handleClose}
                className="w-full cursor-pointer bg-[#F56A84] hover:bg-[#F56A84]/90 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Entendi, vamos continuar!
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 