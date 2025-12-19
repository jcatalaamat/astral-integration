import { getProjectsBySection } from '../../data/projects';
import ProjectCard from './ProjectCard';

const sections = [
  { key: 'work' as const, title: 'Work With Me' },
  { key: 'professional' as const, title: 'Professional & Tech' },
  { key: 'projects' as const, title: 'Projects', subtitle: '(Context Only)' },
  { key: 'writing' as const, title: 'Writing & Notes' },
  { key: 'contact' as const, title: 'Contact' },
];

export default function ProjectGrid() {
  return (
    <div className="bg-[#FAFAF8] pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto space-y-8">
          {sections.map(section => {
            const sectionProjects = getProjectsBySection(section.key);
            if (sectionProjects.length === 0) return null;

            return (
              <div key={section.key}>
                {/* Section Header */}
                <div className="mb-3 flex items-baseline gap-2">
                  <h2 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-medium" style={{letterSpacing: '0.15em'}}>
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <span className="text-[9px] text-[#1A1A1A]/30 font-light">
                      {section.subtitle}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="bg-white rounded-lg border border-[#1A1A1A]/5 px-4">
                  {sectionProjects.map(project => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
