export const Projects = () => {
  const projects = [
    {
      title: "RAG-based Medical Chatbot",
      tools: ["React.js", "Node.js", "PostgreSQL", "WebSockets", "SpeechRecognition", "JWT"],
      description: "A responsive chatbot with secure user authentication and real-time messaging.",
    },
    {
      title: "Restaurant Landing Page",
      tools: ["React.js", "Node.js"],
      description: "A single-page application with a user-friendly interface.",
    },
    {
      title: "School Event Management App",
      tools: ["React.js", "Node.js", "MongoDB"],
      description: "Streamlined event planning with features like registration, notifications, and user roles.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-primary-accent/10 text-primary-accent px-2 py-1 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};