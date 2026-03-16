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
            I'm a Software Engineer focused on helping companies build high-quality, scalable apps that delight users and drive business results. 
            With expertise in Flutter, React, and Next.js, I turn ideas into fast, reliable, and user-friendly digital products.
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
              <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
              <div className="space-y-4 mb-6">
              <div>
                  <p className="font-semibold text-primary">Augma AI | Frontend Developer (Remote)</p>
                  <p className="text-sm text-muted-foreground mb-2">Apr 2025 – Present</p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Lead the engineering team building Adllee, an AI-powered marketing platform enabling users to create, publish, and optimize campaigns across all major ad networks without prior expertise.</li>
                    <li>Architected an internal CRM tool (React + Supabase), centralizing client data and reducing manual workflows for the sales team.</li>
                    <li>Drive full-stack technical decisions (React, Flutter, Supabase, AI integration) and established coding standards and code review processes for the engineering team.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary">Freelance Software Developer</p>
                  <p className="text-sm text-muted-foreground mb-2">Jun 2023 – May 2025</p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Built and launched a job-matching platform reaching 10,000+ downloads on Google Play, directly improving client acquisition for partnered recruiters.</li>
                    <li>Designed, built, and shipped multiple self-initiated mobile applications across productivity and education verticals, each with responsive design and WCAG 2.0 compliance.</li>
                    <li>Optimized client codebases, reducing average page load times by ~40% and decreasing crash rates through systematic refactoring.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-accent">S2A TECHNOLOGY</p>
                  <p className="text-sm text-muted-foreground mb-2">May 2022 - May 2023</p>
                  <ul className="text-muted-foreground text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Shipped responsive mobile apps and websites with WCAG 2.0/ADA compliance, increasing usability scores across accessibility audits.</li>
                    <li>Integrated REST APIs and Firebase services (Auth, Firestore, Cloud Functions), enabling real-time sync for 3 core products.</li>
                    <li>Directed testing and deployment pipelines, reducing post-release defects by 30% and shortening release cycles.</li>
                  </ul>
                </div>
              </div>
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
                <span className="text-lg">Available Now</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
