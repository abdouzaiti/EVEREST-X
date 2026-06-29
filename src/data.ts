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
    title: 'Software Development',
    description: 'We build robust, scalable, and ultra-high-performance applications designed to power modern enterprises.',
    icon: Code2,
    glowColor: 'rgba(10, 132, 255, 0.15)',
    items: [
      'Corporate Websites',
      'High-converting Landing Pages',
      'Modern Web Applications',
      'iOS & Android Mobile Apps',
      'Desktop Applications',
      'Custom Business Systems',
      'ERP / CRM Integrations',
      'High-throughput API Solutions',
      'SLA-backed Maintenance & Support'
    ]
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    description: 'Bespoke interfaces and graphic narratives crafted to catch attention and communicate pristine quality.',
    icon: Palette,
    glowColor: 'rgba(168, 85, 247, 0.15)',
    items: [
      'UI/UX Design & Architecture',
      'Visual Logo Engineering',
      'Holistic Brand Identity Systems',
      'Social Media Media Kits',
      'Corporate Graphic Assets',
      'High-end Marketing Materials'
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Strategy',
    description: 'We crystallize your core values into an iconic, memorable brand position that commands market authority.',
    icon: Target,
    glowColor: 'rgba(0, 208, 132, 0.15)',
    items: [
      'Comprehensive Brand Strategy',
      'Target Demographic Audits',
      'Linguistic Brand Naming',
      'Exhaustive Brand Guidelines',
      'Strategic Corporate Rebranding'
    ]
  },
  {
    id: 'media-production',
    title: 'Media Production',
    description: 'Immersive visual storyboards, motion design, and video assets to captivate digital audiences.',
    icon: Video,
    glowColor: 'rgba(239, 68, 68, 0.15)',
    items: [
      'Cinematic Promotional Videos',
      'High-fidelity Video Editing',
      'Sophisticated Motion Graphics',
      'Viral Reels & Shorts Production',
      'Executive Corporate Videos'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns and absolute growth strategies designed to turn views into customer loyalists.',
    icon: Megaphone,
    glowColor: 'rgba(245, 158, 11, 0.15)',
    items: [
      'Social Media Management',
      'Community & Advocacy Programs',
      'High-impact Content Creation',
      'Advanced Content Calendars',
      'Targeted Advertising Campaigns',
      'Exponential Growth Strategies'
    ]
  }
];

