import React from "react";
import CustomCard from "../custom/CustomCard";

export const servicesData = [
  {
    title: "Designing",
    description:
      "We craft user-centered designs that blend aesthetics with functionality — from brand identity to responsive UI/UX experiences that engage and convert.",
  },
  {
    title: "Development",
    description:
      "From robust websites to custom web applications, we build high-performance, scalable digital products using modern frameworks and clean code architecture.",
  },
  {
    title: "SEO Optimization",
    description:
      "Our SEO strategies ensure your brand gets found. We optimize for visibility, performance, and search intent to drive organic traffic and sustainable growth.",
  },
  {
    title: "E-Commerce Growth",
    description:
      "We help online stores grow — improving conversions, optimizing product experiences, and implementing data-driven marketing strategies to maximize ROI.",
  },
];

const Services = () => {
  return (
    <section id="services" className="pb-10 pt-20 md:px-20 px-4">
      <div className="text-center mx-auto text-background">
        <h2 className="md:text-4xl text-3xl font-semibold">Services</h2>
        <h3 className="text-background/60 mt-4">
          From web design to deployment—we deliver digital solutions that scale.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-14">
        {servicesData.map((item, idx) => (
          <div className="" key={idx}>
            <CustomCard data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
