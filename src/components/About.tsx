import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-32 bg-brand-primary relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="glow-bg-purple bottom-[10%] left-[-10%] opacity-20" />
      <div className="glow-bg top-[20%] right-[-15%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            01 // INTRODUCING EVERESTX
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            We exist at the intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">technical excellence</span> and high-end design.
          </h2>
        </div>

        {/* Narrative & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Slogan & Story Column */}
          <div className="lg:col-span-7 space-y-6 text-brand-gray text-base leading-relaxed font-light">
            <p className="text-white text-lg font-medium">
              We do not build templates. We do not recycle ideas. We design and develop bespoke digital ecosystems that make your competitors look obsolete.
            </p>
            <p>
              Founded with a singular mission—to elevate brands to their ultimate technological peak—EVERESTX serves as an elite design and software development advisory. We partner with ambitious startups, prestigious clinics, top-tier schools, restaurants, and international corporations to unlock exponential growth through digital innovation.
            </p>
            <p>
              By fusing raw computer science with high-concept creative design, we ensure your software is not only lightning-fast and highly secure, but also beautifully immersive.
            </p>
          </div>

          {/* Mission & Vision Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mission Card */}
            <div className="bg-brand-secondary/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-white font-semibold font-sans">Our Mission</h3>
              </div>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                To empower global businesses to scale by delivering meticulously engineered digital products, robust corporate structures, and premium visual identities.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-brand-secondary/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold font-sans">Our Vision</h3>
              </div>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                To be the definitive global partner for premium digital disruption, setting the gold standard for software craftsmanship, operational latency, and visual branding.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
