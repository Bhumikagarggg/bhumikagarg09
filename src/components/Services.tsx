import { Code, Server, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "End-to-end development of responsive and functional websites using modern stacks and best practices.",
      color: "text-primary",
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      description: "Proficient in building scalable backend APIs and seamless frontend experiences with modern frameworks.",
      color: "text-secondary",
    },
    {
      icon: Brain,
      title: "AI/ML Exploration",
      description: "Enthusiastic learner in AI/ML, actively exploring intelligent system design and implementation.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What I <span className="text-gradient">Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:glow group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-block p-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className={`w-12 h-12 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
