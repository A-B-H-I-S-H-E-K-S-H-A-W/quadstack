import Hero from "@/components/client/Hero";
import Logo from "@/components/client/Logo";
import { Navbar } from "@/components/client/Navbar";
import { ScrollText } from "@/components/client/ScrollText";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/bg.jpg')" }}
        className="min-h-[300vh] w-full bg-no-repeat bg-cover overflow-hidden"
      >
        <div>
          <Navbar />
          <Hero />
          <ScrollText />
          <Logo />
        </div>
      </div>
    </>
  );
}
