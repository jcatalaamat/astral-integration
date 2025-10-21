import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  return (
    <div className="bg-[#FAFAF8] pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - minimal, no top margin */}
          <div className="mb-6 text-center pt-6">
            <h2 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40" style={{letterSpacing: '0.18em'}}>
              My Projects
            </h2>
          </div>

          {/* Projects List - tighter container */}
          <div className="bg-white rounded-lg shadow-sm border border-[#1A1A1A]/5 px-6 md:px-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Bottom note - smaller */}
          <div className="mt-8 text-center">
            <p className="text-[11px] text-[#1A1A1A]/30 italic">
              More projects & collaborations coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
