import logo1 from "@/assets/logo-1.png";
import logo2 from "@/assets/logo-2.png";
import logo3 from "@/assets/logo-3.webp";
// import logo4 from "@/assets/logo-4.png";
import Image from "next/image";

export default function Logo() {
  return (
    <section className="md:pt-64 pt-40 text-background">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="md:text-4xl text-3xl font-semibold">
          Built with trusted industry tools
        </h2>
        <h3 className="text-background/60 mt-4">
          We work with industry leaders who trust us to deliver exceptional
          quality and innovation.
        </h3>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-6 w-fit dark:invert"
            src={logo1}
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
          <Image
            className="h-6 w-fit dark:invert"
            src={logo2}
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
          <Image
            className="h-6 w-fit dark:invert"
            src={logo3}
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
        </div>
      </div>
    </section>
  );
}
