import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG parameters for circular indicator
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-secondary/90 backdrop-blur border border-white/10 flex items-center justify-center text-brand-gray hover:text-white shadow-xl hover:border-brand-accent/40 hover:shadow-brand-accent/10 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          aria-label="Scroll back to top"
          id="scroll-to-top-btn"
        >
          {/* Circular Progress Path */}
          <svg className="absolute -rotate-90 w-11 h-11 pointer-events-none">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-white/5"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-brand-accent transition-all duration-75"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          
          <ArrowUp className="w-4 h-4 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
