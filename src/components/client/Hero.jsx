import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 md:px-20">
      <div className="">
        <div className="max-w-4xl mx-auto text-center">
          <div className="z-10 flex py-10 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-background/30 bg-foreground text-base text-background transition-all ease-in hover:cursor-pointer hover:bg-foreground/60"
              )}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-background/60 hover:duration-300">
                <span className="text-sm">Powered by Quadstack</span>
              </div>
            </div>
          </div>
          <h2 className="md:text-7xl sm:text-5xl text-4xl font-semibold text-background">
            Building Digital Experiences that{" "}
            <span className="text-quad-violet">Perform.</span>
          </h2>
          <p className="max-w-lg mx-auto text-base mt-4 text-background/50">
            Quadstack offers digital services including SEO, web apps,
            e-commerce website, and automation.
          </p>
          <div className="mt-6">
            <Button variant={"outline"} size={"lg"} className={"rounded-3xl"}>
              Discover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
