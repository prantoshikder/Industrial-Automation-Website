"use client";

import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Container from "../shared/Container";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    image: images.caseAutomotive,
    alt: "Finished vehicles leaving an automated assembly plant",
    title: "Automotive Assembly Line",
    result: "Increased efficiency by 40%",
  },
  {
    image: images.caseElectronics,
    alt: "Close-up of a populated circuit board",
    title: "Electronics Manufacturing",
    result: "Reduced defects by 35%",
  },
  {
    image: images.casePackaging,
    alt: "High-bay warehouse with automated storage racks",
    title: "Packaging Automation",
    result: "Reduced downtime 25%",
  },
];

export default function CaseStudies() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <section id="case-studies" className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title={
              <>
                Real Results,
                <br />
                Real Impact
              </>
            }
          />

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              View All Projects
            </Link>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Icon name="arrowLeft" size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next projects"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Icon name="arrowRight" size={17} />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="w-[280px] shrink-0 snap-start sm:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative h-52 overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 280px, 360px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-body">{project.result}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
