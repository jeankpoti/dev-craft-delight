import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for opportunities to contribute to exciting projects
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-card backdrop-blur-sm border-border shadow-card animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Current Availability</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-glow" />
                  <div>
                    <p className="font-semibold">Part-Time</p>
                    <p className="text-muted-foreground text-sm">Available now</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-glow" />
                  <div>
                    <p className="font-semibold">Full-Time / Internships</p>
                    <p className="text-muted-foreground text-sm">Starting Summer 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:jeankpoti385@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base">jeankpoti385@gmail.com</span>
                </a>
                <a 
                  href="tel:+13099093177"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <span className="h-5 w-5 text-primary text-lg">📞</span>
                  <span>(309) 909-3177</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jean-kpoti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/jeankpoti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>View GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <Button size="lg" variant="hero" className="group">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Contact;
