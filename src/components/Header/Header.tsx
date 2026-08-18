export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
      <div className="flex items-center gap-3">
        <svg
          className="h-10 w-10"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="8" fill="#0E7490" fillOpacity="0.2" />
          <path
            d="M12 20V28C12 30.2091 13.7909 32 16 32H32C34.2091 32 36 30.2091 36 28V20"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20V16C16 14.8954 16.8954 14 18 14H30C31.1046 14 32 14.8954 32 16V20"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="26" r="1.5" fill="#06B6D4" />
          <circle cx="28" cy="26" r="1.5" fill="#06B6D4" />
        </svg>
        <div>
          <p className="text-lg font-semibold tracking-wide">Anti</p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a href="#solutions" className="transition hover:text-white">Solutions</a>
        <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
        <a href="#process" className="transition hover:text-white">Process</a>
        <a href="#contact" className="transition hover:text-white">Contact</a>
      </nav>

      <a
        href="#contact"
        className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
      >
        Book a Demo
      </a>
    </header>
  );
}
