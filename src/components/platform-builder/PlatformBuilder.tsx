import { useReducer, useRef } from 'react';
import type { WizardState, WizardAction } from './types';
import { defaultFeatures, deepDiveVariantMap } from './wizardData';
import WizardStep from './WizardStep';
import StepBusinessType from './steps/StepBusinessType';
import StepCurrentSetup from './steps/StepCurrentSetup';
import StepPainPoints from './steps/StepPainPoints';
import StepFeatureWishlist from './steps/StepFeatureWishlist';
import StepDeepDive from './steps/StepDeepDive';
import StepScaleTimeline from './steps/StepScaleTimeline';
import StepContactInfo from './steps/StepContactInfo';
import BlueprintView from './BlueprintView';

const TOTAL_STEPS = 7;

const initialState: WizardState = {
  currentStep: -1, // -1 = intro, 0-6 = steps, 7 = blueprint
  businessType: null,
  currentPlatforms: [],
  painPoints: [],
  features: [],
  deepDive: null,
  scale: null,
  timeline: null,
  contactInfo: { name: '', email: '', notes: '' },
  isComplete: false,
  sendStatus: 'idle',
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'SET_BUSINESS_TYPE': {
      const newFeatures = state.currentStep === 0 && state.features.length === 0
        ? defaultFeatures[action.payload]
        : state.features;
      return { ...state, businessType: action.payload, features: newFeatures, deepDive: null };
    }
    case 'SET_CURRENT_PLATFORMS':
      return { ...state, currentPlatforms: action.payload };
    case 'SET_PAIN_POINTS':
      return { ...state, painPoints: action.payload };
    case 'SET_FEATURES':
      return { ...state, features: action.payload };
    case 'SET_DEEP_DIVE':
      return { ...state, deepDive: action.payload };
    case 'SET_SCALE':
      return { ...state, scale: action.payload };
    case 'SET_TIMELINE':
      return { ...state, timeline: action.payload };
    case 'SET_CONTACT_INFO':
      return { ...state, contactInfo: { ...state.contactInfo, ...action.payload } };
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS) };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case 'COMPLETE':
      return { ...state, currentStep: TOTAL_STEPS, isComplete: true };
    case 'SET_SEND_STATUS':
      return { ...state, sendStatus: action.payload };
    case 'RESET':
      return { ...initialState, currentStep: 0 };
    default:
      return state;
  }
}

export default function PlatformBuilder() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const next = () => {
    dispatch({ type: 'NEXT_STEP' });
    scrollToTop();
  };

  const back = () => {
    dispatch({ type: 'PREV_STEP' });
    scrollToTop();
  };

  const start = () => {
    dispatch({ type: 'NEXT_STEP' }); // -1 → 0
    scrollToTop();
  };

  // Step validation
  const canNext = (): boolean => {
    switch (state.currentStep) {
      case 0: return state.businessType !== null;
      case 1: return state.currentPlatforms.length > 0;
      case 2: return state.painPoints.length > 0;
      case 3: return state.features.length > 0;
      case 4: return state.deepDive !== null;
      case 5: return state.scale !== null && state.timeline !== null;
      case 6: return state.contactInfo.name.trim() !== '' && state.contactInfo.email.includes('@');
      default: return false;
    }
  };

  const handleNext = () => {
    if (state.currentStep === 6) {
      dispatch({ type: 'COMPLETE' });
      scrollToTop();
    } else {
      next();
    }
  };

  // Step titles
  const stepConfig: { title: string; subtitle?: string }[] = [
    { title: 'What\'s your work?', subtitle: 'Select the one that fits best.' },
    { title: 'Where are you now?', subtitle: 'What tools or platforms are you currently using?' },
    { title: 'What\'s broken?', subtitle: 'Select everything that resonates.' },
    { title: 'What do you need?', subtitle: 'I\'ve pre-selected some based on your work. Adjust as needed.' },
    { title: 'Let\'s go deeper.', subtitle: state.businessType ? `A few more questions about your ${state.businessType === 'certification-school' ? 'school' : state.businessType === 'retreat-center' ? 'retreat' : 'practice'}.` : undefined },
    { title: 'Scale & timeline.', subtitle: 'Where are you headed?' },
    { title: 'Last step.', subtitle: 'How should I reach you?' },
  ];

  return (
    <section id="builder" className="py-section px-6 md:px-12 bg-gradient-to-b from-[#0d0d14] to-dark-bg" ref={sectionRef}>
      <div className="max-w-content mx-auto">
        <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
          <span className="w-8 h-px bg-accent" />
          Platform Builder
        </p>

        {/* Intro state */}
        {state.currentStep === -1 && (
          <div className="max-w-2xl">
            <h2 className="font-serif text-display-sm font-light mb-4">
              Let's design your platform.
            </h2>
            <p className="text-body text-content-secondary mb-8">
              Answer a few questions about your work, and I'll generate a custom platform blueprint — architecture, features, pricing estimate, everything. Takes about 2 minutes.
            </p>
            <button
              onClick={start}
              className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
            >
              Start Building
            </button>
          </div>
        )}

        {/* Wizard steps */}
        {state.currentStep >= 0 && state.currentStep < TOTAL_STEPS && (
          <WizardStep
            step={state.currentStep}
            totalSteps={TOTAL_STEPS}
            title={stepConfig[state.currentStep].title}
            subtitle={stepConfig[state.currentStep].subtitle}
            canNext={canNext()}
            onNext={handleNext}
            onBack={back}
            showBack={state.currentStep > 0}
            nextLabel={state.currentStep === 6 ? 'Generate Blueprint' : 'Next'}
          >
            {state.currentStep === 0 && (
              <StepBusinessType
                value={state.businessType}
                onChange={(v) => dispatch({ type: 'SET_BUSINESS_TYPE', payload: v })}
              />
            )}
            {state.currentStep === 1 && (
              <StepCurrentSetup
                value={state.currentPlatforms}
                onChange={(v) => dispatch({ type: 'SET_CURRENT_PLATFORMS', payload: v })}
              />
            )}
            {state.currentStep === 2 && (
              <StepPainPoints
                value={state.painPoints}
                onChange={(v) => dispatch({ type: 'SET_PAIN_POINTS', payload: v })}
              />
            )}
            {state.currentStep === 3 && (
              <StepFeatureWishlist
                value={state.features}
                onChange={(v) => dispatch({ type: 'SET_FEATURES', payload: v })}
              />
            )}
            {state.currentStep === 4 && state.businessType && (
              <StepDeepDive
                variant={deepDiveVariantMap[state.businessType]}
                value={state.deepDive}
                onChange={(v) => dispatch({ type: 'SET_DEEP_DIVE', payload: v })}
              />
            )}
            {state.currentStep === 5 && (
              <StepScaleTimeline
                scale={state.scale}
                timeline={state.timeline}
                onScaleChange={(v) => dispatch({ type: 'SET_SCALE', payload: v })}
                onTimelineChange={(v) => dispatch({ type: 'SET_TIMELINE', payload: v })}
              />
            )}
            {state.currentStep === 6 && (
              <StepContactInfo
                name={state.contactInfo.name}
                email={state.contactInfo.email}
                notes={state.contactInfo.notes}
                onChange={(field, value) => dispatch({ type: 'SET_CONTACT_INFO', payload: { [field]: value } })}
              />
            )}
          </WizardStep>
        )}

        {/* Blueprint view */}
        {state.currentStep === TOTAL_STEPS && (
          <BlueprintView
            state={state}
            onReset={() => dispatch({ type: 'RESET' })}
          />
        )}
      </div>
    </section>
  );
}
