"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    description: "Resposta rápida via mensagem",
    action: "Abrir conversa",
    link: "https://wa.me/5551999381964"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-mail",
    description: "Para propostas detalhadas",
    action: "Enviar e-mail",
    link: "mailto:contato@kangostudio.com.br"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Localização",
    description: "Torres - RS",
    action: "Ver no mapa",
    link: "https://www.google.com/maps/place/Torres,+RS,+95560-000/@-29.3420899,-49.7736319,16340m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9522697517c81113:0xbe8eea8037e095d7!8m2!3d-29.3383976!4d-49.728226!16zL20vMDk3dmp2?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
  }
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/kangostudiio",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusp23/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/Mateusp23",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#2A2633] rounded-xl p-8"
      >
        <h2 className="text-2xl font-poppins font-bold mb-6">Informações de contato</h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-[#F56A84]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#F56A84]">{info.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-[#888888] text-sm mb-2">{info.description}</p>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F56A84] font-satoshi hover:text-[#F56A84]/80 text-sm font-medium inline-flex items-center"
                >
                  {info.action}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-[#2A2633] rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold font-poppins mb-6">Redes sociais</h2>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-12 h-12 bg-[#1C1822] rounded-full flex items-center justify-center text-[#888888] hover:text-[#F56A84] transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}