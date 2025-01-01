export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
        <div className="bg-primary/50 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <a
                href="mailto:axinricco.07@gmail.com"
                className="text-primary-accent hover:underline"
              >
                axinricco.07@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-medium text-white">Phone</h3>
              <a
                href="tel:+917305539655"
                className="text-primary-accent hover:underline"
              >
                +91 7305539655
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};