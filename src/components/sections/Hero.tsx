import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <div className="text-center animate-fade-in">
        <div className="w-32 h-32 rounded-full bg-primary-accent/20 mx-auto mb-8">
          {/* Placeholder for profile picture */}
          <img
            src="https://via.placeholder.com/128"
            alt="Axin Ricco"
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Axin Ricco
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Cloud Computing Innovator
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
          </Button>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};