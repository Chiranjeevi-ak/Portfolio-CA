import { Card } from './ui/card';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chiranjeevi-ak@outlook.com",
      link: "mailto:chiranjeevi-ak@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "712-382-4050",
      link: "tel:+17123824050"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/chiranjeevi-ak6"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? Let's connect and explore how we can work together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Centered Contact Information */}
          <div className="text-center mb-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or collaboration on innovative solutions. Whether you're looking for a 
                full-stack developer for your team or need consultation on your next 
                technical project, I'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-accent text-center">
                <a 
                  href={info.link}
                  className="block group"
                  target={info.title === "LinkedIn" ? "_blank" : undefined}
                  rel={info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <info.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-primary text-lg mb-2">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 max-w-3xl mx-auto">
              <p className="text-lg text-primary mb-4">
                "Ready to collaborate on innovative solutions"
              </p>
              <p className="text-muted-foreground">
                Let's discuss how my expertise in full-stack development, cloud platforms, 
                and modern technologies can help bring your project to life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}