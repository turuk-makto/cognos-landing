import { MessageCircle, CheckCircle, Zap, Calendar, RotateCcw, Database, Languages } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "24/7 AI Chatbot",
    description: "Initial patient interaction across Web, Instagram, and Facebook Messenger with intelligent conversation handling."
  },
  {
    icon: CheckCircle,
    title: "Smart Pre-screening",
    description: "Automated screening with PHQ-9, GAD-7 and other validated mental health assessment tools."
  },
  {
    icon: Zap,
    title: "AI-Powered Triage",
    description: "Intelligent patient routing and automated referrals to therapy, psychiatry, or emergency services."
  },
  {
    icon: Calendar,
    title: "Real-Time Booking",
    description: "Seamless appointment scheduling with Google Calendar sync and availability management."
  },
  {
    icon: RotateCcw,
    title: "Automated Follow-Ups",
    description: "Post-session check-ins and retention campaigns to maintain patient engagement."
  },
  {
    icon: Database,
    title: "Seamless Integration",
    description: "Connect with Notion, Tally, Google Sheets, Airtable and your existing clinic workflow."
  },
  {
    icon: Languages,
    title: "Personalized Agent",
    description: "Customizable tone and language support including English, Spanish, and other languages for diverse patient populations."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-mira-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mira-blue-deep mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">Comprehensive AI solutions designed for mental health clinics</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-mira-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-mira-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-mira-blue-deep">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
