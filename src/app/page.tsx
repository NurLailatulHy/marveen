import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Service from "@/components/sections/service/Service";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Process from "@/components/sections/process/Process";
import Testimonial from "@/components/sections/testimonial/Testimonial";
import Impact from "@/components/sections/impact/Impact";
import Cta from "@/components/sections/cta/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Process />
      <Testimonial />
      <Impact />
      <Cta />
    </main>
  );
}
