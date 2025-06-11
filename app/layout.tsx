import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kango Studio | Sites premium em código puro e design estratégico",
  description:
    "A Kango Studio desenvolve sites ultra rápidos, 100% personalizados em código puro (Next.js, React, Tailwind), com design sofisticado, SEO avançado e foco em conversão.",
  keywords: [
    "desenvolvimento de sites",
    "kango",
    "kango studiio",
    "sites",
    "pagina de vendas",
    "landing page",
    "site institucional",
    "next.js",
    "sites premium",
    "sites personalizados",
    "landing pages modernas",
    "agência de desenvolvimento",
    "tailwind css",
    "SEO técnico",
    "kango studio",
    "design estratégico",
    "web design",
    "copywriting para sites",
  ],
  metadataBase: new URL("https://kangostudio.com"),
  openGraph: {
    title: "Kango Studio | Sites premium em código puro",
    description:
      "Sites ultra rápidos e personalizados em Next.js com design e performance de alto padrão.",
    url: "https://kangostudio.com",
    siteName: "Kango Studio",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kango Studio | Sites premium em código puro",
    description:
      "Sites rápidos e sofisticados com performance, design e estratégia.",
    site: "@kango",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} bg-background text-text-light antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
