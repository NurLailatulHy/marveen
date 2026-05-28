import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Process />
      <Testimonial />
    </main>
  );
}
