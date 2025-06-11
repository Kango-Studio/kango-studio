"use client";

import { motion } from "framer-motion";

export default function PoliticaPrivacidade() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-light">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-primary"
      >
        Política de Privacidade
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6 text-base md:text-lg leading-relaxed font-satoshi text-light/80"
      >
        <p>
          Na Kango Studio, respeitamos sua privacidade e estamos comprometidos em proteger os dados pessoais que você compartilha conosco.
        </p>

        <h2 className="text-xl font-semibold text-light">1. Coleta de Dados</h2>
        <p>
          Coletamos apenas os dados essenciais para oferecer nossos serviços com qualidade, como nome, e-mail, número de telefone e informações do seu projeto. Esses dados são obtidos por meio de formulários em nosso site ou através de interações diretas.
        </p>

        <h2 className="text-xl font-semibold text-light">2. Uso das Informações</h2>
        <p>
          Utilizamos os dados coletados para:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Responder suas solicitações e mensagens</li>
            <li>Elaborar propostas comerciais</li>
            <li>Melhorar nossos serviços e atendimento</li>
            <li>Enviar comunicações relevantes (com seu consentimento)</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-light">3. Compartilhamento de Dados</h2>
        <p>
          Não vendemos ou compartilhamos seus dados com terceiros, exceto quando necessário para cumprimento de obrigações legais ou para a execução de nossos serviços com parceiros confiáveis.
        </p>

        <h2 className="text-xl font-semibold text-light">4. Armazenamento e Segurança</h2>
        <p>
          Seus dados são armazenados de forma segura e com acesso restrito apenas a pessoas autorizadas. Utilizamos medidas técnicas e organizacionais para proteger suas informações.
        </p>

        <h2 className="text-xl font-semibold text-light">5. Seus Direitos</h2>
        <p>
          Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Basta entrar em contato conosco pelo e-mail: contato@kangostudio.com.
        </p>

        <h2 className="text-xl font-semibold text-light">6. Cookies</h2>
        <p>
          Nosso site utiliza cookies para melhorar a navegação e entender o comportamento dos visitantes. Você pode gerenciar suas preferências de cookies no seu navegador.
        </p>

        <h2 className="text-xl font-semibold text-light">7. Alterações nesta Política</h2>
        <p>
          Esta política pode ser atualizada a qualquer momento. Recomendamos que você consulte esta página periodicamente para estar ciente de eventuais mudanças.
        </p>

        <p>
          Última atualização: Junho de 2025.
        </p>
      </motion.div>
    </section>
  );
}
