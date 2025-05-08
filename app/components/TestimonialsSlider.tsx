"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  projectName: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marina Silva",
    role: "Diretora de Marketing",
    company: "Harduston",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "O site desenvolvido pela Kango Studio superou todas as nossas expectativas. O aumento nas conversões foi imediato e nossa marca ganhou um novo patamar de credibilidade online.",
    projectName: "Harduston E-commerce"
  },
  {
    id: 2,
    name: "Rafael Mendes",
    role: "CEO",
    company: "Somos Hon",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "A equipe da Kango entendeu perfeitamente nossa visão de negócio e traduziu isso em uma plataforma digital que comunica exatamente o que queremos para nossos clientes.",
    projectName: "Portal Corporativo Hon"
  },
  {
    id: 3,
    name: "Fernanda Martins",
    role: "Dermatologista",
    company: "Clínica Dermato",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Meu site se tornou uma ferramenta essencial para meu consultório. Os pacientes frequentemente mencionam como encontraram meus serviços online e como o agendamento digital facilitou o processo.",
    projectName: "Dermato Fernanda"
  }
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 8000);
    }
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
    resetInterval();
  };

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
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos <span className="text-[#F56A84]">clientes</span> dizem</h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o melhor indicador da qualidade do nosso trabalho.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-[#2A2633] p-6 md:p-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  x: currentSlide === index ? 0 : 100,
                  position: currentSlide === index ? "relative" : "absolute"
                }}
                transition={{ duration: 0.5 }}
                className={`${currentSlide === index ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 flex flex-col items-center md:items-start">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#F56A84]/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-[#888888] mb-1">{testimonial.role}</p>
                    <p className="text-[#F56A84] font-medium">{testimonial.company}</p>
                    <div className="mt-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#F56A84]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <svg className="w-12 h-12 text-[#F56A84]/20 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <p className="text-[#888888]">
                      Projeto: <span className="text-[#F56A84]">{testimonial.projectName}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#F56A84] w-6" : "bg-[#2A2633]"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              onClick={() => {
                prevSlide();
                resetInterval();
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A2633] text-white hover:bg-[#F56A84] transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              onClick={() => {
                nextSlide();
                resetInterval();
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2A2633] text-white hover:bg-[#F56A84] transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}