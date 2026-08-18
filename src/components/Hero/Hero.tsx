const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Countries Served" },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pt-20">
      <div>
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Your Trusted Partner
        </span>
        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Intelligent Automation For Smarter Manufacturing
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Advanced robotics, seamless integration, and data-driven solutions to boost efficiency, quality, and productivity.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#solutions"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get A Free Quote
          </a>
          <a
            href="#process"
            className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
          >
            Watch Overview
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <span>Automation Dashboard</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">Live</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Production Efficiency</span>
                  <span className="font-semibold text-emerald-300">+18.4%</span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Energy Savings</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-300">62%</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">System Alerts</p>
                  <p className="mt-2 text-3xl font-bold text-amber-300">12</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                <p className="text-sm text-slate-400">Predictive Maintenance</p>
                <p className="mt-2 text-lg font-semibold text-white">Equipment check due in 6 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
