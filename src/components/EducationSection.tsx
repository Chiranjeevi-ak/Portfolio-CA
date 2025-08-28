import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Northwest Missouri State University",
      location: "Maryville, MO",
      year: "2016",
      type: "Graduate"
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Saveetha Engineering College",
      location: "Tamil Nadu, India",
      year: "2014",
      type: "Undergraduate"
    }
  ];

  const certifications = [
    {
      title: "Introduction to Internet of Things",
      provider: "NPTEL",
      year: "2020",
      category: "IoT"
    },
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      provider: "NPTEL",
      year: "2020",
      category: "Industry 4.0"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in computer science and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl text-primary text-center mb-8">Academic Background</h3>
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-lg text-primary">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.field}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-primary">{edu.institution}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{edu.location}</span>
                        </div>
                        
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {edu.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl text-primary text-center mb-8">Professional Certifications</h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-lg text-primary">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.provider}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.year}</span>
                      </div>
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Learning */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
              <h4 className="text-primary mb-3">Continuous Learning</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Committed to staying current with the latest technologies and industry best practices 
                through continuous learning, attending conferences, and participating in professional 
                development programs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["AWS Training", "Kubernetes", "React Advanced", "Spring Boot", "DevOps"].map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-accent/10 text-accent">
                    {topic}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}