import React from "react";
import { ScrollProjects } from "../custom/scrollProjects";

const Projects = () => {
  return (
    <section>
      <div className="text-background pt-40">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-4 md:px-20 p-4">
          <h2 className="md:text-7xl sm:text-5xl text-4xl font-semibold">
            We've Crafted for{" "}
            <span className="text-quad-violet">Our Clients.</span>
          </h2>
          <p className="max-w-lg mx-auto md:text-lg mt-4 text-background/50">
            From startups to enterprises, we’ve built digital experiences that
            drive results. Each project reflects our dedication to design
            excellence, technical precision, and business impact.
          </p>
        </div>
        <div>
          <ScrollProjects />
        </div>
      </div>
    </section>
  );
};

export default Projects;
