export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Technologies",
      skills: ["Python", "C", "JS", "CSS", "HTML", "Node.js", "React", "Express", "jQuery"],
    },
    {
      title: "Tools & Platforms",
      skills: ["VMware", "Microsoft Office Suite", "VirtualBox", "AWS Foundation", "Penpot", "Figma"],
    },
    {
      title: "Personal Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Adaptability",
        "Problem-Solving",
        "Time Management",
        "Organization",
        "Positive Attitude",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary hover:text-primary-accent transition-colors duration-300">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 hover:text-primary-accent transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-accent/10 text-primary-accent px-3 py-1 rounded-full text-sm hover:bg-primary-accent hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};