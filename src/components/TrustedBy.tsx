import { motion } from 'motion/react';
import { useState } from 'react';

interface TrustedByProps {
  theme: 'dark' | 'light';
}

export default function TrustedBy({ theme }: TrustedByProps) {
  const [errorLogs, setErrorLogs] = useState<Record<string, boolean>>({});

  const clients = [
    { name: 'MOSTA RUN CLUB', subtitle: 'PARTENAIRE', logo: '/mosta run club.png' },
    { name: 'LES BIJOUX D\'ORAN', subtitle: 'PARTENAIRE', logo: '/les bijoux d\'oran.png' },
    { name: 'ECOLE EL NADJAH', subtitle: 'PARTENAIRE', logo: '/nadjah.png' },
    { name: 'EVEREST ACADEMY', subtitle: 'PARTENAIRE', logo: '/everest academy.png' },
    { name: 'BC CLEAN SERVICE', subtitle: 'PARTENAIRE', logo: '/bc clean service.png' },
    { name: 'RAHI9', subtitle: 'PARTENAIRE', logo: '/rahi9.png' },
  ];

  const handleImageError = (name: string) => {
    setErrorLogs(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section 
      id="trusted-by" 
      className="py-16 bg-brand-primary border-y border-brand-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Caption */}
        <p className="text-[10px] font-mono tracking-widest text-brand-dark-gray uppercase mb-12">
          APPROUVÉ PAR LES ENTREPRISES LEADERS ET LES MARQUES EN PLEINE CROISSANCE
        </p>

        {/* Client Wall Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-center">
          {clients.map((client, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={client.name}
              className="group flex flex-col items-center justify-center transition-all duration-300"
              id={`trusted-client-${idx}`}
            >
              <div className="h-12 w-full flex items-center justify-center mb-3">
                {!errorLogs[client.name] ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
                    className={`max-h-full max-w-[120px] object-contain transition-all duration-500 ${
                      theme === 'dark' 
                        ? `opacity-100 brightness-[1.1] contrast-[1.05] ${client.name === 'RAHI9' ? 'invert hue-rotate-180 brightness-150' : ''}` 
                        : 'opacity-80 group-hover:opacity-100'
                    }`}
                    onError={() => handleImageError(client.name)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="text-sm font-sans font-black tracking-widest text-brand-dark-gray group-hover:text-brand-text transition-colors flex items-center gap-1.5 duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-dark-gray group-hover:bg-brand-accent transition-colors duration-300" />
                    <span>{client.name}</span>
                  </div>
                )}
              </div>
              <span className="text-[8px] font-mono text-brand-dark-gray/60 group-hover:text-brand-accent/70 transition-colors uppercase tracking-widest mt-1">
                {client.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
