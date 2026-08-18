import Container from "../shared/Container";
import Icon, { type IconName } from "../ui/Icon";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "target",
    title: "High Precision",
    description: "Accuracy you can trust",
  },
  {
    icon: "layers",
    title: "Seamless Integration",
    description: "Works with your systems",
  },
  {
    icon: "scale",
    title: "Scalable Solutions",
    description: "Built for future growth",
  },
  {
    icon: "globe",
    title: "Global Support",
    description: "Always here to help",
  },
];

export default function Features() {
  return (
    <section className="pb-16">
      <Container>
        <div className="grid gap-6 rounded-2xl border border-line px-6 py-7 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={feature.icon} size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {feature.title}
                </p>
                <p className="text-xs text-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
