import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Globe, Palette, Brain, Network, FileSearch, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications with Flutter",
      features: ["iOS & Android", "Offline-first", "Real-time sync", "Push notifications"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications with React & Next.js",
      features: ["SEO optimization", "Responsive design", "Progressive web apps", "API integration"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts and delights",
      features: ["Wireframing", "Prototyping", "WCAG 2.0 compliance", "Design systems"]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent features powered by AI/ML",
      features: ["Natural language processing", "Image recognition", "Predictive analytics", "Chatbots"]
    },
    {
      icon: Network,
      title: "API Development",
      description: "Scalable backend services and RESTful APIs",
      features: ["Database design", "Authentication", "Real-time data", "Cloud deployment"]
    },
    {
      icon: FileSearch,
      title: "Consulting & Code Review",
      description: "Technical guidance and code quality improvements",
      features: ["Architecture review", "Performance optimization", "Best practices", "Mentorship"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive software development services tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
