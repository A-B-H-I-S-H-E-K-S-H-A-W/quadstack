import { Navbar } from "@/components/client/Navbar";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/bg.jpg')" }}
        className="min-h-[300vh] w-full bg-no-repeat bg-cover"
      >
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
}
