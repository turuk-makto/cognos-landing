import { Button } from "@/components/ui/button";
import therapyImage from "@assets/psucologo_1750951758677.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-mira-gray-light to-mira-white py-20 overflow-hidden relative">
      {/* Background decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-mira-blue/10 to-mira-blue/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-mira-green/10 to-mira-green/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-mira-yellow/10 to-mira-yellow/20 rounded-full opacity-30 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-mira-blue-deep mb-6">
                Smart AI Agents for Mental Health Clinics
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automate patient triage, booking, and follow-up across Web, Instagram, and Facebook Messenger.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-mira-blue hover:bg-mira-blue-light text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book a Free Demo
              </Button>
            </div>
            
            {/* Image and Stats Column */}
            <div className="relative">
              {/* Main therapy session image */}
              <div className="relative z-20">
                <img 
                  src={therapyImage} 
                  alt="Professional psychologist conducting therapy session with patient in modern office" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              
              {/* Floating stat bubbles */}
              <div className="absolute -top-4 -left-8 z-30">
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform rotate-[-5deg]">
                  <div className="text-3xl font-bold text-mira-green mb-1">50%</div>
                  <div className="text-sm text-gray-600 font-medium">Reduction in<br/>assessment<br/>times</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-8 z-30">
                <div className="rounded-3xl p-6 shadow-xl text-white transform rotate-[8deg]" style={{ backgroundColor: '#A3C9A8' }}>
                  <div className="text-3xl font-bold mb-1">94%</div>
                  <div className="text-sm font-medium opacity-90">Patient<br/>satisfaction</div>
                </div>
              </div>
              
              {/* Decorative organic shapes */}
              <div className="absolute top-8 right-4 w-32 h-32 bg-gradient-to-br from-mira-green/20 to-mira-green-light/20 rounded-full z-10"></div>
              <div className="absolute bottom-12 left-6 w-24 h-24 bg-gradient-to-br from-mira-yellow/20 to-mira-yellow/30 rounded-full z-10"></div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full z-25" viewBox="0 0 400 300">
                <path 
                  d="M80 50 Q200 30 320 120" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.6"
                  strokeDasharray="5,5"
                />
                <path 
                  d="M320 250 Q200 200 80 180" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.6"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
