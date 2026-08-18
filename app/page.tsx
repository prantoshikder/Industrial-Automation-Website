import About from "@/components/About";
import CTA from "@/components/CTA";
import CaseStudies from "@/components/CaseStudies";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <About />
        <Solutions />
        <WhyChoose />
        <Process />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
