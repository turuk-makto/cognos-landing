import { Clock, Zap, Heart, AlertTriangle, TrendingUp, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Reduce Admin Workload",
    description: "Save 15+ hours per week on patient intake and administrative tasks",
    color: "green"
  },
  {
    icon: Zap,
    title: "Instant Replies",
    description: "Provide immediate responses across website, Instagram & Facebook",
    color: "blue"
  },
  {
    icon: Heart,
    title: "Improve Patient Experience",
    description: "Enhanced engagement and satisfaction through personalized interactions",
    color: "purple"
  },
  {
    icon: AlertTriangle,
    title: "Identify Priority Cases",
    description: "Automatically flag high-risk patients requiring immediate attention",
    color: "red"
  },
  {
    icon: TrendingUp,
    title: "Boost Conversions",
    description: "Increase appointment bookings by up to 40% with smart engagement",
    color: "yellow"
  },
  {
    icon: Calendar,
    title: "Lower No-Show Rates",
    description: "Smart reminders and follow-ups reduce missed appointments",
    color: "teal"
  }
];

const colorClasses = {
  green: "bg-mira-green/10 text-mira-green",
  blue: "bg-mira-blue/10 text-mira-blue",
  purple: "bg-mira-blue/10 text-mira-blue",
  red: "bg-red-100 text-red-600",
  yellow: "bg-mira-yellow/20 text-mira-yellow-dark",
  teal: "bg-mira-green/10 text-mira-green"
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mira-blue-deep mb-4">Why Clinics Choose MIRA</h2>
          <p className="text-xl text-gray-600">Proven results that transform mental health practices</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-mira-blue-deep">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
