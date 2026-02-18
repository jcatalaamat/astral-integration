import type { PainPoint } from '../types';
import { painPointOptions } from '../wizardData';

interface Props {
  value: PainPoint[];
  onChange: (points: PainPoint[]) => void;
}

export default function StepPainPoints({ value, onChange }: Props) {
  const toggle = (id: PainPoint) => {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id]
    );
  };

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {painPointOptions.map((opt) => (
        <button
          key={opt.id}
          onClick={() => toggle(opt.id)}
          className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-left text-body-sm transition-all ${
            value.includes(opt.id)
              ? 'border-accent bg-accent-glow text-content-primary'
              : 'border-border bg-dark-card hover:border-border-hover text-content-secondary'
          }`}
        >
          <span className="text-lg">{opt.icon}</span>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
