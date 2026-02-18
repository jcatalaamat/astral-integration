import type {
  BusinessType, CurrentPlatform, PainPoint, Feature,
  ScaleRange, TimelineRange, DeepDiveVariant,
} from './types';

// Step 1: Business Types
export const businessTypeOptions: { id: BusinessType; icon: string; title: string; desc: string }[] = [
  { id: 'retreat-center', icon: '🌿', title: 'Retreat Center', desc: 'Psychedelic, yoga, wellness' },
  { id: 'coach-therapist', icon: '🔮', title: 'Coach or Therapist', desc: 'Integration, somatic, spiritual' },
  { id: 'certification-school', icon: '🎓', title: 'Certification School', desc: 'Teacher training, multi-level programs' },
  { id: 'course-creator', icon: '📖', title: 'Course Creator', desc: 'Digital programs, memberships' },
  { id: 'influencer-creator', icon: '🎙', title: 'Influencer or Creator', desc: 'Wellness, consciousness, lifestyle' },
  { id: 'healer-reader', icon: '✦', title: 'Healer or Reader', desc: 'Astrology, energy work, channeling' },
];

// Step 2: Current Platforms
export const currentPlatformOptions: { id: CurrentPlatform; label: string }[] = [
  { id: 'wix', label: 'Wix' },
  { id: 'squarespace', label: 'Squarespace' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'kajabi', label: 'Kajabi' },
  { id: 'teachable', label: 'Teachable' },
  { id: 'spreadsheets', label: 'Spreadsheets & WhatsApp' },
  { id: 'social-only', label: 'Social media only' },
  { id: 'nothing', label: 'Nothing yet' },
  { id: 'other', label: 'Other' },
];

// Step 3: Pain Points
export const painPointOptions: { id: PainPoint; icon: string; label: string }[] = [
  { id: 'scattered-tools', icon: '🔀', label: 'Tools scattered across 5+ platforms' },
  { id: 'no-booking', icon: '📅', label: 'No proper booking system' },
  { id: 'manual-admin', icon: '⏳', label: 'Manual admin eating my time' },
  { id: 'no-payments', icon: '💳', label: 'No integrated payments' },
  { id: 'no-community', icon: '👥', label: 'No community space' },
  { id: 'poor-seo', icon: '🔍', label: "Poor SEO — can't be found" },
  { id: 'no-mobile', icon: '📱', label: 'No mobile experience' },
  { id: 'no-student-tracking', icon: '📊', label: "Can't track student progress" },
  { id: 'cant-scale', icon: '📈', label: "Can't scale beyond current clients" },
  { id: 'brand-mismatch', icon: '🎨', label: "Website doesn't match my brand" },
];

// Step 4: Features
export const featureOptions: { id: Feature; icon: string; label: string; desc: string }[] = [
  { id: 'custom-platform', icon: '⚡', label: 'Custom Platform', desc: 'Everything in one place under your brand' },
  { id: 'ai-assistant', icon: '🤖', label: 'AI Assistant', desc: 'Trained on your methodology' },
  { id: 'certification-system', icon: '🎓', label: 'Certification System', desc: 'Student levels, tracking, credentialing' },
  { id: 'membership-courses', icon: '🔑', label: 'Membership & Courses', desc: 'Gated content, video, progress tracking' },
  { id: 'website', icon: '🌐', label: 'Website', desc: 'Custom-built, SEO-optimized' },
  { id: 'cross-platform-app', icon: '📱', label: 'Mobile App', desc: 'iOS + Android from one codebase' },
  { id: 'shop', icon: '🛍', label: 'Shop', desc: 'Products, downloads, merch' },
  { id: 'stays-booking', icon: '🏡', label: 'Stays & Booking', desc: 'Accommodation, calendar, availability' },
  { id: 'community', icon: '💬', label: 'Community', desc: 'Forums, directory, discussions' },
  { id: 'email-crm', icon: '📧', label: 'Email & CRM', desc: 'Newsletter, sequences, contacts' },
];

