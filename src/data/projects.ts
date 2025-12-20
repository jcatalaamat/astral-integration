export interface Project {
  id: string;
  name: string;
  section: 'studio' | 'context' | 'writing' | 'connect';
  tagline?: string;
  url: string;
  external?: boolean;
}

export const projects: Project[] = [
  // STUDIO - The main work
  {
    id: 'main-site',
    name: 'Astral Integration',
    section: 'studio',
    tagline: 'Systems redesign for founders and small teams',
    url: '/'
  },

  // CONTEXT - Projects that show the world I operate in
  {
    id: 'proyecto-salvaje',
    name: 'Proyecto Salvaje',
    section: 'context',
    tagline: 'Land-based regenerative project in Oaxaca',
    url: 'https://proyectosalvaje.com',
    external: true
  },
  {
    id: 'mazunte-connect',
    name: 'Mazunte Connect',
    section: 'context',
    tagline: 'Local community platform',
    url: 'https://mazunteconnect.com',
    external: true
  },

  // WRITING - If you have notes/essays
  // Uncomment when ready:
  // {
  //   id: 'notes',
  //   name: 'Notes',
  //   section: 'writing',
  //   tagline: 'On systems, work, and transition',
  //   url: '/notes'
  // },

  // CONNECT
  {
    id: 'email',
    name: 'Email',
    section: 'connect',
    url: 'mailto:hello@astralintegration.co'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    section: 'connect',
    url: 'https://instagram.com/astralintegration',
    external: true
  }
];

// Helper function to filter projects by section
export const getProjectsBySection = (section: Project['section']) => {
  return projects.filter(p => p.section === section);
};
