import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="h-screen ">
        <Hero />
      </section>
      <section className="h-screen w-full" id="about" >
        <About />
      </section>
      <section className="h-screen w-full" id="projects">
        <Projects/>
      </section>
    </div>
  );
}
