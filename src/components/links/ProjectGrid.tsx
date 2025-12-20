import { ArrowUpRight } from 'lucide-react';
import { getProjectsBySection, type Project } from '../../data/projects';

const sections = [
  { key: 'studio' as const, title: 'Studio' },
  { key: 'context' as const, title: 'Context' },
  { key: 'writing' as const, title: 'Writing' },
  { key: 'connect' as const, title: 'Connect' },
];

function LinkItem({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target={project.external ? '_blank' : undefined}
      rel={project.external ? 'noopener noreferrer' : undefined}
      className="group flex items-center justify-between py-3 border-b border-[#1A1A1A]/5 last:border-b-0"
    >
      <div className="min-w-0">
        <span className="text-sm text-[#1A1A1A] group-hover:text-[#1A1A1A]/70 transition-colors">
          {project.name}
        </span>
        {project.tagline && (
          <span className="text-xs text-[#1A1A1A]/40 ml-2">
            {project.tagline}
          </span>
        )}
      </div>
      {project.external && (
        <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1A1A]/30 flex-shrink-0 ml-2" />
      )}
    </a>
  );
}

export default function ProjectGrid() {
  return (
    <div className="pb-16 px-4">
      <div className="max-w-md mx-auto space-y-8">
        {sections.map(section => {
          const sectionProjects = getProjectsBySection(section.key);
          if (sectionProjects.length === 0) return null;

          return (
            <div key={section.key}>
              <h2 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/35 font-medium mb-2" style={{letterSpacing: '0.12em'}}>
                {section.title}
              </h2>
              <div className="bg-white rounded-lg border border-[#1A1A1A]/5 px-4">
                {sectionProjects.map(project => (
                  <LinkItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
