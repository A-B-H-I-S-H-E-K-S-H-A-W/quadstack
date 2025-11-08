import Hero from "@/components/client/Hero";
import Logo from "@/components/client/Logo";
import { Navbar } from "@/components/client/Navbar";
import { ScrollText } from "@/components/client/ScrollText";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-[300vh] w-full bg-no-repeat bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <ScrollText />
          <Logo />
        </div>
      </div>
    </>
  );
}
