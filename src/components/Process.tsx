import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data';

export default function Process() {
  return (
    <section 
      id="process" 
      className="py-16 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Decorative Blur Orbs */}
      <div className="glow-bg top-[20%] right-[10%] opacity-10 animate-pulse-slow" />
      <div className="glow-bg-purple bottom-[15%] left-[10%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            04 // MÉTHODOLOGIE STRATÉGIQUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-brand-text tracking-tight mt-6 leading-tight">
            Notre Cycle de Développement en 7 Étapes de Précision.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            Nous ne sautons aucune étape. Nous gérons votre produit à travers un cycle complet conçu pour offrir des performances à toute épreuve et un design prestigieux.
          </p>
        </div>

        {/* Process layout: Clean Responsive Grid of Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="process-timeline-layout">
          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-brand-secondary/40 border border-brand-border p-8 rounded-3xl backdrop-blur-md hover:border-brand-accent/40 transition-all duration-500 hover:translate-y-[-4px] flex flex-col justify-between"
              id={`process-step-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-lg border border-brand-accent/20">
                    {step.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/30 group-hover:bg-brand-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3 tracking-tight group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-gray font-light leading-relaxed mb-6 line-clamp-3">
                  {step.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-brand-border/50">
                <span className="text-[9px] font-mono text-brand-dark-gray uppercase tracking-widest block mb-3">
                  Livrables stratégiques
                </span>
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.slice(0, 2).map((item, i) => (
                    <span key={i} className="text-[10px] bg-brand-primary/50 text-brand-gray px-2.5 py-1 rounded-lg border border-brand-border/50 whitespace-nowrap">
                      {item}
                    </span>
                  ))}
                  {step.deliverables.length > 2 && (
                    <span className="text-[10px] text-brand-accent font-mono pt-1">+{step.deliverables.length - 2}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
