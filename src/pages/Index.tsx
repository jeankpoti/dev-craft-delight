import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProject />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
