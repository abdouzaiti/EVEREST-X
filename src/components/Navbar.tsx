import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
  activeSection: string;
}

export default function Navbar({ onStartProject, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'process', label: 'Our Process' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-primary/80 backdrop-blur-md border-b border-brand-secondary py-4 shadow-lg shadow-brand-primary/20' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Creative double peak design */}
          <button 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center text-left group focus:outline-none"
            id="nav-logo-btn"
          >
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="EVERESTX Logo" 
                className="h-[60px] md:h-[72px] w-auto object-contain transition-transform group-hover:scale-105" 
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-tr from-brand-accent to-blue-500 overflow-hidden shadow-md shadow-brand-accent/20 transition-transform group-hover:scale-105">
                <div className="absolute inset-[1.5px] bg-[#080F19] rounded-[10px] flex items-center justify-center">
                  {/* SVG double peak mountain styled representing EVERESTX */}
                  <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l7-14 4 8 2-4 5 10H3z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-secondary/40 backdrop-blur-sm border border-brand-secondary/80 p-1.5 rounded-full" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-white' : 'text-brand-gray hover:text-white'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-brand-accent/15 border border-brand-accent/30 rounded-full"
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4" id="desktop-nav-cta">
            <button
              onClick={onStartProject}
              className="relative px-5 py-2 rounded-xl text-xs font-medium tracking-wider group overflow-hidden bg-brand-secondary border border-brand-accent/20 hover:border-brand-accent transition-all duration-300 focus:outline-none"
              id="nav-start-project-btn"
            >
              <span className="relative z-10 text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                Start Your Project
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-brand-secondary/60 border border-brand-secondary text-white hover:text-brand-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden bg-brand-primary/98 backdrop-blur-lg flex flex-col justify-between pt-24 pb-12 px-8"
            id="mobile-nav-drawer"
          >
            {/* Background Glows */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Links Stack */}
            <nav className="flex flex-col gap-6" id="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-left py-2 border-b border-brand-secondary/40 text-lg font-medium text-brand-gray hover:text-white transition-colors focus:outline-none flex items-center justify-between"
                  id={`mobile-nav-link-${link.id}`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-glow" />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Action Bottom */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="flex flex-col gap-4"
              id="mobile-nav-footer"
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  onStartProject();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 text-sm font-semibold tracking-wider text-white flex items-center justify-center gap-2 focus:outline-none shadow-lg shadow-brand-accent/20"
                id="mobile-start-project-btn"
              >
                <Sparkles className="w-4 h-4 text-white" />
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[10px] font-mono text-brand-dark-gray uppercase tracking-widest">
                EVERESTX Agency • Create. Grow. Elevate.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
