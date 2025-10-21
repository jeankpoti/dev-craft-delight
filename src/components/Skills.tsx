import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Dart", "Python", "Java", "C#"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "REST APIs", "Firebase", "Supabase", "Firestore", "RevenueCat"]
    },
    {
      title: "State Management",
      skills: ["Bloc", "Provider", "Riverpod", "Redux"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "Cursor", "WordPress", "Lovable", "Bolt", "Replit"]
    },
    {
      title: "Accessibility & Testing",
      skills: ["WCAG 2.0", "ADA Compliance", "Testing", "Debugging", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-2 rounded-lg bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
