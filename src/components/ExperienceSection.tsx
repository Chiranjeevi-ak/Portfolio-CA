import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Bank of Missouri",
      location: "Perryville, MO",
      duration: "2022 - Present",
      type: "Banking & Financial Services",
      technologies: [
        "React",
        "Spring Boot",
        "AWS",
        "Microservices",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Medstar Health",
      location: "Columbia, MD",
      duration: "2021 - 2022",
      type: "Healthcare",
      technologies: ["Angular", "Java", "Azure", "REST APIs"],
    },
    {
      role: "Full Stack Developer",
      company: "T-Mobile",
      location: "Dallas, TX",
      duration: "2020 - 2021",
      type: "Telecommunications",
      technologies: [
        "React",
        "Spring Boot",
        "Kafka",
        "PostgreSQL",
      ],
    },
    {
      role: "Java Developer",
      company: "USAA",
      location: "Dallas, TX",
      duration: "2019 - 2020",
      type: "Insurance & Financial",
      technologies: [
        "Java",
        "Spring Security",
        "Oracle",
        "Jenkins",
      ],
    },
    {
      role: "Java Developer",
      company: "Samsdegorec Software Services",
      location: "Hyderabad, India",
      duration: "2017 - 2019",
      type: "Enterprise Software",
      technologies: ["Java", "JavaScript", "MySQL", "Docker"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering robust solutions across
            diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-accent/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl text-primary">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-primary mb-3">
              Industry Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Banking",
                "Healthcare",
                "Telecommunications",
                "Insurance",
                "Enterprise Software",
              ].map((industry, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-accent/10 text-accent"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}