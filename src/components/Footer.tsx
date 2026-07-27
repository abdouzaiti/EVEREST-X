import { useState } from 'react';
import { ArrowUpRight, Instagram, Sparkles, Mail, Copy, Check } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
  theme: 'dark' | 'light';
}

export default function Footer({ onStartProject, theme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'everestx27@gmail.com';

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/everestx_dz?igsh=MTR4Nm95ZzVoam5nMA==', icon: Instagram }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <footer className="bg-brand-primary border-t border-brand-secondary/80 py-12 px-6 relative overflow-hidden">
      
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
                className={`h-[60px] md:h-[72px] w-auto object-contain transition-transform group-hover:scale-105 ${theme === 'light' ? 'invert hue-rotate-180' : ''}`} 
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

            {/* Social Links & Email */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex gap-3">
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
              
              <div className="flex items-center gap-2 group/email">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-secondary/50 border border-white/5 group-hover/email:border-brand-accent/20 transition-all">
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="text-[11px] text-brand-gray font-mono">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-brand-secondary/80 border border-white/5 text-brand-gray hover:text-brand-accent hover:border-brand-accent/30 transition-all active:scale-95"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-brand-text tracking-widest uppercase">
              STRUCTURED MAP
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-gray">
              <li>
                <button onClick={() => handleScrollTo('about')} className="hover:text-brand-text transition-colors">
                  Agency Intro
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('services')} className="hover:text-brand-text transition-colors">
                  Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('projects')} className="hover:text-brand-text transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('process')} className="hover:text-brand-text transition-colors">
                  Process Spec
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-brand-text tracking-widest uppercase">
              TRUST ENVELOPE
            </h4>
            <ul className="space-y-2 text-xs font-light text-brand-gray">
              <li>
                <button onClick={() => handleScrollTo('why-choose-us')} className="hover:text-brand-text transition-colors">
                  Strategic Edge
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('faq')} className="hover:text-brand-text transition-colors">
                  Disclosures & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('contact')} className="hover:text-brand-text transition-colors">
                  Inquire Blueprint
                </button>
              </li>
            </ul>
          </div>

          {/* Slogan block CTA */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono text-brand-text tracking-widest uppercase">
              INITIATE VENTURE
            </h4>
            <button
              onClick={onStartProject}
              className="w-full py-3.5 rounded-xl bg-brand-secondary border border-brand-accent/20 hover:border-brand-accent hover:bg-brand-secondary/80 text-xs font-semibold text-brand-text tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>



      </div>
    </footer>
  );
}
