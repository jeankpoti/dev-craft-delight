import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Zap, Users } from "lucide-react";

const FeaturedProject = () => {
  const features = [
    { icon: Sparkles, text: "AI-Powered Learning" },
    { icon: Zap, "text": "Performance Optimized" },
    { icon: Users, text: "Cross-Platform" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Currently building an AI-powered learning platform from concept to production
          </p>
        </div>

        <Card className="overflow-hidden bg-gradient-card backdrop-blur-sm border-border shadow-card animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  In Development
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                MathGenie AI
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                An AI-powered learning platform where I design clean UIs, optimize performance, 
                and deliver smooth cross-platform experiences. This hands-on project reflects my 
                ability to take an idea from concept to production while balancing technical 
                excellence with user needs.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
                  >
                    <feature.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium">Flutter</span>
                <span className="px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium">React</span>
                <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 rounded-md bg-accent/10 text-accent text-sm font-medium">API Design</span>
              </div>
            </div>

            <div className="relative bg-secondary/50 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Sparkles className="h-12 w-12 text-foreground" />
                </div>
                <p className="text-2xl font-bold mb-2">Coming Soon</p>
                <p className="text-muted-foreground">Currently in active development</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedProject;
