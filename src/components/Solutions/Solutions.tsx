const solutions = [
  {
    icon: "🤖",
    title: "Robotic Automation",
    text: "High-performance robotic systems for repetitive, precision, and hazardous tasks.",
  },
  {
    icon: "🔗",
    title: "System Integration",
    text: "Seamless integration with existing systems, equipment, and workflows.",
  },
  {
    icon: "⚙️",
    title: "Smart Manufacturing",
    text: "Data-driven solutions for intelligent production management.",
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    text: "Reliable support for continuous operations and system optimization.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">OUR SOLUTIONS</p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Comprehensive Automation Services Designed For Your Success</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-xl text-cyan-300 ring-1 ring-cyan-400/30">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
