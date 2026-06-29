import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, ServiceItem } from '../data';
import { ArrowUpRight, Check, X, Shield, Sparkles, Code2 } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section 
      id="services" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Dynamic Backglows */}
      <div className="glow-bg top-[30%] left-[20%] opacity-15" />
      <div className="glow-bg-purple bottom-[10%] right-[10%] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
              02 // ADVANCED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
              Enterprise-grade digital solutions, tailored to your operations.
            </h2>
          </div>
          <p className="text-brand-gray text-sm sm:text-base font-light max-w-sm md:mb-2">
            Every service is custom-executed by senior operators with absolute commitment to code excellence, user engagement, and visual authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                key={service.id}
                className="group relative flex flex-col justify-between bg-[#101828]/50 border border-white/5 rounded-2xl p-8 hover:bg-[#101828] hover:border-brand-accent/40 transition-all duration-300 shadow-xl cursor-pointer"
                onClick={() => setActiveModalService(service)}
                id={`service-card-${service.id}`}
              >
                {/* Floating Glow Spot */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: `radial-gradient(circle 180px at 50% 10%, ${service.glowColor}, transparent)`
                  }}
                />

                {/* Content */}
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary border border-white/5 flex items-center justify-center mb-6 group-hover:border-brand-accent/30 group-hover:bg-brand-secondary transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-3 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-brand-gray font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Snippet list (first 4 items) */}
                  <ul className="space-y-2 mb-8">
                    {service.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-sans text-brand-gray/80">
                        <Check className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="text-[10px] text-brand-accent font-semibold tracking-wider font-mono">
                      + {service.items.length - 4} MORE SPECIALIZATIONS
                    </li>
                  </ul>
                </div>

                {/* Learn More Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-brand-accent/20 transition-colors">
                  <span className="text-xs font-semibold tracking-wider text-brand-gray group-hover:text-white transition-colors uppercase font-mono">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/80 border border-white/5 flex items-center justify-center text-brand-gray group-hover:text-white group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}

          {/* Special Custom CTA Bento Block inside Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative flex flex-col justify-between bg-gradient-to-tr from-brand-secondary to-[#0b1424] border border-brand-accent/20 rounded-2xl p-8 hover:border-brand-accent/50 transition-all duration-300 shadow-xl overflow-hidden md:col-span-2 lg:col-span-1"
            id="services-cta-bento"
          >
            <div className="absolute top-[-30%] right-[-30%] w-48 h-48 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-3">
                Need a Custom Architectural Solution?
              </h3>

              <p className="text-xs text-brand-gray font-light leading-relaxed mb-6">
                Have a massive product vision requiring integrated mobile apps, high-concurrency API backends, and brand guidelines? Let our creative directors engineer your custom roadmap.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Bespoke Digital Product Stack')}
              className="w-full py-3 rounded-xl bg-brand-accent hover:bg-zinc-200 text-xs font-semibold tracking-wider text-black transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none"
              id="services-bento-cta-btn"
            >
              Consult with Creative Directors
              <ArrowUpRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* High-Fidelity Details Overlay Modal */}
      <AnimatePresence>
        {activeModalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080F19]/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalService(null)}
            id="service-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-brand-secondary border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/90 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              id="service-modal-content"
            >
              {/* Backglow inside modal */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                  background: `radial-gradient(circle 350px at 0% 0%, ${activeModalService.glowColor}, transparent)`
                }}
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-primary border border-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:border-white/20 transition-all focus:outline-none"
                aria-label="Close modal"
                id="service-modal-close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10">
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary border border-white/5 flex items-center justify-center">
                    {(() => {
                      const Icon = activeModalService.icon;
                      return <Icon className="w-6 h-6 text-brand-accent" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase">
                      SERVICE SECTOR LOGS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                      {activeModalService.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-gray font-light leading-relaxed mb-8">
                  {activeModalService.description}
                </p>

                {/* Full deliverables grid list */}
                <h4 className="text-xs font-mono text-white tracking-wider uppercase mb-4 border-b border-white/5 pb-2">
                  Specialized Deliverables included
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" id="modal-deliverables-list">
                  {activeModalService.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-brand-primary/40 p-2.5 rounded-xl border border-white/5">
                      <Check className="w-4 h-4 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-brand-gray font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom interactive action */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/5">
                  <button
                    onClick={() => {
                      onSelectService(activeModalService.title);
                      setActiveModalService(null);
                    }}
                    className="w-full sm:flex-1 py-4 rounded-xl bg-brand-accent hover:bg-zinc-200 text-xs font-semibold tracking-wider text-black transition-all duration-200 cursor-pointer focus:outline-none"
                    id="service-modal-cta-inquire"
                  >
                    Select & Start Inquiry
                  </button>
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary/80 border border-white/5 text-xs font-semibold tracking-wider text-brand-gray hover:text-white transition-all focus:outline-none"
                    id="service-modal-cta-close"
                  >
                    Close Specs
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
