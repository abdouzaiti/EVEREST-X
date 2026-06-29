import { useState } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data';
import { Check, Cpu, Globe, Database, Smartphone, Layers } from 'lucide-react';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Stack', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Layers },
    { id: 'database-infra', label: 'Cloud & Database', icon: Database },
    { id: 'mobile-desktop', label: 'Native Apps', icon: Smartphone }
  ];

  const filteredTech = activeCategory === 'all' 
    ? TECHNOLOGIES_DATA 
    : TECHNOLOGIES_DATA.filter(t => t.category === activeCategory || t.category === 'design-motion' && activeCategory === 'frontend');

  return (
    <section 
      id="technologies" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Visual glowing highlights */}
      <div className="glow-bg top-[25%] left-[-10%] opacity-15" />
      <div className="glow-bg-purple bottom-[20%] right-[-10%] opacity-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            05 // ARCHITECTURAL TECH STACK
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Our Elite Technical Stack.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            We use only modern, standardized, and ultra-high-performance technologies that ensure scaling, security, and absolute maintainability.
          </p>
        </div>

        {/* Filter Tabs Selector */}
        <div className="flex flex-wrap gap-2.5 mb-12 bg-[#101828]/50 p-1.5 rounded-2xl border border-white/5 max-w-3xl" id="tech-filters-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 focus:outline-none ${
                  isSelected 
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/15' 
                    : 'text-brand-gray hover:text-white hover:bg-white/5'
                }`}
                id={`tech-filter-btn-${cat.id}`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Display of Tech */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="tech-grid">
          {filteredTech.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={tech.name}
              className="bg-[#101828]/50 border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-brand-accent/35 hover:bg-[#101828] transition-all duration-300 relative group"
              id={`tech-node-${tech.name}`}
            >
              {/* Visual glow indicator */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-accent/40 group-hover:bg-brand-accent transition-colors" />

              <div>
                <span className="block font-sans font-bold text-base text-white group-hover:text-brand-accent transition-colors">
                  {tech.name}
                </span>
                <span className="block text-[8px] font-mono text-brand-dark-gray uppercase tracking-widest mt-0.5">
                  {tech.category.replace('-', ' ')}
                </span>
              </div>

              {/* Skill Proficiency bar */}
              <div className="mt-6 space-y-1.5">
                <div className="flex justify-between text-[8px] font-mono text-brand-gray/80">
                  <span>EXPERT COMPETENCY</span>
                  <span className="text-white font-bold">{tech.proficiency}%</span>
                </div>
                <div className="h-1 w-full bg-brand-primary rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-accent to-blue-500 transition-all duration-1000"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
