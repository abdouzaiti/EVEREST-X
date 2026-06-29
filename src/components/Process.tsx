import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_DATA } from '../data';
import { CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section 
      id="process" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Decorative Blur Orbs */}
      <div className="glow-bg top-[20%] right-[10%] opacity-10 animate-pulse-slow" />
      <div className="glow-bg-purple bottom-[15%] left-[10%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            04 // STRATEGIC METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Our 7-Step Precision Engineering Lifecycle.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            We do not skip steps. We manage your product through an exhaustive lifecycle designed to deliver bulletproof performance and ultimate design prestige.
          </p>
        </div>

        {/* Process layout: Staggered Timeline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="process-timeline-layout">
          
          {/* Left Column: Staggered Timeline Steps Selector (Interactive Sidebar) */}
          <div className="lg:col-span-4 space-y-3" id="process-steps-sidebar">
            <span className="text-[10px] font-mono text-brand-dark-gray uppercase tracking-widest block mb-4">
              CHOOSE A LIFECYCLE PHASE
            </span>
            {PROCESS_DATA.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 focus:outline-none ${
                    isActive 
                      ? 'bg-brand-secondary border-brand-accent text-white shadow-lg shadow-brand-accent/10' 
                      : 'bg-brand-secondary/20 border-white/5 text-brand-gray hover:text-white hover:border-white/10'
                  }`}
                  id={`process-sidebar-btn-${idx}`}
                >
                  <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                    isActive ? 'bg-brand-accent text-white' : 'bg-brand-primary text-brand-dark-gray'
                  }`}>
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans font-semibold text-xs truncate">
                      {step.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isActive ? 'text-brand-accent translate-x-1' : 'text-brand-dark-gray'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Telemetry Display (Interactive Card) */}
          <div className="lg:col-span-8" id="process-stage-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#101828]/60 border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between"
                id="process-active-card"
              >
                {/* Backglow linked to step */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

                {/* Card Top Block */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-brand-accent">
                        PHASE_{PROCESS_DATA[activeStep].number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-[9px] font-mono text-brand-dark-gray uppercase tracking-widest">
                        METICULOUS WORKFLOW
                      </span>
                    </div>
                    <span className="bg-brand-success/10 border border-brand-success/20 text-brand-success text-[8px] px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                      SLA COMPLIANT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight font-sans mb-4">
                    {PROCESS_DATA[activeStep].title}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-gray font-light leading-relaxed mb-8 max-w-2xl">
                    {PROCESS_DATA[activeStep].description}
                  </p>
                </div>

                {/* Deliverables List Block */}
                <div>
                  <h4 className="text-[10px] font-mono text-white tracking-wider uppercase mb-3.5">
                    DELIVERABLES LOGGED AT KEYSTONE
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PROCESS_DATA[activeStep].deliverables.map((item, i) => (
                      <div 
                        key={i} 
                        className="bg-brand-primary p-3 rounded-xl border border-white/5 hover:border-brand-accent/25 transition-colors flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-success flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-gray font-light leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar representational */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-brand-dark-gray">
                  <span>STEP {activeStep + 1} OF 7 IN EXECUTION FLOW</span>
                  <div className="flex items-center gap-1">
                    <span className="text-brand-accent font-semibold">
                      {Math.round(((activeStep + 1) / 7) * 100)}% THROUGHPUT
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
