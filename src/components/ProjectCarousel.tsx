import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Globe,
  Code2,
  Trophy
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data';

interface ProjectCarouselProps {
  onStartProject: (initialContext?: string) => void;
}

export default function ProjectCarousel({ onStartProject }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % PROJECTS_DATA.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length
    );

  const currentProject = PROJECTS_DATA[currentIndex];

  // Use a high-fidelity screenshot service for real project previews
  const getProjectImage = (project: ProjectItem) => {
    if (project.link) {
      // Microlink provides high-quality, reliable screenshots that match the Vercel preview style
      return `https://api.microlink.io?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`;
    }
    
    // Fallback images mapping for internal reference
    const images: Record<string, string> = {
      'mrc-community': '/views/mrc-community.jpg',
      'mrc-shop': '/views/mrc-shop.jpg',
      'les-bijoux-doran': '/views/les-bijoux-doran.jpg',
      'ecole-el-nadjah': '/views/ecole-el-nadjah.jpg',
      'everest-academy': '/views/everest-academy.jpg',
      'bc-clean-service': '/views/bc-clean-service.jpg',
      'rahi9': '/views/rahi9.jpg',
    };
    return images[project.id] || project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
  };

  const [imageError, setImageError] = useState(false);

  // Reset image error state when project changes
  const handleProjectChange = (direction: 'next' | 'prev' | number) => {
    setImageError(false);
    if (typeof direction === 'number') {
      setCurrentIndex(direction);
    } else if (direction === 'next') {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  return (
    <section id="projects" className="py-24 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60">
      <div className="glow-bg top-[20%] right-[-10%] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20 inline-block mb-4">
            03 // PORTFOLIO D'EXCELLENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
            Projets <span className="text-brand-accent">Phare</span>
          </h2>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden lg:flex relative items-center min-h-[500px]">
            {/* Project Image */}
            <div className="w-[60%] aspect-video rounded-3xl overflow-hidden bg-brand-secondary border border-white/5 flex-shrink-0 shadow-2xl relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <img
                    src={imageError ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' : getProjectImage(currentProject)}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Card */}
            <div className="bg-brand-secondary border border-white/10 rounded-3xl shadow-2xl p-10 ml-[-120px] z-10 max-w-xl flex-1 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] font-bold text-brand-accent uppercase tracking-wider">
                        {currentProject.clientType}
                      </span>
                      <span className="text-brand-gray/40 text-xs">/</span>
                      <span className="text-[10px] font-mono text-brand-gray tracking-widest uppercase">
                        {currentProject.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      {currentProject.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed mb-8">
                      {currentProject.description}
                    </p>
                  </div>



                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-brand-gray font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {currentProject.link && (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-brand-accent text-black text-xs font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2"
                      >
                        VOIR LE PROJET
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => onStartProject(currentProject.title)}
                      className="px-6 py-3 rounded-xl bg-brand-secondary border border-white/10 text-white text-xs font-bold tracking-wider hover:bg-brand-primary transition-all flex items-center gap-2"
                    >
                      STRATÉGIE SIMILAIRE
                      <Trophy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            <div className="rounded-2xl overflow-hidden bg-brand-secondary border border-white/5 aspect-video mb-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={imageError ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' : getProjectImage(currentProject)}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-brand-secondary/50 border border-white/10 rounded-2xl p-6 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[9px] font-bold text-brand-accent uppercase tracking-wider">
                      {currentProject.clientType}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="text-brand-gray text-xs leading-relaxed mb-6">
                    {currentProject.description}
                  </p>



                  <div className="flex gap-3">
                    {currentProject.link && (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-lg bg-brand-accent text-black text-[10px] font-bold tracking-wider text-center flex items-center justify-center gap-2"
                      >
                        VOIR
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => onStartProject(currentProject.title)}
                      className="flex-1 py-3 rounded-lg bg-brand-secondary border border-white/10 text-white text-[10px] font-bold tracking-wider text-center"
                    >
                      DÉTAILS
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={() => handleProjectChange('prev')}
              className="w-12 h-12 rounded-full bg-brand-secondary/80 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all group"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <div className="flex gap-2">
              {PROJECTS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleProjectChange(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-brand-accent" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Aller au projet ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleProjectChange('next')}
              className="w-12 h-12 rounded-full bg-brand-secondary/80 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent hover:text-black transition-all group"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
