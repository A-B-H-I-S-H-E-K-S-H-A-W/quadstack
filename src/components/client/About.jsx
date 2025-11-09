import React from "react";
import CustomCard from "../custom/CustomCard";
import { ArrowUpRight } from "lucide-react";

const data = {
  title: "Because a website without results is just decoration.",
  description:
    "20+ Happy customers trust our expertise and increase their profits with our demand capture framework",
  isButton: true,
  link: "/",
  buttonTitle: "Book a 15min call",
  buttonClassName: "rounded-full md:text-lg md:px-5 px-3 md:h-12",
  icon: ArrowUpRight,
};

const statsData = [
  { value: "25+", label: "Successful projects" },
  { value: "50+", label: "Projects build" },
  { value: "2 Years", label: "In the industry" },
  { value: "1", label: "IN" },
];

const About = () => {
  return (
    <div className="md:px-20 px-4 md:pt-20 pt-10 md:pb-36 pb-5">
      <div className="grid md:grid-cols-2 gap-5">
        <CustomCard data={data} />
        <section className={"relative py-16 px-6 md:px-12"}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
            {statsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-background">
                  {item.value}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[url('/textures/dark-fabric.webp')] opacity-[0.05] pointer-events-none"></div>
        </section>
      </div>
    </div>
  );
};

export default About;
