import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import Icon from "../ui/Icon";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section id="home" className="pt-5">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={images.heroFactory}
            alt="Robotic arms welding a car body on an automated production line"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/25" />

          <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-14 lg:py-20">
            <div>
              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Intelligent Automation
                <br />
                <span className="text-accent">For Smarter</span>
                <br />
                <span className="text-accent">Manufacturing</span>
              </h1>

              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/80">
                Advanced robotics, seamless integration, and data-driven
                solutions to boost efficiency, quality, and productivity.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Get A Free Quote
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Icon name="arrowUpRight" size={16} />
                  </span>
                </Link>

                <Link
                  href="#about"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
                    <Icon name="play" size={16} />
                  </span>
                  Watch Overview
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end lg:pl-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
