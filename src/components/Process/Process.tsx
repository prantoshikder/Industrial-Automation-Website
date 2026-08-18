import Container from "../shared/Container";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your needs & goals",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Custom solution tailored for you",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Seamless integration & deployment",
  },
  {
    number: "04",
    title: "Support & Optimize",
    description: "Ongoing support & performance tuning",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-surface-alt py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title={
            <>
              A Simple, Proven Process
              <br className="hidden sm:block" /> For Automation Excellence
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <article className="h-full rounded-2xl border border-line bg-white p-6">
                <p className="text-2xl font-extrabold tracking-tight text-ink">
                  {step.number}
                </p>
                <h3 className="mt-6 text-sm font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-body">
                  {step.description}
                </p>
              </article>

              {index < steps.length - 1 ? (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand lg:block">
                  <Icon name="arrowRight" size={18} />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
