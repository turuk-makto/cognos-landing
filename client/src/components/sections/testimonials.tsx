const testimonials = [
  {
    quote: "Patients love the instant replies. It's changed how we run our clinic. The AI handles initial screening so well that we can focus on providing quality care.",
    author: "Dr. Ana V.",
    role: "Psychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "MIRA cut our admin time in half and helped us grow. The booking automation alone has saved us countless hours every week.",
    author: "Dr. Omar L.",
    role: "Mental Health Clinic Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mira-blue-deep mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real feedback from mental health professionals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-mira-blue/5 p-8 rounded-2xl border border-mira-blue/10">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.author}, ${testimonial.role}`}
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <div className="font-semibold text-mira-blue-deep">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
