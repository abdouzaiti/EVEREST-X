import { motion } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Visual Glowing Overlays */}
      <div className="glow-bg top-[30%] right-[5%] opacity-15" />
      <div className="glow-bg-purple bottom-[10%] left-[-5%] opacity-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            06 // AVANTAGES CONCURRENTIELS
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-brand-text tracking-tight mt-6 leading-tight">
            Pourquoi les leaders de l'innovation choisissent EVERESTX.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            Nous fonctionnons avec une discipline opérationnelle rigoureuse. Nous ne faisons aucun compromis sur le code, l'architecture, les délais ou la fidélité visuelle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="benefits-grid">
          {WHY_CHOOSE_US_DATA.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={benefit.title}
                className="group bg-brand-secondary/50 border border-brand-border rounded-2xl p-6 hover:bg-brand-secondary hover:border-brand-accent/30 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[250px]"
                id={`why-card-${idx}`}
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-11 h-11 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center mb-5 group-hover:border-brand-accent/30 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-brand-accent" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-text tracking-tight font-sans mb-2 group-hover:text-brand-accent transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs text-brand-gray font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Stat Highlight Block */}
                <div className="pt-4 mt-6 border-t border-brand-border flex items-center gap-2 text-[10px] font-mono text-brand-gray uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                  <span className="font-semibold text-brand-text tracking-wide">{benefit.stat}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
