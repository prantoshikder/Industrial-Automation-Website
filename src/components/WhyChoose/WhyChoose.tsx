import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import Icon, { type IconName } from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "award",
    title: "Proven Expertise",
    description: "Years of experience in diverse industries",
  },
  {
    icon: "cpu",
    title: "Advanced Technology",
    description: "Using the latest automation innovations",
  },
  {
    icon: "heart",
    title: "Customer Focused",
    description: "Solutions tailored to your exact needs",
  },
  {
    icon: "shield",
    title: "Reliable Partnership",
    description: "Committed to your long-term success",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why Choose Automa"
            title={
              <>
                Your Trusted Partner
                <br />
                In Automation Success
              </>
            }
            description="We combine innovation, expertise, and reliable support to deliver automation solutions that make a difference."
          />

          <ul className="mt-9 space-y-6">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={reason.icon} size={19} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{reason.title}</p>
                  <p className="mt-1 text-sm text-body">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px]">
            <Image
              src={images.controlRoom}
              alt="Operators monitoring an automated line from the control room"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-brand p-5 text-white shadow-xl shadow-ink/20 sm:left-8 sm:right-auto sm:w-56">
            <p className="text-3xl font-extrabold tracking-tight">250+</p>
            <p className="mt-0.5 text-xs text-white/80">Projects Completed</p>
            <Link
              href="#case-studies"
              className="mt-4 inline-flex w-full items-center justify-between gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand-soft"
            >
              View Case Studies
              <Icon name="arrowUpRight" size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
