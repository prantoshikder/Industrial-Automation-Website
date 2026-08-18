const capabilities = [
  "Consultation & Audit",
  "Solution Design",
  "Implementation",
  "Support & Optimization",
  "Custom Integration",
  "Staff Training",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-slate-900/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">A SIMPLE, PROVEN PROCESS</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">For Automation Excellence</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-slate-200">
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
