type LogoProps = {
  /** `light` renders the wordmark in white for the dark footer. */
  tone?: "dark" | "light";
};

export default function Logo({ tone = "dark" }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M25.5 8.5A11 11 0 1 0 27 16"
          fill="none"
          stroke="#0f7a6b"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M11 21.5 16.2 9.8 21.5 21.5"
          fill="none"
          stroke="#0f7a6b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26.5" cy="7" r="2.6" fill="#3fd68c" />
      </svg>
      <span
        className={`text-2xl font-extrabold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        Automa
      </span>
    </span>
  );
}
