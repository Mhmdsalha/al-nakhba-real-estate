import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export function GlassCard({ children, className = "", variant = "dark" }: GlassCardProps) {
  return <div className={`${variant === "dark" ? "glass-dark" : "glass-light"} ${className}`}>{children}</div>;
}
