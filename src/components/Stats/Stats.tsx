import Container from "../shared/Container";
import Icon, { type IconName } from "../ui/Icon";

const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: "chart", value: "250+", label: "Projects Completed" },
  { icon: "users", value: "150+", label: "Happy Clients" },
  { icon: "clock", value: "98%", label: "On-Time Delivery" },
  { icon: "globe", value: "10+", label: "Countries Served" },
];

export default function Stats() {
  return (
    <section className="bg-brand py-12">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <span className="text-white/70">
              <Icon name={stat.icon} size={26} />
            </span>
            <div>
              <p className="text-3xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-white/75">{stat.label}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
