import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="pt-16 pb-10 bg-brand-primary relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="glow-bg-purple bottom-[10%] left-[-10%] opacity-20" />
      <div className="glow-bg top-[20%] right-[-15%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            01 // PRÉSENTATION D'EVERESTX
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-brand-text tracking-tight mt-6 leading-tight">
            Nous existons à l'intersection de l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">excellence technique</span> et du design haut de gamme.
          </h2>
        </div>

        {/* Narrative & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Slogan & Story Column */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-brand-accent to-transparent opacity-50" />
              <p className="text-xl sm:text-2xl font-sans text-brand-text leading-tight tracking-tight">
                Nous ne concevons pas de modèles génériques. Nous ne recyclons pas d'idées. Nous bâtissons des <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">écosystèmes numériques</span> qui redéfinissent votre avantage concurrentiel.
              </p>
            </div>
            
            <p className="text-brand-gray text-lg font-light leading-relaxed max-w-xl">
              Chaque ligne de code est une décision stratégique. Chaque pixel est une intention de marque. Nous fusionnons l'ingénierie de précision avec une esthétique de luxe pour propulser les leaders vers leur sommet.
            </p>
          </div>

          {/* Mission & Vision Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Mission Card */}
            <div className="group bg-brand-secondary/40 border border-brand-border p-8 rounded-3xl backdrop-blur-md hover:border-brand-accent/40 transition-all duration-500 hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-brand-text text-xl font-bold font-sans mb-4 tracking-tight">Notre Mission</h3>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                Permettre aux entreprises mondiales de se développer en fournissant des produits numériques méticuleusement conçus et des identités visuelles de prestige.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-brand-secondary/40 border border-brand-border p-8 rounded-3xl backdrop-blur-md hover:border-brand-accent/40 transition-all duration-500 hover:translate-y-[-4px] sm:mt-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-brand-text text-xl font-bold font-sans mb-4 tracking-tight">Notre Vision</h3>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                Être le partenaire mondial de référence en matière de rupture numérique premium, en établissant la norme d'excellence pour l'artisanat logiciel.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
