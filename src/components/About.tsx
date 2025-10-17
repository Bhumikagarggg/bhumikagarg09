import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering (AI/ML)",
      institution: "D.Y. Patil International University",
      period: "2023 – Present",
      focus: "Specialization in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Class XII",
      institution: "K.D. Jain Sr. Sec. School, Beawar, Rajasthan",
      period: "2022 – 2023",
    },
    {
      degree: "Class X",
      institution: "Sanskriti The School, Ajmer, Rajasthan",
      period: "2020 – 2021",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing Computer Science Engineering at D.Y. Patil International University, 
                where I specialize in Artificial Intelligence and Machine Learning. My journey into tech began 
                with a deep curiosity for how things work, and I've since developed full-stack applications and 
                explored intelligent algorithms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of tech, I'm constantly learning and growing in this ever-evolving digital space. 
                I believe in building solutions that make a real impact and pushing the boundaries of what's 
                possible with technology.
              </p>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                      {edu.focus && (
                        <p className="text-sm text-primary mt-2">{edu.focus}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
