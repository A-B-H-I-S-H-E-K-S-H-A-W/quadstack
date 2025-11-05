import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center ">
      <div className="">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-7xl font-bold text-background">
            Radically better observability{" "}
            <span className="text-pink-400">stack</span>
          </h2>
          <p className="text-base mt-4 text-background/50">
            Snipptech offers full-spectrum digital services including SEO, apps,
            ads, AI, and automation.
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
