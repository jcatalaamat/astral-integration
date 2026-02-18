interface WizardStepProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  canNext: boolean;
  onNext: () => void;
  onBack: () => void;
  showBack?: boolean;
  nextLabel?: string;
  children: React.ReactNode;
}

export default function WizardStep({
  step,
  totalSteps,
  title,
  subtitle,
  canNext,
  onNext,
  onBack,
  showBack = true,
  nextLabel = 'Next',
  children,
}: WizardStepProps) {
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-meta uppercase text-content-muted">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-meta text-content-muted">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step header */}
      <h3 className="font-serif text-h2 font-light mb-2">{title}</h3>
      {subtitle && (
        <p className="text-body-sm text-content-secondary mb-8">{subtitle}</p>
      )}

      {/* Step content */}
      <div className="mb-10">{children}</div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        {showBack ? (
          <button
            onClick={onBack}
            className="px-6 py-3 text-content-muted hover:text-content-primary transition-colors text-body-sm"
          >
            Back
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={onNext}
          disabled={!canNext}
          className="px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
