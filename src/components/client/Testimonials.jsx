import React from "react";
import TestimonialCard from "../custom/TestimonialCard";

// /data/testimonials.js
export const testimonialsData = [
  {
    name: "Ayush Kumar Shaw",
    role: "CEO, Ace Productions",
    feedback:
      "We’ve worked with a lot of agencies before, but none brought the clarity and ROI this team delivered.",
  },
  {
    name: "Rohit Biswas",
    role: "E-commerce",
    feedback:
      "Our website performance skyrocketed. The team went beyond just execution—they owned the outcomes.",
  },
  {
    name: "Simran Ahuja",
    role: "Digital Influencer, Profolio",
    feedback:
      "Their creative strategy completely transformed my online presence. The team understood my audience and helped me scale my brand engagement.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-foreground text-background py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          What our clients say about us
        </h2>
        <p className="text-muted-foreground mt-2">
          Real feedback from businesses that trusted our demand capture
          framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonialsData.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
