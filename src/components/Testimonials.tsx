import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Background Glowing Circles */}
      <div className="glow-bg top-[20%] left-[-10%] opacity-10 animate-pulse-slow" />
      <div className="glow-bg-purple bottom-[15%] right-[-10%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            07 // GLOBAL TRUST
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Endorsements from our partners.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            We deliver outcomes that drive enterprise valuation and customer satisfaction. Hear directly from our core clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={testimonial.id}
              className="bg-[#101828]/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-brand-accent/30 hover:bg-[#101828] transition-all duration-300 flex flex-col justify-between relative"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Quote icon background styled */}
              <div className="absolute top-6 right-8 text-white/[0.03] text-7xl font-sans font-extrabold select-none pointer-events-none">
                “
              </div>

              <div>
                {/* 5-Star Rating block */}
                <div className="flex gap-1 mb-5" id="stars-row">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-brand-gray font-light leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-[9px] font-mono text-brand-dark-gray uppercase mt-0.5">
                    {testimonial.role} • <span className="text-brand-accent">{testimonial.company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