export const TARGET_CLIENTS_DATA = [
  { name: 'Startups', badge: 'High Growth', description: 'Scale rapidly with institutional-grade products.' },
  { name: 'Corporate', badge: 'Enterprise', description: 'Modernize heritage structures with custom ERP/CRMs.' },
  { name: 'Medical Clinics', badge: 'HIPAA Ready', description: 'Patient-centric secure booking and telehealth portals.' },
  { name: 'Real Estate', badge: 'High Value', description: 'Interactive luxury listings and virtual tours.' },
  { name: 'Schools', badge: 'Modern Edu', description: 'Collaborative custom Learning Management Systems.' },
  { name: 'Restaurants', badge: 'Fine Dining', description: 'Premium visual brandkits & fluid online booking.' },
  { name: 'Personal Brands', badge: 'Premium', description: 'Authority-building thought-leadership web engines.' },
  { name: 'Small Businesses', badge: 'Local Power', description: 'Unlocking global efficiency with digital transformation.' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aether-capital',
    title: 'Aether Capital',
    client: 'Aether Finance Corp.',
    category: 'Fintech Platform & Branding',
    clientType: 'Corporate & Startups',
    description: 'An institutional-grade portfolio dashboard designed to deliver real-time assets monitoring, analytics tracking, and automated trade execution for top-tier capital firms.',
    challenge: 'Legacy financial platforms are cluttered, slow, and lack cohesive branding, creating high friction for investment managers monitoring multi-million dollar asset pools.',
    solution: 'We engineered a seamless, military-grade dashboard with high-density data visualization, custom telemetry charts, and a striking, minimal cosmic slate brand identity.',
    stats: [
      { label: 'Latency Reduction', value: '-85%' },
      { label: 'Active Capital Traded', value: '$2.4B+' },
      { label: 'Client Trust Rating', value: '99.9%' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Node.js'],
    gradient: 'from-blue-600/30 to-indigo-900/40',
    uiMockupType: 'fintech'
  },
  {
    id: 'apex-health',
    title: 'Apex Patient Portal',
    client: 'Apex Medical Networks',
    category: 'SaaS Platform & UI/UX Design',
    clientType: 'Medical Clinics & Hospitals',
    description: 'An integrated telehealth dashboard and clinical scheduler enabling doctors to consult patients safely, review medical records, and issue instant prescriptions.',
    challenge: 'Medical portals are notoriously complex, presenting severe UX barriers for aged patients and triggering extreme administrative overhead for clinic staff.',
    solution: 'We designed a hyper-accessible, ADA-compliant user journey backed by secure, state-of-the-art WebRTC audio-visual streaming, achieving effortless one-click care.',
    stats: [
      { label: 'Appointment Efficiency', value: '+140%' },
      { label: 'Patient Retention Rate', value: '96.2%' },
      { label: 'Onboarding Time', value: '< 2 mins' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    gradient: 'from-emerald-500/20 to-teal-900/30',
    uiMockupType: 'medical'
  },
  {
    id: 'novus-academy',
    title: 'Novus Immersive LMS',
    client: 'Novus Global Education',
    category: 'Custom E-Learning Web & Brand Guidelines',
    clientType: 'Schools & Training Institutes',
    description: 'A revolutionary, bento-grid styled Learning Management System incorporating visual classrooms, automated grading pipelines, and interactive assignments trackers.',
    challenge: 'Traditional e-learning is boring, flat, and fails to keep students engaged, resulting in low course completion rates across educational institutions.',
    solution: 'We custom-developed a highly gamified, modular dashboard using micro-animations, progress timelines, and an outstanding visual reward framework.',
    stats: [
      { label: 'Student Engagement', value: '+320%' },
      { label: 'Grade-Book Accuracy', value: '100%' },
      { label: 'Global Active Students', value: '45,000+' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
    gradient: 'from-purple-600/25 to-pink-950/35',
    uiMockupType: 'education'
  },
  {
    id: 'le-bistro',
    title: 'Le Bistro Fine Dining',
    client: 'Maison Gastronomie Group',
    category: 'Rebranding & Reservation Engine',
    clientType: 'Restaurants & Hospitality',
    description: 'A luxurious interactive visual platform, custom reservation algorithm, and promotional campaign for a three-Michelin-starred fine dining brand.',
    challenge: 'Premium restaurants require a digital presence that mimics the tactile elegance and luxury of their physical dining rooms, which typical templates fail to convey.',
    solution: 'We created a high-concept sensory design using gorgeous cinematography, fine typography tracking, elegant transition motions, and a high-performance reservation builder.',
    stats: [
      { label: 'Online Bookings', value: '+210%' },
      { label: 'Website Retention', value: '3.5 mins' },
      { label: 'Media Impressions', value: '1.2M+' }
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Media Production'],
    gradient: 'from-amber-500/10 to-stone-900/40',
    uiMockupType: 'dining'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We begin with an exhaustive deep-dive session. We analyze your target market, map out user personas, audit competing solutions, and establish your precise product goals.',
    deliverables: ['Competitive Analysis Report', 'Technical Architecture Blueprint', 'Product Scope document']
  },
  {
    number: '02',
    title: 'Product Strategy',
    description: 'Aligning business metrics with technical possibilities. We formulate the operational roadmap, detail core feature metrics, and define your brand positioning hypothesis.',
    deliverables: ['Product Requirement Document (PRD)', 'Site Maps & Information Architecture', 'Brand Positioning map']
  },
  {
    number: '03',
    title: 'High-Fidelity Design',
    description: 'Where utility meets visual perfection. We create high-fidelity interactive Figma prototypes, develop complete component libraries, and construct custom brand design tokens.',
    deliverables: ['Interactive UX/UI Mockups', 'Core Design System Spec', 'Ready-to-Animate Assets']
  },
  {
    number: '04',
    title: 'Precision Development',
    description: 'Our senior developers build production-ready systems using cutting-edge tech stacks. We implement pixel-perfect Tailwind layouts, robust state trees, and lightning-fast API responses.',
    deliverables: ['Clean TypeScript Codebase', 'API Endpoints & DB Integrations', 'Staging Deployments']
  },
  {
    number: '05',
    title: 'Quality Assurance & Testing',
    description: 'Rigorous optimization. We run stress testing, responsiveness audits across 15+ screen sizes, performance optimizations to hit 99+ Lighthouse scores, and cross-browser validations.',
    deliverables: ['Lighthouse Performance Audits', 'Responsive Cross-Browser Checklist', 'Security Penetration logs']
  },
  {
    number: '06',
    title: 'Launch & Expansion',
    description: 'Smooth deployment. We release your product to live servers, configure global DNS/CDN routes, launch digital marketing campaigns, and monitor telemetry.',
    deliverables: ['Production DNS Configuration', 'Analytics Dashboards Setup', 'Media Kit Assets Launch']
  },
  {
    number: '07',
    title: 'Ongoing Support',
    description: 'We do not just leave. We back our builds with active SLA-managed security updates, routine performance tuning, feature scalability, and direct advisory consulting.',
    deliverables: ['Priority SLA Channel Access', 'Monthly Performance Optimization', 'Future Roadmap Audits']
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
    title: 'Fast Delivery',
    description: 'Highly streamlined sprint cycles and modular codebases ensure rapid deployment without ever sacrificing quality.',
    icon: Zap,
    stat: 'Average 30-Day Turnaround'
  },
  {
    title: 'Premium Design',
    description: 'We eschew templates. Every pixel, custom animation, and micro-interaction is custom-designed to match your exact aesthetic tier.',
    icon: Sparkles,
    stat: 'Award-Winning UI/UX Quality'
  },
  {
    title: 'Custom Solutions',
    description: 'No generic widgets. We write bespoke algorithms, custom database schemas, and tailored integrations for your unique operations.',
    icon: Layers,
    stat: 'Zero Pre-Packaged Hacks'
  },
  {
    title: 'Long-term Support',
    description: 'We serve as your technical partner, keeping code updated, servers scaled, and interfaces optimized as your operations grow.',
    icon: HeartHandshake,
    stat: '98% Client Retention Rate'
  },
  {
    title: 'Transparent Communication',
    description: 'Access active Slack channels, real-time Jira trackers, and direct visual demos every week. No hidden surprises.',
    icon: Workflow,
    stat: 'Weekly Visual Demos'
  },
  {
    title: 'Scalable Architecture',
    description: 'We construct systems with modular, clean-layered TS patterns ready to easily absorb million-user scaling loads.',
    icon: Gauge,
    stat: 'Lighthouse 99+ Readiness'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Managing Partner',
    company: 'Aether Finance Corp.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'EverestX delivered a financial dashboard that exceeded our expectations. Our clients are amazed by the 85% reduction in latency and the pristine dark interface. They are a world-class engineering force.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Marcus Vance',
    role: 'Chief Medical Officer',
    company: 'Apex Medical Networks',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Patient care requires extreme attention to detail, and EverestX mirrored that level of care in our patient scheduler. UX complaints dropped to absolute zero, and clinic efficiency spiked overnight.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Helena Rostov',
    role: 'Director of Learning Products',
    company: 'Novus Global Education',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Our engagement metrics skyrocketed by 320% after launching the Novus LMS designed by EverestX. The custom animations are fluid and addicting. They are truly creative masterminds.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'David Chang',
    role: 'Executive Chef & Owner',
    company: 'Maison Gastronomie Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'The reservation website is a masterpiece of visual gastronomy. It mimics our three-star fine dining service digitally. Booking volume increased by 210% in the first two weeks alone.',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical project take from discovery to launch?',
    answer: 'While custom corporate websites can be deployed within 3 to 4 weeks, complex custom ERP/CRM systems and massive Web/Mobile applications typically require 6 to 12 weeks of detailed engineering sprints. We establish a firm delivery schedule during the Strategy phase.'
  },
  {
    id: 'faq-2',
    question: 'Will I have direct access to the team during development?',
    answer: 'Absolutely. You will be matched with a dedicated Product Lead, and gain direct access to a private Slack channel with our engineers and designers. We provide weekly video screencasts and direct clickable staging links so you can witness progression live.'
  },
  {
    id: 'faq-3',
    question: 'Do you design everything from scratch, or do you use pre-made templates?',
    answer: 'Every line of code, design pattern, UI card, and motion curve is created 100% from scratch by our senior team. We believe standard templates look generic and degrade brand credibility. We custom-engineer layouts to guarantee your brand commands absolute category authority.'
  },
  {
    id: 'faq-4',
    question: 'How do you handle hosting, scaling, and server-side maintenance?',
    answer: 'We configure and deploy your products onto serverless architectures (Vercel, AWS, Google Cloud Cloud Run) to minimize maintenance and guarantee near-infinite scaling out-of-the-box. We also offer SLA-backed monthly maintenance contracts covering routine updates, backups, security patches, and SEO auditing.'
  },
  {
    id: 'faq-5',
    question: 'What is your billing structure for custom development?',
    answer: 'We operate on a transparent fixed-price milestone model based on approved product specifications. You pay upon successful verification of specific project milestones (e.g. UX/UI Sign-off, Alpha Build, Final Launch). There are no hidden hourly fees.'
  }
];
