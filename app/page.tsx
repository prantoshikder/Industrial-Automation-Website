const solutions = [
  {
    title: "Smart Manufacturing",
    text: "Connected production lines that collect data, automate workflows, and improve throughput in real time.",
  },
  {
    title: "Energy Optimization",
    text: "Reduce power consumption with intelligent monitoring, predictive maintenance, and load balancing strategies.",
  },
  {
    title: "Process Control",
    text: "Gain control over plant operations through advanced PLC, SCADA, and IIoT integrations.",
  },
];

const stats = [
  { value: "99.9%", label: "uptime across critical systems" },
  { value: "40%", label: "average energy reduction" },
  { value: "24/7", label: "remote monitoring coverage" },
];

const steps = [
  "Audit plant performance and bottlenecks",
  "Design automation workflows and control logic",
  "Integrate sensors, dashboards, and safety controls",
  "Optimize continuously with analytics and support",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-lg font-bold text-cyan-300 ring-1 ring-cyan-400/40">
            IA
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">Industrial Automation</p>
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

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pt-20">
        <div>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Smarter operations
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Build resilient factories with digital precision.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We design factory automation systems that turn raw data into actionable decisions, improve safety, and scale production with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Solutions
            </a>
            <a
              href="#process"
              className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              Our Process
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/30">
                <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
            <div className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Plant Dashboard</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">Live</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Production Output</span>
                    <span className="font-semibold text-emerald-300">+18.4%</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Energy Use</p>
                    <p className="mt-2 text-3xl font-bold text-cyan-300">62%</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Alerts</p>
                    <p className="mt-2 text-3xl font-bold text-amber-300">12</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                  <p className="text-sm text-slate-400">Predictive Maintenance</p>
                  <p className="mt-2 text-lg font-semibold text-white">Boiler line check due in 6 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Solutions</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Automation designed for operational excellence.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-xl text-cyan-300 ring-1 ring-cyan-400/30">
                ⚙️
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="bg-slate-900/60 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Capabilities</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Technology that keeps plants moving.</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "SCADA system design",
              "PLC and HMI integration",
              "IIoT sensor networks",
              "Machine vision and QC",
              "Remote diagnostics",
              "Safety compliance automation",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Process</p>
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

      <section id="contact" className="border-t border-slate-800 bg-slate-950/90 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Ready to automate?</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let’s build a smarter factory together.</h2>
          </div>

          <a
            href="mailto:hello@industrialautomation.example"
            className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            hello@industrialautomation.example
          </a>
        </div>
      </section>
    </main>
  );
}
