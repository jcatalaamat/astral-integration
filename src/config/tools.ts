export interface ToolFeature {
  title: string;
  description: string;
  icon: string;
  premium?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  theme: {
    primary: string;
    primaryGlow: string;
    accent: string;
    gradient: string;
  };
  features: {
    free: string[];
    premium: string[];
  };
  featureDetails: ToolFeature[];
  path: string;
  appPath: string;
}

export const TOOLS: Record<string, Tool> = {
  'life-os': {
    id: 'life-os',
    name: 'Life OS',
    tagline: 'Your mind, organized',
    description: 'A minimalist task system for people who think differently. Capture thoughts, organize priorities, and move through your day with clarity.',
    icon: '◉',
    theme: {
      primary: '#7B68EE',
      primaryGlow: 'rgba(123, 104, 238, 0.15)',
      accent: '#2A9D6A',
      gradient: 'linear-gradient(135deg, #7B68EE, #2A9D6A)',
    },
    features: {
      free: [
        '6 intuitive categories',
        'Unlimited tasks',
        'Priority marking',
        'Local storage sync',
        'Quick capture',
        'Mobile responsive',
      ],
      premium: [
        'Cloud sync across devices',
        'Recurring tasks',
        'Calendar integration',
        'Export to CSV/PDF',
      ],
    },
    featureDetails: [
      {
        title: 'Quick Capture',
        description: 'Add tasks instantly without breaking your flow',
        icon: '⚡',
      },
      {
        title: '6 Smart Categories',
        description: 'Inbox, Today, Follow Up, Ideas, Home, Waiting On',
        icon: '📂',
      },
      {
        title: 'Priority System',
        description: 'Star what matters most, filter by importance',
        icon: '⭐',
      },
      {
        title: 'Progress Tracking',
        description: 'See completed tasks and celebrate wins',
        icon: '✓',
      },
    ],
    path: '/tools/life-os',
    appPath: '/tools/life-os/app',
  },
  'content-studio': {
    id: 'content-studio',
    name: 'Content Studio',
    tagline: 'AI-powered content for soul-led businesses',
    description: 'Generate on-brand social media content in seconds. Captions, carousels, reels scripts—all tuned to your voice.',
    icon: '✦',
    theme: {
      primary: '#C9A96E',
      primaryGlow: 'rgba(201, 169, 110, 0.15)',
      accent: '#7B68EE',
      gradient: 'linear-gradient(135deg, #C9A96E, #7B68EE)',
    },
    features: {
      free: [
        '5 generations per day',
        'Single post captions',
        'Copy to clipboard',
        '4 content pillars',
      ],
      premium: [
        'Unlimited generations',
        'All content types',
        'Generation history',
        'Brand voice training',
      ],
    },
    featureDetails: [
      {
        title: '5 Content Types',
        description: 'Captions, carousels, reel scripts, stories, weekly ideas',
        icon: '📝',
      },
      {
        title: 'Brand Voice',
        description: 'AI trained on soul-led business communication',
        icon: '🎯',
      },
      {
        title: 'Content Pillars',
        description: 'Strategic topics that resonate with your audience',
        icon: '🏛️',
      },
      {
        title: 'One-Click Copy',
        description: 'Generated content ready to paste anywhere',
        icon: '📋',
      },
    ],
    path: '/tools/content-studio',
    appPath: '/tools/content-studio/app',
  },
};

export const TOOL_IDS = Object.keys(TOOLS) as (keyof typeof TOOLS)[];

export const getToolById = (id: string): Tool | undefined => TOOLS[id];
