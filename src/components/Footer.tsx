import { Button } from './ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl mb-2">Chiranjeevi Ankaiah</h3>
            <p className="text-primary-foreground/80 text-sm mb-3">
              Full Stack Developer
            </p>
            <p className="text-primary-foreground/70 text-xs leading-relaxed">
              Building modern, secure, and scalable full-stack solutions
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-primary-foreground/80 text-sm mb-4">Connect with me</h4>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/chiranjeevi-ak6" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                asChild
              >
                <a href="mailto:chiranjeevi-ak@outlook.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                asChild
              >
                <a href="tel:+17123824050">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="text-right">
            <p className="text-primary-foreground/60 text-xs">
              © {currentYear} Chiranjeevi Ankaiah. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-primary-foreground/80 text-sm mb-2">Specializations</h4>
              <p className="text-primary-foreground/60 text-xs">
                React • Spring Boot • AWS • Microservices • DevOps • Security
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-primary-foreground/80 text-sm mb-2">Industries</h4>
              <p className="text-primary-foreground/60 text-xs">
                Banking • Healthcare • Telecom • Insurance • Enterprise
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}