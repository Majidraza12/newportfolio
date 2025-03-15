import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Orbitize",
      description:
        "A full-stack project management dashboard for managing projects, tracking commits, and assigning tasks.",
      image: "/images/orbitize.jpg",
      tags: [
        "Next.js",
        "Supabase",
        "TypeScript",
        "ShadCN UI",
        "Tailwind CSS",
        "Nodemailer",
      ],
    },
    {
      title: "ChatMate",
      description:
        "A MERN stack-based chat application for real-time messaging with Socket.io integration.",
      image: "/images/chatmate.jpg",
      tags: [
        "MERN",
        "DaisyUI",
        "Postman",
        "Socket.io",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
    },
    {
      title: "Football Prediction Model",
      description:
        "A machine learning-based model to predict football match outcomes based on historical data.",
      image: "/images/football-prediction.jpg",
      tags: ["Machine Learning", "Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "Real Estate Management Application",
      description:
        "A platform for managing real estate properties, listings, and transactions efficiently.",
      image: "/images/real-estate.jpg",
      tags: [
        "React",
        "Next.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "TimeIt - Pomodoro Tracker",
      description:
        "A productivity app that helps users track and optimize their Pomodoro work sessions.",
      image: "/images/timeit.jpg",
      tags: ["React", "Redux", "Tailwind CSS", "Local Storage", "Timer API"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
