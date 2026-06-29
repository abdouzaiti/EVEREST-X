/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Process from './components/Process';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import GridOverlay from './components/GridOverlay';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefilledContext, setPrefilledContext] = useState('');

  // Scrollspy logic to automatically update navigation indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for custom services/projects CTA triggers
  const handleSelectServiceInquire = (contextName: string) => {
    setPrefilledContext(contextName);
    
    // Smooth scroll to the contact form section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartProjectBtn = () => {
    setIsEstimatorOpen(true);
  };

  const handleViewPortfolioBtn = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleEstimatorSubmit = (summary: string) => {
    // When the estimator submits, we can also log or update our prefilled text 
    // for direct contact options or just handle it elegantly within the modal success.
    console.log('Project Estimator submitted summary: ', summary);
  };

  return (
    <div className="bg-brand-primary min-h-screen text-white relative font-sans selection:bg-brand-accent selection:text-white w-full max-w-full overflow-x-hidden" id="everestx-root">
      {/* Immersive Custom Cursor */}
      <CustomCursor />

      {/* Editorial Grid Mesh Overlay */}
      <GridOverlay />

      {/* Dynamic Backglow Orbs */}
      <div className="absolute top-[5%] left-[5%] w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-brand-success/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar 
        onStartProject={handleStartProjectBtn} 
        activeSection={activeSection} 
      />

      {/* Hero Visual Section */}
      <Hero 
        onStartProject={handleStartProjectBtn} 
        onViewPortfolio={handleViewPortfolioBtn} 
      />

      {/* Trusted By Client Logos */}
      <TrustedBy />

      {/* About Section */}
      <About />

      {/* Interactive Services Section */}
      <Services 
        onSelectService={handleSelectServiceInquire} 
      />

      {/* Featured Projects Showcase */}
      <FeaturedProjects 
        onStartProject={handleSelectServiceInquire} 
      />

      {/* Interactive Process Timeline */}
      <Process />

      {/* Interactive Technologies Stack */}
      <Technologies />

      {/* Why Choose EverestX Advantages */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordions */}
      <FAQ />

      {/* Contact Telemetry and Form */}
      <Contact 
        prefilledContext={prefilledContext} 
      />

      {/* Footer Branding and Compliance */}
      <Footer 
        onStartProject={handleStartProjectBtn} 
      />

      {/* Multi-Step Estimator Modal Overlay */}
      <ProjectEstimatorModal 
        isOpen={isEstimatorOpen} 
        onClose={() => setIsEstimatorOpen(false)} 
        onSubmitInquiry={handleEstimatorSubmit}
      />

      {/* Floating Scroll-to-Top Progress Indicator */}
      <ScrollToTop />
    </div>
  );
}

