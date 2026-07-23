import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA, ProjectItem } from '../data';
import { FrameSequenceHero, FrameSequenceStep } from './FrameSequenceHero';
import { ArrowUpRight, XIcon } from 'lucide-react';

interface ProjectsProps {
  onStartProject: (initialContext?: string) => void;
}

export default function FeaturedProjects({ onStartProject }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Map project data to FrameSequenceSteps
  const steps: FrameSequenceStep[] = PROJECTS_DATA.map((p, i) => ({
    from: i / PROJECTS_DATA.length,
    to: (i + 1) / PROJECTS_DATA.length,
    color: '#0A84FF',
    num: (i + 1).toString().padStart(2, '0'),
    total: PROJECTS_DATA.length.toString().padStart(2, '0'),
    title: p.title,
    description: p.description,
    label: p.clientType,
    link: p.link
  }));

  return (
    <section id="projects" className="relative scroll-mt-20">
      <FrameSequenceHero
        frameCount={100} // User needs to provide actual frame count
        framePath={(i) => `/frames/project-${i}.png`} // User needs to provide actual path
        steps={steps}
        brand={<span>EVERESTX</span>}
      />
    </section>
  );
}
