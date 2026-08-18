const steps = [
  "Consultation & Audit",
  "Solution Design",
  "Implementation",
  "Support & Optimization",
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">PROCESS</p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">From discovery to measurable impact.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-300 ring-1 ring-cyan-500/20">
              0{index + 1}
            </div>
            <p className="text-base leading-7 text-slate-200">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
