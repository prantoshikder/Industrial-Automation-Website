import Link from "next/link";
import Container from "../shared/Container";
import Icon, { type IconName } from "../ui/Icon";
import Logo from "../ui/Logo";

const columns: { title: string; links: string[] }[] = [
  {
    title: "Quick Links",
    links: ["Home", "Services", "Solutions", "Case Studies", "About Us"],
  },
  {
    title: "Services",
    links: [
      "Robotic Automation",
      "System Integration",
      "Smart Manufacturing",
      "Maintenance & Support",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Whitepapers", "Case Studies", "Downloads"],
  },
];

const socials: IconName[] = ["linkedin", "twitter", "facebook", "youtube"];

const contact: { icon: IconName; value: string }[] = [
  { icon: "phone", value: "+1 (800) 123-4567" },
  { icon: "mail", value: "info@automa.com" },
  { icon: "pin", value: "123 Automation Way, Tech City, USA" },
];

export default function Footer() {
  return (
    <footer className="bg-footer pt-14 text-white/70">
      <Container>
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-white/60">
              Empowering industries with intelligent automation solutions for a
              better future.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social}
                  href="#home"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon name={social} size={16} />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#home"
                      className="text-xs text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contact.map((item) => (
                <li key={item.value} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-brand">
                    <Icon name={item.icon} size={15} />
                  </span>
                  <span className="text-xs text-white/60">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
          © 2026 Automa. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
