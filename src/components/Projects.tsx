import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Camera,
  ListTodo,
  Brain,
  LayoutDashboard,
} from 'lucide-react';
import mathgenieImage from '@/assets/mathgenie-showcase.jpg';
import worksnapImage from '@/assets/worksnap-showcase.jpg';
import snapanimalImage from '@/assets/snapanimal-showcase.jpg';
import founderboardImage from '@/assets/founderboard-showcase.png';
import placeholderImage from '/placeholder.svg';

const Projects = () => {
  const projects = [
    {
      title: 'MathGenie AI',
      description:
        'AI-powered learning app solving math from photos with quizzes & study plans',
      tech: ['Flutter', 'Gemini AI', 'Firebase'],
      icon: Sparkles,
      link: 'https://apps.apple.com/us/app/mathgenie-ai-solve-homework/id6746733499',
      featured: true,
      category: 'mobile' as const,
    },
    {
      title: 'TaskMaate AI',
      description:
        'AI productivity SaaS for task management, smart scheduling, and workflow optimization',
      tech: ['React', 'Next.js', 'AI/ML'],
      icon: Brain,
      link: 'https://taskmaateai.netlify.app',
      image: placeholderImage,
      category: 'websites' as const,
    },
    {
      title: 'Work Snap',
      description:
        'Productivity app with offline-first task management and real-time sync',
      tech: ['Flutter', 'Supabase', 'Offline-First'],
      icon: CheckCircle2,
      link: 'https://apps.apple.com/us/app/work-snap/id6739957932',
      image: worksnapImage,
      category: 'mobile' as const,
    },
    {
      title: 'Snap Animal AI',
      description:
        'Wildlife education app identifying animals with facts and interactive quizzes',
      tech: ['Flutter', 'AI Recognition', 'Firebase'],
      icon: Camera,
      link: 'https://apps.apple.com/us/app/snap-animal-ai/id6745976176',
      image: snapanimalImage,
      category: 'mobile' as const,
    },
    {
      title: 'Founderboard AI',
      description:
        'All-in-one, AI-powered dashboard built specifically for startup founders who are drowning in tool fragmentation',
      tech: ['React', 'Supabase', 'AI/ML'],
      icon: LayoutDashboard,
      link: '#',
      image: founderboardImage,
      featured: true,
      category: 'websites' as const,
    },
    {
      title: 'Snap Animal Landing',
      description:
        'Clean, high-performance landing page to drive user sign-ups and premium subscriptions',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      icon: ListTodo,
      link: 'https://snapanimalai.netlify.app/',
      image: placeholderImage,
      category: 'websites' as const,
    },
  ];

  const mobileProjects = projects.filter((p) => p.category === 'mobile');
  const websiteProjects = projects.filter((p) => p.category === 'websites');
  const featuredProject = mobileProjects.find((p) => p.featured);
  const otherMobileProjects = mobileProjects.filter((p) => !p.featured);

  const renderProjectCard = (project: typeof projects[0], index: number) => (
    <Card
      key={index}
      className="overflow-hidden bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.image && (
        <div className="relative h-64 bg-secondary/50 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} app interface showcase`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
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
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="group/btn">
            View Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in mobile and web
            development
          </p>
        </div>

          <Tabs defaultValue="websites" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-secondary/50 backdrop-blur-sm">
              <TabsTrigger value="websites" className="px-6">Websites</TabsTrigger>
              <TabsTrigger value="mobile" className="px-6">Mobile Apps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mobile">
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
                      <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="hero" className="group">
                          View Demo
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="relative bg-secondary/50 min-h-[400px] overflow-hidden">
                    <img
                      src={mathgenieImage}
                      alt="MathGenie AI app interface showing AI-powered learning features"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            )}
            <div className="grid md:grid-cols-2 gap-6">
              {otherMobileProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </TabsContent>

          <TabsContent value="websites">
            <div className="grid md:grid-cols-2 gap-6">
              {websiteProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
