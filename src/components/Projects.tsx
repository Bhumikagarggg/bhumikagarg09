import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Product Inventory Management System",
      description: "A full-stack web system for managing inventory, suppliers, and stock levels with secure authentication and real-time alerts.",
      features: [
        "Secure login and user management",
        "Low-stock alerts and notifications",
        "Comprehensive report generation",
        "Real-time inventory tracking",
      ],
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "Hotel Network System",
      description: "Designed a secure network infrastructure for a 3-floor hotel with advanced network segmentation and security protocols.",
      features: [
        "VLAN segmentation for enhanced security",
        "DHCP and OSPF configuration",
        "SSH for secure remote access",
        "Router and switch configuration",
      ],
      tech: ["Cisco Packet Tracer", "Networking", "Security"],
      gradient: "from-secondary/20 to-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:glow group animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium"
                    >
                      {tech}
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

export default Projects;
