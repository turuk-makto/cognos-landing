const steps = [
  {
    number: "1",
    title: "Patient Contacts",
    description: "Patient messages via Website, Instagram or Facebook seeking help"
  },
  {
    number: "2",
    title: "AI Agent Responds",
    description: "AI Agent chats, screens and triages instantly with validated tools"
  },
  {
    number: "3",
    title: "Smart Routing",
    description: "Agent offers appointment options or routes to human staff member"
  },
  {
    number: "4",
    title: "Data Integration",
    description: "Information stored for clinician follow-up and CRM integration"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-mira-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mira-blue-deep mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to transform your patient experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-mira-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-mira-blue">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-mira-blue-deep">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
