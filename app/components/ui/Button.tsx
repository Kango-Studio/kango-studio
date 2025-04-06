import { cn } from "@/app/lib/utils";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "font-poppins rounded-md transition-all duration-200 cursor-pointer inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-primary text-white hover:brightness-110 border border-primary",
    secondary:
      "bg-zinc-700 text-white hover:bg-zinc-600 border border-zinc-700",
    outline:
      "bg-transparent text-primary border border-border-geral hover:bg-primary hover:text-white hover:border-primary",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  // Link externo
  if (href?.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Link interno (Next.js)
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Botão padrão
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
