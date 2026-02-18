import type { BusinessType } from '../types';
import { businessTypeOptions } from '../wizardData';

interface Props {
  value: BusinessType | null;
  onChange: (type: BusinessType) => void;
}

export default function StepBusinessType({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {businessTypeOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`p-6 rounded-2xl border text-left transition-all ${
            value === opt.id
              ? 'border-accent bg-accent-glow'
              : 'border-border bg-dark-card hover:border-border-hover hover:bg-dark-cardHover'
          }`}
        >
          <div className="text-2xl mb-3">{opt.icon}</div>
          <h4 className="font-serif text-h4 mb-1">{opt.title}</h4>
          <p className="text-body-sm text-content-muted">{opt.desc}</p>
        </button>
      ))}
    </div>
  );
}
