import { images } from "@/lib/images";
import Image from "next/image";
import Container from "../shared/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const points = [
  "End-to-end automation expertise",
  "Custom solutions for every industry",
  "Proven results and lasting impact",
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About Automa"
            title={
              <>
                Driving The Future
                <br />
                Of Manufacturing
                <br />
                With <span className="text-teal-ink">Automation</span>
              </>
            }
            description="We deliver cutting-edge automation solutions that enhance efficiency, reduce costs, and ensure consistent quality across your production line."
          />

          <ul className="mt-7 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="check" size={12} strokeWidth={3} />
                </span>
                <span className="text-sm text-body">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="#solutions">Learn More About Us</Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 grid-rows-8 h-115 sm:h-135">
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl">
            <Image
              src={images.aboutLine}
              alt="Automated production cell on a factory floor"
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-cover"
            />
          </div>

          <div className="relative col-span-3 row-span-4 overflow-hidden rounded-2xl">
            <Image
              src={images.aboutWelding}
              alt="Robotic welding arm throwing sparks"
              fill
              sizes="(max-width: 1024px) 60vw, 340px"
              className="object-cover"
            />
          </div>

          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <Image
              src={images.aboutElectronics}
              alt="Precision electronics assembly"
              fill
              sizes="(max-width: 1024px) 40vw, 240px"
              className="object-cover"
            />
          </div>

          <div className="col-span-2 row-span-3 flex flex-col items-center justify-center rounded-2xl border border-line bg-white px-4 text-center shadow-sm">
            <p className="text-4xl font-extrabold tracking-tight text-ink">
              10+
            </p>
            <p className="mt-1 text-xs font-medium text-body">
              Years Of Experience
            </p>
          </div>

          <div className="relative col-span-3 row-span-4 overflow-hidden rounded-2xl">
            <Image
              src={images.aboutEngineer}
              alt="Engineer inspecting control equipment on site"
              fill
              sizes="(max-width: 1024px) 60vw, 340px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
