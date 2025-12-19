export interface Project {
  id: string;
  name: string;
  section: 'work' | 'professional' | 'projects' | 'writing' | 'contact';
  tagline: string;
  cta: {
    primary: string;
    url: string;
  };
}

export const projects: Project[] = [
  // WORK WITH ME
  {
    id: 'astral-integration-main',
    name: 'Astral Integration',
    section: 'work',
    tagline: 'Systems redesign for people, work, and tools',
    cta: {
      primary: 'Main Site',
      url: '/'
    }
  },
  {
    id: 'founder-support',
    name: 'Founder / Creator Systems Support',
    section: 'work',
    tagline: 'Hands-on help untangling structure, execution, and tools',
    cta: {
      primary: 'Learn More',
      url: '/support'
    }
  },

  // PROFESSIONAL & TECH
  {
    id: 'fractional-cto',
    name: 'Fractional CTO & Systems Architecture',
    section: 'professional',
    tagline: 'Founder-side technical and operating work during rebuilds',
    cta: {
      primary: 'View Services',
      url: '/collaborations'
    }
  },
  {
    id: 'selected-projects',
    name: 'Selected Projects & Collaborations',
    section: 'professional',
    tagline: 'Platforms, products, and systems I\'ve helped design',
    cta: {
      primary: 'View Work',
      url: '/collaborations'
    }
  },

  // PROJECTS (Context Only)
  {
    id: 'proyecto-salvaje',
    name: 'Proyecto Salvaje',
    section: 'projects',
    tagline: 'Land-based regenerative village project (Oaxaca)',
    cta: {
      primary: 'Learn More',
      url: 'https://proyectosalvaje.com'
    }
  },
  {
    id: 'mazunte-connect',
    name: 'Mazunte Connect',
    section: 'projects',
    tagline: 'Local community platform (Mazunte, MX)',
    cta: {
      primary: 'Visit',
      url: 'https://mazunteconnect.com'
    }
  },

  // WRITING & NOTES
  {
    id: 'notes',
    name: 'Notes on Systems, Work & Transition',
    section: 'writing',
    tagline: 'Short reflections on structure, execution, and coherence',
    cta: {
      primary: 'Read',
      url: '/resources'
    }
  },

  // CONTACT
  {
    id: 'contact',
    name: 'Get in Touch',
    section: 'contact',
    tagline: 'By referral or direct message',
    cta: {
      primary: 'Contact',
      url: '/contact'
    }
  }
];

// Helper function to filter projects by section
export const getProjectsBySection = (section: Project['section']) => {
  return projects.filter(p => p.section === section);
};
