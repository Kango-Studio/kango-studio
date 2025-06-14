"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1822]/50 to-[#1C1822] z-10"></div>
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"
        style={{ filter: "blur(2px)" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block font-poppins py-1.5 px-4 bg-[#F56A84]/10 text-[#F56A84] rounded-full text-sm font-medium mb-6">
            NOSSOS PROJETOS
          </span>
        </motion.div>

        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="block font-satoshi">Transformamos ideias em</span>
          <span className="text-[#F56A84] font-satoshi">experiências digitais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-satoshi text-[#888888] max-w-2xl mx-auto mb-10"
        >
          Cada projeto é uma nova oportunidade para criarmos sites que impactam,
          convertam e representem sua marca com excelência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projetos"
            className="py-4 px-8 font-poppins bg-[#F56A84] hover:bg-[#F56A84]/90 text-white rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
          >
            Ver projetos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1C1822] to-transparent z-10"></div>
    </section>
  );
}