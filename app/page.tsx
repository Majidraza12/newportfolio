import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="h-screen ">
        <Hero />
      </section>
      <section className="h-screen" id="about" >
        <About />
      </section>
    </div>
  );
}
