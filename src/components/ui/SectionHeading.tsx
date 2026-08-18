import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-ink">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-[2.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-body">
          {description}
        </p>
      ) : null}
    </div>
  );
}
