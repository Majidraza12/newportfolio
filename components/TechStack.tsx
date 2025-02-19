"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "GraphQL",
    "Tailwind CSS",
    "React Native",
    "Tailwind",
    "Supabase",
    "Python",
    "Django",
    "Firebase",
  ];

  return (
    <div className="w-full overflow-hidden bg-black/20 py-8 mt-12">
      <Marquee gradient={false} speed={50}>
        {technologies.map((tech) => (
          <div
            key={tech}
            className="mx-4 text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            {tech}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechStack;
