import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section 
      id="faq" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Glow Backlights */}
      <div className="glow-bg top-[30%] right-[-10%] opacity-10 animate-pulse-slow" />
      <div className="glow-bg-purple bottom-[15%] left-[-10%] opacity-15" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20 inline-block">
            08 // OPERATIONAL DISCLOSURES
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Frequently Asked Queries.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl mx-auto">
            Clear, transparent answers on our deliverables, timelines, access, and service levels.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordions">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#101828]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/35 transition-colors duration-300"
                id={`faq-node-${faq.id}`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-brand-accent flex-shrink-0 opacity-60" />
                    <span className="font-sans font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-brand-primary/80 border border-white/5 flex items-center justify-center text-brand-gray transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-accent border-brand-accent/30 bg-brand-accent/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="border-t border-white/5"
                    >
                      <div className="p-6 sm:p-7 bg-[#101828]/30 text-xs sm:text-sm text-brand-gray font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
