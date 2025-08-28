import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: ["React", "Angular", "Redux", "React Hooks", "Context API", "HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "Microservices", "Node.js"]
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS EC2", "AWS ECS", "AWS RDS", "AWS S3", "AWS Lambda", "CloudWatch", "IAM", "Azure"]
    },
    {
      title: "DevOps & CI/CD",
      icon: "🚀",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Docker", "Kubernetes", "Git"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Couchbase"]
    },
    {
      title: "Messaging & APIs",
      icon: "🔄",
      skills: ["Kafka", "REST", "GraphQL", "WebSockets", "Message Queues"]
    },
    {
      title: "Testing & Monitoring",
      icon: "🔍",
      skills: ["JUnit", "Mockito", "Selenium", "ELK Stack", "Splunk", "Prometheus", "Grafana"]
    },
    {
      title: "Security",
      icon: "🔒",
      skills: ["JWT", "OAuth2", "Role-Based Access Control", "Data Encryption", "HTTPS/TLS"]
    }
  ];

  const proficiencyLevels = [
    { skill: "React/Angular", level: 95, color: "bg-chart-1" },
    { skill: "Java/Spring Boot", level: 98, color: "bg-chart-2" },
    { skill: "AWS/Cloud Platforms", level: 90, color: "bg-chart-3" },
    { skill: "Microservices Architecture", level: 92, color: "bg-chart-4" },
    { skill: "DevOps/CI-CD", level: 88, color: "bg-chart-5" },
    { skill: "Database Design", level: 85, color: "bg-accent" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-lg text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-xs py-1 px-2 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default bg-secondary/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl text-primary text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyLevels.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <Progress value={item.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
            <h4 className="text-primary mb-2">Years of Experience</h4>
            <p className="text-3xl text-accent">8+</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-primary/5 border-primary/20">
            <h4 className="text-primary mb-2">Technologies Mastered</h4>
            <p className="text-3xl text-accent">40+</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
            <h4 className="text-primary mb-2">Industries Served</h4>
            <p className="text-3xl text-accent">5+</p>
          </Card>
        </div>
      </div>
    </section>
  );
}