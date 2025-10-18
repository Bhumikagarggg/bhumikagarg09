import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-xs lg:text-sm uppercase tracking-wider text-primary font-medium">
                Engineering Student
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                Bhumika <span className="text-gradient">Garg</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
                Full-Stack Developer | AI/ML Enthusiast
              </p>
            </div>

            {/* Photo - visible only on mobile between subtitle and description */}
            <div className="lg:hidden relative flex justify-center items-center py-2">
              <div className="relative z-10 w-[320px] h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl" />
                <div className="relative overflow-hidden rounded-full w-full h-full border-4 border-primary/20">
                  <img 
                    src="https://i.postimg.cc/ZYLbCh3P/temp-Image-G2v-Lv-D.avif"
                    alt="Bhumika Garg - Full-Stack Developer"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              I'm a tech-savvy engineering student passionate about full-stack development and artificial intelligence. 
              I love building impactful digital solutions and exploring intelligent systems.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 flex-wrap">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow"
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <a 
                href="https://github.com/Bhumikagarggg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/bhumikagarg09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:bhumikatech2024@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:7742469911"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Photo - visible only on desktop */}
          <div className="relative animate-fade-in hidden lg:flex justify-center items-center">
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-24 h-24 border-4 border-primary/30 rounded-full" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 -right-10 w-16 h-16 bg-primary/20 rounded-full" />
            
            {/* Photo container */}
            <div className="relative z-10 w-[500px] h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl" />
              <div className="relative overflow-hidden rounded-full w-full h-full border-4 border-primary/20">
                <img 
                  src="https://i.postimg.cc/ZYLbCh3P/temp-Image-G2v-Lv-D.avif"
                  alt="Bhumika Garg - Full-Stack Developer"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
            
            {/* Additional decorative shapes */}
            <div className="absolute top-10 -left-5 w-12 h-12 border-2 border-secondary/40 rounded-lg rotate-12" />
            <div className="absolute bottom-10 -right-5 w-10 h-10 bg-primary/10 rounded-full" />
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
