import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 animate-slide-in">
          <img
            src="/lovable-uploads/1d96ce01-53ad-4145-97f9-c52fd7b553ad.png"
            alt="Axin Ricco"
            className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover border-4 border-primary-accent/20 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hover:text-primary-accent transition-colors duration-300">
            Axin Ricco
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 hover:text-white transition-colors duration-300">
            Full Stack Developer | UI/UX Enthusiast | Cloud Computing Innovator
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:scale-105 transition-transform duration-300"
            >
              About Me
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};