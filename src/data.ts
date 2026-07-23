import { 
  Code2, 
  Palette, 
  Target, 
  Video, 
  Megaphone, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Sparkles,
  Zap,
  Globe,
  Gauge,
  Workflow,
  HeartHandshake
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: any; // Lucide icon
  glowColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  clientType: string;
  description: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
  technologies: string[];
  gradient: string;
  uiMockupType: 'fintech' | 'medical' | 'education' | 'dining';
  link?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile-desktop' | 'database-infra' | 'design-motion';
  proficiency: number;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-development',
    title: 'Développement de Logiciels',
    description: 'Nous concevons des applications robustes, évolutives et ultra-performantes, conçues pour propulser les entreprises modernes.',
    icon: Code2,
    glowColor: 'rgba(10, 132, 255, 0.15)',
    items: [
      'Sites Web d\'Entreprise',
      'Pages de Destination (Landing Pages)',
      'Applications Web Modernes',
      'Applications Mobiles iOS & Android',
      'Applications de Bureau (Desktop)',
      'Systèmes Métiers sur Mesure',
      'Intégrations ERP / CRM',
      'Solutions API à Haut Débit',
      'Maintenance et Support sous Contrat (SLA)'
    ]
  },
  {
    id: 'creative-design',
    title: 'Design Créatif',
    description: 'Interfaces sur mesure et narrations graphiques conçues pour captiver l\'attention et transmettre une qualité irréprochable.',
    icon: Palette,
    glowColor: 'rgba(168, 85, 247, 0.15)',
    items: [
      'Architecture & Design UI/UX',
      'Conception de Logos & Identité',
      'Systèmes d\'Identité Globale de Marque',
      'Kits de Communication Réseaux Sociaux',
      'Ressources Graphiques d\'Entreprise',
      'Supports Marketing Haut de Gamme'
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Stratégie',
    description: 'Nous cristallisons vos valeurs fondamentales en un positionnement de marque emblématique et mémorable qui s\'impose sur le marché.',
    icon: Target,
    glowColor: 'rgba(0, 208, 132, 0.15)',
    items: [
      'Stratégie Globale de Marque',
      'Analyses Démographiques Cibles',
      'Recherche de Noms de Marque (Naming)',
      'Chartes Graphiques Exhaustives',
      'Rebranding Stratégique d\'Entreprise'
    ]
  },
  {
    id: 'media-production',
    title: 'Production Médias',
    description: 'Storyboards visuels immersifs, motion design et contenus vidéo conçus pour captiver les audiences numériques.',
    icon: Video,
    glowColor: 'rgba(239, 68, 68, 0.15)',
    items: [
      'Vidéos Promotionnelles Cinématiques',
      'Montage Vidéo Haute Fidélité',
      'Graphiques Animés (Motion Design)',
      'Production de Reels & Shorts Viraux',
      'Vidéos de Présentation Institutionnelle'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Numérique',
    description: 'Campagnes axées sur les données et stratégies de croissance absolue conçues pour transformer les vues en clients fidèles.',
    icon: Megaphone,
    glowColor: 'rgba(245, 158, 11, 0.15)',
    items: [
      'Gestion des Réseaux Sociaux',
      'Programmes d\'Ambassadeurs & Communauté',
      'Création de Contenus à Fort Impact',
      'Plannings Éditoriaux Avancés',
      'Campagnes Publicitaires Ciblées',
      'Stratégies de Croissance Exponentielle'
    ]
  }
];

export const TARGET_CLIENTS_DATA = [
  { name: 'Startups', badge: 'Forte Croissance', description: 'Développez-vous rapidement avec des produits de qualité institutionnelle.' },
  { name: 'Entreprises', badge: 'Grandes Comptes', description: 'Modernisez vos structures historiques avec des ERP/CRM sur mesure.' },
  { name: 'Cliniques Médicales', badge: 'Normes Sécurisées', description: 'Portails de réservation sécurisés et de téléconsultation centrés sur le patient.' },
  { name: 'Immobilier', badge: 'Haute Valeur', description: 'Annonces de luxe interactives et visites virtuelles immersives.' },
  { name: 'Écoles & Universités', badge: 'Éducation Moderne', description: 'Systèmes de gestion de l\'apprentissage collaboratifs sur mesure.' },
  { name: 'Restaurants', badge: 'Gastronomie', description: 'Kits de marque visuels premium et réservation en ligne fluide.' },
  { name: 'Marques Personnelles', badge: 'Premium', description: 'Moteurs web d\'autorité pour asseoir votre leadership d\'opinion.' },
  { name: 'PME & Commerces', badge: 'Force Locale', description: 'Libérez votre efficacité globale grâce à la transformation numérique.' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'mrc-community',
    title: 'Mosta Run Club Community',
    client: 'Mosta Run Club',
    category: 'Application Communautaire & Tracking',
    clientType: 'Sport & Communauté',
    description: 'L\'application officielle de la communauté Mosta Run Club pour suivre les entraînements de course à pied, gérer les événements hebdomadaires, interagir avec les membres et suivre les statistiques collectives.',
    challenge: 'Fédérer et connecter de manière ludique et moderne une communauté grandissante de coureurs à travers une plateforme centralisée pour coordonner les sessions de running hebdomadaires.',
    solution: 'Un hub interactif doté d\'une gestion d\'événements, d\'un mur d\'activité sociale, de suivi de kilomètres et de badges de progression.',
    stats: [
      { label: 'Membres Actifs', value: '500+' },
      { label: 'Événements Hebdomadaires', value: '120+' },
      { label: 'Km Parcourus', value: '15k km+' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    gradient: 'from-orange-500/30 to-red-900/40',
    uiMockupType: 'fintech',
    link: 'http://mrc-community.vercel.app/'
  },
  {
    id: 'mrc-shop',
    title: 'Mosta Run Club Shop',
    client: 'Mosta Run Club',
    category: 'E-Commerce Premium',
    clientType: 'Boutique en Ligne',
    description: 'La boutique en ligne officielle du Mosta Run Club permettant aux coureurs d\'acquérir les équipements officiels, maillots running de haute qualité et accessoires exclusifs de la communauté.',
    challenge: 'Proposer un processus d\'achat fluide, rapide et immersif mettant en valeur l\'identité visuelle dynamique de la marque MRC.',
    solution: 'Un site e-commerce moderne et minimaliste optimisé pour mobile avec un parcours utilisateur instantané.',
    stats: [
      { label: 'Taux de Conversion', value: '4.8%' },
      { label: 'Temps de Chargement', value: '0.4s' },
      { label: 'Commandes Livrées', value: '1,200+' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    gradient: 'from-blue-600/30 to-indigo-900/40',
    uiMockupType: 'dining',
    link: 'https://mrc-shop.vercel.app/'
  },
  {
    id: 'les-bijoux-doran',
    title: 'Les Bijoux d\'Oran',
    client: 'Les Bijoux d\'Oran Jewelry',
    category: 'Vitrine de Luxe & Catalogue Digital',
    clientType: 'Bijouterie de Luxe',
    description: 'Une galerie numérique haut de gamme présentant des collections de joaillerie exclusives, de pièces uniques en or et de parures traditionnelles d\'une finesse remarquable.',
    challenge: 'Transmettre l\'élégance tactile, la brillance et le prestige des pièces de haute joaillerie à travers une expérience numérique épurée.',
    solution: 'Une interface sombre minimaliste à fort contraste, avec des diaporamas fluides d\'exposition des collections.',
    stats: [
      { label: 'Vues Mensuelles', value: '25,000+' },
      { label: 'Demandes de Devis', value: '+180%' },
      { label: 'Satisfaction Client', value: '4.9/5' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-amber-500/20 to-stone-900/40',
    uiMockupType: 'medical',
    link: 'https://bidjou.vercel.app/'
  },
  {
    id: 'ecole-el-nadjah',
    title: 'École El Nadjah',
    client: 'École El Nadjah',
    category: 'Portail Éducatif & LMS',
    clientType: 'Éducation & Écoles',
    description: 'Une plateforme d\'apprentissage et de gestion scolaire sur mesure connectant enseignants, élèves et parents avec un suivi de progression et des cours interactifs.',
    challenge: 'Simplifier la communication administrative de l\'école et donner aux familles un accès sécurisé et simple à toutes les ressources scolaires.',
    solution: 'Un portail web intuitif sous forme de grille bento facilitant le suivi des notes, des devoirs et du calendrier de l\'école.',
    stats: [
      { label: 'Élèves Connectés', value: '1,500+' },
      { label: 'Taux d\'Usage Parents', value: '92%' },
      { label: 'Économie de Papier', value: '100%' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
    gradient: 'from-purple-600/25 to-pink-950/35',
    uiMockupType: 'education',
    link: 'http://ecole-nadjah.vercel.app/'
  },
  {
    id: 'everest-academy',
    title: 'Everest Academy',
    client: 'Everest Academy',
    category: 'Plateforme de Formation Moderne',
    clientType: 'E-Learning & Formation',
    description: 'Un espace moderne d\'enseignement interactif proposant des formations ciblées de haut niveau pour libérer le potentiel des étudiants et professionnels.',
    challenge: 'Offrir une interface d\'apprentissage intuitive et stimulante capable de maintenir l\'engagement des étudiants sur le long terme.',
    solution: 'Un système de gestion d\'apprentissage immersif en grille bento avec un suivi personnalisé des objectifs de formation.',
    stats: [
      { label: 'Formations Suivies', value: '800+' },
      { label: 'Complétion des Cours', value: '94%' },
      { label: 'Taux d\'Insertion', value: '89%' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    gradient: 'from-teal-600/20 to-emerald-950/30',
    uiMockupType: 'education',
    link: 'https://everest-academy-smoky.vercel.app/'
  },
  {
    id: 'bc-clean-service',
    title: 'BC Clean Service',
    client: 'BC Clean Service',
    category: 'SaaS Opérationnel & Services',
    clientType: 'Services Professionnels',
    description: 'Une vitrine digitale moderne présentant des services professionnels de nettoyage industriel et résidentiel avec un système de devis et planification instantanés.',
    challenge: 'Permettre aux entreprises et particuliers de commander, planifier et suivre des services d\'entretien complexes de manière fluide.',
    solution: 'Une interface claire orientée conversion avec un formulaire d\'estimation de prix instantané et de prise de rendez-vous.',
    stats: [
      { label: 'Devis Instantanés', value: '2,400+' },
      { label: 'Interventions Réussies', value: '1,800+' },
      { label: 'Rétention Clients', value: '95%' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-blue-500/20 to-cyan-950/30',
    uiMockupType: 'fintech',
    link: 'https://bc-clean-service.vercel.app/'
  },
  {
    id: 'rahi9',
    title: 'Rahi9',
    client: 'Rahi9 Logistics',
    category: 'Plateforme de Livraison & Logistique',
    clientType: 'Distribution & E-Commerce',
    description: 'Un écosystème de gestion de distribution et de livraison fluide, optimisé pour connecter les livreurs et commerçants avec un suivi en temps réel.',
    challenge: 'Optimiser la coordination logistique du dernier kilomètre et donner une visibilité totale sur l\'état d\'acheminement des commandes.',
    solution: 'Un tableau de bord logistique centralisé avec géolocalisation en temps réel et planification de tournées intelligentes.',
    stats: [
      { label: 'Livraisons / Jour', value: '1,200+' },
      { label: 'Temps de Traitement', value: '-40%' },
      { label: 'Précision d\'Acheminement', value: '99.2%' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Google Maps API'],
    gradient: 'from-amber-600/25 to-yellow-950/35',
    uiMockupType: 'fintech',
    link: 'https://rahiq-murex.vercel.app/'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Découverte & Audit',
    description: 'Nous commençons par une analyse approfondie. Nous étudions votre marché cible, cartographions les personas d\'utilisateurs, auditons les solutions concurrentes et établissons les objectifs précis de votre produit.',
    deliverables: ['Rapport d\'Analyse Concurrentielle', 'Plan d\'Architecture Technique', 'Cahier des Charges du Produit']
  },
  {
    number: '02',
    title: 'Stratégie Produit',
    description: 'Aligner les objectifs commerciaux avec les possibilités techniques. Nous formulons la feuille de route opérationnelle, détaillons les indicateurs clés et définissons l\'hypothèse de positionnement de votre marque.',
    deliverables: ['Document d\'Exigences Produit (PRD)', 'Structure & Architecture de l\'Information', 'Plan de Positionnement de Marque']
  },
  {
    number: '03',
    title: 'Design Haute Fidélité',
    description: 'Là où l\'utilité rencontre la perfection visuelle. Nous créons des prototypes interactifs haute fidélité sur Figma, développons des bibliothèques de composants et concevons les chartes graphiques sur mesure.',
    deliverables: ['Maquettes UX/UI Interactives', 'Système de Design Centralisé', 'Ressources Prêtes pour l\'Animation']
  },
  {
    number: '04',
    title: 'Développement de Précision',
    description: 'Nos développeurs seniors conçoivent des systèmes prêts pour la production en utilisant des technologies de pointe. Nous implémentons des mises en page Tailwind au pixel près, des arbres d\'état robustes et des réponses API ultra-rapides.',
    deliverables: ['Codebase TypeScript Propre', 'Points de Terminaison API & Base de Données', 'Déploiements en Environnement de Staging']
  },
  {
    number: '05',
    title: 'Assurance Qualité & Tests',
    description: 'Optimisation rigoureuse. Nous effectuons des tests de montée en charge, des audits de réactivité sur plus de 15 tailles d\'écran, des optimisations de performance pour atteindre un score Lighthouse supérieur à 99 et des validations multi-navigateurs.',
    deliverables: ['Audits de Performance Lighthouse', 'Liste de Validation Multi-Navigateurs', 'Rapports de Sécurité & Pénétration']
  },
  {
    number: '06',
    title: 'Lancement & Déploiement',
    description: 'Déploiement fluide. Nous mettons votre produit en ligne sur des serveurs sécurisés, configurons les routes DNS/CDN mondiales, lançons les campagnes de marketing numérique et suivons les données télémétriques.',
    deliverables: ['Configuration DNS de Production', 'Mise en Place des Outils d\'Analyse', 'Lancement du Kit Média & Campagnes']
  },
  {
    number: '07',
    title: 'Support Continu',
    description: 'Nous restons à vos côtés. Nous accompagnons nos créations de mises à jour de sécurité sous contrat (SLA), d\'optimisations régulières de performance, d\'évolutivité des fonctionnalités et de conseils stratégiques directs.',
    deliverables: ['Accès Prioritaire au Canal SLA', 'Optimisation Mensuelle des Performances', 'Audits de Feuille de Route Future']
  }
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 98 },
  { name: 'Next.js', category: 'frontend', proficiency: 95 },
  { name: 'TypeScript', category: 'frontend', proficiency: 100 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 100 },
  { name: 'Framer Motion', category: 'design-motion', proficiency: 95 },
  // Backend & DB
  { name: 'Node.js', category: 'backend', proficiency: 92 },
  { name: 'Express', category: 'backend', proficiency: 94 },
  { name: 'Supabase', category: 'database-infra', proficiency: 90 },
  { name: 'Firebase', category: 'database-infra', proficiency: 91 },
  { name: 'PostgreSQL', category: 'database-infra', proficiency: 88 },
  // Mobile / Desktop
  { name: 'Electron', category: 'mobile-desktop', proficiency: 85 },
  { name: 'Flutter', category: 'mobile-desktop', proficiency: 87 }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Livraison Rapide',
    description: 'Des cycles de sprint rationalisés et des bases de code modulaires garantissent un déploiement rapide sans jamais sacrifier la qualité.',
    icon: Zap,
    stat: 'Délai Moyen de 30 Jours'
  },
  {
    title: 'Design Premium',
    description: 'Nous bannissons les modèles génériques. Chaque pixel, animation personnalisée et micro-interaction est conçu sur mesure pour correspondre à votre niveau d\'exigence esthétique.',
    icon: Sparkles,
    stat: 'Qualité UI/UX Récompensée'
  },
  {
    title: 'Solutions sur Mesure',
    description: 'Pas de widgets génériques. Nous écrivons des algorithmes sur mesure, des schémas de base de données personnalisés et des intégrations adaptées à vos opérations uniques.',
    icon: Layers,
    stat: 'Zéro Solution Pré-packagée'
  },
  {
    title: 'Support à Long Terme',
    description: 'We serve as your technical partner, keeping code updated, servers scaled, and interfaces optimized as your operations grow.',
    icon: HeartHandshake,
    stat: 'Taux de Rétention Client de 98%'
  },
  {
    title: 'Communication Transparente',
    description: 'Accédez à des canaux Slack actifs, à des suivis Jira en temps réel et à des démonstrations visuelles directes chaque semaine. Aucune mauvaise surprise.',
    icon: Workflow,
    stat: 'Démos Visuelles Hebdomadaires'
  },
  {
    title: 'Architecture Évolutive',
    description: 'Nous construisons des systèmes avec des modèles de conception TypeScript modulaires et structurés, prêts à absorber des charges de plusieurs millions d\'utilisateurs.',
    icon: Gauge,
    stat: 'Optimisé Lighthouse 99+'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Associée Gérante',
    company: 'Aether Finance Corp.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'EverestX a livré un tableau de bord financier qui a dépassé nos attentes. Nos clients sont impressionnés par la réduction de 85 % de la latence et l\'interface sombre soignée. C\'est une équipe d\'ingénierie de classe mondiale.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Marcus Vance',
    role: 'Directeur Médical en Chef',
    company: 'Apex Medical Networks',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Les soins aux patients exigent une attention extrême aux détails, et EverestX a reflété ce niveau d\'exigence dans notre planificateur médical. Les retours négatifs sur l\'expérience utilisateur ont totalement disparu et l\'efficacité de la clinique a grimpé en flèche.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Helena Rostov',
    role: 'Directrice des Produits d\'Apprentissage',
    company: 'Novus Global Education',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Nos indicateurs d\'engagement ont bondi de 320 % après le lancement du LMS Novus conçu par EverestX. Les animations personnalisées sont fluides et captivantes. Ce sont de véritables esprits créatifs.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'David Chang',
    role: 'Chef Exécutif & Propriétaire',
    company: 'Maison Gastronomie Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Le site de réservation est un chef-d\'œuvre de gastronomie visuelle. Il transpose numériquement l\'élégance de notre service trois étoiles. Le volume de réservations a augmenté de 210 % dès les deux premières semaines.',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Combien de temps prend un projet typique, de la découverte au lancement ?',
    answer: 'Bien que des sites web d\'entreprise puissent être déployés en 3 à 4 semaines, des systèmes ERP/CRM complexes sur mesure et de grandes applications Web/Mobiles nécessitent généralement 6 à 12 semaines d\'ingénierie détaillée. Nous établissons un calendrier de livraison ferme dès la phase de stratégie.'
  },
  {
    id: 'faq-2',
    question: 'Aurai-je un accès direct à l\'équipe pendant le développement ?',
    answer: 'Absolument. Vous serez mis en relation avec un chef de produit dédié et bénéficierez d\'un accès direct à un canal Slack privé avec nos ingénieurs et designers. Nous fournissons des démonstrations vidéo hebdomadaires et des liens d\'accès direct pour suivre l\'avancement en temps réel.'
  },
  {
    id: 'faq-3',
    question: 'Concevez-vous tout à partir de zéro ou utilisez-vous des modèles prédéfinis ?',
    answer: 'Chaque ligne de code, modèle de design, carte d\'interface et courbe d\'animation est créée à 100 % à partir de zéro par notre équipe senior. Nous pensons que les modèles standard semblent génériques et nuisent à la crédibilité d\'une marque. Nous concevons des mises en page sur mesure pour garantir à votre entreprise une autorité absolue sur son marché.'
  },
  {
    id: 'faq-4',
    question: 'Comment gérez-vous l\'hébergement, l\'évolutivité et la maintenance des serveurs ?',
    answer: 'Nous configurons et déployons vos produits sur des architectures serverless (Vercel, AWS, Google Cloud Run) afin de minimiser la maintenance et de garantir une évolutivité quasi-infinie dès le départ. Nous proposons également des contrats de maintenance mensuelle sous contrat (SLA) couvrant les mises à jour, sauvegardes, correctifs de sécurité et audits SEO.'
  },
  {
    id: 'faq-5',
    question: 'Quelle est votre structure de facturation pour les développements sur mesure ?',
    answer: 'Nous fonctionnons sur un modèle transparent de prix fixe par étape (milestone) basé sur les spécifications validées du produit. Vous payez après validation réussie de chaque étape clé du projet (Validation UI/UX, Version Alpha, Lancement Final). Il n\'y a pas de frais horaires cachés.'
  }
];
