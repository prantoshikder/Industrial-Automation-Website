import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import Icon from "../ui/Icon";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src={images.ctaRobot}
          alt=""
          fill
          sizes="50vw"
          className="object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/70 to-brand/30" />
      </div>

      <Container className="relative py-14">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-[1.9rem]">
            Ready To Transform Your Manufacturing
            <br className="hidden sm:block" /> With Automation?
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Let&apos;s build the future of your business together.
          </p>

          <Link
            href="#home"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            Get A Free Consultation
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              <Icon name="arrowUpRight" size={16} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
