export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-950/90 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Ready to transform?</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let's build the future of your business together</h2>
        </div>

        <a
          href="mailto:hello@anti.example"
          className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
}
