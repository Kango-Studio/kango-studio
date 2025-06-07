// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // importante para gerar site 100% estático
  trailingSlash: true, // evita problemas de rotas no HostGator
  images: {
    unoptimized: true, // evita uso de otimização de imagem via Node
  },
};

export default nextConfig;