// Feature pre-population by business type
export const defaultFeatures: Record<BusinessType, Feature[]> = {
  'retreat-center': ['custom-platform', 'website', 'stays-booking', 'community', 'email-crm'],
  'coach-therapist': ['custom-platform', 'website', 'membership-courses', 'email-crm'],
  'certification-school': ['custom-platform', 'certification-system', 'membership-courses', 'community', 'ai-assistant'],
  'course-creator': ['custom-platform', 'website', 'membership-courses', 'email-crm', 'community'],
  'influencer-creator': ['custom-platform', 'website', 'shop', 'membership-courses', 'email-crm'],
  'healer-reader': ['custom-platform', 'website', 'email-crm'],
};

// Deep dive variant mapping
export const deepDiveVariantMap: Record<BusinessType, DeepDiveVariant> = {
  'certification-school': 'school',
  'retreat-center': 'retreat',
  'coach-therapist': 'coach',
  'healer-reader': 'coach',
  'course-creator': 'creator',
  'influencer-creator': 'creator',
};

// Step 6: Scale
export const scaleOptions: { id: ScaleRange; label: string; desc: string }[] = [
  { id: 'just-starting', label: 'Just starting', desc: 'Building from scratch' },
  { id: 'small', label: 'Small & steady', desc: 'A few clients, growing organically' },
  { id: 'growing', label: 'Growing fast', desc: 'Demand is outpacing my systems' },
  { id: 'established', label: 'Established', desc: 'Need real infrastructure' },
  { id: 'scaling', label: 'Ready to scale', desc: 'Time to go big' },
];

export const timelineOptions: { id: TimelineRange; label: string }[] = [
  { id: 'asap', label: 'ASAP' },
  { id: '1-month', label: 'Within a month' },
  { id: '2-3-months', label: '2–3 months' },
  { id: 'no-rush', label: 'No rush' },
];

// Labels for blueprint/email output
export const businessTypeLabels: Record<BusinessType, string> = {
  'retreat-center': 'Retreat Center',
  'coach-therapist': 'Coach / Therapist',
  'certification-school': 'Certification School',
  'course-creator': 'Course Creator',
  'influencer-creator': 'Influencer / Creator',
  'healer-reader': 'Healer / Reader',
};

export const platformLabels: Record<CurrentPlatform, string> = {
  'wix': 'Wix',
  'squarespace': 'Squarespace',
  'wordpress': 'WordPress',
  'kajabi': 'Kajabi',
  'teachable': 'Teachable',
  'spreadsheets': 'Spreadsheets & WhatsApp',
  'social-only': 'Social media only',
  'nothing': 'Nothing yet',
  'other': 'Other',
};

export const painPointLabels: Record<PainPoint, string> = {
  'scattered-tools': 'Tools scattered across 5+ platforms',
  'no-booking': 'No proper booking system',
  'manual-admin': 'Manual admin eating my time',
  'no-payments': 'No integrated payments',
  'no-community': 'No community space',
  'poor-seo': "Poor SEO — can't be found",
  'no-mobile': 'No mobile experience',
  'no-student-tracking': "Can't track student progress",
  'cant-scale': "Can't scale beyond current clients",
  'brand-mismatch': "Website doesn't match my brand",
};

export const featureLabels: Record<Feature, string> = {
  'custom-platform': 'Custom Platform',
  'ai-assistant': 'AI Assistant',
  'certification-system': 'Certification System',
  'membership-courses': 'Membership & Courses',
  'website': 'Website',
  'cross-platform-app': 'Mobile App',
  'shop': 'Shop',
  'stays-booking': 'Stays & Booking',
  'community': 'Community',
  'email-crm': 'Email & CRM',
};

export const scaleLabels: Record<ScaleRange, string> = {
  'just-starting': 'Just starting',
  'small': 'Small & steady',
  'growing': 'Growing fast',
  'established': 'Established',
  'scaling': 'Ready to scale',
};

export const timelineLabels: Record<TimelineRange, string> = {
  'asap': 'ASAP',
  '1-month': 'Within a month',
  '2-3-months': '2–3 months',
  'no-rush': 'No rush',
};

// Pricing tier recommendation
export function recommendTier(businessType: BusinessType | null, features: Feature[]): {
  tier: string;
  price: string;
  timeline: string;
} {
  const isSchool = businessType === 'certification-school' ||
    features.includes('certification-system');

  if (isSchool) {
    return {
      tier: 'School & Certification',
      price: '$5,000 – $10,000',
      timeline: '4–6 weeks',
    };
  }

  return {
    tier: 'Platform Build',
    price: '$3,000 – $5,000',
    timeline: '2–3 weeks',
  };
}
