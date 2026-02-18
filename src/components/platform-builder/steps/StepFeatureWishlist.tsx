import type { Feature } from '../types';
import { featureOptions } from '../wizardData';

interface Props {
  value: Feature[];
  onChange: (features: Feature[]) => void;
}

export default function StepFeatureWishlist({ value, onChange }: Props) {
  const toggle = (id: Feature) => {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id]
    );
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {featureOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => toggle(opt.id)}
          className={`flex items-start gap-4 p-5 rounded-xl border text-left transition-all ${
            value.includes(opt.id)
              ? 'border-accent bg-accent-glow'
              : 'border-border bg-dark-card hover:border-border-hover'
          }`}
        >
          <span className="text-xl mt-0.5">{opt.icon}</span>
          <div>
            <h4 className="text-body-sm font-medium text-content-primary mb-0.5">{opt.label}</h4>
            <p className="text-body-sm text-content-muted">{opt.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
