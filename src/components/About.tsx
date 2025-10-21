import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "High-Quality Development",
      description: "Building scalable apps with clean code, API integrations, and performance optimization."
    },
    {
      icon: Sparkles,
      title: "User-Centric Design",
      description: "Creating intuitive UIs that delight users and drive business results."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Shipping products faster while maintaining quality and reducing bugs."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Software Engineer focused on helping companies build high-quality, scalable apps 
            that delight users and drive business results. With expertise in Flutter, React, and Next.js, 
            I turn ideas into fast, reliable, and user-friendly digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-card backdrop-blur-sm border-border shadow-card animate-fade-in-slow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">3+ Years of Experience</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Developing mobile and web apps with a focus on API integrations, performance tuning, 
                and responsive design. My goal is to help teams ship products faster, reduce bugs, 
                and create a better experience for their users.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span className="text-lg">Available now for part-time roles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
                <span className="text-lg">Open to internships or full-time positions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span className="text-lg">Starting Summer 2026</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
