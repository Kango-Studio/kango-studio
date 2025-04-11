"use client";

import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaGithub,
  FaFigma,
  FaJs,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

export default function TechCarousel() {
  const icons = [
    { icon: <FaReact />, color: "#61DAFB", name: "React" },
    { icon: <TbBrandNextjs />, color: "#fff", name: "Next.js" },
    { icon: <SiTailwindcss />, color: "#38BDF8", name: "Tailwind" },
    { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
    { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <FaGithub />, color: "#fff", name: "GitHub" },
    { icon: <FaFigma />, color: "#A259FF", name: "Figma" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-12 bg-background relative overflow-hidden"
    >
      {/* Spotlight na parte inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-primary blur-[480px] opacity-10 pointer-events-none z-0" />

      <div className="relative max-w-[1100px] mx-auto px-4 z-10">
        <h2 className="text-center text-lg md:text-xl font-poppins text-light mb-6 uppercase tracking-widest">
          Tecnologias que usamos
        </h2>

        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover
          className="overflow-hidden h-24"
        >
          <div className="flex items-center">
            {[...icons, ...icons].map(({ icon, color, name }, index) => (
              <div
                key={index}
                className="mx-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-110"
              >
                <div
                  className="text-4xl md:text-5xl"
                  style={{ color }}
                  title={name}
                >
                  {icon}
                </div>
                <span className="text-xs mt-2 text-light font-poppins opacity-70">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </motion.section>
  );
}
