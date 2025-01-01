export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
        <div className="space-y-8">
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">NASO Technologies Pvt. Ltd.</h3>
            <p className="text-gray-300 mb-4">August 2024 – Ongoing</p>
            <p className="text-gray-300">
              Developed a voice-enabled medical chatbot with React.js and Node.js. 
              Integrated real-time chat and voice features via WebSockets and 
              SpeechRecognition APIs.
            </p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Code Alpha</h3>
            <p className="text-gray-300 mb-4">July 2024</p>
            <p className="text-gray-300">
              Designed a restaurant landing page and developed a school event 
              management app using React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};