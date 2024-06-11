"use client";
import About from "@/components/About";
import Award from "@/components/Award";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import PetrixLayout from "@/layout/PetrixLayout";
const page = () => {
  return (
    <PetrixLayout>
      <Banner />
      <About />
      <Skills />
      <Award />
      <Experience />
      <Portfolio />
      <Service />
      <Testimonial />
      <Blog />
    </PetrixLayout>
  );
};
export default page;
