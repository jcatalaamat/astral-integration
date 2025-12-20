export interface Project {
  id: string;
  name: string;
  section: 'studio' | 'founder' | 'connect';
  tagline?: string;
  url: string;
  external?: boolean;
}

export const projects: Project[] = [
  // STUDIO
  {
    id: 'main-site',
    name: 'Astral Integration',
    section: 'studio',
    tagline: 'Systems redesign for founders and small teams',
    url: '/'
  },

  // FOUNDER
  {
    id: 'founder',
    name: 'Jordi Amat',
    section: 'founder',
    tagline: 'Systems Architect · Founder',
    url: 'https://jordiamat.com',
    external: true
  },

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
