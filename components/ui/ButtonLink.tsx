import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "glass";
};

export function ButtonLink({ href, children, variant = "gold" }: ButtonLinkProps) {
  return (
    <Link className={`button ${variant}`} href={href}>
      {children}
    </Link>
  );
}
