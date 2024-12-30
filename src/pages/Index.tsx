import { Dock, DockIcon } from "@/components/Dock";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      <Dock>
        <DockIcon
          href="https://github.com/AxinRicco07"
          label="GitHub"
        >
          <Github className="w-full h-full" />
        </DockIcon>
        <DockIcon
          href="https://www.linkedin.com/in/axin-ricco-07003a24a/"
          label="LinkedIn"
        >
          <Linkedin className="w-full h-full" />
        </DockIcon>
        <DockIcon
          href="mailto:axinricco.07@gmail.com"
          label="Email"
        >
          <Mail className="w-full h-full" />
        </DockIcon>
        <DockIcon
          href="tel:+917305539655"
          label="WhatsApp"
        >
          <Phone className="w-full h-full" />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default Index;