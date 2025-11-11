import Projects from "@/components/client/Projects";
import React from "react";

const page = () => {
  return (
    <div
      className="relative max-w-screen bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pb-10">
        <Projects />
      </div>
    </div>
  );
};

export default page;
