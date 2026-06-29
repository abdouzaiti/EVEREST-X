import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, Send, CheckCircle2, MapPin, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  prefilledContext?: string;
}

export default function Contact({ prefilledContext = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '50,000 - 100,000 DA',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@everestx.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-fill context when it changes
  useEffect(() => {
    if (prefilledContext) {
      setFormData(prev => ({
        ...prev,
        message: `Hello EverestX. I would like to inquire about: "${prefilledContext}".`
      }));
    }
  }, [prefilledContext]);

  // Calculate local time for EverestX headquarters
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Algiers',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate real database or email submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '50,000 - 100,000 DA',
        message: ''
      });
    }, 1800);
  };

  const budgets = [
    '50,000 - 100,000 DA',
    '100,000 - 150,000 DA',
    '150,000 - 250,000 DA',
    '+250,000 DA'
  ];

  return (
    <section 
      id="contact" 
      className="py-32 bg-brand-primary relative overflow-hidden border-t border-brand-secondary/60"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="glow-bg bottom-[-10%] right-[-10%] opacity-20" />
      <div className="glow-bg-purple top-[-10%] left-[-10%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-[#101828] px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            09 // COLLABORATION PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Elevate your digital posture. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Let's create something iconic.</span>
          </h2>
          <p className="text-brand-gray text-base font-light mt-4 max-w-xl">
            Submit your project details below. Our technical directors and creative leads review all submissions within 12 business hours.
          </p>
        </div>

        {/* Form and Coordinates layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-wrapper">
          
          {/* Left Side: Modern Form Container */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-[#101828]/50 border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    id="project-blueprint-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-[10px] font-mono text-brand-gray uppercase tracking-widest" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-[10px] font-mono text-brand-gray uppercase tracking-widest" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@aether.capital"
                          className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="space-y-2">
                        <label className="block text-[10px] font-mono text-brand-gray uppercase tracking-widest" htmlFor="company">
                          Company / Venture
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Aether Finance Corp"
                          className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Project Budget */}
                      <div className="space-y-2">
                        <label className="block text-[10px] font-mono text-brand-gray uppercase tracking-widest" htmlFor="budget">
                          Target Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors appearance-none"
                        >
                          {budgets.map(b => (
                            <option key={b} value={b} className="bg-brand-secondary text-white">{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-brand-gray uppercase tracking-widest" htmlFor="message">
                        Brief Project Scope
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your target clients, deliverables, and timelines..."
                        className="w-full bg-brand-primary/80 border border-white/5 focus:border-brand-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Button submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-accent hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-xs font-semibold tracking-widest text-black transition-all flex items-center justify-center gap-2 group focus:outline-none uppercase font-mono cursor-pointer"
                      id="submit-blueprint-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>SYNCHRONIZING SECURE NODE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>Transmit Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-5"
                    id="form-success-message"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-brand-success animate-bounce" />
                    </div>

                    <div>
                      <span className="block text-[10px] font-mono text-brand-success uppercase tracking-widest font-semibold">
                        TRANSMISSION SECURED
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                        Inquiry Received successfully!
                      </h3>
                      <p className="text-xs text-brand-gray font-light max-w-sm mx-auto mt-2 leading-relaxed">
                        Our lead technical architects and creative directors have received your project scope logs. We are compiling your custom operational proposal now.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-brand-primary border border-white/5 text-xs text-brand-gray hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      Transmit New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Side: Geolocation Telemetry Clock & Directions */}
          <div className="lg:col-span-5 space-y-6" id="contact-telemetry-container">
            
            {/* Geolocation Clock card */}
            <div className="bg-[#101828]/50 border border-white/5 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between h-[200px] group hover:border-brand-accent/35 transition-colors duration-300">
              {/* Backglow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-mono text-brand-dark-gray uppercase tracking-widest block mb-1">
                  OFFICIAL COORDINATES
                </span>
                <span className="font-sans font-bold text-base text-white block">
                  Everest <span className="text-blue-400 font-black inline-block ml-0.5 scale-110">X</span>
                </span>
                <span className="text-xs text-brand-gray block mt-0.5 font-light">
                  35.9220° N, 0.0905° E
                </span>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div>
                  <span className="block text-[9px] font-mono text-brand-dark-gray uppercase">CURRENT TEAM TIME</span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 block">
                    {currentTime || '12:00:00 PM'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 bg-brand-success/10 border border-brand-success/20 rounded-md">
                  <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse" />
                  <span className="text-[9px] font-mono font-semibold text-brand-success uppercase">Active & Render Ready</span>
                </div>
              </div>
            </div>

            {/* Pathways Channels */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Email channel (Click to Copy) */}
              <button
                onClick={handleCopyEmail}
                className="bg-[#101828]/50 border border-white/5 p-5 rounded-2xl block hover:border-brand-accent/35 hover:bg-[#101828] transition-all duration-300 group text-left w-full cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-accent/50 relative overflow-hidden"
                id="contact-pathway-email"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary border border-white/5 flex items-center justify-center mb-4 group-hover:border-brand-accent/30 transition-colors">
                  <Mail className={`w-4 h-4 transition-all duration-300 ${copied ? 'text-brand-success scale-110' : 'text-brand-accent'}`} />
                </div>
                <span className={`block text-[9px] font-mono tracking-wider uppercase transition-colors duration-300 ${copied ? 'text-brand-success font-bold' : 'text-brand-dark-gray'}`}>
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'DIRECT DISPATCH'}
                </span>
                <span className="block text-xs font-bold text-white mt-1 group-hover:text-brand-accent transition-colors">
                  hello@everestx.com
                </span>
                {copied && (
                  <span className="absolute bottom-2 right-3 text-[7px] font-mono text-brand-success font-bold uppercase animate-pulse">
                    ready to write
                  </span>
                )}
              </button>

              {/* WhatsApp channel */}
              <a
                href="https://wa.me/447700900077"
                target="_blank"
                rel="noreferrer"
                className="bg-[#101828]/50 border border-white/5 p-5 rounded-2xl block hover:border-brand-accent/35 hover:bg-[#101828] transition-all duration-300 group text-left"
                id="contact-pathway-whatsapp"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary border border-white/5 flex items-center justify-center mb-4 group-hover:border-brand-accent/30 transition-colors">
                  <MessageCircle className="w-4 h-4 text-brand-success" />
                </div>
                <span className="block text-[9px] font-mono text-brand-dark-gray uppercase">SECURE CHAT</span>
                <span className="block text-xs font-bold text-white mt-1 group-hover:text-brand-success transition-colors">
                  +44 7700 900077
                </span>
              </a>

            </div>

            {/* Interactive Geolocation Map Container */}
            <div className="bg-[#101828]/50 border border-white/5 rounded-2xl relative overflow-hidden h-[240px] flex flex-col justify-end group hover:border-brand-accent/30 transition-all duration-300" id="contact-map-container">
              {/* Actual Google Maps Embed Iframe */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 filter grayscale invert contrast-125">
                <iframe
                  title="Everest Academy Location Map"
                  src="https://maps.google.com/maps?q=35.9219764,0.0904564&t=m&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Map Gradient Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080F19] via-transparent to-transparent pointer-events-none z-10" />

              {/* Overlay Details with Link */}
              <div className="relative z-20 p-5 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-brand-accent tracking-widest block mb-0.5 uppercase">
                    interactive viewport
                  </span>
                  <span className="font-sans font-bold text-xs text-white block">
                    Everest <span className="text-blue-400 font-black inline-block ml-0.5 scale-110">X</span>
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Everest+academy/@35.9219764,0.0904564,921m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1282030029261eb9:0x1c98dec2458c794b!8m2!3d35.9219764!4d0.0904564!16s%2Fg%2F11x_4k5yql?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-brand-accent hover:bg-white text-[10px] font-semibold text-black tracking-wider transition-all flex items-center gap-1 group/btn"
                  id="get-directions-btn"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
