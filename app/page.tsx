import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Solutions from "@/components/Solutions/Solutions";
import Capabilities from "@/components/Capabilities/Capabilities";
import Process from "@/components/Process/Process";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <Solutions />
      <Capabilities />
      <Process />
      <Contact />
    </main>
  );
}
