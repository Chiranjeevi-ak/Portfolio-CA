import { Card } from './ui/card';
import { Code, Cloud, Shield, Layers } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proven experience in both frontend and backend development with modern frameworks and libraries."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Extensive experience with AWS, Azure, Docker, Kubernetes, and CI/CD automation pipelines."
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Specialized in building secure applications with JWT, OAuth2, and performance optimization."
    },
    {
      icon: Layers,
      title: "Microservices Architecture",
      description: "Expert in designing and implementing scalable microservices with Spring Boot and messaging systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced Full Stack Developer with proven expertise in secure, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl text-primary">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm an experienced Full Stack Developer with a strong background in developing 
                secure, scalable, and cloud-ready applications across diverse industries including 
                banking, healthcare, telecom, insurance, and enterprise software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans the entire development stack - from creating responsive 
                frontend interfaces with React and Angular to building robust backend services 
                with Java Spring Boot and implementing scalable microservices architectures.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg text-primary">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Backend & APIs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Cloud Platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">DevOps & CI/CD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">TDD & Agile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-primary">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
            <p className="text-lg text-primary mb-4">
              "Collaborative Agile team player with extensive experience in Test-Driven Development and performance optimization"
            </p>
            <p className="text-muted-foreground">
              Passionate about creating efficient, maintainable solutions that solve real business problems
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}