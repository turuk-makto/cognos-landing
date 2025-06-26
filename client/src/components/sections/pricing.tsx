import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out MIRA",
    features: [
      "Free trial period",
      "Up to 10 conversations/month",
      "Web widget only"
    ],
    cta: "Get Started Free",
    popular: false,
    buttonClass: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  },
  {
    name: "Professional",
    price: "$69",
    period: "/month",
    description: "For growing practices",
    features: [
      "Unlimited conversations",
      "Social + Web integration",
      "Appointment booking"
    ],
    cta: "Start Professional",
    popular: true,
    buttonClass: "bg-white text-mira-blue hover:bg-gray-100"
  },
  {
    name: "Clinic Plus",
    price: "$139",
    period: "/month",
    description: "For established clinics",
    features: [
      "Multi-therapist support",
      "Custom agent tone & language",
      "Full integrations"
    ],
    cta: "Choose Clinic Plus",
    popular: false,
    buttonClass: "bg-mira-blue text-white hover:bg-mira-blue-light"
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-mira-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mira-blue-deep mb-4">Plans for Every Stage</h2>
          <p className="text-xl text-gray-600">Choose the right plan for your clinic's needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 shadow-lg relative ${
                plan.popular 
                  ? 'bg-mira-blue text-white shadow-xl' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-mira-yellow text-mira-yellow-dark px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className={`text-lg ${plan.popular ? 'opacity-75' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={plan.popular ? 'opacity-90' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className={`w-full py-3 font-semibold transition-colors ${plan.buttonClass}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Compare Plans →
          </button>
        </div>
      </div>
    </section>
  );
}
