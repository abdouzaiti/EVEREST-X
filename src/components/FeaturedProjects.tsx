import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA, ProjectItem } from '../data';
import { ArrowUpRight, Check, TrendingUp, Sparkles, Trophy, Calendar, Phone, Mail, Award, MapPin } from 'lucide-react';

interface ProjectsProps {
  onStartProject: (initialContext?: string) => void;
}

export default function FeaturedProjects({ onStartProject }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Render Custom UI mockups inside projects
  const renderUIMockup = (type: 'fintech' | 'medical' | 'education' | 'dining') => {
    switch (type) {
      case 'fintech':
        return (
          <div className="bg-[#080F19]/90 border border-white/5 rounded-xl p-4 font-mono text-[10px] space-y-3.5 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-white font-bold tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                AETHER.CAPITAL // FEED
              </span>
              <span className="text-brand-dark-gray text-[8px]">API KEY ACTIVE</span>
            </div>

            {/* Assets tickers */}
            <div className="space-y-1.5">
              <div className="flex justify-between bg-brand-secondary/80 p-1.5 rounded border border-white/5">
                <span className="text-brand-gray">BTC_USD_PORTFOLIO</span>
                <span className="text-brand-success font-semibold">$97,420.50</span>
              </div>
              <div className="flex justify-between bg-brand-secondary/80 p-1.5 rounded border border-white/5">
                <span className="text-brand-gray">ETH_USD_TREASURY</span>
                <span className="text-brand-success font-semibold">$3,450.12</span>
              </div>
              <div className="flex justify-between bg-brand-secondary/80 p-1.5 rounded border border-white/5">
                <span className="text-brand-gray">SOL_USD_LIQUIDITY</span>
                <span className="text-brand-success font-semibold">$192.88</span>
              </div>
            </div>

            {/* Live Chart line */}
            <div className="h-16 flex items-end relative">
              <svg className="w-full h-full text-brand-accent" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 35 L15 30 L30 15 L45 25 L60 10 L75 18 L90 5 L100 2" fill="none" stroke="#0A84FF" strokeWidth="1.5" />
                <circle cx="100" cy="2" r="2" fill="#FFFFFF" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[8px] text-brand-dark-gray">
              <span>TXS APPROVED: 1,942 / SEC</span>
              <span className="text-brand-success font-semibold">99.9% GUARANTEED</span>
            </div>
          </div>
        );
      case 'medical':
        return (
          <div className="bg-[#080F19]/90 border border-white/5 rounded-xl p-4 font-sans text-[10px] space-y-3.5 shadow-2xl h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-white font-bold tracking-tight flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-brand-success animate-bounce" />
                Apex Telehealth Core
              </span>
              <span className="bg-brand-success/15 border border-brand-success/30 text-brand-success text-[8px] px-1.5 py-0.5 rounded font-mono">
                HIPAA ONLINE
              </span>
            </div>

            {/* Patient card */}
            <div className="bg-brand-secondary/80 p-2.5 rounded-lg border border-white/5 flex gap-2.5 items-center">
              <div className="w-8 h-8 rounded-full bg-slate-700/60 overflow-hidden border border-brand-success">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80" alt="Patient" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <span className="block font-semibold text-white">Elizabeth Vance</span>
                <span className="block text-[8px] text-brand-gray">Age: 62 • Outpatient Intake</span>
              </div>
            </div>

            {/* Live vitals */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-brand-primary p-2 rounded border border-white/5">
                <span className="block text-[8px] text-brand-dark-gray uppercase font-mono">SpO2 Rate</span>
                <span className="text-xs font-bold font-mono text-brand-success">99% Normal</span>
              </div>
              <div className="bg-brand-primary p-2 rounded border border-white/5">
                <span className="block text-[8px] text-brand-dark-gray uppercase font-mono">ECG Rhythm</span>
                <span className="text-xs font-bold font-mono text-brand-accent">72 BPM Stable</span>
              </div>
            </div>

            <button className="w-full py-2 rounded bg-brand-success text-white font-semibold text-[9px] tracking-wider uppercase">
              Join Encryption Tunnel
            </button>
          </div>
        );
      case 'education':
        return (
          <div className="bg-[#080F19]/90 border border-white/5 rounded-xl p-4 font-sans text-[10px] space-y-3 shadow-2xl h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-white font-bold tracking-tight flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-purple-400" />
                Novus LMS Classroom
              </span>
              <span className="text-brand-gray text-[8px] font-mono">MODULE 4 // STRATEGIC DEV</span>
            </div>

            {/* Course progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-brand-gray text-[9px]">
                <span>Full-Stack Syllabus</span>
                <span className="text-white font-semibold font-mono">82% COMPLETE</span>
              </div>
              <div className="h-1.5 w-full bg-brand-primary rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[82%]" />
              </div>
            </div>

            {/* Quiz panel */}
            <div className="bg-brand-secondary/80 p-2 rounded-lg border border-white/5 space-y-1">
              <span className="block text-[8px] text-brand-dark-gray font-mono">QUIZ STATUS</span>
              <span className="block text-white font-medium">Define "Inheritance in TypeScript":</span>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <span className="p-1 text-[7px] bg-brand-primary text-brand-gray rounded border border-white/5">Option A: Abstract class</span>
                <span className="p-1 text-[7px] bg-brand-success/15 text-brand-success rounded border border-brand-success/20">Option B: Extends class</span>
              </div>
            </div>

            <div className="text-[8px] text-purple-300 font-mono text-center">
              ⭐ 45,000+ GLOBAL STUDENTS ENGAGED DAILY
            </div>
          </div>
        );
      case 'dining':
        return (
          <div className="bg-[#080F19]/90 border border-white/5 rounded-xl p-4 font-sans text-[10px] space-y-3 shadow-2xl h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-[9px]">
                Maison Gastronomie
              </span>
              <span className="text-brand-gray font-mono text-[8px]">★ ★ ★ MICHELIN</span>
            </div>

            {/* Menu teaser */}
            <div className="space-y-1 text-center py-1">
              <span className="block text-white font-serif italic text-xs">Le Homard Fumé</span>
              <span className="block text-[8px] text-brand-gray">Smoked lobster, coastal seaweed broth, pine infusion</span>
            </div>

            {/* Interactive table reservation booking widget */}
            <div className="bg-brand-secondary/80 p-2 rounded-lg border border-white/5">
              <span className="block text-[8px] text-brand-dark-gray uppercase font-mono text-center mb-1">TABLE SCHEDULER MATRIX</span>
              <div className="grid grid-cols-4 gap-1.5 items-center justify-center">
                <span className="p-1 text-[7px] text-center bg-brand-primary text-brand-dark-gray rounded border border-white/5">T1 (2)</span>
                <span className="p-1 text-[7px] text-center bg-amber-500/10 text-amber-500 rounded border border-amber-500/30">T2 (4)</span>
                <span className="p-1 text-[7px] text-center bg-brand-primary text-brand-dark-gray rounded border border-white/5">T3 (2)</span>
                <span className="p-1 text-[7px] text-center bg-brand-primary text-brand-dark-gray rounded border border-white/5">T4 (6)</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] text-brand-gray">
              <span>Next Availability: Today 20:30</span>
              <span className="text-brand-success font-semibold">94% booked</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-32 bg-[#080F19] relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="glow-bg-purple bottom-[10%] left-[5%] opacity-15" />
      <div className="glow-bg top-[40%] right-[-10%] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            03 // REPUTATIONAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Case Studies that prove <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">enterprise authority</span>.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            We partner with industry disruptors to design premium experiences and write highly performant codebases. Explore our core case studies.
          </p>
        </div>

        {/* Projects Timeline/Grid */}
        <div className="space-y-16" id="projects-list">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8 }}
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-[#101828]/40 border border-white/5 hover:border-brand-accent/20 transition-all duration-500 relative overflow-hidden group`}
                id={`project-card-${project.id}`}
              >
                {/* Visual Glow Layer inside Card */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                  style={{
                    background: `radial-gradient(circle 350px at ${isEven ? '100% 100%' : '0% 0%'}, rgba(10, 132, 255, 0.08), transparent)`
                  }}
                />

                {/* Left/Right Column: Brand Mockup UI */}
                <div className={`lg:col-span-5 h-[280px] sm:h-[320px] rounded-2xl bg-gradient-to-tr ${project.gradient} border border-white/10 p-6 flex items-center justify-center relative overflow-hidden ${
                  !isEven ? 'lg:order-2' : ''
                }`}>
                  <div className="w-full max-w-[280px] h-[220px]">
                    {renderUIMockup(project.uiMockupType)}
                  </div>
                </div>

                {/* Right/Left Column: Copy & Details */}
                <div className={`lg:col-span-7 flex flex-col justify-center ${
                  !isEven ? 'lg:order-1' : ''
                }`}>
                  {/* Category & Client */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-mono text-brand-accent font-semibold uppercase tracking-wider bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-brand-dark-gray uppercase tracking-wider px-2.5 py-1 rounded bg-brand-primary">
                      {project.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight font-sans mb-4 group-hover:text-brand-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-gray font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Client Stats Highlights */}
                  <div className="grid grid-cols-3 gap-4 mb-8 border-y border-white/5 py-4">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="block text-lg sm:text-2xl font-bold font-sans text-white tracking-tight">
                          {stat.value}
                        </span>
                        <span className="block text-[8px] font-mono text-brand-dark-gray uppercase tracking-widest mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Core Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono text-brand-gray bg-brand-primary/80 px-2.5 py-1 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Trigger CTA */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-6 py-3.5 rounded-xl bg-brand-secondary hover:bg-brand-secondary/80 text-xs font-semibold tracking-wider text-white border border-white/5 hover:border-brand-accent/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                      id={`project-view-case-btn-${project.id}`}
                    >
                      Read Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gray group-hover:text-white" />
                    </button>
                    <button
                      onClick={() => onStartProject(`Replicate or scale ${project.title} style development`)}
                      className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-zinc-200 text-xs font-semibold tracking-wider text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                      id={`project-order-similar-btn-${project.id}`}
                    >
                      Inquire Similar Product
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Full Specs Modal Popup */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080F19]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveProject(null)}
            id="case-study-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl bg-brand-secondary border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/95 my-8"
              onClick={(e) => e.stopPropagation()}
              id="case-study-modal-content"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-primary border border-white/5 flex items-center justify-center text-brand-gray hover:text-white hover:border-white/20 transition-all focus:outline-none"
                aria-label="Close case study"
                id="case-study-close"
              >
                <XIcon className="w-4 h-4" />
              </button>

              <div>
                <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase bg-brand-primary px-3 py-1 rounded border border-brand-accent/20">
                  03 // CASE STUDY DOSSIER
                </span>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mt-5 mb-1">
                  {activeProject.title}
                </h3>
                <span className="text-xs font-mono text-brand-dark-gray block mb-6 uppercase">
                  CLIENT: {activeProject.client} • {activeProject.category}
                </span>

                {/* Grid for Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/5 pt-6">
                  <div>
                    <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      The Commercial Challenge
                    </h4>
                    <p className="text-xs text-brand-gray font-light leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-brand-success uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                      The Engineered Solution
                    </h4>
                    <p className="text-xs text-brand-gray font-light leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* High performance metrics list */}
                <h4 className="text-xs font-mono text-white tracking-wider uppercase mb-3 border-b border-white/5 pb-2">
                  PERFORMANCE TELEMETRY OUTCOMES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {activeProject.stats.map((stat, i) => (
                    <div key={i} className="bg-brand-primary/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <span className="text-xl sm:text-2xl font-bold font-mono text-brand-success block">
                        {stat.value}
                      </span>
                      <span className="text-[8px] font-mono text-brand-gray uppercase tracking-widest mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions Bottom */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/5">
                  <button
                    onClick={() => {
                      onStartProject(`Scale and implement features similar to ${activeProject.title}`);
                      setActiveProject(null);
                    }}
                    className="w-full sm:flex-1 py-4 rounded-xl bg-brand-accent hover:bg-zinc-200 text-xs font-semibold tracking-wider text-black transition-all cursor-pointer focus:outline-none"
                    id="case-study-cta-inquire"
                  >
                    Initiate Custom Blueprint with our Lead Architects
                  </button>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary/80 border border-white/5 text-xs font-semibold tracking-wider text-brand-gray hover:text-white transition-all focus:outline-none"
                    id="case-study-cta-close"
                  >
                    Close Case Study
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

// Custom simple XIcon
function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
