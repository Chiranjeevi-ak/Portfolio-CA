import { Button } from './ui/button';
import { ArrowDown, Linkedin, Mail, Phone } from 'lucide-react';
import profileImage from 'figma:asset/5fdc4c369ac80a2162d863fc63195ab73343fce3.png';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl text-primary">
                  Chiranjeevi Ankaiah
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer
                </h2>
              </div>
              
              <div className="w-20 h-1 bg-accent rounded-full"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building modern, secure, and scalable full-stack solutions with expertise in 
                React, Spring Boot, Cloud platforms, and DevOps. Specialized in creating 
                responsive web applications and microservices architecture for banking, 
                healthcare, telecom, and enterprise systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#experience')}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Experience
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/chiranjeevi-ak6" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="mailto:chiranjeevi-ak@outlook.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href="tel:+17123824050">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl relative">
                <img
                  src={profileImage}
                  alt="Chiranjeevi Ankaiah - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}