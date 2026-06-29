import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry: (summary: string) => void;
}

export default function ProjectEstimatorModal({ isOpen, onClose, onSubmitInquiry }: ProjectEstimatorModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Software Development',
    'Creative Design',
    'Branding & Strategy',
    'Media Production',
    'Digital Marketing'
  ];

  const budgets = [
    '50,000 - 100,000 DA',
    '100,000 - 150,000 DA',
    '150,000 - 250,000 DA',
    '+250,000 DA'
  ];

  const targets = [
    'Startups',
    'Corporate Enterprise',
    'Medical Clinics',
    'Real Estate',
    'Schools',
    'Restaurants',
    'Personal Brands',
    'Small / Local Businesses'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices(prev => 
      prev.includes(srv) ? prev.filter(x => x !== srv) : [...prev, srv]
    );
  };

  const toggleTarget = (tgt: string) => {
    setSelectedTargets(prev => 
      prev.includes(tgt) ? prev.filter(x => x !== tgt) : [...prev, tgt]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.email) return;

    setIsSubmitting(true);
    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Construct summary to pass up to App level
      const summary = `Selected Services: [${selectedServices.join(', ')}]. Budget: ${selectedBudget}. Target Market focus: [${selectedTargets.join(', ')}]. Additional requirements logged: "${clientInfo.notes}".`;
      onSubmitInquiry(summary);
    }, 1800);
  };

  const resetEstimator = () => {
    setCurrentStep(1);
    setSelectedServices([]);
    setSelectedBudget('');
    setSelectedTargets([]);
    setClientInfo({ name: '', email: '', company: '', notes: '' });
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#080F19]/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          id="estimator-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-brand-secondary border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/95 my-8"
            id="estimator-modal-content"
          >
            {/* Close */}
            <button
              onClick={() => {
                resetEstimator();
                onClose();
              }}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-primary border border-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:border-white/20 transition-all focus:outline-none"
              aria-label="Close project builder"
              id="estimator-modal-close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Backglow decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

            {!isSubmitted ? (
              <div>
                {/* Progress bar info */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">
                      STEP {currentStep} OF 4
                    </span>
                    <span className="w-1 h-1 rounded-full bg-brand-accent" />
                    <span className="text-[9px] font-mono text-brand-dark-gray uppercase tracking-wider">
                      PROJECT BLUEPRINT BUILDER
                    </span>
                  </div>
                  {/* Visual gauge */}
                  <div className="h-1.5 w-24 bg-brand-primary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-accent transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    />
                  </div>
                </div>

                {/* STEP 1: SERVICES */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Select required service sectors
                      </h3>
                      <p className="text-xs text-brand-gray font-light mt-1.5 leading-relaxed">
                        Choose as many sectors as required to scale your venture. We specialize in cross-disciplinary integration.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="estimator-services-list">
                      {services.map(srv => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none cursor-pointer ${
                              isSelected 
                                ? 'bg-brand-accent/10 border-brand-accent text-white shadow shadow-brand-accent/10' 
                                : 'bg-brand-primary border-white/5 text-brand-gray hover:text-white hover:border-white/10'
                            }`}
                          >
                            <span className="text-xs font-semibold">{srv}</span>
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-brand-accent border-brand-accent text-white' : 'border-white/10 text-transparent'
                            }`}>
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: BUDGETS */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Define target investment scale
                      </h3>
                      <p className="text-xs text-brand-gray font-light mt-1.5 leading-relaxed">
                        Select a range representing your operational deployment. Fixed prices guarantee milestone delivery.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="estimator-budgets-list">
                      {budgets.map(bdg => {
                        const isSelected = selectedBudget === bdg;
                        return (
                          <button
                            key={bdg}
                            onClick={() => setSelectedBudget(bdg)}
                            className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none cursor-pointer ${
                              isSelected 
                                ? 'bg-brand-accent/10 border-brand-accent text-white shadow shadow-brand-accent/10' 
                                : 'bg-brand-primary border-white/5 text-brand-gray hover:text-white hover:border-white/10'
                            }`}
                          >
                            <span className="text-xs font-semibold">{bdg}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-brand-accent border-brand-accent text-white' : 'border-white/10 text-transparent'
                            }`}>
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TARGET DEMOGRAPHICS */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Target client demographics
                      </h3>
                      <p className="text-xs text-brand-gray font-light mt-1.5 leading-relaxed">
                        Who is this product designed to serve? This drives our UX and copywriting positioning models.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3" id="estimator-targets-list">
                      {targets.map(tgt => {
                        const isSelected = selectedTargets.includes(tgt);
                        return (
                          <button
                            key={tgt}
                            onClick={() => toggleTarget(tgt)}
                            className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all focus:outline-none cursor-pointer ${
                              isSelected 
                                ? 'bg-brand-accent/10 border-brand-accent text-white' 
                                : 'bg-brand-primary border-white/5 text-brand-gray hover:text-white'
                            }`}
                          >
                            <span className="text-xs font-semibold">{tgt}</span>
                            <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-brand-accent border-brand-accent text-white' : 'border-white/10 text-transparent'
                            }`}>
                              <Check className="w-3 h-3" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT & DETAILS */}
                {currentStep === 4 && (
                  <motion.form
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onSubmit={handleFinalSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Log client secure credentials
                      </h3>
                      <p className="text-xs text-brand-gray font-light mt-1.5 leading-relaxed">
                        Submit details to authenticate your dossier. Our managing partners will coordinate your response.
                      </p>
                    </div>

                    <div className="space-y-4" id="estimator-contact-inputs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-mono text-brand-gray uppercase tracking-wider" htmlFor="est-name">Name *</label>
                          <input
                            type="text"
                            id="est-name"
                            name="name"
                            required
                            value={clientInfo.name}
                            onChange={handleInputChange}
                            placeholder="Sarah Jenkins"
                            className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-mono text-brand-gray uppercase tracking-wider" htmlFor="est-email">Email *</label>
                          <input
                            type="email"
                            id="est-email"
                            name="email"
                            required
                            value={clientInfo.email}
                            onChange={handleInputChange}
                            placeholder="sarah@aether.capital"
                            className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-mono text-brand-gray uppercase tracking-wider" htmlFor="est-company">Company</label>
                          <input
                            type="text"
                            id="est-company"
                            name="company"
                            value={clientInfo.company}
                            onChange={handleInputChange}
                            placeholder="Aether Finance Corp"
                            className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-mono text-brand-gray uppercase tracking-wider">Estimated Budget</label>
                          <div className="w-full bg-brand-primary/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-brand-gray/80">
                            {selectedBudget || 'Budget not selected'}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-mono text-brand-gray uppercase tracking-wider" htmlFor="est-notes">Special Requirements</label>
                        <textarea
                          id="est-notes"
                          name="notes"
                          rows={2}
                          value={clientInfo.notes}
                          onChange={handleInputChange}
                          placeholder="List any strict deadlines, integration requirements, or design rules..."
                          className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-accent hover:bg-zinc-200 disabled:bg-zinc-850 disabled:text-zinc-500 text-xs font-semibold tracking-widest text-black transition-all flex items-center justify-center gap-2 uppercase font-mono cursor-pointer focus:outline-none"
                      id="estimator-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>LAUNCHING ESTIMATION COGNIZANCE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Secure Blueprint Transmission</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}

                {/* Navigation Controls bottom */}
                {currentStep < 4 && (
                  <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className="px-5 py-3 rounded-xl border border-white/5 text-xs font-semibold text-brand-gray hover:text-white hover:bg-white/5 disabled:opacity-40 transition-all flex items-center gap-2 focus:outline-none cursor-pointer"
                      id="estimator-back-btn"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={(currentStep === 1 && selectedServices.length === 0) || (currentStep === 2 && !selectedBudget) || (currentStep === 3 && selectedTargets.length === 0)}
                      className="px-6 py-3 rounded-xl bg-brand-accent hover:bg-zinc-200 disabled:bg-zinc-850 disabled:text-zinc-500 text-xs font-semibold text-black transition-all flex items-center gap-2 focus:outline-none cursor-pointer"
                      id="estimator-next-btn"
                    >
                      Next Step
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-5"
                id="estimator-success"
              >
                <div className="w-16 h-16 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-brand-success animate-bounce" />
                </div>

                <div>
                  <span className="block text-[10px] font-mono text-brand-success uppercase tracking-widest font-semibold">
                    BLUEPRINT INGESTED SECURELY
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                    Operational Blueprint Formulated!
                  </h3>
                  <p className="text-xs text-brand-gray font-light max-w-sm mx-auto mt-2 leading-relaxed">
                    We have successfully synchronized your custom budget requirements, selected specialized sectors, and contact logs. Our chief creative director will arrange a direct Slack and visual scope roadmap for you.
                  </p>
                </div>

                <button
                  onClick={() => {
                    resetEstimator();
                    onClose();
                  }}
                  className="px-8 py-3.5 rounded-xl bg-brand-accent hover:bg-zinc-200 text-xs font-semibold tracking-wider text-black transition-all cursor-pointer focus:outline-none"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
