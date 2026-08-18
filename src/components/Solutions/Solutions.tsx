import Container from "../shared/Container";
import Icon, { type IconName } from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const services: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "robot",
    title: "Robotic Automation",
    description: "High-performance robotic systems",
  },
  {
    icon: "network",
    title: "System Integration",
    description: "Seamless integration for maximum efficiency",
  },
  {
    icon: "cog",
    title: "Smart Manufacturing",
    description: "Data-driven solutions for intelligent factories",
  },
  {
    icon: "wrench",
    title: "Maintenance & Support",
    description: "Reliable support for continuous operations",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-surface-alt py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Solutions"
          title={
            <>
              Comprehensive Automation Services
              <br className="hidden sm:block" /> Designed For Your{" "}
              <span className="text-teal-ink">Success</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={service.icon} size={24} />
              </span>
              <h3 className="mt-6 text-base font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
