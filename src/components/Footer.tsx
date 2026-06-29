import { useState } from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export default function Footer({ onStartProject }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com', icon: Github }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-brand-primary border-t border-brand-secondary/80 py-16 px-6 relative overflow-hidden">
      
      {/* Subtle backglow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-secondary/60">
          
          {/* Brand Intro column */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => handleScrollTo('hero')}
              className="flex items-center text-left group focus:outline-none"
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
              <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-tr from-brand-accent to-blue-500 overflow-hidden shadow-md">
                <div className="absolute inset-[1.5px] bg-[#080F19] rounded-[9px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l7-14 4 8 2-4 5 10H3z" />
                  </svg>
                </div>
              </div>
            )}
            </button>
            <p className="text-xs text-brand-gray font-light max-w-sm leading-relaxed">
              We design and custom-engineer high-density digital products, bespoke software ecosystems, and commanding brand identities for international ventures.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-brand-secondary/80 border border-white/5 hover:border-brand-accent/30 hover:text-white flex items-center justify-center text-brand-gray transition-all"
                    aria-label={soc.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-white tracking-widest uppercase">
              STRUCTURED MAP
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-gray">
              <li>
                <button onClick={() => handleScrollTo('about')} className="hover:text-white transition-colors">
                  Agency Intro
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">
                  Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('projects')} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('process')} className="hover:text-white transition-colors">
                  Process Spec
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-white tracking-widest uppercase">
              TRUST ENVELOPE
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-gray">
              <li>
                <button onClick={() => handleScrollTo('why-choose-us')} className="hover:text-white transition-colors">
                  Strategic Edge
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('testimonials')} className="hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('faq')} className="hover:text-white transition-colors">
                  Disclosures & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">
                  Inquire Blueprint
                </button>
              </li>
            </ul>
          </div>

          {/* Slogan block CTA */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono text-white tracking-widest uppercase">
              INITIATE VENTURE
            </h4>
            <button
              onClick={onStartProject}
              className="w-full py-3.5 rounded-xl bg-brand-secondary border border-brand-accent/20 hover:border-brand-accent hover:bg-[#101828] text-xs font-semibold text-white tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="block text-[8px] font-mono text-brand-dark-gray uppercase tracking-widest text-center">
              EST. 2026 // ALL RIGHTS RESERVED
            </span>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-brand-dark-gray">
          <span>
            © {currentYear} EVERESTX PREMIUM AGENCY. METICULOUS SOFTWARE DEVELOPMENT & VISUAL DESIGN SYSTEMS.
          </span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-brand-gray transition-colors">PRIVACY CODE</a>
            <a href="#terms" className="hover:text-brand-gray transition-colors">TERMS OF COMPLIANCE</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
