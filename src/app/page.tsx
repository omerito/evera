"use client";


import Hero from "@/components/Hero";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";

import CallToAction from "@/components/CallToAction";



export default function Home() {


  return (
    <>


      <ScrollUp />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Careers />
      <CallToAction />
    </>
  );
}
