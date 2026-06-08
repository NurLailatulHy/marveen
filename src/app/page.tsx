"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Impact from "@/components/sections/Impact";
import Cta from "@/components/sections/Cta";

export default function Home() {
  const getData = async () => {
    const { data, error } = await supabase.from("hero").select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Process />
      <Testimonial />
      <Impact />
      <Cta/>
    </main>
  );
}
