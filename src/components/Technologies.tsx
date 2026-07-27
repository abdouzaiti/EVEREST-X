import { useState } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data';
import { Check, Cpu, Globe, Database, Smartphone, Layers } from 'lucide-react';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Stack', icon: Cpu },
    { id: 'frontend', label: 'Front-end', icon: Globe },
    { id: 'backend', label: 'Back-end', icon: Layers },
    { id: 'database-infra', label: 'Cloud & BDD', icon: Database },
    { id: 'mobile-desktop', label: 'Apps Natives', icon: Smartphone }
  ];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'Front-end';
      case 'backend': return 'Back-end';
      case 'database-infra': return 'Base de Données & Infra';
      case 'mobile-desktop': return 'Applications Natives';
      case 'design-motion': return 'Design & Animation';
      default: return cat;
    }
  };

  const filteredTech = activeCategory === 'all' 
    ? TECHNOLOGIES_DATA 
    : TECHNOLOGIES_DATA.filter(t => t.category === activeCategory || t.category === 'design-motion' && activeCategory === 'frontend');

  return (
    <section 
      id="technologies" 
      className="py-16 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Visual glowing highlights */}
      <div className="glow-bg top-[25%] left-[-10%] opacity-15" />
      <div className="glow-bg-purple bottom-[20%] right-[-10%] opacity-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            05 // STACK TECHNIQUE D'ÉLITE
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-brand-text tracking-tight mt-6 leading-tight">
            Notre Stack Technique d'Élite.
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            Nous utilisons uniquement des technologies modernes, standardisées et ultra-performantes qui garantissent l'évolutivité, la sécurité et une maintenabilité absolue.
          </p>
        </div>

        {/* Filter Tabs Selector */}
        <div className="flex flex-wrap gap-2.5 mb-12 bg-brand-secondary/50 p-1.5 rounded-2xl border border-brand-border max-w-3xl" id="tech-filters-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 focus:outline-none ${
                  isSelected 
                    ? 'bg-brand-accent text-brand-primary shadow-lg shadow-brand-accent/15' 
                    : 'text-brand-gray hover:text-brand-text hover:bg-brand-primary/5'
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
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3" id="tech-grid">
          {filteredTech.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={tech.name}
              className="bg-brand-secondary/40 border border-brand-border p-3.5 rounded-xl flex flex-col justify-center items-center text-center hover:border-brand-accent/40 hover:bg-brand-secondary transition-all duration-300 relative group min-h-[90px]"
              id={`tech-node-${tech.name}`}
            >
              {/* Subtle status dot */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-brand-accent/30 group-hover:bg-brand-accent transition-colors" />

              <div className="space-y-1">
                <span className="block font-sans font-bold text-sm text-brand-text group-hover:text-brand-accent transition-colors leading-tight">
                  {tech.name}
                </span>
                <span className="block text-[7px] font-mono text-brand-dark-gray uppercase tracking-widest leading-none">
                  {getCategoryLabel(tech.category).split(' ').pop()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
