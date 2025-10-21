export interface Project {
  id: string;
  name: string;
  category: 'soul-work' | 'tech' | 'community';
  icon: string;
  tagline: string;
  description: string;
  price?: string;
  status?: string; // "Live", "Coming Soon", "Investment Open", etc.
  features: string[];
  cta: {
    primary: string;
    url: string;
  };
  cta2?: {
    text: string;
    url: string;
  };
}

export const projects: Project[] = [
  {
    id: 'astral-integration',
    name: 'Astral Integration',
    category: 'soul-work',
    icon: '💫',
    tagline: '1:1 Soul Work & Integration Coaching',
    description: 'Deep transformational mentorship, ancestral healing, and timeline shifting sessions',
    status: 'Booking Open',
    features: [],
    cta: {
      primary: 'Schedule Free Call',
      url: 'https://calendly.com/astral-integration/discovery-call'
    },
    cta2: {
      text: 'Explore Services',
      url: '/services'
    }
  },
  {
    id: 'spirit-awakening-medicine',
    name: 'Spirit Awakening Medicine',
    category: 'soul-work',
    icon: '🔥',
    tagline: 'Bufo Alvarius Ceremonies & Integration',
    description: 'Sacred medicine journeys with comprehensive preparation, ceremony, and integration',
    status: 'By Application',
    features: [],
    cta: {
      primary: 'Apply for Ceremony',
      url: 'http://spiritawakeningmedicine.com/'
    },
    cta2: {
      text: 'Learn More',
      url: '/services'
    }
  },
  {
    id: 'nina-moore',
    name: 'Nina Moore',
    category: 'soul-work',
    icon: '💞',
    tagline: 'Sacred Union & Couples Healing',
    description: 'Transformative programs for sacred union, kundalini activation, and relationship healing',
    price: '$444',
    status: 'Booking Open',
    features: [],
    cta: {
      primary: 'Book Session',
      url: 'http://nina-moore.com/'
    },
    cta2: {
      text: 'Explore Programs',
      url: 'http://nina-moore.com/'
    }
  },
  {
    id: 'astralamat',
    name: 'Astral Amat',
    category: 'tech',
    icon: '💼',
    tagline: 'CTO Services & Technical Leadership',
    description: 'Conscious product development, blockchain integration, and technical strategy',
    status: 'Partnership Available',
    features: [],
    cta: {
      primary: 'View Portfolio',
      url: 'https://astralamat.com'
    },
    cta2: {
      text: "Let's Connect",
      url: 'mailto:hello@astralamat.com'
    }
  },
  {
    id: 'inner-ascend',
    name: 'Inner Ascend',
    category: 'tech',
    icon: '🔮',
    tagline: '90-Day Spiritual Transformation App',
    description: 'Shadow work, meditation, and journaling practices with 16 transformation modules',
    price: '$17/month',
    status: 'Coming Soon',
    features: [],
    cta: {
      primary: 'Join Waitlist',
      url: 'https://inner-ascend.com/'
    },
    cta2: {
      text: 'Learn More',
      url: 'https://inner-ascend.com/'
    }
  },
  {
    id: 'mazunte-connect',
    name: 'Mazunte Connect',
    category: 'community',
    icon: '🏝️',
    tagline: 'Community Platform for Mazunte',
    description: 'Events, places, and services connecting locals and travelers in Mazunte, Mexico',
    status: 'Live App',
    features: [],
    cta: {
      primary: 'Download App',
      url: 'https://mazunteconnect.com'
    },
    cta2: {
      text: 'Visit Website',
      url: 'https://mazunteconnect.com'
    }
  },
  {
    id: 'proyecto-salvaje',
    name: 'Proyecto Salvaje',
    category: 'community',
    icon: '🌱',
    tagline: 'Regenerative Village & DAO in Oaxaca',
    description: '12-acre regenerative living school with blockchain governance and NFT memberships',
    status: 'Investment Open',
    features: [],
    cta: {
      primary: 'Invest/Join',
      url: 'https://proyectosalvaje.com'
    },
    cta2: {
      text: 'Explore Vision',
      url: 'https://proyectosalvaje.com'
    }
  }
];

// Helper function to filter projects by category
export const getProjectsByCategory = (category: 'soul-work' | 'tech' | 'community' | 'all') => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
