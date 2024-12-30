export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Bachelor in Computer Science and Engineering
          </h3>
          <p className="text-gray-600 mb-2">Meenakshi College of Engineering</p>
          <p className="text-primary-accent font-medium mb-4">GPA: 8.01</p>
          <h4 className="font-medium mb-2">Key Coursework:</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Computer Architecture</li>
            <li>Comparison of Learning Algorithms</li>
            <li>Computational Theory</li>
          </ul>
        </div>
      </div>
    </section>
  );
};