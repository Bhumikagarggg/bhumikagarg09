import { Code2, Database, Wrench, Cpu, Globe, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C#", "Python", "C", "C++", "JavaScript", "SQL"],
      color: "text-primary",
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [".NET", "Node.js", "React"],
      color: "text-secondary",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Visual Studio", "Git", "Postman"],
      color: "text-primary",
    },
    {
      title: "Software",
      icon: Cpu,
      skills: ["MATLAB", "Simulink", "Fusion 360", "Ultimaker Cura"],
      color: "text-secondary",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS"],
      color: "text-primary",
    },
    {
      title: "Areas of Interest",
      icon: Brain,
      skills: ["Full-Stack Development", "AI/ML", "Backend Systems"],
      color: "text-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
