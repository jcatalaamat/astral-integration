import { ArrowUpRight } from 'lucide-react';
import { getProjectsBySection, type Project } from '../../data/projects';

const sections = [
  { key: 'studio' as const, title: 'Studio' },
  { key: 'context' as const, title: 'Context' },
  { key: 'writing' as const, title: 'Writing' },
  { key: 'connect' as const, title: 'Connect' },
];

function LinkCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-studio-divider rounded-2xl p-5 hover:border-content-tertiary transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <h3 className="text-body text-content-primary font-medium group-hover:text-content-secondary transition-colors">
            {project.name}
          </h3>
          {project.tagline && (
            <p className="text-body-sm text-content-tertiary mt-1">
              {project.tagline}
            </p>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 text-content-tertiary flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
}

export default function ProjectGrid() {
  return (
    <div className="pb-20 px-6">
      <div className="max-w-[680px] mx-auto space-y-12">
        {sections.map(section => {
          const sectionProjects = getProjectsBySection(section.key);
          if (sectionProjects.length === 0) return null;

          return (
            <div key={section.key}>
              <h2 className="text-meta text-content-tertiary uppercase tracking-widest mb-4" style={{letterSpacing: '0.12em'}}>
                {section.title}
              </h2>
              <div className="space-y-3">
                {sectionProjects.map(project => (
                  <LinkCard key={project.id} project={project} />
                ))}
              </div>
              {section.key === 'connect' && (
                <p className="text-meta text-content-tertiary mt-4">
                  Messages are read carefully, not instantly.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
