import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, CheckCircle2, Camera, ListTodo, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MathGenie AI",
      description: "AI-powered learning app solving math from photos with quizzes & study plans",
      tech: ["Flutter", "Gemini AI", "Firebase"],
      icon: Sparkles,
      link: "#",
      featured: true
    },
    {
      title: "TaskMaate AI",
      description: "AI productivity SaaS for task management, smart scheduling, and workflow optimization",
      tech: ["React", "Next.js", "AI/ML"],
      icon: Brain,
      link: "#"
    },
    {
      title: "Work Snap",
      description: "Productivity app with offline-first task management and real-time sync",
      tech: ["Flutter", "Supabase", "Offline-First"],
      icon: CheckCircle2,
      link: "#"
    },
    {
      title: "Snap Animal AI",
      description: "Wildlife education app identifying animals with facts and interactive quizzes",
      tech: ["Flutter", "AI Recognition", "Firebase"],
      icon: Camera,
      link: "#"
    },
    {
      title: "Snap Animal Landing",
      description: "Clean, high-performance landing page to drive user sign-ups and premium subscriptions",
      tech: ["React", "Next.js", "Tailwind CSS"],
      icon: ListTodo,
      link: "#"
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in mobile and web development
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <Card className="overflow-hidden bg-gradient-card backdrop-blur-sm border-border shadow-card mb-12 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    Featured Project
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  {featuredProject.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <Button variant="hero" className="group">
                    View Demo
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="relative bg-secondary/50 min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <featuredProject.icon className="h-12 w-12 text-foreground" />
                  </div>
                  <p className="text-2xl font-bold mb-2">AI-Powered Learning</p>
                  <p className="text-muted-foreground">Flutter + Gemini AI</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <project.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 rounded-md bg-secondary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="group/btn">
                View Project
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
