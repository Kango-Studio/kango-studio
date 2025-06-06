"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Falha ao enviar mensagem");

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#2A2633] rounded-xl p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-satoshi font-medium mb-2">
            Seu nome
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            className="w-full px-4 py-3 bg-[#1C1822] rounded-lg border border-[#F56A84]/20 focus:border-[#F56A84] focus:ring-1 focus:ring-[#F56A84] outline-none transition-colors duration-300"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-[#F56A84]">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-mail
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="exemplo@seuemail.com"
            className="w-full px-4 py-3 bg-[#1C1822] rounded-lg border border-[#F56A84]/20 focus:border-[#F56A84] focus:ring-1 focus:ring-[#F56A84] outline-none transition-colors duration-300"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[#F56A84]">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensagem
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            placeholder="Conte um pouco sobre o que você precisa..."
            className="w-full px-4 py-3 bg-[#1C1822] rounded-lg border border-[#F56A84]/20 focus:border-[#F56A84] focus:ring-1 focus:ring-[#F56A84] outline-none transition-colors duration-300 resize-none"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-[#F56A84]">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-8 bg-[#F56A84] hover:bg-[#F56A84]/90 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Enviar mensagem"
          )}
        </button>

        {submitStatus === "success" && (
          <div className="mt-4 font-poppins p-4 bg-green-500/10 text-green-500 rounded-lg text-center">
            Mensagem enviada com sucesso! Retornaremos em breve.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 font-poppins p-4 bg-red-500/10 text-red-500 rounded-lg text-center">
            Erro ao enviar mensagem. Por favor, tente novamente.
          </div>
        )}
      </form>
    </motion.div>
  );
}