import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Terminal } from "lucide-react";
import TechStack from "./TechStack";
import GoToProjects from "./Buttons/GoToProjects";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
      title: "Frontend Development",
      description:
        "Creating beautiful, responsive user interfaces with modern frameworks",
    },
    {
      icon: <Terminal className="h-8 w-8 text-cyan-400" />,
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs",
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences",
    },
  ];

  return (
    <div id="about" className="py-20 bg-muted/50 w-full h-screen ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 px-4">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="max-w-3xl mx-auto text-muted-foreground text-center mb-10">
          <p>
            I'm Majid Raza, a passionate web developer with two years of
            experience in building web applications. Currently, I'm majoring in
            Computer Science at Illinois Tech, with a minor in AI. I specialize
            in creating beautiful, functional, and user-friendly websites that
            help businesses grow and succeed online. I'm always eager to learn
            new technologies and improve my skills to build better digital
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-2 px-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-[100%] m-0">
        <TechStack />
      </div>
      <div>
        <GoToProjects />
      </div>
    </div>
  );
};

export default About;
