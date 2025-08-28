import { Card } from './ui/card';
import { Code, Cloud, Smartphone, Database, Shield, Cog } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using React, Angular, Java Spring Boot, and modern frameworks.",
      features: ["Responsive Web Apps", "RESTful APIs", "Single Page Applications", "Progressive Web Apps"]
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions on AWS and Azure with best practices for security and performance.",
      features: ["AWS/Azure Migration", "Serverless Architecture", "Auto-scaling Solutions", "Cloud Security"]
    },
    {
      icon: Database,
      title: "Microservices Architecture",
      description: "Build modular, scalable microservices with proper service decomposition and inter-service communication.",
      features: ["Service Design", "API Gateway", "Event-Driven Architecture", "Container Orchestration"]
    },
    {
      icon: Cog,
      title: "DevOps & CI/CD",
      description: "Implement automated deployment pipelines, monitoring, and infrastructure as code for reliable delivery.",
      features: ["Pipeline Automation", "Docker Containerization", "Monitoring Setup", "Infrastructure as Code"]
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Integrate robust security measures including authentication, authorization, and data protection.",
      features: ["JWT/OAuth2 Implementation", "Role-Based Access", "Data Encryption", "Security Audits"]
    },
    {
      icon: Smartphone,
      title: "API Development",
      description: "Design and develop high-performance REST and GraphQL APIs with comprehensive documentation.",
      features: ["REST API Design", "GraphQL Implementation", "API Documentation", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Services & Expertise</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services tailored to modern business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group hover:scale-105 border-l-4 border-l-transparent hover:border-l-accent">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl text-primary">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-primary text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}