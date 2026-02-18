export type BusinessType =
  | 'retreat-center'
  | 'coach-therapist'
  | 'certification-school'
  | 'course-creator'
  | 'influencer-creator'
  | 'healer-reader';

export type CurrentPlatform =
  | 'wix'
  | 'squarespace'
  | 'wordpress'
  | 'kajabi'
  | 'teachable'
  | 'spreadsheets'
  | 'social-only'
  | 'nothing'
  | 'other';

export type PainPoint =
  | 'scattered-tools'
  | 'no-booking'
  | 'manual-admin'
  | 'no-payments'
  | 'no-community'
  | 'poor-seo'
  | 'no-mobile'
  | 'no-student-tracking'
  | 'cant-scale'
  | 'brand-mismatch';

export type Feature =
  | 'custom-platform'
  | 'ai-assistant'
  | 'certification-system'
  | 'membership-courses'
  | 'website'
  | 'cross-platform-app'
  | 'shop'
  | 'stays-booking'
  | 'community'
  | 'email-crm';

export type ScaleRange = 'just-starting' | 'small' | 'growing' | 'established' | 'scaling';
export type TimelineRange = 'asap' | '1-month' | '2-3-months' | 'no-rush';

export interface SchoolDeepDive {
  certLevels: '1-2' | '3-4' | '5+' | null;
  studentCount: ScaleRange | null;
  cohortStructure: 'rolling' | 'cohort-based' | 'self-paced' | 'hybrid' | null;
  hasPrerequisites: boolean | null;
  needsPracticeTracking: boolean | null;
}

export interface RetreatDeepDive {
  hasBooking: boolean | null;
  hasAccommodations: boolean | null;
  hasEvents: boolean | null;
  capacity: 'intimate' | 'small' | 'medium' | 'large' | null;
  seasonality: 'year-round' | 'seasonal' | 'event-based' | null;
}

export interface CoachDeepDive {
  sessionTypes: ('1on1' | 'group' | 'workshop' | 'intensive' | 'online-course')[];
  clientCount: ScaleRange | null;
  contentNeeds: ('blog' | 'video' | 'podcast' | 'newsletter' | 'journal-prompts')[];
}

export interface CreatorDeepDive {
  audienceSize: ScaleRange | null;
  contentTypes: ('courses' | 'membership' | 'downloads' | 'merch' | 'live-events' | 'coaching')[];
  monetization: ('subscriptions' | 'one-time' | 'sponsorships' | 'tips' | 'services')[];
}

export type DeepDiveVariant = 'school' | 'retreat' | 'coach' | 'creator';

export type DeepDiveData =
  | { variant: 'school'; data: SchoolDeepDive }
  | { variant: 'retreat'; data: RetreatDeepDive }
  | { variant: 'coach'; data: CoachDeepDive }
  | { variant: 'creator'; data: CreatorDeepDive };

export interface WizardState {
  currentStep: number;
  businessType: BusinessType | null;
  currentPlatforms: CurrentPlatform[];
  painPoints: PainPoint[];
  features: Feature[];
  deepDive: DeepDiveData | null;
  scale: ScaleRange | null;
  timeline: TimelineRange | null;
  contactInfo: {
    name: string;
    email: string;
    notes: string;
  };
  isComplete: boolean;
  sendStatus: 'idle' | 'sending' | 'success' | 'error';
}

export type WizardAction =
  | { type: 'SET_BUSINESS_TYPE'; payload: BusinessType }
  | { type: 'SET_CURRENT_PLATFORMS'; payload: CurrentPlatform[] }
  | { type: 'SET_PAIN_POINTS'; payload: PainPoint[] }
  | { type: 'SET_FEATURES'; payload: Feature[] }
  | { type: 'SET_DEEP_DIVE'; payload: DeepDiveData }
  | { type: 'SET_SCALE'; payload: ScaleRange }
  | { type: 'SET_TIMELINE'; payload: TimelineRange }
  | { type: 'SET_CONTACT_INFO'; payload: Partial<WizardState['contactInfo']> }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'COMPLETE' }
  | { type: 'SET_SEND_STATUS'; payload: WizardState['sendStatus'] }
  | { type: 'RESET' };
