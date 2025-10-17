import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:glow relative animate-fade-in">
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        AI/ML and Data Analytics Intern
                      </h3>
                      <p className="text-lg text-primary">Cygnet.One, Ahmedabad</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">May 2025 – July 2025</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Designed backend systems using Node.js and SQL for production-level workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed and maintained backend services using C# in Visual Studio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Built frontend interfaces with React for seamless team operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contributed to an AI-powered solution for enhanced data analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
