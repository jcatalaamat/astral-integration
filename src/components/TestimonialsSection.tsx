import { ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const TestimonialsSection = ({}: TestimonialsSectionProps) => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sacred witness testimonials
  const testimonials = [
    {
      quote: "Working with this process completely shifted my timeline. I released ancestral patterns I didn't even know I was carrying.",
      author: "Sarah M.",
      role: "Conscious Entrepreneur",
      gradient: "from-sacred-gold to-mystic-lavender"
    },
    {
      quote: "The integration after my Bufo ceremony was transformative. I finally understood my visions and anchored them into my reality.",
      author: "Marcus L.",
      role: "Spiritual Seeker",
      gradient: "from-mystic-lavender to-mystic-indigo"
    },
    {
      quote: "My business is finally aligned with my soul's purpose. Abundance flows in ways I never imagined possible.",
      author: "Elena R.",
      role: "Healer & Coach",
      gradient: "from-mystic-indigo to-mystic-violet"
    }
  ];

  return (
    <div id="testimonials" className="container mx-auto px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-sacred-moon">
            Voices from the Journey
          </h2>
          <p className="text-xl text-mystic-lavender/70 max-w-2xl mx-auto">
            Real transformations from brave souls
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Mystical Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 animate-breathe`}></div>

              {/* Card */}
              <div className="relative h-full bg-cosmic-800/60 backdrop-blur-xl rounded-3xl border border-mystic-purple/30 p-8 hover:border-mystic-purple/50 transition-all">
                {/* Opening Quote Symbol */}
                <div className="text-5xl text-mystic-violet/30 font-serif mb-4">"</div>

                {/* Quote */}
                <blockquote className="text-mystic-lavender/80 leading-relaxed mb-6 font-serif italic">
                  {testimonial.quote}
                </blockquote>

                {/* Closing Quote Symbol */}
                <div className="text-5xl text-mystic-violet/30 font-serif text-right mb-4">"</div>

                {/* Author Section */}
                <div className="pt-6 border-t border-mystic-purple/20">
                  <div className={`font-semibold text-lg mb-1 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-mystic-lavender/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToBooking}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-2xl font-semibold hover:bg-mystic-purple/30 transition-all cursor-pointer"
          >
            <span>Begin Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
