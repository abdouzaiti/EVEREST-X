import { motion } from 'motion/react';

export default function TrustedBy() {
  const clients = [
    { name: 'AETHER CAPITAL', subtitle: 'FINANCIAL' },
    { name: 'APEX HEALTH', subtitle: 'CLINICAL' },
    { name: 'NOVUS ACADEMY', subtitle: 'EDUCATION' },
    { name: 'MAISON GASTRONOMIE', subtitle: 'DINING' },
    { name: 'LUMEN REALTY', subtitle: 'ESTATES' },
    { name: 'VERTEX CORPS', subtitle: 'ENTERPRISE' },
  ];

  return (
    <section 
      id="trusted-by" 
      className="py-12 bg-brand-primary border-y border-brand-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Caption */}
        <p className="text-[10px] font-mono tracking-widest text-brand-dark-gray uppercase mb-8">
          TRUSTED BY LEADING ENTERPRISES, FAST-GROWING STARTUPS, AND INFLUENTIAL PERSONAL BRANDS
        </p>

        {/* Client Wall Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={client.name}
              className="group flex flex-col items-center justify-center p-3 rounded-xl hover:bg-brand-secondary/30 border border-transparent hover:border-white/5 transition-all duration-300 cursor-pointer"
              id={`trusted-client-${idx}`}
            >
              <div className="text-sm font-sans font-black tracking-widest text-brand-dark-gray group-hover:text-white transition-colors flex items-center gap-1.5 duration-300">
                {/* Visual Accent */}
                <div className="w-1.5 h-1.5 rounded-full bg-brand-dark-gray group-hover:bg-brand-accent transition-colors duration-300" />
                <span>{client.name}</span>
              </div>
              <span className="text-[8px] font-mono text-brand-dark-gray/60 group-hover:text-brand-accent/70 transition-colors uppercase tracking-widest mt-0.5">
                {client.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
