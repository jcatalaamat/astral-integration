import { ArrowRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.cta.url}
      target={project.cta.url.startsWith('http') ? '_blank' : undefined}
      rel={project.cta.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between py-4 border-b border-[#1A1A1A]/5 last:border-b-0 hover:bg-[#F5F3EF]/30 transition-all duration-200 -mx-4 px-4"
    >
      <div className="flex-1 min-w-0">
        {/* Title with arrow */}
        <div className="flex items-center gap-2">
          <span className="text-[#1A1A1A]/30 text-sm">→</span>
          <h3 className="text-sm text-[#1A1A1A] group-hover:text-[#1A1A1A]/70 transition-colors font-medium">
            {project.name}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[#1A1A1A]/50 mt-0.5 ml-5 font-light">
          {project.tagline}
        </p>
      </div>

      {/* Arrow on hover */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
      </div>
    </a>
  );
}
