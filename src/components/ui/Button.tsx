import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "white" | "outline";
  icon?: IconName | null;
  className?: string;
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  white: "bg-white text-brand hover:bg-brand-soft",
  outline: "border border-line bg-white text-ink hover:border-brand hover:text-brand",
} as const;

const pills = {
  primary: "bg-white/20 text-white",
  white: "bg-brand/10 text-brand",
  outline: "bg-brand-soft text-brand",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  icon = "arrowUpRight",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {icon ? (
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full ${pills[variant]}`}
        >
          <Icon name={icon} size={16} />
        </span>
      ) : null}
    </Link>
  );
}
