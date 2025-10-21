import { ArrowRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <a
      href={project.cta.url}
      target={project.cta.url.startsWith('http') ? '_blank' : undefined}
      rel={project.cta.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group block py-4 -mx-6 md:-mx-8 px-6 md:px-8 border-b border-[#1A1A1A]/5 last:border-b-0 hover:bg-[#F5F3EF]/40 transition-all duration-200"
    >
      <div className="flex items-start gap-4 md:items-center md:gap-6">
        {/* Number - smaller, more subtle */}
        <div className="flex-shrink-0 w-8 md:w-10 text-right">
          <span className="text-[10px] font-mono text-[#C9A167]/70 tracking-wider">
            {number}
          </span>
        </div>

        {/* Content - takes full width on mobile */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-sm md:text-base font-serif text-[#1A1A1A] group-hover:text-[#C9A167] transition-colors">
            {project.name}
          </h3>

          {/* Tagline - on new line */}
          <p className="text-xs text-[#1A1A1A]/40 font-sans mb-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs text-[#1A1A1A]/50 leading-relaxed mb-2 md:mb-0">
            {project.description}
          </p>

          {/* Status/Price - shown below description on mobile, inline on desktop */}
          {(project.status || project.price) && (
            <div className="flex items-center gap-2 mt-2 md:hidden">
              {project.status && (
                <span className="text-[9px] uppercase tracking-wide text-[#C9A167] font-medium px-2.5 py-1 bg-[#C9A167]/8 border border-[#C9A167]/25 rounded-full">
                  {project.status}
                </span>
              )}
              {project.price && (
                <span className="text-xs font-semibold text-[#C9A167]">
                  {project.price}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Status/Price - desktop only, right side */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-2">
          {project.status && (
            <span className="text-[9px] uppercase tracking-wide text-[#C9A167] font-medium px-2.5 py-1 bg-[#C9A167]/8 border border-[#C9A167]/25 rounded-full">
              {project.status}
            </span>
          )}
          {project.price && (
            <span className="text-xs font-semibold text-[#C9A167]">
              {project.price}
            </span>
          )}
        </div>

        {/* Arrow - desktop only */}
        <div className="hidden md:block flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
          <ArrowRight className="w-4 h-4 text-[#C9A167]/60" />
        </div>
      </div>
    </a>
  );
}
