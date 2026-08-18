"use client";

import { images } from "@/lib/images";
import Image from "next/image";
import { useState } from "react";
import Container from "../shared/Container";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Automa transformed our production line with their automation solution. Efficiency and quality have improved beyond our expectations.",
    name: "James R.",
    role: "Operations Director, AutoTech",
  },
  {
    quote:
      "Their team integrated with our existing systems without a single day of unplanned downtime. That alone paid for the project.",
    name: "Marta L.",
    role: "Plant Manager, Nordwerk",
  },
  {
    quote:
      "From consultation to support, the process was clear and predictable. We now roll out new cells in weeks instead of months.",
    name: "Daniel K.",
    role: "Head of Engineering, Voltacore",
  },
  {
    quote:
      "Defect rates dropped by a third in the first quarter. The data they surface has changed how we plan maintenance.",
    name: "Priya S.",
    role: "Quality Lead, Meridian Devices",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-surface-alt py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                What Our Clients Say
                <br />
                About Automa
              </>
            }
          />

          <span className="mt-7 block text-brand">
            <Icon name="quote" size={34} />
          </span>

          <blockquote className="mt-4 max-w-lg text-base leading-relaxed text-body">
            {current.quote}
          </blockquote>

          <p className="mt-6 text-sm font-bold text-ink">— {current.name}</p>
          <p className="mt-0.5 text-xs text-body">{current.role}</p>

          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all ${
                  index === active ? "w-6 bg-brand" : "w-2 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-3xl sm:h-[360px]">
          <Image
            src={images.testimonial}
            alt="Engineering team reviewing process data in a plant laboratory"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
