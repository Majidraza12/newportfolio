'use client'
import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, FileDown, ArrowDown01, ArrowDown } from "lucide-react";

const Hero = () => {

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by one full viewport height
      behavior: "smooth", // Enables smooth scrolling
    });
  };


  return (
    <div className="h-[80%] flex flex-col items-center pt-20 gap-4">
      <div className="h-[200px] w-[200px]">Profile Pic</div>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-6xl font-extrabold">
          Hi,I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Majid Raza
          </span>
        </h1>
        <p className="text-center text-muted-foreground text-2xl font-semibold">
          FullStack developer & UI/UX designer
        </p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <a
          href="https://github.com/Majidraza12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </a>
        <a href="/path-to-your-resume.pdf" download>
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> Resume
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/majid-raza-34a812288/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </a>
      </div>
      <Button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500" onClick={(e)=>handleLearnMoreClick(e)}>
        Learn More
        <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </div>
  );
};

export default Hero;
