import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="pt-32 pb-12 bg-brand-primary relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="glow-bg-purple bottom-[10%] left-[-10%] opacity-20" />
      <div className="glow-bg top-[20%] right-[-15%] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-brand-secondary px-3.5 py-1.5 rounded-full border border-brand-accent/20">
            01 // PRÉSENTATION D'EVERESTX
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-6 leading-tight">
            Nous existons à l'intersection de l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">excellence technique</span> et du design haut de gamme.
          </h2>
        </div>

        {/* Narrative & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-0">
          
          {/* Slogan & Story Column */}
          <div className="lg:col-span-7 space-y-6 text-brand-gray text-base leading-relaxed font-light">
            <p className="text-white text-lg font-medium">
              Nous ne concevons pas de modèles génériques. Nous ne recyclons pas d'idées. Nous concevons et développons des écosystèmes numériques sur mesure qui rendent vos concurrents obsolètes.
            </p>
            <p>
              Fondé avec une mission unique — élever les marques à leur sommet technologique ultime — EVERESTX intervient en tant que cabinet d'élite en design et développement de logiciels. Nous nous associons à des startups ambitieuses, des cliniques prestigieuses, des écoles de premier plan, des restaurants et des multinationales pour débloquer une croissance exponentielle grâce à l'innovation numérique.
            </p>
            <p>
              En fusionnant l'informatique pure et un design créatif conceptuel, nous garantissons que votre logiciel est non seulement ultra-rapide et hautement sécurisé, mais aussi magnifiquement immersif.
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
                <h3 className="text-white font-semibold font-sans">Notre Mission</h3>
              </div>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                Permettre aux entreprises mondiales de se développer en fournissant des produits numériques méticuleusement conçus, des architectures d'entreprise robustes et des identités visuelles de prestige.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-brand-secondary/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold font-sans">Notre Vision</h3>
              </div>
              <p className="text-sm text-brand-gray font-light leading-relaxed">
                Être le partenaire mondial de référence en matière de rupture numérique premium, en établissant la norme d'excellence pour l'artisanat logiciel, la réactivité opérationnelle et le branding visuel.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
