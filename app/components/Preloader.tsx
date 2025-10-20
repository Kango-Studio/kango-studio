"use client";

// components/Preloader.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // ajustável
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1822]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Aqui você pode colocar uma animação Lottie ou SVG */}
          <Image 
            src="/kango-icon.png" 
            alt="Carregando..." 
            width={96}
            height={96}
            className="animate-bounce" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
