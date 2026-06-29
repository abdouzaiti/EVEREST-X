import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import GLSLHills from './GLSLHills';

interface CosmicParallaxBgProps {
  /**
   * Main heading text (displayed large in the center)
   */
  head?: string;
  
  /**
   * Subtitle text (displayed below the heading)
   * Comma-separated string that will be split into animated parts
   */
  text?: string;
  
  /**
   * Whether the text animations should loop
   * @default true
   */
  loop?: boolean;
  
  /**
   * Custom class name for additional styling
   */
  className?: string;

  onStartProject?: () => void;
  onViewPortfolio?: () => void;
}

/**
 * A cosmic background component with dynamic GLSL hills and overlay text
 */
const CosmicParallaxBg: React.FC<CosmicParallaxBgProps> = ({
  head = "EVERESTX",
  text = "CREATE, GROW, ELEVATE",
  className = '',
  onStartProject,
  onViewPortfolio,
}) => {
  // Split the text by commas and trim whitespace
  const textParts = text.split(',').map(part => part.trim());
  
  return (
    <div className={`cosmic-parallax-container ${className}`} id="hero">
      {/* 3D WebGL Landscape Background */}
      <div className="absolute inset-0 z-0">
        <GLSLHills speed={0.5} planeSize={256} cameraZ={125} />
      </div>
      
      {/* Centered Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl w-full pt-20">


        {/* Title and subtitle */}
        <div id="title" className="!bg-none !text-white flex items-baseline justify-center select-none">
          <span className="bg-gradient-to-b from-white to-white/45 bg-clip-text text-transparent">
            {head.toUpperCase().endsWith('X') ? head.toUpperCase().slice(0, -1) : head.toUpperCase()}
          </span>
          {head.toUpperCase().endsWith('X') && (
            <span className="text-[1.3em] font-black bg-gradient-to-b from-blue-400 to-blue-500 bg-clip-text text-transparent ml-1 inline-block transform translate-y-[0.03em] [filter:drop-shadow(0_0_15px_rgba(59,130,246,0.3))]">
              X
            </span>
          )}
        </div>
        <div id="subtitle" className="mt-4 mb-8">
          {textParts.map((part, index) => (
            <React.Fragment key={index}>
              <span className={`subtitle-part-${index + 1}`}>{part.toUpperCase()}</span>
              {index < textParts.length - 1 && ' '}
            </React.Fragment>
          ))}
        </div>

        {/* Company copywriting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-brand-gray font-light leading-relaxed max-w-2xl z-10 animate-fade"
          id="hero-paragraph"
        >
          EVERESTX helps ambitious businesses transform bold ideas into industry-leading digital products, high-end applications, and memorable global brands.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto z-10"
          id="hero-cta-group"
        >
          {onStartProject && (
            <button
              onClick={onStartProject}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-black bg-brand-accent hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none"
              id="hero-cta-start-project"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
          {onViewPortfolio && (
            <button
              onClick={onViewPortfolio}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-brand-gray hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              id="hero-cta-view-portfolio"
            >
              <Play className="w-4 h-4 text-white fill-white/10" />
              View Portfolio
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export { CosmicParallaxBg };
export default CosmicParallaxBg;
