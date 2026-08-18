"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../shared/Container";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#solutions",
    children: [
      { label: "Robotic Automation", href: "#solutions" },
      { label: "System Integration", href: "#solutions" },
      { label: "Smart Manufacturing", href: "#solutions" },
      { label: "Maintenance & Support", href: "#solutions" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Automotive", href: "#case-studies" },
      { label: "Electronics", href: "#case-studies" },
      { label: "Packaging & Logistics", href: "#case-studies" },
    ],
  },
  { label: "Case Studies", href: "#case-studies" },
  {
    label: "Resources",
    href: "#process",
    children: [
      { label: "Blog", href: "#process" },
      { label: "Whitepapers", href: "#process" },
      { label: "Downloads", href: "#process" },
    ],
  },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" aria-label="Automa home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 py-6 text-sm font-medium text-body transition-colors hover:text-brand"
              >
                {item.label}
                {item.children ? <Icon name="chevronDown" size={15} /> : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-lg shadow-ink/5 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-body transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-brand hover:text-brand sm:flex"
          >
            <Icon name="bell" size={18} />
          </button>

          <Link
            href="#contact"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-line/70 py-3 text-sm font-medium text-body last:border-0 hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
