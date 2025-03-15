"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const GoToProjects = () => {
  const handleProjectsClick = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects"); // Add an id="projects" to your projects section
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if no projects section is found
      window.scrollTo({
        top: document.documentElement.scrollHeight, // This will scroll down to bottom
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Button
        className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
        onClick={(e) => handleProjectsClick(e)}
      >
        Learn More
        <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </div>
  );
};

export default GoToProjects;
