import type { CurrentPlatform } from '../types';
import { currentPlatformOptions } from '../wizardData';

interface Props {
  value: CurrentPlatform[];
  onChange: (platforms: CurrentPlatform[]) => void;
}

export default function StepCurrentSetup({ value, onChange }: Props) {
  const toggle = (id: CurrentPlatform) => {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id]
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {currentPlatformOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => toggle(opt.id)}
          className={`px-5 py-3 rounded-full border text-body-sm transition-all ${
            value.includes(opt.id)
              ? 'border-accent bg-accent-glow text-content-primary'
              : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
